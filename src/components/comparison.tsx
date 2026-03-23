'use client';

import { motion } from 'framer-motion';
import Section from './ui/section';

const rows = [
  {
    label: 'Getting to one alert',
    acronis: 'Partner → client list → sub-clients → Monitoring → Operations → click donut → popup (wrong clients) → Go to customer → new console loads → find alert again → 2x back to return. 12 steps. Every. Single. Alert.',
    shieldpulse: 'Open dashboard. Critical issues are already on top. Click once to investigate.',
    longAcronis: true,
  },
  {
    label: 'Console switching',
    acronis: 'Partner console and client console are two different interfaces. Navigation context lost on every switch.',
    shieldpulse: 'One interface. All partners, all clients, all DCs. No context switching.',
  },
  {
    label: 'Alert popup useless',
    acronis: "Click 'Active alerts summary' → popup shows 3 clients but not WHICH alert. Pick a client, hope for the best.",
    shieldpulse: 'Every alert includes client name, device, severity, and consecutive failure count. No guessing.',
  },
  {
    label: 'Silent failures',
    acronis: 'Success rate looks fine. Agents go dark silently. no_result machines are invisible.',
    shieldpulse: 'Health score penalizes machines with no backup activity — not just failures. Nothing hides.',
  },
  {
    label: 'Multi-partner visibility',
    acronis: "One partner at a time. Drop into each to check status. Can't open parallel tabs.",
    shieldpulse: 'All partners unified. One health view across every partner and every client.',
  },
  {
    label: 'Multi-DC visibility',
    acronis: 'Multiple datacenters = multiple separate consoles. No unified view across DCs. Health of DC2 while you\'re in DC1? Start over.',
    shieldpulse: 'All datacenters in one dashboard. Per-DC health score, segmented progress bar, sparkline trend — side by side.',
  },
  {
    label: 'Morning workflow',
    acronis: 'No digest. Repeat the 12-step process every morning.',
    shieldpulse: 'Daily digest delivered at your preferred time. Client names, health rates, what changed since yesterday.',
  },
  {
    label: 'Problem memory',
    acronis: 'Same alert appears every day. No tracking, no persistence, no context.',
    shieldpulse: 'Issues tracked across runs. Notes with reminders. Auto-resolved when fixed.',
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export default function Comparison() {
  return (
    <Section id="comparison" className="bg-bg-primary">
      <div className="max-w-5xl mx-auto">
        {/* Title */}
        <h2 className="font-mono text-3xl sm:text-4xl font-bold text-text-primary text-center mb-2">
          Why not just use Acronis reporting?
        </h2>
        <p className="text-text-secondary text-center mb-8">
          Good question. Here&apos;s the honest answer.
        </p>

        {/* Terminal callout */}
        <motion.blockquote
          className="border-l-4 border-accent-green pl-6 py-4 bg-bg-surface/50 rounded-r-lg max-w-3xl mx-auto mb-16"
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="font-mono text-sm text-text-secondary leading-relaxed">
            &gt; The average MSP spends 40+ minutes every morning navigating Acronis
            to find what actually needs attention.
            <br />
            &gt; ShieldPulse reduces that to under 5 minutes.
          </p>
        </motion.blockquote>

        {/* Comparison table */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-40px' }}
          variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.06 } } }}
        >
          {/* Header row */}
          <div className="grid grid-cols-[140px_1fr_1fr] sm:grid-cols-[180px_1fr_1fr] gap-4 mb-2 px-4">
            <div />
            <div className="font-mono text-xs font-bold text-text-muted uppercase tracking-wider">
              Acronis Cyber Protect Cloud
            </div>
            <div className="font-mono text-xs font-bold text-accent-green uppercase tracking-wider">
              ShieldPulse
            </div>
          </div>

          {/* Data rows */}
          {rows.map((row, i) => (
            <motion.div
              key={row.label}
              variants={fadeUp}
              className="grid grid-cols-[140px_1fr_1fr] sm:grid-cols-[180px_1fr_1fr] gap-4 px-4 py-4 rounded-lg"
              style={{
                background: i % 2 === 0 ? 'transparent' : 'rgba(255,255,255,0.015)',
              }}
            >
              {/* Row label */}
              <div className="font-mono text-xs font-semibold pt-0.5" style={{ color: 'rgba(139,148,158,0.6)' }}>
                {row.label}
              </div>

              {/* Acronis column */}
              <div
                className="font-mono leading-relaxed"
                style={{
                  fontSize: row.longAcronis ? '11px' : '13px',
                  color: row.longAcronis ? 'rgba(139,148,158,0.7)' : 'rgba(139,148,158,0.9)',
                }}
              >
                {row.acronis}
              </div>

              {/* ShieldPulse column */}
              <div
                className="font-mono text-sm text-text-secondary leading-relaxed"
                style={{
                  borderLeft: '2px solid rgba(34,197,94,0.3)',
                  paddingLeft: '12px',
                }}
              >
                {row.shieldpulse}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Footnote */}
        <motion.p
          className="text-center text-xs text-text-muted mt-12 italic"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          * Acronis Cyber Protect Cloud is a powerful backup platform.
          ShieldPulse monitors it — not replaces it.
          We&apos;re an Acronis Platinum Partner.
        </motion.p>
      </div>
    </Section>
  );
}
