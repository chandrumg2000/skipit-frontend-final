// src/app/api/lead/route.ts
import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(req: Request) {
  try {
    const body = await req.json();

    const {
      name, email, phone, company, message,
      source, plan, selections, totals,
      consent, honeypot
    } = body || {};

    if (honeypot) return NextResponse.json({ ok: true }); // bot trap
    if (!name || !email) {
      return NextResponse.json({ ok: false, error: 'Name and email are required.' }, { status: 400 });
    }
    if (!consent) {
      return NextResponse.json({ ok: false, error: 'Consent is required.' }, { status: 400 });
    }

    const subject = `[New Lead] ${name} — ${company || 'No company'} (${source || 'Website'})`;

    const html = `
      <div style="font-family: Inter, system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial, sans-serif; line-height:1.6;">
        <h2 style="margin:0 0 8px;">New Lead from Website</h2>
        <p style="margin:0 0 12px; color:#334155;">Source: <strong>${source || 'Website'}</strong></p>
        <hr style="border:none; height:1px; background:#e2e8f0; margin:16px 0;" />
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        ${phone ? `<p><strong>Phone:</strong> ${phone}</p>` : ''}
        ${company ? `<p><strong>Company:</strong> ${company}</p>` : ''}
        ${message ? `<p><strong>Message:</strong> ${message}</p>` : ''}

        ${plan ? `<p><strong>Selected Plan:</strong> ${plan}</p>` : ''}

        ${
          selections?.length
            ? `<div style="margin-top:12px;">
                 <strong>Custom Selections:</strong>
                 <ul>${selections.map((s: string) => `<li>${s}</li>`).join('')}</ul>
               </div>`
            : ''
        }

        ${
          totals
            ? `<div style="margin-top:12px;">
                 <strong>Totals:</strong>
                 <pre style="background:#0b1020; color:#e2e8f0; padding:12px; border-radius:8px;">
${JSON.stringify(totals, null, 2)}
                 </pre>
               </div>`
            : ''
        }

        <hr style="border:none; height:1px; background:#e2e8f0; margin:16px 0;" />
        <p style="font-size:12px; color:#64748b;">Consent: ${consent ? 'Yes' : 'No'}</p>
      </div>
    `;

    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT || 465),
      secure: process.env.SMTP_SECURE !== 'false',
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    const info = await transporter.sendMail({
      from: `"${process.env.MAIL_FROM_NAME || 'Website Lead'}" <${process.env.MAIL_FROM || process.env.SMTP_USER}>`,
      to: process.env.MAIL_TO,
      subject,
      replyTo: email,
      html,
    });

    return NextResponse.json({ ok: true, id: info.messageId });
  } catch (err) {
    console.error('Lead email error:', err);
    return NextResponse.json({ ok: false, error: 'Email send failed.' }, { status: 500 });
  }
}