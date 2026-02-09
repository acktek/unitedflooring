import { getRedis } from "./kv";
import { defaultConfig } from "./defaults";

const CONFIG_KEY = "site:config";

export async function getConfig() {
  try {
    const redis = getRedis();
    if (!redis) return defaultConfig;

    const config = await redis.get(CONFIG_KEY);
    if (!config) return defaultConfig;

    return config;
  } catch {
    return defaultConfig;
  }
}

export async function saveConfig(config) {
  const redis = getRedis();
  if (!redis) throw new Error("Redis not configured");

  await redis.set(CONFIG_KEY, config);
}
