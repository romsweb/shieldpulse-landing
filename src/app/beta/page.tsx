'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';

export default function BetaPage() {
  const [form, setForm] = useState({
    firstName: '',
    lastName: '',
    email: '',
    whatsapp: '',
    machines: '',
  });
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('sending');

    // FB Pixel
    if (typeof window !== 'undefined' && (window as any).fbq) {
      (window as any).fbq('track', 'Lead', { content_name: 'Beta' });
    }

    try {
      const res = await fetch('/api/beta-signup', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });
      if (!res.ok) throw new Error('Failed');
      setStatus('sent');
    } catch {
      setStatus('error');
    }
  };

  const inputClass =
    'w-full bg-bg-primary border border-border rounded-lg px-4 py-3 text-text-primary font-mono text-sm focus:outline-none focus:border-accent-green transition-colors placeholder:text-text-muted';

  if (status === 'sent') {
    return (
      <main className="min-h-screen bg-bg-primary bg-grid flex items-center justify-center px-6">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          className="max-w-md w-full text-center"
        >
          <div className="text-5xl mb-6">&#9889;</div>
          <h1 className="font-mono text-2xl font-bold text-text-primary mb-4">
            You&apos;re on the list.
          </h1>
          <p className="text-text-secondary mb-8">
            We&apos;ll reach out shortly to get you started with Sentinel.
          </p>
          <Link
            href="/"
            className="text-sm text-accent-green hover:underline transition-colors"
          >
            &larr; Back to shieldpulse.io
          </Link>
        </motion.div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-bg-primary bg-grid flex items-center justify-center px-6 py-24">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(34,197,94,0.06)_0%,transparent_60%)]" />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="relative z-10 max-w-lg w-full"
      >
        {/* Header */}
        <div className="text-center mb-10">
          <Link href="/" className="font-mono text-lg font-bold text-terminal-green inline-flex items-center gap-1 mb-6">
            <span>&#9889;</span> Sentinel
          </Link>
          <h1 className="font-mono text-3xl sm:text-4xl font-bold text-text-primary mb-3">
            Join the Beta
          </h1>
          <p className="text-text-secondary max-w-sm mx-auto">
            We&apos;re onboarding MSPs one by one to make sure the experience is right. Tell us a bit about you.
          </p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="bg-bg-surface border border-border rounded-xl p-8 space-y-5">
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-mono text-text-muted mb-1.5 uppercase tracking-wider">
                First name *
              </label>
              <input
                type="text"
                required
                value={form.firstName}
                onChange={(e) => setForm((f) => ({ ...f, firstName: e.target.value }))}
                placeholder="John"
                className={inputClass}
              />
            </div>
            <div>
              <label className="block text-xs font-mono text-text-muted mb-1.5 uppercase tracking-wider">
                Last name *
              </label>
              <input
                type="text"
                required
                value={form.lastName}
                onChange={(e) => setForm((f) => ({ ...f, lastName: e.target.value }))}
                placeholder="Doe"
                className={inputClass}
              />
            </div>
          </div>

          <div>
            <label className="block text-xs font-mono text-text-muted mb-1.5 uppercase tracking-wider">
              Email *
            </label>
            <input
              type="email"
              required
              value={form.email}
              onChange={(e) => setForm((f) => ({ ...f, email: e.target.value }))}
              placeholder="john@msp.com"
              className={inputClass}
            />
          </div>

          <div>
            <label className="block text-xs font-mono text-text-muted mb-1.5 uppercase tracking-wider">
              WhatsApp
            </label>
            <input
              type="tel"
              value={form.whatsapp}
              onChange={(e) => setForm((f) => ({ ...f, whatsapp: e.target.value }))}
              placeholder="+687 12 34 56"
              className={inputClass}
            />
          </div>

          <div>
            <label className="block text-xs font-mono text-text-muted mb-1.5 uppercase tracking-wider">
              How many machines do you monitor?
            </label>
            <input
              type="text"
              value={form.machines}
              onChange={(e) => setForm((f) => ({ ...f, machines: e.target.value }))}
              placeholder="e.g. 50, 200, 1000+"
              className={inputClass}
            />
          </div>

          <button
            type="submit"
            disabled={status === 'sending'}
            className="w-full bg-accent-green text-bg-primary font-bold py-3 rounded-lg glow-green hover:brightness-110 transition-all disabled:opacity-50 disabled:cursor-not-allowed text-base"
          >
            {status === 'sending' ? 'Sending...' : 'Request Beta Access'}
          </button>

          {status === 'error' && (
            <p className="text-center text-sm text-accent-red">
              Something went wrong. Try again or email contact@shieldpulse.io
            </p>
          )}

          <p className="text-center text-xs text-text-muted">
            No spam. We&apos;ll only contact you about your beta access.
          </p>
        </form>

        <p className="text-center mt-6">
          <Link href="/" className="text-sm text-text-muted hover:text-text-secondary transition-colors">
            &larr; Back to shieldpulse.io
          </Link>
        </p>
      </motion.div>
    </main>
  );
}
