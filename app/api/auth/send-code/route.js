import { NextResponse } from "next/server";
import { isAdminEmail, generateCode } from "@/lib/auth";
import { getRedis } from "@/lib/kv";

export async function POST(request) {
  try {
    const { email } = await request.json();

    if (!email) {
      return NextResponse.json({ error: "Email is required" }, { status: 400 });
    }

    // Generic response to avoid leaking which emails are valid
    const genericResponse = { success: true, message: "If this email is registered, you will receive a code." };

    if (!isAdminEmail(email)) {
      return NextResponse.json(genericResponse);
    }

    const redis = getRedis();
    if (!redis) {
      return NextResponse.json({ error: "Server configuration error" }, { status: 500 });
    }

    const code = generateCode();

    // Store code in Redis with 10-minute TTL
    await redis.set(`auth:code:${email.toLowerCase()}`, JSON.stringify({ code, attempts: 0 }), { ex: 600 });

    // Send code via SMTP2GO (same service as contact form)
    const res = await fetch("https://api.smtp2go.com/v3/email/send", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        api_key: process.env.SMTP2GO_API_KEY,
        to: [email],
        sender: "United Flooring Admin <noreply@unitedflooringnj.com>",
        subject: "Your Admin Login Code",
        html_body: `
          <div style="font-family: Arial, sans-serif; max-width: 460px; margin: 0 auto;">
            <div style="background: #FFFFFF; padding: 28px 24px 24px; border-radius: 8px 8px 0 0; text-align: center; border: 1px solid #e5e5e5; border-bottom: none;">
              <div style="display: inline-block; border: 1px solid rgba(27,58,92,0.2); border-radius: 8px; padding: 16px 32px 14px;">
                <div style="margin-bottom: 10px; font-size: 16px; letter-spacing: 6px; color: #1B3A5C; opacity: 0.5;">&#708;&#709; &#708;&#709; &#708;&#709;</div>
                <div style="font-family: 'Montserrat', Arial, sans-serif; font-size: 22px; font-weight: 700; color: #1B3A5C; letter-spacing: 3px;">UNITED</div>
                <div style="font-family: 'Montserrat', Arial, sans-serif; font-size: 12px; font-weight: 400; color: #2A5F8F; letter-spacing: 6px; margin-top: 4px;">FLOORING</div>
                <div style="font-family: Arial, sans-serif; font-size: 9px; color: #9CA3AF; letter-spacing: 2px; margin-top: 8px;">LICENSED &amp; INSURED &#8226; NJ</div>
              </div>
            </div>
            <div style="background: #f9f9f9; padding: 32px 24px; border: 1px solid #e5e5e5; border-top: none; border-radius: 0 0 8px 8px; text-align: center;">
              <p style="margin: 0 0 8px; font-size: 14px; color: #666;">Your login code is:</p>
              <div style="font-size: 36px; font-weight: 700; letter-spacing: 8px; color: #1B3A5C; padding: 16px 0;">${code}</div>
              <p style="margin: 16px 0 0; font-size: 13px; color: #999;">This code expires in 10 minutes.</p>
            </div>
          </div>
        `,
        text_body: `Your United Flooring admin login code is: ${code}\n\nThis code expires in 10 minutes.`,
      }),
    });

    const data = await res.json();
    if (data.data?.succeeded > 0) {
      return NextResponse.json(genericResponse);
    }

    return NextResponse.json({ error: "Failed to send email" }, { status: 500 });
  } catch {
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}
