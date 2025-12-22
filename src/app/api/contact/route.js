import nodemailer from "nodemailer";
import { generateEmailHTML } from "@/scripts/generateEmailHTML";

export const runtime = "nodejs";

export async function POST(req) {
  try {
    const formData = await req.formData();

    // 📥 Form fields
    const name = formData.get("name");
    const email = formData.get("email");
    const message = formData.get("message");
    const honeypot = formData.get("honeypot"); // honeypot
    const attachment = formData.get("attachment");
    const pageURL = formData.get("pageURL");

    // 🛑 Honeypot spam protection
    if (honeypot) {
      return new Response(JSON.stringify({ success: true }), { status: 200 });
    }

    if (!email || !message) {
      return new Response(
        JSON.stringify({ error: "Missing required fields" }),
        { status: 400 }
      );
    }

    // 🔍 Detect support type from URL
    let supportType = "form"; // default

    if (pageURL) {
      try {
        const url = new URL(pageURL);
        supportType = url.searchParams.get("support") || "form";
      } catch {
        console.warn("Invalid pageURL received:", pageURL);
      }
    }

    // 📨 Email subject
    const subject =
      supportType === "bug"
        ? `🐞 Bug Report from ${name || "Visitor"}`
        : `📩 New Contact from ${name || "Visitor"}`;

    // 🧾 Email body
    const html = generateEmailHTML({
      name,
      email,
      message,
      pageURL,
      supportType,
    });

    // 🚀 SMTP transporter
    const transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 465,
      secure: true,
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    // ✉️ Mail options
    const mailOptions = {
      from: `"Yogesh Gupta | Full-Stack Developer" <${process.env.EMAIL_USER}>`,
      to: email, // customer
      cc: process.env.EMAIL_TO, // you
      subject,
      html,
      attachments: [],
    };

    // 📎 Optional attachment
    if (attachment && attachment.size > 0) {
      const buffer = Buffer.from(await attachment.arrayBuffer());

      mailOptions.attachments.push({
        filename: attachment.name,
        content: buffer,
      });
    }

    // 📤 Send mail
    await transporter.sendMail(mailOptions);

    return new Response(JSON.stringify({ success: true }), { status: 200 });
  } catch (error) {
    console.error("Contact API Error:", error);
    return new Response(JSON.stringify({ error: "Email failed to send" }), {
      status: 500,
    });
  }
}
