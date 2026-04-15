'use client';

import { motion } from 'framer-motion';
import Section from './ui/section';

const blocks = [
  {
    prefix: '>_',
    headline: 'Start here',
    body: "Every morning, ShieldPulse surfaces the 3 tenant clusters that need your attention. It's a prioritized action queue, not a list of alerts.",
    accent: 'border-accent-green/50',
  },
  {
    prefix: '//',
    headline: 'Understand instantly',
    body: "Each machine gets a diagnostic: what broke, how long it's been failing, and what's dragging the health score. No guesswork. No reading between the lines.",
    accent: 'border-accent-amber/50',
  },
  {
    prefix: '~',
    headline: 'Track what persists',
    body: "Issues that keep coming back are flagged automatically. Notes, reminders, and score deltas give you the full picture across runs — not just today's snapshot.",
    accent: 'border-accent-green/50',
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15 } },
};

export default function Features() {
  return (
    <Section id="features" className="bg-bg-primary">
      <div className="max-w-6xl mx-auto">
        <h2 className="font-mono text-3xl sm:text-4xl font-bold text-text-primary text-center mb-2">
          Sentinel surfaces the 3 things that need action today.
        </h2>
        <p className="font-mono text-xl sm:text-2xl text-accent-green font-semibold text-center mb-16">

        </p>

        <motion.div
          className="grid md:grid-cols-3 gap-6 mb-12"
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
        >
          {blocks.map((block) => (
            <motion.div
              key={block.headline}
              variants={fadeUp}
              className={`bg-bg-surface border ${block.accent} rounded-xl p-8 hover:bg-bg-elevated transition-colors`}
            >
              <span className="font-mono text-2xl text-accent-green font-bold block mb-4">
                {block.prefix}
              </span>
              <h3 className="font-mono text-lg font-semibold text-text-primary mb-3">
                {block.headline}
              </h3>
              <p className="text-text-secondary text-sm leading-relaxed">
                {block.body}
              </p>
            </motion.div>
          ))}
        </motion.div>

        <motion.p
          className="text-center text-sm text-text-muted font-mono"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          All features included on every plan.
          <br />
          You scale by machines, not by capability.
        </motion.p>
      </div>
    </Section>
  );
}
