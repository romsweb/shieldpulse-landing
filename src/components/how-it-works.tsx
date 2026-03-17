'use client';

import { useEffect, useState, useRef } from 'react';
import { motion } from 'framer-motion';
import Section from './ui/section';

function TypewriterTerminal() {
  const lines = [
    { text: '$ sentinel connect --vendor acronis', delay: 0 },
    { text: 'Authenticating...', delay: 1200 },
    { text: '\u2713 Connected to Acronis Cloud.', delay: 2200, green: true },
    { text: '\u2713 247 devices found across 4 data centers.', delay: 3200, green: true },
    { text: '', delay: 3800 },
    { text: 'Run `sentinel status` to begin monitoring.', delay: 4200 },
  ];

  const [visibleLines, setVisibleLines] = useState<number>(0);
  const [typing, setTyping] = useState('');
  const [cursorVisible, setCursorVisible] = useState(true);
  const hasStarted = useRef(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasStarted.current) {
          hasStarted.current = true;
          startAnimation();
        }
      },
      { threshold: 0.5 }
    );

    if (containerRef.current) observer.observe(containerRef.current);
    return () => observer.disconnect();
  });

  useEffect(() => {
    const interval = setInterval(() => setCursorVisible((v) => !v), 530);
    return () => clearInterval(interval);
  }, []);

  function startAnimation() {
    lines.forEach((line, i) => {
      if (i === 0) {
        // Typewriter effect for first line
        let charIndex = 0;
        const typeInterval = setInterval(() => {
          setTyping(line.text.slice(0, charIndex + 1));
          charIndex++;
          if (charIndex >= line.text.length) {
            clearInterval(typeInterval);
            setVisibleLines(1);
            setTyping('');
          }
        }, 35);
      } else {
        setTimeout(() => setVisibleLines(i + 1), line.delay);
      }
    });
  }

  return (
    <div ref={containerRef} className="bg-bg-surface border border-border rounded-xl overflow-hidden">
      <div className="flex items-center gap-2 px-4 py-3 bg-bg-elevated border-b border-border">
        <span className="w-3 h-3 rounded-full bg-accent-red/80" />
        <span className="w-3 h-3 rounded-full bg-accent-amber/80" />
        <span className="w-3 h-3 rounded-full bg-accent-green/80" />
        <span className="ml-3 text-xs text-text-muted font-mono">terminal</span>
      </div>
      <div className="p-5 font-mono text-sm leading-loose min-h-[200px]">
        {visibleLines === 0 && typing && (
          <p className="text-text-muted">
            {typing}
            <span className={cursorVisible ? 'opacity-100' : 'opacity-0'}>|</span>
          </p>
        )}
        {lines.slice(0, visibleLines).map((line, i) => (
          <p
            key={i}
            className={
              line.green
                ? 'text-terminal-green'
                : line.text === ''
                  ? 'h-4'
                  : i === 0
                    ? 'text-text-muted'
                    : 'text-text-secondary'
            }
          >
            {line.text}
          </p>
        ))}
      </div>
    </div>
  );
}

const steps = [
  {
    number: '01',
    title: 'Connect',
    description: 'Point Sentinel at your Acronis tenant. One API key, one command. No agents to install, no firewall rules to change.',
    visual: 'terminal',
  },
  {
    number: '02',
    title: 'Monitor',
    description: 'One dashboard for every data center. Real-time backup status, AI-powered triage that separates signal from noise. See only what matters.',
    visual: null,
  },
  {
    number: '03',
    title: 'Relax',
    description: 'Your morning review goes from 45 minutes to 3. AI handles the noise. You handle the exceptions. Your techs get their mornings back.',
    visual: null,
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export default function HowItWorks() {
  return (
    <Section id="how-it-works" className="bg-bg-primary bg-grid">
      <div className="max-w-5xl mx-auto">
        <h2 className="font-mono text-3xl sm:text-4xl font-bold text-text-primary text-center mb-4">
          From zero to monitoring in 5 minutes.
        </h2>
        <p className="text-text-secondary text-center mb-16 max-w-2xl mx-auto">
          No sales calls. No onboarding meetings. Connect, configure, done.
        </p>

        <div className="relative">
          {/* Connecting line */}
          <div className="absolute left-6 top-0 bottom-0 w-px bg-border hidden md:block" />

          <div className="space-y-16">
            {steps.map((step, i) => (
              <motion.div
                key={step.number}
                className="relative md:pl-16"
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: '-60px' }}
                transition={{ delay: i * 0.1 }}
              >
                {/* Step number */}
                <div className="absolute left-0 top-0 hidden md:flex items-center justify-center w-12 h-12 rounded-full bg-bg-surface border border-border text-terminal-green font-mono text-sm font-bold">
                  {step.number}
                </div>

                <div className="md:hidden font-mono text-terminal-green text-sm mb-2">
                  Step {step.number}
                </div>

                <h3 className="font-mono text-xl font-semibold text-text-primary mb-3">
                  {step.title}
                </h3>
                <p className="text-text-secondary max-w-xl mb-6 leading-relaxed">
                  {step.description}
                </p>

                {step.visual === 'terminal' && (
                  <div className="max-w-lg">
                    <TypewriterTerminal />
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
}
