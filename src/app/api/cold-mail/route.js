// app/api/cold-mail/route.js
import * as xlsx from "xlsx";
import nodemailer from "nodemailer";
import { generateColdEmailHTML } from "@/scripts/generateColdEmailHTML";

const DAILY_LIMIT = 30;

export async function POST(req) {
  try {
    const formData = await req.formData();

    const honeypot = formData.get("honeypot");
    if (honeypot) {
      return new Response(JSON.stringify({ success: true }), { status: 200 });
    }

    const file = formData.get("file");
    if (!file) {
      return new Response(JSON.stringify({ error: "No file uploaded" }), {
        status: 400,
      });
    }

    // Convert uploaded file to Node.js buffer
    const arrayBuffer = await file.arrayBuffer();
    const buffer = Buffer.from(arrayBuffer);

    // Read Excel workbook
    const workbook = xlsx.read(buffer, { type: "buffer" });
    const sheetName = workbook.SheetNames[0];
    const sheet = workbook.Sheets[sheetName];
    const rows = xlsx.utils.sheet_to_json(sheet);

    if (!rows || rows.length === 0) {
      return new Response(JSON.stringify({ error: "Excel is empty or invalid" }), {
        status: 400,
      });
    }

    const lastSentIndex = parseInt(formData.get("lastSent") || 0, 10);
    const toSend = rows.slice(lastSentIndex, lastSentIndex + DAILY_LIMIT);

    // Setup SMTP transporter
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    const sleep = (ms) => new Promise((res) => setTimeout(res, ms));

    for (let i = 0; i < toSend.length; i++) {
      const row = toSend[i];

      // Safe JSON parse for optional fields
      let fitPoints = undefined;
      let portfolioLinks = undefined;
      try { fitPoints = row.fitPoints ? JSON.parse(row.fitPoints) : undefined; } catch {}
      try { portfolioLinks = row.portfolioLinks ? JSON.parse(row.portfolioLinks) : undefined; } catch {}

      const html = generateColdEmailHTML({
        recipientName: row.recipientName || "there",
        recipientTitle: row.recipientTitle || "",
        companyName: row.companyName || "",
        senderName: formData.get("senderName") || "Yogesh Kr. Gupta",
        senderTitle: formData.get("senderTitle") || "Frontend / MERN Developer",
        introMessage: row.introMessage || formData.get("introMessage") || "",
        intentMessage: row.intentMessage || formData.get("intentMessage") || "",
        fitPoints,
        portfolioLinks,
        ctaMessage: row.ctaMessage || formData.get("ctaMessage") || "",
        pageURL: row.pageURL || "",
        themeColor: row.themeColor || "#0f172a",
      });

      await transporter.sendMail({
        from: process.env.EMAIL_USER,
        to: row.email,
        subject: row.subject || "Hello from Yogesh",
        html,
      });

      await sleep(2000); // small delay to avoid spam flags
    }

    return new Response(
      JSON.stringify({
        start: lastSentIndex,
        end: lastSentIndex + toSend.length,
        lastSent: lastSentIndex + toSend.length,
        sentCount: toSend.length,
      }),
      { status: 200 }
    );

  } catch (err) {
    console.error("ColdMail Error:", err);
    return new Response(JSON.stringify({ error: err.message || "Server error" }), {
      status: 500,
    });
  }
}
