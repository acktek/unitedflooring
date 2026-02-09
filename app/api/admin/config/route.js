import { NextResponse } from "next/server";
import { revalidatePath } from "next/cache";
import { verifyToken } from "@/lib/auth";
import { getConfig, saveConfig } from "@/lib/config";
import { cookies } from "next/headers";

async function authenticate() {
  const cookieStore = await cookies();
  const token = cookieStore.get("uf_admin_token")?.value;
  if (!token) return null;
  return verifyToken(token);
}

export async function GET() {
  const user = await authenticate();
  if (!user) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const config = await getConfig();
  return NextResponse.json(config);
}

export async function POST(request) {
  const user = await authenticate();
  if (!user) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  try {
    const config = await request.json();

    // Basic validation
    if (!config.gallery || !config.hero || !config.about) {
      return NextResponse.json({ error: "Invalid config structure" }, { status: 400 });
    }

    await saveConfig(config);

    // Revalidate the home page so changes appear immediately
    revalidatePath("/");

    return NextResponse.json({ success: true });
  } catch {
    return NextResponse.json({ error: "Failed to save config" }, { status: 500 });
  }
}
