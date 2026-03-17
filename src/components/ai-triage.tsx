'use client';

import { motion } from 'framer-motion';
import Section from './ui/section';

function AlertGrid({ count, color, label }: { count: number; color: 'red' | 'green'; label: string }) {
  const cols = color === 'red' ? 19 : 4;
  return (
    <div className="text-center">
      <div
        className={`inline-grid gap-1 mb-4 ${color === 'red' ? 'grid-cols-19' : 'grid-cols-4'}`}
        style={{ gridTemplateColumns: `repeat(${cols}, minmax(0, 1fr))` }}
      >
        {Array.from({ length: count }).map((_, i) => (
          <motion.div
            key={i}
            className={`w-3 h-3 rounded-sm ${
              color === 'red' ? 'bg-accent-red/60' : 'bg-accent-green/70'
            }`}
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.005, duration: 0.2 }}
          />
        ))}
      </div>
      <p className={`font-mono text-sm ${color === 'red' ? 'text-accent-red' : 'text-accent-green'}`}>
        {label}
      </p>
    </div>
  );
}

const bullets = [
  {
    title: 'Pattern recognition',
    description: 'Learns which alerts resolve themselves, which are retries, and which need human attention.',
  },
  {
    title: 'Context awareness',
    description: 'Knows that a failed backup on a test VM at 2 AM is not the same as a production server missing its RPO.',
  },
  {
    title: 'Continuous learning',
    description: 'Gets smarter over time as it observes your environment and your response patterns.',
  },
];

export default function AiTriage() {
  return (
    <Section id="ai-triage" className="bg-bg-primary bg-grid">
      <div className="max-w-5xl mx-auto">
        <h2 className="font-mono text-3xl sm:text-4xl font-bold text-text-primary text-center mb-4">
          247 alerts walk into your inbox.
          <br />
          <span className="text-terminal-green">12 of them matter.</span>
        </h2>
        <p className="text-text-secondary text-center mb-16 max-w-2xl mx-auto">
          Sentinel&apos;s AI triage engine separates signal from noise so your team focuses on real problems.
        </p>

        {/* Before / After */}
        <div className="grid md:grid-cols-2 gap-8 mb-16 items-center">
          {/* Before */}
          <motion.div
            className="bg-bg-surface border border-accent-red/20 rounded-xl p-8"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <p className="font-mono text-xs text-accent-red mb-4 uppercase tracking-wider">Before Sentinel</p>
            <AlertGrid count={247} color="red" label="247 alerts \u00b7 45 min to triage" />
          </motion.div>

          {/* After */}
          <motion.div
            className="bg-bg-surface border border-accent-green/20 rounded-xl p-8"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <p className="font-mono text-xs text-accent-green mb-4 uppercase tracking-wider">After Sentinel</p>
            <AlertGrid count={12} color="green" label="12 actions needed \u00b7 3 min to review" />
          </motion.div>
        </div>

        {/* Bullets */}
        <div className="grid md:grid-cols-3 gap-6 mb-16">
          {bullets.map((bullet, i) => (
            <motion.div
              key={bullet.title}
              className="bg-bg-surface border border-border rounded-xl p-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.4 }}
            >
              <h3 className="font-mono text-base font-semibold text-text-primary mb-2">
                {bullet.title}
              </h3>
              <p className="text-sm text-text-secondary leading-relaxed">
                {bullet.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* ROI Box */}
        <motion.div
          className="bg-bg-surface border border-terminal-green/30 rounded-xl p-8 max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h3 className="font-mono text-lg font-semibold text-terminal-green mb-4 text-center">
            The math is simple
          </h3>
          <div className="space-y-3 font-mono text-sm">
            <div className="flex justify-between text-text-secondary">
              <span>Average tech rate</span>
              <span className="text-text-primary">$26/hr</span>
            </div>
            <div className="flex justify-between text-text-secondary">
              <span>Daily triage time</span>
              <span className="text-text-primary">45 min</span>
            </div>
            <div className="flex justify-between text-text-secondary">
              <span>Annual cost of triage</span>
              <span className="text-text-primary">$5,850/yr</span>
            </div>
            <hr className="border-border" />
            <div className="flex justify-between text-text-secondary">
              <span>Sentinel reduces noise by</span>
              <span className="text-accent-green font-bold">60%</span>
            </div>
            <div className="flex justify-between font-bold">
              <span className="text-text-primary">You save</span>
              <span className="text-terminal-green text-lg">~$3,500/yr</span>
            </div>
          </div>
          <p className="text-xs text-text-muted mt-4 text-center">
            Per tech. Most MSPs have 3&ndash;5 techs reviewing alerts daily.
          </p>
        </motion.div>
      </div>
    </Section>
  );
}
