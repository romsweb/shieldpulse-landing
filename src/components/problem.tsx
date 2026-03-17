'use client';

import { motion } from 'framer-motion';
import Section from './ui/section';

const painCards = [
  {
    border: 'border-accent-red/40',
    icon: '$',
    title: 'Your price just went up. Again.',
    description:
      'Every time a PE firm acquires your backup monitoring tool, the first move is a price hike. 20%, 40%, sometimes double. You have no leverage because migration is painful. They know it.',
  },
  {
    border: 'border-accent-amber/40',
    icon: '\u{1F512}',
    title: "Contracts you didn't ask for.",
    description:
      'What started as month-to-month is now annual lock-in. Auto-renewals with 60-day cancellation windows. Penalty clauses buried in page 14. Your flexibility is gone.',
  },
  {
    border: 'border-accent-red/40',
    icon: '\u{1F514}',
    title: 'Alert fatigue is killing your team.',
    description:
      '200+ alerts every morning. Most are noise: retries that resolved, temp file warnings, test machines. Your techs spend 45 minutes triaging before real work even starts.',
  },
];

const stagger = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.15 },
  },
};

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export default function Problem() {
  return (
    <Section id="problem" className="bg-bg-primary">
      <div className="max-w-5xl mx-auto">
        <h2 className="font-mono text-3xl sm:text-4xl font-bold text-text-primary text-center mb-16">
          Sound familiar?
        </h2>

        <motion.div
          className="grid md:grid-cols-3 gap-6 mb-16"
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
        >
          {painCards.map((card) => (
            <motion.div
              key={card.title}
              variants={fadeUp}
              className={`bg-bg-surface border ${card.border} rounded-xl p-6 hover:bg-bg-elevated transition-colors`}
            >
              <span className="text-2xl mb-4 block">{card.icon}</span>
              <h3 className="font-mono text-lg font-semibold text-text-primary mb-3">
                {card.title}
              </h3>
              <p className="text-text-secondary text-sm leading-relaxed">
                {card.description}
              </p>
            </motion.div>
          ))}
        </motion.div>

        <motion.blockquote
          className="border-l-4 border-accent-green pl-6 py-4 bg-bg-surface/50 rounded-r-lg max-w-3xl mx-auto"
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="font-mono text-sm text-text-secondary leading-relaxed mb-4">
            &quot;Kaseya acquires Datto. Price goes up. ConnectWise acquires
            ScreenConnect. Licensing changes. ScalePad acquires Backup Radar.
            Here we go again.&quot;
          </p>
          <p className="font-mono text-sm text-text-secondary leading-relaxed">
            The pattern is always the same: acquire, consolidate, raise prices,
            lock in contracts. MSPs are the ones who pay.
          </p>
          <footer className="mt-4 text-xs text-text-muted font-mono">
            &mdash; Every MSP community thread, 2023&ndash;2025
          </footer>
        </motion.blockquote>
      </div>
    </Section>
  );
}
