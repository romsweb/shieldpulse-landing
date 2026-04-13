'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import Section from './ui/section';
import { betaHref } from '@/lib/beta';

interface Feature {
  text: string;
  soon?: boolean;
}

interface Plan {
  name: string;
  monthlyPrice: number;
  description: string;
  features: Feature[];
  cta: string;
  href: string;
  featured: boolean;
  badge: string | null;
}

const plans: Plan[] = [
  {
    name: 'Pro',
    monthlyPrice: 49,
    description: 'For growing MSPs that need integrations.',
    features: [
      { text: '100 devices included' },
      { text: '+$0.75/device beyond 100' },
      { text: 'Acronis monitoring' },
      { text: 'AI alert triage' },
      { text: 'Alerts (Teams / Slack / Webhook)' },
      { text: 'Email alerts' },
      { text: '365 days history' },
      { text: 'Unlimited users' },
      { text: 'Email support' },
      { text: 'Multi-vendor support', soon: true },
    ],
    cta: 'Start 21-day trial',
    href: 'https://app.shieldpulse.io/?ref=pro',
    featured: false,
    badge: null,
  },
  {
    name: 'Business',
    monthlyPrice: 149,
    description: 'For established MSPs with large device fleets.',
    features: [
      { text: '500 devices included' },
      { text: '+$0.50/device beyond 500' },
      { text: 'Everything in Pro' },
      { text: 'Priority support' },
    ],
    cta: 'Start 21-day trial',
    href: 'https://app.shieldpulse.io/?ref=business',
    featured: true,
    badge: 'Most Popular',
  },
  {
    name: 'Scale',
    monthlyPrice: 299,
    description: 'Unbeatable pricing for large MSPs.',
    features: [
      { text: '1,000 devices included' },
      { text: '+$0.25/device beyond 1,000' },
      { text: 'Everything in Business' },
      { text: 'Direct founder access' },
      { text: 'Custom alert rules', soon: true },
    ],
    cta: 'Start 21-day trial',
    href: 'https://app.shieldpulse.io/?ref=scale',
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

function formatPrice(price: number): string {
  if (price === 0) return '$0';
  if (price % 1 === 0) return `$${price}`;
  return `$${price.toFixed(2)}`;
}

function calculateShieldPulsePrice(devices: number): { price: number; plan: string } {
  if (devices <= 100) return { price: 49, plan: 'Pro' };
  if (devices <= 250) {
    const proPrice = 49 + (devices - 100) * 0.75;
    return proPrice < 149 ? { price: proPrice, plan: 'Pro' } : { price: 149, plan: 'Business' };
  }
  if (devices <= 1000) {
    const bizPrice = 149 + Math.max(0, devices - 500) * 0.50;
    return bizPrice < 299 ? { price: bizPrice, plan: 'Business' } : { price: 299, plan: 'Scale' };
  }
  const scalePrice = 299 + (devices - 1000) * 0.25;
  return { price: scalePrice, plan: 'Scale' };
}

function PricingCalculator() {
  const [devices, setDevices] = useState(100);

  const { price, plan } = calculateShieldPulsePrice(devices);
  const industryAverage = devices * 0.65;
  const savings = industryAverage - price;

  return (
    <motion.div
      className="bg-bg-surface border border-border rounded-xl p-8 mb-12"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      <h3 className="font-mono text-lg font-semibold text-text-primary mb-2 text-center">
        Pricing Calculator
      </h3>
      <p className="text-sm text-text-secondary text-center mb-8">
        See how much you save with ShieldPulse.
      </p>

      {/* Slider */}
      <div className="max-w-md mx-auto mb-10">
        <label className="block font-mono text-sm text-text-secondary mb-3 text-center">
          How many devices do you monitor?
        </label>
        <div className="flex items-center gap-4">
          <input
            type="range"
            min={1}
            max={2000}
            value={devices}
            onChange={(e) => setDevices(Number(e.target.value))}
            aria-label="Number of devices"
            className="w-full h-2 bg-border rounded-lg appearance-none cursor-pointer accent-accent-green"
          />
          <input
            type="number"
            min={1}
            max={10000}
            value={devices}
            onChange={(e) => setDevices(Math.max(1, Number(e.target.value) || 1))}
            aria-label="Number of devices"
            className="w-24 bg-bg-primary border border-border rounded-lg px-3 py-2 text-center font-mono text-text-primary text-sm focus:outline-none focus:border-accent-green"
          />
        </div>
      </div>

      {/* Comparison table */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-2xl mx-auto mb-8">
        <motion.div
          key={`sp-${devices}`}
          initial={{ opacity: 0.5, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.2 }}
          className="bg-bg-primary border border-accent-green/30 rounded-xl p-6 text-center"
        >
          <p className="font-mono text-xs text-accent-green uppercase tracking-wider mb-1">
            ShieldPulse
          </p>
          <p className="font-mono text-3xl font-bold text-text-primary mb-1">
            ${price % 1 === 0 ? price : price.toFixed(2)}
          </p>
          <p className="text-xs text-text-muted font-mono">/mo</p>
          <p className="text-xs text-accent-green font-mono mt-2 border border-accent-green/20 rounded px-2 py-1 inline-block">
            {plan}
          </p>
        </motion.div>

        <motion.div
          key={`ia-${devices}`}
          initial={{ opacity: 0.5, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.2 }}
          className="bg-bg-primary border border-border rounded-xl p-6 text-center"
        >
          <p className="font-mono text-xs text-text-muted uppercase tracking-wider mb-1">
            Industry Average
          </p>
          <p className="font-mono text-3xl font-bold text-text-muted mb-1">
            ${industryAverage % 1 === 0 ? industryAverage : industryAverage.toFixed(2)}
          </p>
          <p className="text-xs text-text-muted font-mono">/mo</p>
          <p className="text-xs text-text-muted font-mono mt-2">
            @ $0.65/device
          </p>
        </motion.div>

        <motion.div
          key={`sv-${devices}`}
          initial={{ opacity: 0.5, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.2 }}
          className={`bg-bg-primary border rounded-xl p-6 text-center ${
            savings > 0 ? 'border-accent-green/30' : 'border-border'
          }`}
        >
          <p className="font-mono text-xs text-text-muted uppercase tracking-wider mb-1">
            Your Savings
          </p>
          <p className={`font-mono text-3xl font-bold mb-1 ${
            savings > 0 ? 'text-accent-green' : 'text-text-muted'
          }`}>
            {savings > 0 ? `$${savings % 1 === 0 ? savings : savings.toFixed(2)}` : '$0'}
          </p>
          <p className="text-xs text-text-muted font-mono">/mo</p>
          {savings > 0 && (
            <p className="text-xs text-accent-green font-mono mt-2">
              {Math.round((savings / industryAverage) * 100)}% less
            </p>
          )}
        </motion.div>
      </div>

      <p className="text-center text-sm text-text-muted font-mono">
        Unlike others, we don&apos;t care if it&apos;s a server or a laptop. A device is a device.
      </p>
    </motion.div>
  );
}

const getHrefWithUtm = (baseHref: string) => {
  if (typeof window === 'undefined') return baseHref;
  const currentParams = new URLSearchParams(window.location.search);
  const utmEntries = Array.from(currentParams.entries()).filter(([k]) => k.startsWith('utm_'));
  if (utmEntries.length === 0) return baseHref;
  const sep = baseHref.includes('?') ? '&' : '?';
  return baseHref + sep + new URLSearchParams(utmEntries).toString();
};

export default function Pricing() {
  return (
    <Section id="pricing" className="bg-bg-primary">
      <div className="max-w-6xl mx-auto">
        <h2 className="font-mono text-3xl sm:text-4xl font-bold text-text-primary text-center mb-2">
          No feature gates. You get everything. You just scale.
        </h2>
        <p className="text-text-secondary text-center mb-12 max-w-2xl mx-auto">
          Because your problems don&apos;t come in tiers.
        </p>

        <motion.div
          className="text-center mb-10"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <span className="inline-block font-mono text-base text-accent-green border border-accent-green/30 bg-accent-green/5 px-6 py-3 rounded-lg">
            21-day free trial. No credit card. Full access.
          </span>
        </motion.div>

        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8"
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
        >
          {plans.map((plan) => {
            const price = plan.monthlyPrice;
            const periodLabel = '/mo';

            return (
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
                <div className="mb-1">
                  <span className="font-mono text-4xl font-bold text-text-primary">
                    {formatPrice(price)}
                  </span>
                  <span className="text-text-muted text-sm">{periodLabel}</span>
                </div>
                <div className="mb-4" />
                <p className="text-sm text-text-secondary mb-6">{plan.description}</p>

                <ul className="space-y-3 mb-8 flex-1">
                  {plan.features.map((feature) => (
                    <li key={feature.text} className={`flex items-start gap-2 text-sm ${feature.soon ? 'text-text-muted' : 'text-text-secondary'}`}>
                      <span className={`mt-0.5 shrink-0 ${feature.soon ? 'text-text-muted' : 'text-accent-green'}`}>
                        {feature.soon ? '○' : '✓'}
                      </span>
                      {feature.text}
                      {feature.soon && (
                        <span className="text-xs font-mono text-text-muted border border-border rounded px-1 py-0.5 ml-auto shrink-0">
                          soon
                        </span>
                      )}
                    </li>
                  ))}
                </ul>

                <a
                  href={getHrefWithUtm(betaHref(plan.href))}
                  onClick={() => {
                    if (typeof window !== 'undefined' && (window as any).fbq) {
                      (window as any).fbq('track', 'Lead', { content_name: plan.name });
                    }
                  }}
                  className={`block text-center font-medium py-3 rounded-lg transition-all ${
                    plan.featured
                      ? 'bg-accent-green text-bg-primary hover:brightness-110 glow-green'
                      : 'border border-border text-text-secondary hover:text-text-primary hover:border-text-muted'
                  }`}
                >
                  {plan.cta}
                </a>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Early access banner */}
        <motion.div
          className="text-center mb-8"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <span className="inline-block font-mono text-sm text-accent-amber border border-accent-amber/30 bg-accent-amber/5 px-4 py-2 rounded-lg">
            Early Access — All plans include priority onboarding support
          </span>
        </motion.div>

        {/* How we count devices */}
        <motion.div
          className="bg-bg-surface border border-border rounded-xl p-8 mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h3 className="font-mono text-lg font-semibold text-text-primary mb-2">
            How we count devices
          </h3>
          <p className="text-sm text-text-secondary mb-6">
            You only pay for machines you actually monitor for backup. Not for every agent deployed.
          </p>
          <div className="grid sm:grid-cols-2 gap-3">
            <div className="flex items-start gap-3 text-sm">
              <span className="text-accent-green mt-0.5 shrink-0">✓</span>
              <div>
                <span className="text-text-primary">Acronis agent with backup plan</span>
                <span className="text-text-muted"> — counted</span>
              </div>
            </div>
            <div className="flex items-start gap-3 text-sm">
              <span className="text-text-muted mt-0.5 shrink-0">✕</span>
              <div>
                <span className="text-text-primary">Acronis agent for cyber only</span>
                <span className="text-text-muted"> — exclude it, not counted</span>
              </div>
            </div>
            <div className="flex items-start gap-3 text-sm">
              <span className="text-accent-green mt-0.5 shrink-0">✓</span>
              <div>
                <span className="text-text-primary">Multiple backup plans, same machine</span>
                <span className="text-text-muted"> — 1 device</span>
              </div>
            </div>
            <div className="flex items-start gap-3 text-sm">
              <span className="text-text-muted mt-0.5 shrink-0">✕</span>
              <div>
                <span className="text-text-primary">Machine excluded from monitoring</span>
                <span className="text-text-muted"> — not counted</span>
              </div>
            </div>
          </div>
          <p className="text-sm text-text-muted mt-6 font-mono">
            Your bill reflects what you protect, not what you deploy.
          </p>
        </motion.div>

        <p className="text-center text-lg font-mono font-bold text-accent-green mb-8">
          No &quot;Server Tax&quot; — 1 Device = 1 Device
        </p>

        <PricingCalculator />

        <p className="text-center text-sm text-text-muted font-mono mb-4">
          Month-to-month. Always. No activation fees. No setup fees. Cancel anytime.
        </p>
        <p className="text-center text-xs text-text-muted font-mono">
          All plans include: AI triage, health scoring, webhook alerts, machine notes, live activities, and morning digest emails.
        </p>
      </div>
    </Section>
  );
}
