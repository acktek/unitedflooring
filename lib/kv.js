import { Redis } from "@upstash/redis";

// Singleton Redis client — uses env vars set by Vercel/Upstash integration
let redis = null;

export function getRedis() {
  if (!redis) {
    const url = process.env.KV_REST_API_URL;
    const token = process.env.KV_REST_API_TOKEN;
    if (!url || !token) {
      return null;
    }
    redis = new Redis({ url, token });
  }
  return redis;
}
