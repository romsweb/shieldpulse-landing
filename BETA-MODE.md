# Beta Mode — Link Bypass Documentation

## How to toggle

- **Enable beta mode:** Set `NEXT_PUBLIC_BETA_MODE=true` in Vercel env vars (or `.env.local`)
- **Disable beta mode:** Remove the env var or set to `false` — all links revert to `app.shieldpulse.io`

Also required for email notifications:
- `RESEND_API_KEY` — Resend API key (same as sentinel project)
- `BETA_NOTIFY_EMAIL` — Email address to receive beta signup notifications (default: contact@shieldpulse.io)

## Original links (for restoration reference)

All links below are restored automatically when `NEXT_PUBLIC_BETA_MODE` is removed.

| File | Line | Original URL | CTA Text |
|------|------|-------------|----------|
| `src/components/nav.tsx` | 62 | `https://app.shieldpulse.io` | Login |
| `src/components/nav.tsx` | 68 | `https://app.shieldpulse.io` (+ UTM) | Start Free → |
| `src/components/nav.tsx` | 125 | `https://app.shieldpulse.io` | Login (mobile) |
| `src/components/nav.tsx` | 129 | `https://app.shieldpulse.io` (+ UTM) | Start Free → (mobile) |
| `src/components/hero.tsx` | 96 | `https://app.shieldpulse.io` (+ UTM) | Start Free — 25 Devices |
| `src/components/pricing.tsx` | 39 | `https://app.shieldpulse.io` | Start Free |
| `src/components/pricing.tsx` | 55 | `https://app.shieldpulse.io?plan=pro` | Start Pro Trial |
| `src/components/pricing.tsx` | 70 | `https://app.shieldpulse.io?plan=business` | Start Business Trial |
| `src/components/pricing.tsx` | 86 | `https://app.shieldpulse.io?plan=scale` | Start Scale Trial |
| `src/components/final-cta.tsx` | 59 | `https://app.shieldpulse.io` (+ UTM) | Start free trial — no credit card |
| `src/app/blog/[slug]/article-layout.tsx` | 183 | `https://app.shieldpulse.io` | Try Sentinel Free → |

## Beta page

When beta mode is on, all CTAs redirect to `/beta` instead of `app.shieldpulse.io`.
The `/beta` page collects: first name, last name, email, WhatsApp, number of machines.
On submit, an email is sent via Resend to `BETA_NOTIFY_EMAIL`.
