'use client';

import { motion } from 'framer-motion';
import Section from './ui/section';

const plans = [
  {
    name: 'Free',
    price: '$0',
    period: '/mo',
    description: 'Get started with basic monitoring.',
    features: [
      'Up to 25 devices',
      'Single vendor (Acronis)',
      'Email alerts',
      '7 days history',
      '1 user',
    ],
    cta: 'Start Free',
    featured: false,
    badge: null,
  },
  {
    name: 'Pro',
    price: '$49',
    period: '/mo',
    description: 'For growing MSPs that need AI and integrations.',
    features: [
      '100 devices included',
      '+$0.75 per extra device',
      'Multi-vendor support',
      'AI alert triage',
      'Slack & webhook notifications',
      '90 days history',
      'Up to 5 users',
      'Email support',
    ],
    cta: 'Start Pro Trial',
    featured: true,
    badge: 'Most Popular',
  },
  {
    name: 'Business',
    price: '$149',
    period: '/mo',
    description: 'For established MSPs with large device fleets.',
    features: [
      '500 devices included',
      '+$0.50 per extra device',
      'Everything in Pro',
      'Unlimited users',
      'Priority support',
      'Phone support',
      'Custom alert rules',
      '1 year history',
    ],
    cta: 'Start Business Trial',
    featured: false,
    badge: null,
  },
];

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export default function Pricing() {
  return (
    <Section id="pricing" className="bg-bg-primary">
      <div className="max-w-6xl mx-auto">
        <h2 className="font-mono text-3xl sm:text-4xl font-bold text-text-primary text-center mb-4">
          Pricing that respects your intelligence
        </h2>
        <p className="text-text-secondary text-center mb-16 max-w-2xl mx-auto">
          No hidden fees. No annual lock-in. Cancel anytime with one click.
        </p>

        <motion.div
          className="grid md:grid-cols-3 gap-6 mb-8"
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
        >
          {plans.map((plan) => (
            <motion.div
              key={plan.name}
              variants={fadeUp}
              className={`relative bg-bg-surface rounded-xl p-8 flex flex-col ${
                plan.featured
                  ? 'border-2 border-accent-green/50 glow-green'
                  : 'border border-border'
              }`}
            >
              {plan.badge && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-accent-green text-bg-primary text-xs font-mono font-bold px-3 py-1 rounded-full">
                  {plan.badge}
                </span>
              )}

              <h3 className="font-mono text-lg font-semibold text-text-primary mb-2">
                {plan.name}
              </h3>
              <div className="mb-4">
                <span className="font-mono text-4xl font-bold text-text-primary">{plan.price}</span>
                <span className="text-text-muted text-sm">{plan.period}</span>
              </div>
              <p className="text-sm text-text-secondary mb-6">{plan.description}</p>

              <ul className="space-y-3 mb-8 flex-1">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-2 text-sm text-text-secondary">
                    <span className="text-accent-green mt-0.5 shrink-0">&#10003;</span>
                    {feature}
                  </li>
                ))}
              </ul>

              <a
                href="#"
                className={`block text-center font-medium py-3 rounded-lg transition-all ${
                  plan.featured
                    ? 'bg-accent-green text-bg-primary hover:brightness-110 glow-green'
                    : 'border border-border text-text-secondary hover:text-text-primary hover:border-text-muted'
                }`}
              >
                {plan.cta}
              </a>
            </motion.div>
          ))}
        </motion.div>

        {/* Enterprise */}
        <motion.div
          className="bg-bg-surface border border-border rounded-xl p-8 flex flex-col sm:flex-row items-center justify-between gap-6 mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div>
            <h3 className="font-mono text-lg font-semibold text-text-primary mb-1">Enterprise</h3>
            <p className="text-sm text-text-secondary">
              Custom device counts, SLAs, dedicated support, and on-premises options. Let&apos;s talk.
            </p>
          </div>
          <a
            href="mailto:sales@shieldpulse.io"
            className="shrink-0 border border-border text-text-secondary hover:text-text-primary hover:border-text-muted px-6 py-3 rounded-lg transition-colors font-medium"
          >
            Contact Us
          </a>
        </motion.div>

        <p className="text-center text-sm text-text-muted font-mono">
          Month-to-month. Always. No activation fees. No setup fees.
        </p>
      </div>
    </Section>
  );
}
