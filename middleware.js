import { NextResponse } from "next/server";
import { jwtVerify } from "jose";

const getSecret = () => new TextEncoder().encode(process.env.AUTH_SECRET);

export async function middleware(request) {
  const { pathname } = request.nextUrl;

  // Allow login page and auth API routes through
  if (pathname === "/admin/login" || pathname.startsWith("/api/auth/")) {
    // If already logged in and visiting login page, redirect to admin
    if (pathname === "/admin/login") {
      const token = request.cookies.get("uf_admin_token")?.value;
      if (token) {
        try {
          await jwtVerify(token, getSecret());
          return NextResponse.redirect(new URL("/admin", request.url));
        } catch {
          // Invalid token, let them see login page
        }
      }
    }
    return NextResponse.next();
  }

  // Protect all /admin/* routes
  const token = request.cookies.get("uf_admin_token")?.value;
  if (!token) {
    return NextResponse.redirect(new URL("/admin/login", request.url));
  }

  try {
    await jwtVerify(token, getSecret());
    return NextResponse.next();
  } catch {
    const response = NextResponse.redirect(new URL("/admin/login", request.url));
    response.cookies.delete("uf_admin_token");
    return response;
  }
}

export const config = {
  matcher: ["/admin/:path*"],
};
