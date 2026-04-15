'use client';

import { motion } from 'framer-motion';
import Section from './ui/section';

const commitments = [
  'Transparent pricing. Always published. Always monthly.',
  '90 days notice before any pricing change.',
  'No forced annual contracts. Ever.',
  'If we sunset: 12 months notice + migration help.',
  'Decisions made by someone who still answers tickets \u2014 not a board.',
];

export default function Pledge() {
  return (
    <Section id="pledge" className="bg-bg-primary">
      <div className="max-w-3xl mx-auto">
        <h2 className="font-mono text-3xl sm:text-4xl font-bold text-text-primary text-center mb-16">
          Our pledge to MSPs.
        </h2>

        <motion.div
          className="bg-bg-surface border-2 border-accent-green/40 rounded-xl p-8 sm:p-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="space-y-4 text-text-secondary leading-relaxed mb-8">
            <p>
              I&apos;m Romain. I&apos;ve been running an MSP in New Caledonia for 15
              years &mdash; and I still do. 300+ clients. Acronis Platinum Partner.
              I built Sentinel because I needed it for my own operations.
            </p>
            <p>
              I live this every day. Every feature exists because I hit the problem first.
            </p>
            <p>
              Here&apos;s what I commit to:
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
              &mdash; Romain, Founder &amp; MSP operator since 2011
            </p>
          </div>
        </motion.div>
      </div>
    </Section>
  );
}
