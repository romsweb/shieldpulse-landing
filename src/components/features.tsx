'use client';

import { motion } from 'framer-motion';
import Section from './ui/section';

const features = [
  {
    icon: '\u{1F9E0}',
    title: 'AI Alert Triage',
    description: 'Machine learning filters noise from signal. 247 alerts become 12 actions. Your team reviews only what matters.',
    badge: null,
  },
  {
    icon: '\u{1F517}',
    title: 'Multi-Vendor Support',
    description: 'Acronis supported on day one. Veeam, Datto, and more connectors are on the roadmap.',
    badge: 'Veeam/Datto coming soon',
  },
  {
    icon: '\u26A1',
    title: 'Zero-Config Setup',
    description: 'One API key. Five minutes. No agents to deploy, no firewall rules, no professional services engagement.',
    badge: null,
  },
  {
    icon: '\u{1F4B0}',
    title: 'Transparent Pricing',
    description: 'Per-device pricing published on the website. Month-to-month. No activation fees. No surprise invoices.',
    badge: null,
  },
  {
    icon: '\u{1F527}',
    title: 'API-First',
    description: 'Full REST API for everything the dashboard can do. Integrate with your PSA, RMM, or custom workflows.',
    badge: 'Coming soon',
  },
  {
    icon: '\u{1F4CA}',
    title: 'Real-Time Dashboard',
    description: 'Live backup status across all data centers. Health scores, trends, and drill-down details at a glance.',
    badge: null,
  },
  {
    icon: '\u{1F50D}',
    title: 'Custom Alert Rules',
    description: 'Define your own thresholds and escalation paths. Override AI decisions when your context matters more.',
    badge: 'Coming soon',
  },
  {
    icon: '\u{1F4E2}',
    title: 'Team Notifications',
    description: 'Slack, Teams, email, webhook. Route alerts to the right people with the right priority.',
    badge: 'Coming soon',
  },
];

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08 } },
};

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4 } },
};

export default function Features() {
  return (
    <Section id="features" className="bg-bg-primary">
      <div className="max-w-6xl mx-auto">
        <h2 className="font-mono text-3xl sm:text-4xl font-bold text-text-primary text-center mb-4">
          Everything you need. Nothing you don&apos;t.
        </h2>
        <p className="text-text-secondary text-center mb-16 max-w-2xl mx-auto">
          Built for MSPs who want reliable backup monitoring without the bloat.
        </p>

        <motion.div
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5"
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
        >
          {features.map((feature) => (
            <motion.div
              key={feature.title}
              variants={fadeUp}
              className="group bg-bg-surface border border-border rounded-xl p-6 hover:bg-bg-elevated hover:-translate-y-1 hover:border-border/80 transition-all duration-200"
            >
              <div className="flex items-start justify-between mb-4">
                <span className="text-2xl">{feature.icon}</span>
                {feature.badge && (
                  <span className="text-[10px] font-mono text-text-muted bg-bg-elevated border border-border rounded-full px-2 py-0.5">
                    {feature.badge}
                  </span>
                )}
              </div>
              <h3 className="font-mono text-base font-semibold text-text-primary mb-2">
                {feature.title}
              </h3>
              <p className="text-sm text-text-secondary leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </Section>
  );
}
