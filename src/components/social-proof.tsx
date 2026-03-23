'use client';

import { motion } from 'framer-motion';
import Section from './ui/section';

// TODO: replace first two quotes with real testimonials when available
const quotes = [
  {
    type: 'quote' as const,
    text: 'Finally a tool that tells me what to fix, not just what\'s broken. StartHere alone saves me 30 minutes every morning.',
    attribution: 'MSP, 340+ devices',
  },
  {
    type: 'quote' as const,
    text: 'The morning digest replaced 3 manual checks. The health score catches no_result machines that Acronis native completely misses.',
    attribution: 'MSP, 180+ devices',
  },
  {
    type: 'badge' as const,
    text: '',
    attribution: '',
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
};

export default function SocialProof() {
  return (
    <Section id="social-proof" className="bg-bg-primary">
      <div className="max-w-5xl mx-auto text-center">
        {/* Main stat */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="font-mono text-5xl sm:text-6xl font-bold text-text-primary mb-3">
            1,057+ devices monitored
          </p>
          <p className="font-mono text-lg text-accent-green mb-16">
            Including 1 Acronis Platinum Partner
          </p>
        </motion.div>

        {/* Quote cards */}
        <motion.div
          className="grid md:grid-cols-3 gap-6"
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
        >
          {quotes.map((quote, i) => (
            <motion.div
              key={i}
              variants={fadeUp}
              className="bg-bg-surface border border-accent-green/30 rounded-xl p-6 hover:bg-bg-elevated transition-colors"
              style={quote.type === 'badge' ? { display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', textAlign: 'center' } : { textAlign: 'left' }}
            >
              {quote.type === 'quote' ? (
                <>
                  <p className="font-mono text-sm text-text-secondary leading-relaxed mb-4">
                    &ldquo;{quote.text}&rdquo;
                  </p>
                  <p className="font-mono text-xs text-text-muted">
                    &mdash; {quote.attribution}
                  </p>
                </>
              ) : (
                <>
                  <p className="font-mono text-base font-bold text-text-primary mb-1">
                    Used daily by NOVATECH
                  </p>
                  <p className="font-mono text-sm text-text-secondary mb-1">
                    Acronis Platinum Partner
                  </p>
                  <p className="font-mono text-sm text-text-muted mb-4">
                    New Caledonia
                  </p>
                  <p className="font-mono text-xs text-accent-green">
                    1,057+ devices monitored in production
                  </p>
                </>
              )}
            </motion.div>
          ))}
        </motion.div>
      </div>
    </Section>
  );
}
