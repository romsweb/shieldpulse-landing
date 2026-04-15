'use client';

import { motion } from 'framer-motion';
import { betaHref } from '@/lib/beta';

const getHrefWithUtm = (baseHref: string) => {
  if (typeof window === 'undefined') return baseHref;
  const currentParams = new URLSearchParams(window.location.search);
  const utmEntries = Array.from(currentParams.entries()).filter(([k]) => k.startsWith('utm_'));
  if (utmEntries.length === 0) return baseHref;
  const sep = baseHref.includes('?') ? '&' : '?';
  return baseHref + sep + new URLSearchParams(utmEntries).toString();
};

export default function FinalCta() {
  return (
    <section className="relative py-32 px-6 bg-bg-primary bg-grid overflow-hidden">
      {/* Radial glow */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(34,197,94,0.06)_0%,transparent_60%)]" />

      <div className="relative z-10 max-w-3xl mx-auto text-center">
        <motion.h2
          className="font-mono text-3xl sm:text-4xl lg:text-5xl font-bold text-text-primary mb-3"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          See your 3 priority clients before they call you.
        </motion.h2>

        <motion.p
          className="font-mono text-xl sm:text-2xl text-accent-green font-semibold mb-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1, duration: 0.5 }}
        >
        </motion.p>

        <motion.p
          className="text-lg text-text-secondary mb-10 max-w-xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          ShieldPulse shows you where to act &mdash;
          before your clients notice the problem.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.35, duration: 0.6 }}
        >
          <a
            href={getHrefWithUtm(betaHref('https://app.shieldpulse.io'))}
            onClick={() => {
              if (typeof window !== 'undefined' && (window as any).fbq) {
                (window as any).fbq('track', 'Lead', { content_name: 'Trial' });
              }
            }}
            className="inline-flex items-center gap-2 bg-accent-green text-bg-primary font-bold text-lg px-8 py-4 rounded-xl glow-green hover:brightness-110 transition-all"
          >
            Start 21-day trial &mdash; no credit card
          </a>
        </motion.div>

        <motion.p
          className="mt-8 text-sm text-text-muted"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5, duration: 0.6 }}
        >
          Questions?{' '}
          <a href="mailto:contact@shieldpulse.io" className="text-text-secondary hover:text-text-primary underline transition-colors">
            contact@shieldpulse.io
          </a>
        </motion.p>

        <motion.p
          className="mt-12 font-mono text-xs text-text-muted"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6, duration: 0.6 }}
        >
          Currently supports Acronis Cyber Cloud.
          Veeam connector arriving Q3 2026.{' '}
          <a href="#veeam-waitlist" className="text-accent-green hover:underline transition-colors">
            join the waitlist &rarr;
          </a>
        </motion.p>
      </div>
    </section>
  );
}
