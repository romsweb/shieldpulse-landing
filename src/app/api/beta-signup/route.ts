import { NextResponse } from 'next/server';
import { Resend } from 'resend';

const NOTIFY_EMAIL = process.env.BETA_NOTIFY_EMAIL || 'contact@shieldpulse.io';

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { firstName, lastName, email, whatsapp, machines } = body as {
      firstName: string;
      lastName: string;
      email: string;
      whatsapp: string;
      machines: string;
    };

    if (!firstName || !lastName || !email) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
    }

    const resend = new Resend(process.env.RESEND_API_KEY);
    const result = await resend.emails.send({
      from: 'ShieldPulse <support@updates.shieldpulse.io>',
      to: NOTIFY_EMAIL,
      subject: `Beta signup: ${firstName} ${lastName} (${machines} machines)`,
      html: `
        <h2>New Beta Signup</h2>
        <table style="border-collapse:collapse;font-family:sans-serif;">
          <tr><td style="padding:6px 12px;font-weight:bold;">Name</td><td style="padding:6px 12px;">${firstName} ${lastName}</td></tr>
          <tr><td style="padding:6px 12px;font-weight:bold;">Email</td><td style="padding:6px 12px;"><a href="mailto:${email}">${email}</a></td></tr>
          <tr><td style="padding:6px 12px;font-weight:bold;">WhatsApp</td><td style="padding:6px 12px;">${whatsapp || '—'}</td></tr>
          <tr><td style="padding:6px 12px;font-weight:bold;">Machines</td><td style="padding:6px 12px;">${machines || '—'}</td></tr>
        </table>
      `,
    });

    console.log('Resend result:', JSON.stringify(result));

    if (result.error) {
      console.error('Resend error:', result.error);
      return NextResponse.json({ error: result.error.message }, { status: 500 });
    }

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error('Beta signup error:', err);
    return NextResponse.json({ error: 'Internal error' }, { status: 500 });
  }
}
