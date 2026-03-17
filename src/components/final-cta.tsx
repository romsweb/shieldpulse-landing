'use client';

import { motion } from 'framer-motion';

export default function FinalCta() {
  return (
    <section className="relative py-32 px-6 bg-bg-primary bg-grid overflow-hidden">
      {/* Radial glow */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(34,197,94,0.06)_0%,transparent_60%)]" />

      <div className="relative z-10 max-w-3xl mx-auto text-center">
        <motion.h2
          className="font-mono text-3xl sm:text-4xl lg:text-5xl font-bold text-text-primary mb-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Your backups deserve better monitoring.
        </motion.h2>

        <motion.p
          className="text-lg text-text-secondary mb-10"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.15, duration: 0.6 }}
        >
          Start with 25 devices free. No credit card. No contract.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.6 }}
        >
          <a
            href="#pricing"
            className="inline-flex items-center gap-2 bg-accent-green text-bg-primary font-bold text-lg px-8 py-4 rounded-xl glow-green hover:brightness-110 transition-all"
          >
            Start Free &mdash; 25 Devices
          </a>
        </motion.div>

        <motion.p
          className="mt-8 text-sm text-text-muted"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.45, duration: 0.6 }}
        >
          Questions?{' '}
          <a href="mailto:support@shieldpulse.io" className="text-text-secondary hover:text-text-primary underline transition-colors">
            support@shieldpulse.io
          </a>
        </motion.p>
      </div>
    </section>
  );
}
