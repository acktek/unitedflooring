import { NextResponse } from "next/server";
import { verifyToken } from "@/lib/auth";
import { getConfig, saveConfig } from "@/lib/config";
import { defaultConfig } from "@/lib/defaults";
import { getRedis } from "@/lib/kv";
import { cookies } from "next/headers";

export async function POST() {
  const cookieStore = await cookies();
  const token = cookieStore.get("uf_admin_token")?.value;
  if (!token) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }
  const user = await verifyToken(token);
  if (!user) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  try {
    const redis = getRedis();
    if (!redis) {
      return NextResponse.json({ error: "Redis not configured" }, { status: 500 });
    }

    // Only seed if config doesn't exist yet
    const existing = await redis.get("site:config");
    if (existing) {
      return NextResponse.json({ message: "Config already exists, skipping seed" });
    }

    await saveConfig(defaultConfig);
    return NextResponse.json({ success: true, message: "Config seeded with defaults" });
  } catch {
    return NextResponse.json({ error: "Seed failed" }, { status: 500 });
  }
}
