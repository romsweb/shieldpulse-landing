'use client';

import { motion } from 'framer-motion';
import Section from './ui/section';

const painCards = [
  {
    border: 'border-accent-red/40',
    icon: '>_',
    title: '20 failures. 50 alerts. 0 idea where to start.',
    description:
      'You open Acronis at 8am. Everything is red. You spend 40 minutes figuring out what actually matters.',
  },
  {
    border: 'border-accent-red/40',
    icon: '!',
    title: 'A client calls before you do.',
    description:
      "Their server hasn't backed up in 4 days. You had the alert. It was buried under 80 others.",
  },
  {
    border: 'border-accent-amber/40',
    icon: '~',
    title: "You're monitoring the tool, not the risk.",
    description:
      'Success rate looks fine. But 12 machines show no_result — which means no backup ran at all.',
  },
  {
    border: 'border-accent-amber/40',
    icon: '#',
    title: 'Every MSP dashboard has this problem.',
    description:
      "Too much data. No clear priority. You're not missing alerts — you're drowning in them.",
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
          className="grid md:grid-cols-2 gap-6 mb-16"
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
              <span className="text-2xl mb-4 block font-mono text-accent-green">{card.icon}</span>
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
