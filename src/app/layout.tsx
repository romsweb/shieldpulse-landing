import type { Metadata } from 'next';
import { JetBrains_Mono, Inter } from 'next/font/google';
import Script from 'next/script';
import { Analytics } from '@vercel/analytics/next';
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
    description: 'AI-powered backup monitoring built by an MSP. Transparent pricing, no contracts. AI triage cuts alert noise by 60%. Free for 25 devices — no credit card needed.',
    type: 'website',
    url: 'https://shieldpulse.io',
    images: [
      {
        url: 'https://shieldpulse.io/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'ShieldPulse Sentinel — The Backup Dashboard That Should Have Existed',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Sentinel by ShieldPulse — AI Backup Monitoring for MSPs',
    description: 'AI-powered backup monitoring built by an MSP. Transparent pricing, no contracts. AI triage cuts alert noise by 60%. Free for 25 devices — no credit card needed.',
    images: ['https://shieldpulse.io/og-image.jpg'],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${jetbrains.variable} ${inter.variable}`}>
      <head>
        <Script id="meta-pixel" strategy="afterInteractive">
          {`
            !function(f,b,e,v,n,t,s)
            {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
            n.callMethod.apply(n,arguments):n.queue.push(arguments)};
            if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
            n.queue=[];t=b.createElement(e);t.async=!0;
            t.src=v;s=b.getElementsByTagName(e)[0];
            s.parentNode.insertBefore(t,s)}(window, document,'script',
            'https://connect.facebook.net/en_US/fbevents.js');
            fbq('init', '1204393994861210');
            fbq('track', 'PageView');
          `}
        </Script>
        <noscript>
          <img height="1" width="1" style={{ display: 'none' }}
            src="https://www.facebook.com/tr?id=1204393994861210&ev=PageView&noscript=1"
          />
        </noscript>
        <Script id="microsoft-clarity" strategy="afterInteractive">
          {`
            (function(c,l,a,r,i,t,y){
              c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
              t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
              y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
            })(window, document, "clarity", "script", "w0emew51d5");
          `}
        </Script>
      </head>
      <body className="antialiased">
        {children}
        <Analytics />
      </body>
    </html>
  );
}
