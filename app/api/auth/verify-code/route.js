import { NextResponse } from "next/server";
import { isAdminEmail, createToken } from "@/lib/auth";
import { getRedis } from "@/lib/kv";

export async function POST(request) {
  try {
    const { email, code } = await request.json();

    if (!email || !code) {
      return NextResponse.json({ error: "Email and code are required" }, { status: 400 });
    }

    if (!isAdminEmail(email)) {
      return NextResponse.json({ error: "Invalid email or code" }, { status: 401 });
    }

    const redis = getRedis();
    if (!redis) {
      return NextResponse.json({ error: "Server configuration error" }, { status: 500 });
    }

    const key = `auth:code:${email.toLowerCase()}`;
    const stored = await redis.get(key);

    if (!stored) {
      return NextResponse.json({ error: "Code expired or not found. Please request a new code." }, { status: 401 });
    }

    const data = typeof stored === "string" ? JSON.parse(stored) : stored;

    // Check attempt limit
    if (data.attempts >= 5) {
      await redis.del(key);
      return NextResponse.json({ error: "Too many attempts. Please request a new code." }, { status: 429 });
    }

    // Check code
    if (data.code !== code.trim()) {
      data.attempts += 1;
      await redis.set(key, JSON.stringify(data), { ex: 600 });
      return NextResponse.json({ error: "Invalid code. Please try again." }, { status: 401 });
    }

    // Code is valid — clean up and issue session token
    await redis.del(key);
    const token = await createToken(email);

    const response = NextResponse.json({ success: true });
    response.cookies.set("uf_admin_token", token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "lax",
      maxAge: 60 * 60 * 24 * 7, // 7 days
      path: "/",
    });

    return response;
  } catch {
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}
