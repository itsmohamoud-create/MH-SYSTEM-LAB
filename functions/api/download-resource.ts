import { AwsClient } from 'aws4fetch';

// Define missing Cloudflare types locally
interface R2Object {
  body: ReadableStream;
  bodyUsed: boolean;
  arrayBuffer(): Promise<ArrayBuffer>;
  text(): Promise<string>;
  json<T>(): Promise<T>;
  blob(): Promise<Blob>;
  writeHttpMetadata(headers: Headers): void;
  httpEtag: string;
  key: string;
  version: string;
  size: number;
  etag: string;
  httpMetadata?: R2HTTPMetadata;
  customMetadata?: Record<string, string>;
}

interface R2HTTPMetadata {
  contentType?: string;
  contentLanguage?: string;
  contentDisposition?: string;
  contentEncoding?: string;
  cacheControl?: string;
  cacheExpiry?: Date;
}

interface R2Bucket {
  head(key: string): Promise<R2Object | null>;
  get(key: string): Promise<R2Object | null>;
  put(key: string, value: ReadableStream | ArrayBuffer | ArrayBufferView | string | null | Blob, options?: any): Promise<R2Object | null>;
  delete(key: string | string[]): Promise<void>;
  list(options?: any): Promise<any>;
}

interface EventContext<Env, P extends string = string, Data = Record<string, unknown>> {
  request: Request;
  functionPath: string;
  waitUntil: (promise: Promise<any>) => void;
  passThroughOnException: () => void;
  next: (input?: Request | string, init?: RequestInit) => Promise<Response>;
  env: Env;
  params: Record<P, string>;
  data: Data;
}

type PagesFunction<Env = unknown, Params extends string = string, Data = Record<string, unknown>> = (
  context: EventContext<Env, Params, Data>
) => Response | Promise<Response>;

interface Env {
  // BUCKET must be bound to your R2 bucket in the Cloudflare Pages settings
  BUCKET: R2Bucket;
}

export const onRequestPost: PagesFunction<Env> = async (context) => {
  try {
    const { request, env } = context;
    const body = await request.json() as { fileName: string };

    if (!body.fileName) {
      return new Response("Missing fileName", { status: 400 });
    }

    // The file is assumed to be stored in an R2 path starting with 'resources/'
    const object = await env.BUCKET.get(`resources/${body.fileName}`);

    if (!object || !object.body) {
      return new Response("File not found in R2 bucket", { status: 404 });
    }

    const headers = new Headers();
    object.writeHttpMetadata(headers);
    
    // Ensure the browser downloads the file with the correct filename
    headers.set('Content-Disposition', `attachment; filename="${body.fileName}"`);

    // Stream the file body directly to the client
    return new Response(object.body, {
      headers,
    });

  } catch (err: any) {
    console.error("R2 Download Error:", err);
    return new Response(JSON.stringify({ error: "Error fetching file", details: err.message }), { status: 500 });
  }
};
