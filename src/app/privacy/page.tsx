import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Privacy Policy — Sentinel by ShieldPulse',
  description: 'Privacy Policy for Sentinel by ShieldPulse. Learn how we collect, use, and protect your data.',
  openGraph: {
    title: 'Privacy Policy — Sentinel by ShieldPulse',
    description: 'Privacy Policy for Sentinel by ShieldPulse. Learn how we collect, use, and protect your data.',
    type: 'website',
    url: 'https://shieldpulse.io/privacy',
  },
};

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-bg-primary text-text-primary">
      <div className="mx-auto max-w-3xl px-6 py-16 sm:py-24">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-sm text-text-muted hover:text-accent-green transition-colors mb-12"
        >
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="shrink-0">
            <path d="M10 12L6 8L10 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
          Back to homepage
        </Link>

        <h1 className="font-mono text-3xl sm:text-4xl font-bold text-text-primary mb-2">
          Privacy Policy
        </h1>
        <p className="text-text-muted text-sm mb-12">Last updated: March 2026</p>

        <div className="space-y-10 text-text-secondary leading-relaxed">
          <section>
            <p>
              Velocity Ridge Holdings LLC (&ldquo;ShieldPulse,&rdquo; &ldquo;we,&rdquo; &ldquo;us,&rdquo; or &ldquo;our&rdquo;) operates
              the Sentinel by ShieldPulse platform at{' '}
              <span className="text-text-primary">shieldpulse.io</span>. This Privacy Policy explains
              how we collect, use, disclose, and safeguard your information when you use our service.
            </p>
          </section>

          <section>
            <h2 className="font-mono text-xl font-semibold text-text-primary mb-4">
              1. Information We Collect
            </h2>

            <h3 className="font-mono text-base font-medium text-text-primary mb-2">
              Account Information
            </h3>
            <p className="mb-4">
              When you create an account, we collect your name, email address, company name, and
              billing information. If you sign up for a paid plan, payment details are processed
              directly by Stripe and are never stored on our servers.
            </p>

            <h3 className="font-mono text-base font-medium text-text-primary mb-2">
              Backup Job Metadata
            </h3>
            <p className="mb-4">
              Sentinel connects to your backup vendor APIs using read-only credentials you provide.
              We collect backup job metadata only — job names, statuses, timestamps, device names,
              and error codes.{' '}
              <span className="text-accent-green font-medium">
                We never access, download, or store your actual backup data.
              </span>{' '}
              Our integration is strictly read-only; we cannot modify, delete, or create backup jobs
              in your environment.
            </p>

            <h3 className="font-mono text-base font-medium text-text-primary mb-2">
              Usage Analytics
            </h3>
            <p>
              We collect anonymized usage data such as pages visited, features used, and performance
              metrics to improve our product. We do not use third-party tracking pixels or advertising
              trackers.
            </p>
          </section>

          <section>
            <h2 className="font-mono text-xl font-semibold text-text-primary mb-4">
              2. How We Use Your Information
            </h2>
            <ul className="list-disc list-inside space-y-2">
              <li>To provide, maintain, and operate the Sentinel platform</li>
              <li>To process transactions and manage your subscription</li>
              <li>To send service-related notifications (alerts, status updates, billing receipts)</li>
              <li>To respond to support requests and communicate with you</li>
              <li>To improve our product, fix bugs, and develop new features</li>
              <li>To detect and prevent fraud, abuse, or security incidents</li>
            </ul>
          </section>

          <section>
            <h2 className="font-mono text-xl font-semibold text-text-primary mb-4">
              3. Data Storage &amp; Security
            </h2>
            <p className="mb-4">
              Your data is stored in a Supabase-managed PostgreSQL database hosted on Amazon Web
              Services (AWS) infrastructure. All data is:
            </p>
            <ul className="list-disc list-inside space-y-2 mb-4">
              <li>
                <span className="text-text-primary font-medium">Encrypted at rest</span> using AES-256
                encryption
              </li>
              <li>
                <span className="text-text-primary font-medium">Encrypted in transit</span> using TLS
                1.3
              </li>
              <li>
                <span className="text-text-primary font-medium">Access-controlled</span> using
                Row-Level Security (RLS) policies ensuring tenants can only access their own data
              </li>
            </ul>
            <p>
              We implement industry-standard security practices including secure credential storage,
              regular security reviews, and principle of least privilege for all system access.
            </p>
          </section>

          <section>
            <h2 className="font-mono text-xl font-semibold text-text-primary mb-4">
              4. Third-Party Services
            </h2>
            <p className="mb-4">
              We use the following third-party services to operate Sentinel. Each has its own privacy
              policy governing how they handle data:
            </p>
            <ul className="list-disc list-inside space-y-2">
              <li>
                <span className="text-text-primary font-medium">Stripe</span> — Payment processing
                and subscription billing
              </li>
              <li>
                <span className="text-text-primary font-medium">Resend</span> — Transactional emails
                (alerts, notifications, receipts)
              </li>
              <li>
                <span className="text-text-primary font-medium">Vercel</span> — Application hosting
                and deployment
              </li>
              <li>
                <span className="text-text-primary font-medium">Cloudflare</span> — CDN, DNS, and
                DDoS protection
              </li>
              <li>
                <span className="text-text-primary font-medium">Supabase</span> — Database hosting
                and authentication
              </li>
            </ul>
          </section>

          <section>
            <h2 className="font-mono text-xl font-semibold text-text-primary mb-4">
              5. Read-Only API Credentials
            </h2>
            <p>
              When you connect a backup vendor (e.g., Acronis, Veeam, Datto), you provide API
              credentials with read-only access. These credentials are encrypted at rest and are used
              solely to retrieve backup job metadata. We never use these credentials to access,
              modify, or delete your actual backup data. You can revoke access at any time by removing
              the integration from your Sentinel dashboard.
            </p>
          </section>

          <section>
            <h2 className="font-mono text-xl font-semibold text-text-primary mb-4">
              6. Data Retention
            </h2>
            <ul className="list-disc list-inside space-y-2">
              <li>
                <span className="text-text-primary font-medium">Active accounts:</span> Your data is
                retained for as long as your account is active and as needed to provide you with the
                service.
              </li>
              <li>
                <span className="text-text-primary font-medium">Account closure:</span> Upon account
                deletion, all your data — including backup job metadata, account information, and API
                credentials — will be permanently deleted from our systems within 30 days.
              </li>
              <li>
                <span className="text-text-primary font-medium">Billing records:</span> We may retain
                minimal billing records as required by applicable tax and accounting laws.
              </li>
            </ul>
          </section>

          <section>
            <h2 className="font-mono text-xl font-semibold text-text-primary mb-4">
              7. Cookies
            </h2>
            <p>
              Sentinel uses minimal cookies strictly necessary for the service to function. We use a
              single authentication session cookie to keep you logged in. We do not use advertising
              cookies, tracking cookies, or third-party analytics cookies. No cookie banner is
              required because we do not perform any non-essential tracking.
            </p>
          </section>

          <section>
            <h2 className="font-mono text-xl font-semibold text-text-primary mb-4">
              8. Your Rights (GDPR &amp; CCPA)
            </h2>
            <p className="mb-4">
              Depending on your location, you may have the following rights regarding your personal
              data:
            </p>
            <ul className="list-disc list-inside space-y-2 mb-4">
              <li>
                <span className="text-text-primary font-medium">Right of access:</span> Request a
                copy of the personal data we hold about you.
              </li>
              <li>
                <span className="text-text-primary font-medium">Right to rectification:</span>{' '}
                Request correction of inaccurate or incomplete data.
              </li>
              <li>
                <span className="text-text-primary font-medium">Right to deletion:</span> Request
                deletion of your personal data (&ldquo;right to be forgotten&rdquo;).
              </li>
              <li>
                <span className="text-text-primary font-medium">Right to portability:</span> Request
                your data in a structured, machine-readable format.
              </li>
              <li>
                <span className="text-text-primary font-medium">Right to object:</span> Object to
                processing of your data for certain purposes.
              </li>
              <li>
                <span className="text-text-primary font-medium">Right to restrict processing:</span>{' '}
                Request limitation of how we process your data.
              </li>
            </ul>
            <p className="mb-4">
              <span className="text-text-primary font-medium">California residents (CCPA):</span> We
              do not sell your personal information. You have the right to know what data we collect,
              request deletion, and opt out of any future sale of personal information.
            </p>
            <p>
              To exercise any of these rights, contact us at{' '}
              <a
                href="mailto:contact@shieldpulse.io"
                className="text-accent-green hover:underline"
              >
                contact@shieldpulse.io
              </a>
              . We will respond within 30 days.
            </p>
          </section>

          <section>
            <h2 className="font-mono text-xl font-semibold text-text-primary mb-4">
              9. Children&apos;s Privacy
            </h2>
            <p>
              Sentinel is a business-to-business service and is not directed at individuals under the
              age of 18. We do not knowingly collect personal information from children.
            </p>
          </section>

          <section>
            <h2 className="font-mono text-xl font-semibold text-text-primary mb-4">
              10. Changes to This Policy
            </h2>
            <p>
              We may update this Privacy Policy from time to time. We will notify you of material
              changes by email or by posting a notice on our website at least 30 days before changes
              take effect. Your continued use of Sentinel after changes become effective constitutes
              acceptance of the updated policy.
            </p>
          </section>

          <section>
            <h2 className="font-mono text-xl font-semibold text-text-primary mb-4">
              11. Contact Us
            </h2>
            <p className="mb-2">
              If you have questions about this Privacy Policy or our data practices, contact us at:
            </p>
            <div className="bg-bg-surface border border-border rounded-lg p-4 font-mono text-sm">
              <p className="text-text-primary">Velocity Ridge Holdings LLC</p>
              <p>30 N Gould St Ste N</p>
              <p>Sheridan, WY 82801, USA</p>
              <p className="mt-2">
                Email:{' '}
                <a
                  href="mailto:contact@shieldpulse.io"
                  className="text-accent-green hover:underline"
                >
                  contact@shieldpulse.io
                </a>
              </p>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
