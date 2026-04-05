import { NextResponse } from "next/server";
import { siteConfig } from "@/data/site";

function toSafeString(value) {
  return typeof value === "string" ? value.trim() : "";
}

function escapeHtml(value) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;");
}

export async function POST(request) {
  const apiKey = process.env.RESEND_API_KEY || process.env.RESNED_API_KEY;

  if (!apiKey) {
    return NextResponse.json(
      { ok: false, error: "Resend API key is missing." },
      { status: 500 }
    );
  }

  const contentType = request.headers.get("content-type") || "";
  let body = {};

  if (contentType.includes("application/json")) {
    body = await request.json();
  } else {
    const formData = await request.formData();
    body = {
      name: formData.get("name"),
      phone: formData.get("phone"),
      email: formData.get("email"),
      service: formData.get("service"),
      message: formData.get("message")
    };
  }

  const name = toSafeString(body.name);
  const phone = toSafeString(body.phone);
  const email = toSafeString(body.email);
  const service = toSafeString(body.service);
  const message = toSafeString(body.message);

  if (!name || !phone || !email || !service || !message) {
    return NextResponse.json(
      { ok: false, error: "Please fill all required fields." },
      { status: 400 }
    );
  }

  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (!emailPattern.test(email)) {
    return NextResponse.json(
      { ok: false, error: "Please enter a valid email address." },
      { status: 400 }
    );
  }

  const toEmail = process.env.CONTACT_TO_EMAIL || process.env.OWNER_EMAIL || siteConfig.email;
  const fromEmail = process.env.RESEND_FROM_EMAIL || "Trimurti Enterprise <onboarding@resend.dev>";

  const subject = `New Enquiry: ${service}`;

  const html = `
    <h2>New Website Enquiry</h2>
    <p><strong>Name:</strong> ${escapeHtml(name)}</p>
    <p><strong>Phone:</strong> ${escapeHtml(phone)}</p>
    <p><strong>Email:</strong> ${escapeHtml(email)}</p>
    <p><strong>Service Interest:</strong> ${escapeHtml(service)}</p>
    <p><strong>Message:</strong><br/>${escapeHtml(message).replaceAll("\n", "<br/>")}</p>
  `;

  const text = [
    "New Website Enquiry",
    `Name: ${name}`,
    `Phone: ${phone}`,
    `Email: ${email}`,
    `Service Interest: ${service}`,
    "Message:",
    message
  ].join("\n");

  const response = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      from: fromEmail,
      to: [toEmail],
      reply_to: email,
      subject,
      html,
      text
    })
  });

  const result = await response.json();

  if (!response.ok) {
    return NextResponse.json(
      { ok: false, error: result?.message || "Failed to send email." },
      { status: 502 }
    );
  }

  return NextResponse.json({ ok: true, id: result.id });
}
