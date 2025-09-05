// This is the instrumentation file for Next.js 15
// It runs when the Next.js server starts up

import { registerOTel } from "@vercel/otel";

export async function register() {
  console.log("Server instrumentation initialized");

  registerOTel({ serviceName: "next-15" });
}
