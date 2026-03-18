import type { Metadata } from 'next';
import { JetBrains_Mono, Inter } from 'next/font/google';
import './globals.css';

const jetbrains = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-mono',
  display: 'swap',
});

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-sans',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Sentinel by ShieldPulse — AI Backup Monitoring for MSPs',
  description: 'AI-powered backup monitoring built by an MSP. Replaces Backup Radar with transparent pricing, no contracts, and alert triage that cuts noise by 60%. Free for 25 devices.',
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: '48x48' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
    ],
    apple: '/apple-touch-icon.png',
  },
  openGraph: {
    title: 'Sentinel by ShieldPulse — AI Backup Monitoring for MSPs',
    description: 'AI-powered backup monitoring built by an MSP. Transparent pricing, no contracts, 60% noise reduction.',
    type: 'website',
    url: 'https://shieldpulse.io',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${jetbrains.variable} ${inter.variable}`}>
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
