// Define missing Cloudflare types locally
interface D1Result {
  meta: {
    last_row_id: number | null;
    changes: number;
    duration: number;
    served_by: string;
  };
  results?: any[];
  success: boolean;
  error?: string;
}

interface D1PreparedStatement {
  bind(...values: any[]): D1PreparedStatement;
  first<T = unknown>(colName?: string): Promise<T | null>;
  run(): Promise<D1Result>;
  all<T = unknown>(): Promise<D1Result & { results: T[] }>;
  raw<T = unknown>(): Promise<T[]>;
}

interface D1Database {
  prepare(query: string): D1PreparedStatement;
  dump(): Promise<ArrayBuffer>;
  batch<T = unknown>(statements: D1PreparedStatement[]): Promise<D1Result[]>;
  exec<T = unknown>(query: string): Promise<D1Result>;
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

// Assumes 'DB' is bound to a D1 Database via Cloudflare Pages setup
interface Env {
  DB: D1Database;
}

export const onRequestPost: PagesFunction<Env> = async (context) => {
  try {
    const { request, env } = context;
    const body = await request.json() as { name: string; email: string; interest: string };

    if (!body.email) {
      return new Response(JSON.stringify({ error: "Email is required" }), { status: 400 });
    }

    // Insert into D1 Database using prepared statements for security
    const result = await env.DB.prepare(
      "INSERT INTO leads (name, email, interest, created_at) VALUES (?, ?, ?, datetime('now'))"
    )
    // Bind values from the request body
    .bind(body.name || 'Anonymous', body.email, body.interest || 'General')
    .run();

    // Check for success before returning
    if (!result.success) {
      return new Response(JSON.stringify({ error: "Database Error", details: result.error }), { status: 500 });
    }

    return new Response(JSON.stringify({ 
      success: true, 
      message: "Lead captured", 
      id: result.meta.last_row_id 
    }), {
      headers: { "Content-Type": "application/json" }
    });

  } catch (err: any) {
    console.error("Lead Submission Error:", err);
    return new Response(JSON.stringify({ error: "Server Error", details: err.message }), { status: 500 });
  }
};
