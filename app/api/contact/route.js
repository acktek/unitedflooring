import { NextResponse } from "next/server";

export async function POST(request) {
  try {
    const body = await request.json();
    const { name, phone, email, service, message } = body;

    if (!name || !phone || !email || !service) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
    }

    const res = await fetch("https://api.smtp2go.com/v3/email/send", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        api_key: process.env.SMTP2GO_API_KEY,
        to: ["junior@unitedflooringnj.com"],
        sender: "United Flooring Website <noreply@unitedflooringnj.com>",
        subject: `New Estimate Request from ${name}`,
        html_body: `
          <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
            <!-- 7M Logo Header (25w White Badge) -->
            <div style="background: #FFFFFF; padding: 28px 24px 24px; border-radius: 8px 8px 0 0; text-align: center; border: 1px solid #e5e5e5; border-bottom: none;">
              <div style="display: inline-block; border: 1px solid rgba(27,58,92,0.2); border-radius: 8px; padding: 16px 32px 14px;">
                <div style="margin-bottom: 10px; font-size: 16px; letter-spacing: 6px; color: #1B3A5C; opacity: 0.5;">&#708;&#709; &#708;&#709; &#708;&#709;</div>
                <div style="font-family: 'Montserrat', Arial, sans-serif; font-size: 22px; font-weight: 700; color: #1B3A5C; letter-spacing: 3px; margin: 0;">UNITED</div>
                <div style="font-family: 'Montserrat', Arial, sans-serif; font-size: 12px; font-weight: 400; color: #2A5F8F; letter-spacing: 6px; margin-top: 4px;">FLOORING</div>
                <div style="font-family: Arial, sans-serif; font-size: 9px; color: #9CA3AF; letter-spacing: 2px; margin-top: 8px;">LICENSED &amp; INSURED &#8226; NJ</div>
              </div>
            </div>
            <!-- Subject bar -->
            <div style="background: #F5F0E8; padding: 14px 24px; border-left: 1px solid #e5e5e5; border-right: 1px solid #e5e5e5;">
              <p style="margin: 0; font-family: 'Montserrat', Arial, sans-serif; font-size: 14px; font-weight: 600; color: #1B3A5C;">New Estimate Request</p>
            </div>
            <!-- Body -->
            <div style="background: #f9f9f9; padding: 24px; border: 1px solid #e5e5e5; border-top: none; border-radius: 0 0 8px 8px;">
              <table style="width: 100%; border-collapse: collapse;">
                <tr>
                  <td style="padding: 10px 0; font-weight: bold; color: #1B3A5C; width: 100px; font-size: 14px;">Name:</td>
                  <td style="padding: 10px 0; font-size: 14px;">${name}</td>
                </tr>
                <tr>
                  <td style="padding: 10px 0; font-weight: bold; color: #1B3A5C; font-size: 14px;">Phone:</td>
                  <td style="padding: 10px 0; font-size: 14px;"><a href="tel:${phone}" style="color: #2A5F8F;">${phone}</a></td>
                </tr>
                <tr>
                  <td style="padding: 10px 0; font-weight: bold; color: #1B3A5C; font-size: 14px;">Email:</td>
                  <td style="padding: 10px 0; font-size: 14px;"><a href="mailto:${email}" style="color: #2A5F8F;">${email}</a></td>
                </tr>
                <tr>
                  <td style="padding: 10px 0; font-weight: bold; color: #1B3A5C; font-size: 14px;">Service:</td>
                  <td style="padding: 10px 0; font-size: 14px;">${service}</td>
                </tr>
              </table>
              ${message ? `
                <div style="margin-top: 16px; padding-top: 16px; border-top: 1px solid #e5e5e5;">
                  <p style="font-weight: bold; color: #1B3A5C; margin: 0 0 8px; font-size: 14px;">Message:</p>
                  <p style="margin: 0; white-space: pre-wrap; font-size: 14px;">${message}</p>
                </div>
              ` : ""}
            </div>
            <!-- Footer -->
            <div style="text-align: center; margin-top: 20px; padding-top: 16px;">
              <p style="color: #9CA3AF; font-size: 11px; margin: 0 0 4px;">United Flooring &bull; 908-907-2998</p>
              <p style="color: #C0C0C0; font-size: 10px; margin: 0;">unitedflooringnj.com</p>
            </div>
          </div>
        `,
        text_body: `New Estimate Request\n\nName: ${name}\nPhone: ${phone}\nEmail: ${email}\nService: ${service}\n\nMessage:\n${message || "N/A"}`,
      }),
    });

    const data = await res.json();

    if (data.data?.succeeded > 0) {
      return NextResponse.json({ success: true });
    }

    return NextResponse.json({ error: "Failed to send email" }, { status: 500 });
  } catch {
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}
