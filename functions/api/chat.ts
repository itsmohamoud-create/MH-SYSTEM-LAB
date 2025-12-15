import { GoogleGenAI } from "@google/genai";

// Cloudflare Pages Functions context and type definitions
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
  // We assume the API key is passed via a binding or environment variable
  API_KEY: string; 
}

// Handler for POST requests to /api/chat
export const onRequestPost: PagesFunction<Env> = async (context) => {
  try {
    const { request, env } = context;

    // 1. Get body and initialize AI
    const body = await request.json() as { messages: any[] };
    
    // Use API_KEY from Cloudflare Environment Variables
    if (!env.API_KEY) {
        return new Response(JSON.stringify({ error: "API_KEY environment variable not set" }), { status: 500 });
    }
    const ai = new GoogleGenAI({ apiKey: env.API_KEY }); 

    const systemInstruction = 'You are Sovereign AI, a helpful assistant for MH Systems Lab. You help users navigate courses on mind, body, and business mastery. Keep your responses concise and action-oriented.';
    
    const inputMessages = body.messages || [];
    
    // 2. Transform messages to Gemini format (role: user/model, parts: [{text: string}])
    const history = inputMessages
      .filter((m: any) => m.role !== 'system')
      .map((m: any) => ({
        role: m.role === 'assistant' ? 'model' : 'user',
        parts: [{ text: m.content as string }]
      }));

    if (history.length === 0) {
      return new Response(JSON.stringify({ error: "No messages provided" }), { status: 400 });
    }

    const lastHistoryItem = history[history.length - 1];
    let messageToSend = "";
    let chatHistory = [];

    // 3. Separate the current user message from the history
    if (lastHistoryItem.role === 'user') {
      messageToSend = lastHistoryItem.parts[0].text;
      chatHistory = history.slice(0, -1);
    } else {
      return new Response(JSON.stringify({ error: "Last message must be from user" }), { status: 400 });
    }

    // 4. Create and send message to the chat session
    const chat = ai.chats.create({
      model: 'gemini-2.5-flash',
      history: chatHistory,
      config: {
        systemInstruction,
      },
    });

    const result = await chat.sendMessage({ message: messageToSend });

    // 5. Return the response
    return new Response(JSON.stringify({ response: result.text }), {
      headers: { "Content-Type": "application/json" }
    });
  } catch (err: any) {
    // Log the detailed error for debugging purposes in the Cloudflare Worker console
    console.error("AI Function Error:", err); 
    return new Response(JSON.stringify({ error: err.message || "Internal Server Error" }), { status: 500 });
  }
};
