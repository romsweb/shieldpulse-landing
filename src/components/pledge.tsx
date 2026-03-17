'use client';

import { motion } from 'framer-motion';
import Section from './ui/section';

const commitments = [
  'Bootstrapped. No venture capital. No private equity.',
  'Will not sell to rollup operators or consolidators.',
  'Pricing changes announced 90 days in advance, always.',
  'If the economics don\u2019t work, 12 months sunset notice minimum.',
];

export default function Pledge() {
  return (
    <Section id="pledge" className="bg-bg-primary">
      <div className="max-w-3xl mx-auto">
        <h2 className="font-mono text-3xl sm:text-4xl font-bold text-text-primary text-center mb-16">
          We will not get acquired.
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
              I&apos;m Romain. I&apos;ve run an MSP in Nouvelle-Cal&eacute;donie for 15 years.
              300+ clients. When our backup monitoring tool got acquired for the
              second time in three years, I decided to build the tool I actually
              wanted.
            </p>
            <p>
              Sentinel exists because I needed it. Not because a VC told me the
              TAM was attractive. Not because there&apos;s an exit strategy on a slide
              deck somewhere.
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
