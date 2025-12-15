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

interface Env {
  DB: D1Database;
}

export const onRequestGet: PagesFunction<Env> = async (context) => {
  try {
    const { env } = context;
    
    // Calculate total raised and count of sales
    const result = await env.DB.prepare(
      "SELECT SUM(amount) as total, COUNT(*) as count FROM sales"
    ).first<{ total: number; count: number }>();

    // D1 returns null for SUM if no rows are found, handle this by defaulting to 0
    const totalRevenue = result?.total ?? 0;
    const saleCount = result?.count ?? 0;

    return new Response(JSON.stringify({
      total: totalRevenue,
      count: saleCount
    }), {
      headers: { "Content-Type": "application/json" }
    });
  } catch (err: any) {
    console.error("Revenue Fetch Error:", err);
    return new Response(JSON.stringify({ error: "Failed to fetch revenue", details: err.message }), { status: 500 });
  }
};
