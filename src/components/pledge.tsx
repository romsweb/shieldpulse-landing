'use client';

import { motion } from 'framer-motion';
import Section from './ui/section';

const commitments = [
  'Transparent pricing. Always published. Always monthly.',
  'Pricing changes announced 90 days in advance.',
  'No forced annual contracts. Ever.',
  'If we sunset, 12 months notice + migration help.',
  'Built by an MSP. Run like an MSP. Decisions made by people who answer tickets, not boards.',
];

export default function Pledge() {
  return (
    <Section id="pledge" className="bg-bg-primary">
      <div className="max-w-3xl mx-auto">
        <h2 className="font-mono text-3xl sm:text-4xl font-bold text-text-primary text-center mb-4">
          Our pledge to MSPs.
        </h2>
        <p className="text-text-secondary text-center mb-16 max-w-xl mx-auto">
          Built different. Run different.
        </p>

        <motion.div
          className="bg-bg-surface border-2 border-accent-green/40 rounded-xl p-8 sm:p-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="space-y-4 text-text-secondary leading-relaxed mb-8">
            <p className="font-mono text-lg text-text-primary">
              Our commitment to MSPs.
            </p>
            <p>
              Here is what I commit to:
            </p>
          </div>

          <ul className="space-y-4 mb-10">
            {commitments.map((item) => (
              <li key={item} className="flex items-start gap-3">
                <span className="text-accent-green mt-0.5 shrink-0 font-mono">&#10003;</span>
                <span className="text-text-primary font-mono text-sm">{item}</span>
              </li>
            ))}
          </ul>

          <div className="border-t border-border pt-6">
            <p className="font-mono text-terminal-green">
              &mdash; Romain, Founder
            </p>
          </div>
        </motion.div>
      </div>
    </Section>
  );
}
