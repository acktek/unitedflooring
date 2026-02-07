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
            <div style="background: #1B3A5C; padding: 24px; border-radius: 8px 8px 0 0;">
              <h2 style="color: #ffffff; margin: 0; font-size: 20px;">New Estimate Request</h2>
            </div>
            <div style="background: #f9f9f9; padding: 24px; border: 1px solid #e5e5e5; border-top: none; border-radius: 0 0 8px 8px;">
              <table style="width: 100%; border-collapse: collapse;">
                <tr>
                  <td style="padding: 8px 0; font-weight: bold; color: #1B3A5C; width: 100px;">Name:</td>
                  <td style="padding: 8px 0;">${name}</td>
                </tr>
                <tr>
                  <td style="padding: 8px 0; font-weight: bold; color: #1B3A5C;">Phone:</td>
                  <td style="padding: 8px 0;"><a href="tel:${phone}">${phone}</a></td>
                </tr>
                <tr>
                  <td style="padding: 8px 0; font-weight: bold; color: #1B3A5C;">Email:</td>
                  <td style="padding: 8px 0;"><a href="mailto:${email}">${email}</a></td>
                </tr>
                <tr>
                  <td style="padding: 8px 0; font-weight: bold; color: #1B3A5C;">Service:</td>
                  <td style="padding: 8px 0;">${service}</td>
                </tr>
              </table>
              ${message ? `
                <div style="margin-top: 16px; padding-top: 16px; border-top: 1px solid #e5e5e5;">
                  <p style="font-weight: bold; color: #1B3A5C; margin: 0 0 8px;">Message:</p>
                  <p style="margin: 0; white-space: pre-wrap;">${message}</p>
                </div>
              ` : ""}
            </div>
            <p style="color: #9CA3AF; font-size: 12px; margin-top: 16px; text-align: center;">
              Sent from unitedflooringnj.com contact form
            </p>
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
