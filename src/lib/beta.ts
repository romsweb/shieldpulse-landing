/**
 * Beta mode configuration.
 *
 * When NEXT_PUBLIC_BETA_MODE=true, all CTAs redirect to /beta
 * instead of app.shieldpulse.io.
 */
export const BETA_MODE = process.env.NEXT_PUBLIC_BETA_MODE === 'true';

/** Returns /beta in beta mode, or the original href otherwise. */
export function betaHref(originalHref: string): string {
  return BETA_MODE ? '/beta' : originalHref;
}
