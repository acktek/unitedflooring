import { SignJWT, jwtVerify } from "jose";
import crypto from "crypto";

const getSecret = () => new TextEncoder().encode(process.env.AUTH_SECRET);

export function isAdminEmail(email) {
  const allowed = (process.env.ADMIN_EMAILS || "").split(",").map((e) => e.trim().toLowerCase());
  return allowed.includes(email.toLowerCase());
}

export function generateCode() {
  return crypto.randomInt(100000, 999999).toString();
}

export async function createToken(email) {
  return new SignJWT({ email })
    .setProtectedHeader({ alg: "HS256" })
    .setIssuedAt()
    .setExpirationTime("7d")
    .sign(getSecret());
}

export async function verifyToken(token) {
  try {
    const { payload } = await jwtVerify(token, getSecret());
    return payload;
  } catch {
    return null;
  }
}
