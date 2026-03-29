'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { betaHref } from '@/lib/beta';

const links = [
  { href: '#features', label: 'Features' },
  { href: '#pricing', label: 'Pricing' },
  { href: '#faq', label: 'FAQ' },
  { href: '/blog', label: 'Blog' },
];

const getHrefWithUtm = (baseHref: string) => {
  if (typeof window === 'undefined') return baseHref;
  const currentParams = new URLSearchParams(window.location.search);
  const utmEntries = Array.from(currentParams.entries()).filter(([k]) => k.startsWith('utm_'));
  if (utmEntries.length === 0) return baseHref;
  const sep = baseHref.includes('?') ? '&' : '?';
  return baseHref + sep + new URLSearchParams(utmEntries).toString();
};

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-bg-primary/80 backdrop-blur-xl border-b border-border'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="font-mono text-lg font-bold text-terminal-green flex items-center gap-1">
          <span>&#9889;</span> Sentinel
        </a>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-8">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm text-text-secondary hover:text-text-primary transition-colors"
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* Desktop CTAs */}
        <div className="hidden md:flex items-center gap-4">
          <a
            href={betaHref('https://app.shieldpulse.io')}
            className="text-sm text-text-secondary hover:text-text-primary transition-colors"
          >
            Login
          </a>
          <a
            href={getHrefWithUtm(betaHref('https://app.shieldpulse.io'))}
            onClick={() => {
              if (typeof window !== 'undefined' && (window as any).fbq) {
                (window as any).fbq('track', 'Lead', { content_name: 'Free' });
              }
            }}
            className="text-sm font-medium bg-accent-green text-bg-primary px-4 py-2 rounded-lg glow-green hover:brightness-110 transition-all"
          >
            Start Free &rarr;
          </a>
        </div>

        {/* Mobile hamburger */}
        <button
          className="md:hidden flex flex-col gap-1.5 p-2"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          <span
            className={`block w-5 h-0.5 bg-text-primary transition-transform duration-200 ${
              mobileOpen ? 'rotate-45 translate-y-2' : ''
            }`}
          />
          <span
            className={`block w-5 h-0.5 bg-text-primary transition-opacity duration-200 ${
              mobileOpen ? 'opacity-0' : ''
            }`}
          />
          <span
            className={`block w-5 h-0.5 bg-text-primary transition-transform duration-200 ${
              mobileOpen ? '-rotate-45 -translate-y-2' : ''
            }`}
          />
        </button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-bg-primary/95 backdrop-blur-xl border-b border-border overflow-hidden"
          >
            <div className="px-6 py-4 flex flex-col gap-4">
              {links.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-text-secondary hover:text-text-primary transition-colors"
                  onClick={() => setMobileOpen(false)}
                >
                  {link.label}
                </a>
              ))}
              <hr className="border-border" />
              <a href={betaHref('https://app.shieldpulse.io')} className="text-text-secondary hover:text-text-primary transition-colors">
                Login
              </a>
              <a
                href={getHrefWithUtm(betaHref('https://app.shieldpulse.io'))}
                onClick={() => {
                  if (typeof window !== 'undefined' && (window as any).fbq) {
                    (window as any).fbq('track', 'Lead', { content_name: 'Free' });
                  }
                  setMobileOpen(false);
                }}
                className="text-center font-medium bg-accent-green text-bg-primary px-4 py-2 rounded-lg glow-green"
              >
                Start Free &rarr;
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
