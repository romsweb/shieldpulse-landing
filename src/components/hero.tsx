'use client';

import { useEffect, useRef, useState } from 'react';
import { motion, useMotionValue, animate } from 'framer-motion';
import { betaHref } from '@/lib/beta';

function AnimatedCounter() {
  const count = useMotionValue(247);
  const [display, setDisplay] = useState(247);
  const hasAnimated = useRef(false);

  useEffect(() => {
    if (hasAnimated.current) return;
    hasAnimated.current = true;

    const timeout = setTimeout(() => {
      const controls = animate(count, 12, {
        duration: 2.5,
        ease: 'easeOut',
        onUpdate: (v) => setDisplay(Math.round(v)),
      });
      return () => controls.stop();
    }, 1500);

    return () => clearTimeout(timeout);
  }, [count]);

  return <span>{display}</span>;
}

const getHrefWithUtm = (baseHref: string) => {
  if (typeof window === 'undefined') return baseHref;
  const currentParams = new URLSearchParams(window.location.search);
  const utmEntries = Array.from(currentParams.entries()).filter(([k]) => k.startsWith('utm_'));
  if (utmEntries.length === 0) return baseHref;
  const sep = baseHref.includes('?') ? '&' : '?';
  return baseHref + sep + new URLSearchParams(utmEntries).toString();
};

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-16 bg-grid overflow-hidden">
      {/* Radial glow */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(34,197,94,0.08)_0%,transparent_70%)]" />

      <div className="relative z-10 max-w-6xl mx-auto px-6 py-24 grid lg:grid-cols-2 gap-16 items-center">
        {/* Left: Copy */}
        <div>
          <motion.p
            className="font-mono text-sm text-terminal-green mb-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            {'> BACKUP MONITORING FOR MSPs'}
            <span className="animate-blink">_</span>
          </motion.p>

          <h1
            className="font-mono text-4xl sm:text-5xl lg:text-6xl font-bold text-text-primary leading-tight mb-2"
          >
            127 alerts.
            <br />
            Only 12 actually matter.
          </h1>

          <motion.p
            className="font-mono text-xl sm:text-2xl text-accent-green font-semibold mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.55, duration: 0.5 }}
          >
            We show you which ones.
          </motion.p>

          <motion.p
            className="text-lg text-text-secondary max-w-xl mb-8 leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.6 }}
          >
            Your morning Acronis review takes 45 minutes.
            <br />
            With Sentinel it takes 3.
          </motion.p>

          <motion.div
            className="flex flex-wrap gap-4 mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9, duration: 0.6 }}
          >
            <a
              href={getHrefWithUtm(betaHref('https://app.shieldpulse.io'))}
              onClick={() => {
                if (typeof window !== 'undefined' && (window as any).fbq) {
                  (window as any).fbq('track', 'Lead', { content_name: 'Trial' });
                }
              }}
              className="inline-flex items-center gap-2 bg-accent-green text-bg-primary font-semibold px-6 py-3 rounded-lg glow-green hover:brightness-110 transition-all text-base"
            >
              Start 21-day trial &mdash; no credit card
            </a>
            <a
              href="#pricing"
              className="inline-flex items-center gap-2 border border-border text-text-secondary hover:text-text-primary px-6 py-3 rounded-lg transition-colors text-base"
            >
              See Pricing &rarr;
            </a>
          </motion.div>

          <motion.p
            className="font-mono text-sm text-text-muted"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.1, duration: 0.6 }}
          >
            Built by an MSP who still runs one. No private equity behind us.
          </motion.p>
        </div>

        {/* Right: Terminal mockup */}
        <motion.div
          className="relative"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.6, duration: 0.8 }}
        >
          <div className="bg-bg-surface border border-border rounded-xl overflow-hidden shadow-2xl">
            {/* Title bar */}
            <div className="flex items-center gap-2 px-4 py-3 bg-bg-elevated border-b border-border">
              <span className="w-3 h-3 rounded-full bg-accent-red/80" />
              <span className="w-3 h-3 rounded-full bg-accent-amber/80" />
              <span className="w-3 h-3 rounded-full bg-accent-green/80" />
              <span className="ml-3 text-xs text-text-muted font-mono">
                sentinel &mdash; monitoring
              </span>
            </div>

            {/* Terminal content */}
            <div className="p-6 font-mono text-sm leading-relaxed space-y-2">
              <p className="text-text-muted">$ sentinel status --today</p>
              <p className="text-text-secondary">
                Scanning 4 data centers... <span className="text-accent-green">done</span>
              </p>
              <div className="mt-4 border-t border-border pt-4 space-y-1">
                <p className="text-text-secondary">
                  Total alerts:{' '}
                  <span className="text-accent-red font-bold">247</span>
                </p>
                <p className="text-text-secondary">
                  After AI triage:{' '}
                  <span className="text-accent-green font-bold">
                    <AnimatedCounter />
                  </span>
                </p>
                <p className="text-text-secondary">
                  Noise reduced:{' '}
                  <span className="text-terminal-green font-bold">95.1%</span>
                </p>
              </div>
              <div className="mt-4 border-t border-border pt-4">
                <p className="text-terminal-green">
                  &#10003; 3 clients need action now. Others can wait.
                </p>
              </div>
            </div>
          </div>

          {/* Glow behind terminal */}
          <div className="absolute -inset-4 bg-accent-green/5 blur-3xl rounded-full -z-10" />
        </motion.div>
      </div>
    </section>
  );
}
