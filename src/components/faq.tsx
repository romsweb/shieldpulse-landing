'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Section from './ui/section';

const faqs = [
  {
    question: 'Can I migrate from Backup Radar?',
    answer:
      'Yes. Sentinel connects directly to your Acronis tenant, so there\u2019s nothing to migrate. Just point us at your API and you\u2019re up in minutes. Your Backup Radar data stays where it is \u2014 you simply stop needing it.',
  },
  {
    question: 'Which backup vendors do you support?',
    answer:
      'Acronis is fully supported on day one. Veeam and Datto connectors are actively in development and will be available in the coming months. If you need a specific vendor, reach out \u2014 we prioritize based on demand.',
  },
  {
    question: 'How does the AI triage actually work?',
    answer:
      'Sentinel analyzes your alert history, identifies patterns (retries that resolve, recurring non-critical warnings, test machines), and classifies each alert by severity and actionability. Over time, it learns your environment\u2019s specific patterns and gets more accurate. You always have the final say \u2014 flag any miscategorization and the model adapts.',
  },
  {
    question: 'Where is my data stored? Is it secure?',
    answer:
      'All data is stored in encrypted PostgreSQL databases hosted on SOC 2 compliant infrastructure. We use row-level security to ensure strict tenant isolation. Your backup metadata never leaves our infrastructure, and we never access your actual backup data \u2014 only status and alert information.',
  },
  {
    question: 'What\u2019s your uptime commitment?',
    answer:
      'We target 99.9% uptime for the monitoring dashboard and alert delivery. The status page at status.shieldpulse.io shows real-time and historical availability. Pro and Business plans include SLA-backed uptime guarantees.',
  },
  {
    question: 'Do you have an API?',
    answer:
      'A full REST API is on our roadmap and actively in development. It will expose everything the dashboard does: device status, alert history, triage results, and configuration. Early access will be available to Pro and Business customers.',
  },
  {
    question: 'What happens if I exceed the free tier?',
    answer:
      'You\u2019ll get a notification when you\u2019re approaching 25 devices. If you go over, monitoring continues uninterrupted \u2014 we\u2019ll never cut you off. You\u2019ll just be prompted to upgrade to Pro. No surprise charges, no retroactive billing.',
  },
  {
    question: 'What about vendors you don\u2019t support yet?',
    answer:
      'If you\u2019re using a vendor we don\u2019t support yet, sign up for the free tier with Acronis and let us know what else you need. We prioritize connector development based on customer demand. The architecture is designed to add new vendors quickly.',
  },
];

function FaqItem({ question, answer }: { question: string; answer: string }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="border border-border rounded-xl overflow-hidden">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between p-6 text-left hover:bg-bg-surface/50 transition-colors"
      >
        <span className="font-mono text-sm sm:text-base font-medium text-text-primary pr-4">
          {question}
        </span>
        <span
          className={`shrink-0 text-text-muted font-mono text-xl transition-transform duration-200 ${
            open ? 'rotate-45' : ''
          }`}
        >
          +
        </span>
      </button>
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="overflow-hidden"
          >
            <div className="px-6 pb-6 text-sm text-text-secondary leading-relaxed">
              {answer}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function Faq() {
  return (
    <Section id="faq" className="bg-bg-primary">
      <div className="max-w-3xl mx-auto">
        <h2 className="font-mono text-3xl sm:text-4xl font-bold text-text-primary text-center mb-16">
          Questions you&apos;d actually ask
        </h2>

        <div className="space-y-3">
          {faqs.map((faq) => (
            <FaqItem key={faq.question} question={faq.question} answer={faq.answer} />
          ))}
        </div>
      </div>
    </Section>
  );
}
