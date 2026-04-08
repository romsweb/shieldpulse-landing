import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Terms of Service — Sentinel by ShieldPulse',
  description: 'Terms of Service for Sentinel by ShieldPulse. Read our terms covering service usage, billing, data ownership, and more.',
  openGraph: {
    title: 'Terms of Service — Sentinel by ShieldPulse',
    description: 'Terms of Service for Sentinel by ShieldPulse. Read our terms covering service usage, billing, data ownership, and more.',
    type: 'website',
    url: 'https://shieldpulse.io/terms',
  },
};

export default function TermsPage() {
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
          Terms of Service
        </h1>
        <p className="text-text-muted text-sm mb-12">Last updated: March 2026</p>

        <div className="space-y-10 text-text-secondary leading-relaxed">
          <section>
            <p>
              These Terms of Service (&ldquo;Terms&rdquo;) govern your access to and use of Sentinel
              by ShieldPulse (&ldquo;Sentinel,&rdquo; &ldquo;the Service&rdquo;), operated by
              Velocity Ridge Holdings LLC (&ldquo;ShieldPulse,&rdquo; &ldquo;we,&rdquo;
              &ldquo;us,&rdquo; or &ldquo;our&rdquo;). By creating an account or using the Service,
              you agree to be bound by these Terms. If you do not agree, do not use the Service.
            </p>
          </section>

          <section>
            <h2 className="font-mono text-xl font-semibold text-text-primary mb-4">
              1. Service Description
            </h2>
            <p>
              Sentinel is a software-as-a-service (SaaS) platform that monitors backup job statuses
              across one or more backup vendors (e.g., Acronis, Veeam, Datto). The Service connects
              to your backup vendor APIs using read-only credentials you provide and retrieves backup
              job metadata — including job names, statuses, timestamps, and error codes. Sentinel does
              not access, modify, or store your actual backup data. The Service provides dashboards,
              alerts, AI-powered triage, and reporting to help Managed Service Providers (MSPs)
              monitor the health of their backup operations.
            </p>
          </section>

          <section>
            <h2 className="font-mono text-xl font-semibold text-text-primary mb-4">
              2. Account Responsibilities
            </h2>
            <ul className="list-disc list-inside space-y-2">
              <li>
                You must provide accurate, complete, and current information when creating your
                account.
              </li>
              <li>
                You are responsible for maintaining the security of your account credentials and for
                all activity that occurs under your account.
              </li>
              <li>
                You must ensure that any API credentials you provide to Sentinel have read-only access
                to your backup vendor environment.
              </li>
              <li>
                You must notify us immediately at{' '}
                <a
                  href="mailto:contact@shieldpulse.io"
                  className="text-accent-green hover:underline"
                >
                  contact@shieldpulse.io
                </a>{' '}
                if you suspect unauthorized access to your account.
              </li>
              <li>
                You must be at least 18 years old and have the authority to bind your organization to
                these Terms.
              </li>
            </ul>
          </section>

          <section>
            <h2 className="font-mono text-xl font-semibold text-text-primary mb-4">
              3. Acceptable Use
            </h2>
            <p className="mb-4">You agree not to:</p>
            <ul className="list-disc list-inside space-y-2">
              <li>
                Use the Service for any unlawful purpose or in violation of any applicable laws or
                regulations.
              </li>
              <li>
                Reverse engineer, decompile, disassemble, or otherwise attempt to derive the source
                code of the Service.
              </li>
              <li>
                Attempt to gain unauthorized access to any part of the Service, other accounts, or
                systems connected to the Service.
              </li>
              <li>
                Use the Service to transmit malware, viruses, or other malicious code.
              </li>
              <li>
                Resell, sublicense, or redistribute access to the Service without our prior written
                consent.
              </li>
              <li>
                Interfere with or disrupt the integrity or performance of the Service or its
                infrastructure.
              </li>
              <li>
                Use automated means (bots, scrapers) to access the Service beyond normal API usage.
              </li>
            </ul>
          </section>

          <section>
            <h2 className="font-mono text-xl font-semibold text-text-primary mb-4">
              4. Billing &amp; Payments
            </h2>
            <ul className="list-disc list-inside space-y-2">
              <li>
                All payments are processed securely through{' '}
                <span className="text-text-primary font-medium">Stripe</span>. We do not store your
                credit card information on our servers.
              </li>
              <li>
                Paid plans are billed on a{' '}
                <span className="text-text-primary font-medium">month-to-month</span> basis. There
                are no long-term contracts or commitments.
              </li>
              <li>
                You may <span className="text-text-primary font-medium">cancel at any time</span>.
                Cancellation takes effect at the end of your current billing period. You will retain
                access to paid features until then.
              </li>
              <li>
                <span className="text-text-primary font-medium">No refunds</span> are issued for
                partial months or unused time within a billing period.
              </li>
              <li>
                We reserve the right to change pricing with 30 days&apos; notice. Price changes will
                not apply to your current billing period.
              </li>
            </ul>
          </section>

          <section>
            <h2 className="font-mono text-xl font-semibold text-text-primary mb-4">
              5. Free Trial
            </h2>
            <p>
              Sentinel offers a{' '}
              <span className="text-text-primary font-medium">21-day free trial</span> starting
              from the date of account creation. No credit card is required to start the trial.
              During the trial period, you have full access to all features available on paid plans.
            </p>
            <ul className="list-disc list-inside space-y-2 mt-4">
              <li>
                After the 21-day trial period, your account is{' '}
                <span className="text-text-primary font-medium">paused</span>, not deleted. Your
                data is preserved.
              </li>
              <li>
                You may subscribe to any paid plan at any time to resume access.
              </li>
              <li>
                We reserve the right to modify the trial duration or terms with{' '}
                <span className="text-text-primary font-medium">30 days&apos; notice</span>.
              </li>
              <li>
                The trial does not include any uptime SLA guarantee.
              </li>
            </ul>
          </section>

          <section>
            <h2 className="font-mono text-xl font-semibold text-text-primary mb-4">
              6. Uptime &amp; Availability
            </h2>
            <p>
              We target{' '}
              <span className="text-text-primary font-medium">99.9% uptime</span> for paid plans.
              This target is a goal, not a contractual guarantee. We do not offer Service Level
              Agreements (SLAs) with financial credits at this time. The trial period is provided
              as-is with no uptime commitment. We will make commercially reasonable efforts to
              provide advance notice of planned maintenance.
            </p>
          </section>

          <section>
            <h2 className="font-mono text-xl font-semibold text-text-primary mb-4">
              7. Intellectual Property
            </h2>
            <ul className="list-disc list-inside space-y-2">
              <li>
                <span className="text-text-primary font-medium">Our property:</span> ShieldPulse
                retains all rights, title, and interest in and to the Service, including all software,
                algorithms, designs, trademarks, and documentation. These Terms do not grant you any
                rights to our intellectual property except the limited right to use the Service as
                described herein.
              </li>
              <li>
                <span className="text-text-primary font-medium">Your data:</span> You retain all
                rights to the data you provide to or generate through the Service. We claim no
                ownership over your backup metadata, account data, or any other information you submit.
              </li>
              <li>
                <span className="text-text-primary font-medium">Feedback:</span> If you provide
                suggestions, feature requests, or other feedback, we may use it without restriction
                or obligation to you.
              </li>
            </ul>
          </section>

          <section>
            <h2 className="font-mono text-xl font-semibold text-text-primary mb-4">
              8. Limitation of Liability
            </h2>
            <div className="bg-bg-surface border border-border rounded-lg p-4 mb-4">
              <p className="text-sm">
                TO THE MAXIMUM EXTENT PERMITTED BY LAW, SHIELDPULSE AND ITS OFFICERS, DIRECTORS,
                EMPLOYEES, AND AGENTS SHALL NOT BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL,
                CONSEQUENTIAL, OR PUNITIVE DAMAGES, INCLUDING BUT NOT LIMITED TO LOSS OF PROFITS,
                DATA, OR BUSINESS OPPORTUNITIES, ARISING OUT OF OR RELATED TO YOUR USE OF THE
                SERVICE, REGARDLESS OF THE THEORY OF LIABILITY.
              </p>
            </div>
            <p className="mb-4">
              Our total aggregate liability for any claims arising from or related to these Terms or
              the Service shall not exceed the amount you paid to ShieldPulse in the twelve (12)
              months preceding the claim.
            </p>
            <p>
              Sentinel is a monitoring and alerting tool. We do not guarantee the accuracy,
              completeness, or timeliness of backup status data retrieved from third-party vendor
              APIs. You remain solely responsible for your backup strategy, disaster recovery
              planning, and data protection obligations.
            </p>
          </section>

          <section>
            <h2 className="font-mono text-xl font-semibold text-text-primary mb-4">
              9. Disclaimer of Warranties
            </h2>
            <p>
              THE SERVICE IS PROVIDED &ldquo;AS IS&rdquo; AND &ldquo;AS AVAILABLE&rdquo; WITHOUT
              WARRANTIES OF ANY KIND, WHETHER EXPRESS, IMPLIED, OR STATUTORY, INCLUDING BUT NOT
              LIMITED TO IMPLIED WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, AND
              NON-INFRINGEMENT. WE DO NOT WARRANT THAT THE SERVICE WILL BE UNINTERRUPTED,
              ERROR-FREE, OR SECURE.
            </p>
          </section>

          <section>
            <h2 className="font-mono text-xl font-semibold text-text-primary mb-4">
              10. Termination
            </h2>
            <ul className="list-disc list-inside space-y-2">
              <li>
                <span className="text-text-primary font-medium">By you:</span> You may terminate your
                account at any time through your account settings or by contacting support. Your
                access will continue until the end of your current billing period.
              </li>
              <li>
                <span className="text-text-primary font-medium">By us:</span> We may suspend or
                terminate your account if you violate these Terms, engage in abusive behavior, or
                fail to pay for a paid subscription. We will provide reasonable notice when possible.
              </li>
              <li>
                <span className="text-text-primary font-medium">Data export:</span> Upon
                termination, you will have a{' '}
                <span className="text-accent-green font-medium">30-day window</span> to export your
                data. After this period, your data will be permanently deleted in accordance with our{' '}
                <Link href="/privacy" className="text-accent-green hover:underline">
                  Privacy Policy
                </Link>
                .
              </li>
              <li>
                <span className="text-text-primary font-medium">Survival:</span> Sections relating to
                intellectual property, limitation of liability, disclaimer of warranties, and
                governing law survive termination of these Terms.
              </li>
            </ul>
          </section>

          <section>
            <h2 className="font-mono text-xl font-semibold text-text-primary mb-4">
              11. Changes to These Terms
            </h2>
            <p>
              We may update these Terms from time to time. We will notify you of material changes by
              email at least{' '}
              <span className="text-text-primary font-medium">30 days before</span> they take
              effect. If you do not agree with the updated Terms, you may terminate your account
              before the changes become effective. Your continued use of the Service after the
              effective date constitutes acceptance of the updated Terms.
            </p>
          </section>

          <section>
            <h2 className="font-mono text-xl font-semibold text-text-primary mb-4">
              12. Governing Law &amp; Disputes
            </h2>
            <p>
              These Terms are governed by and construed in accordance with the laws of the{' '}
              <span className="text-text-primary font-medium">State of Wyoming, USA</span>, without
              regard to its conflict of law provisions. Any disputes arising from these Terms or the
              Service shall be resolved in the state or federal courts located in Sheridan County,
              Wyoming. You consent to the personal jurisdiction of such courts.
            </p>
          </section>

          <section>
            <h2 className="font-mono text-xl font-semibold text-text-primary mb-4">
              13. Severability
            </h2>
            <p>
              If any provision of these Terms is found to be unenforceable or invalid, that provision
              shall be limited or eliminated to the minimum extent necessary so that the remaining
              provisions remain in full force and effect.
            </p>
          </section>

          <section>
            <h2 className="font-mono text-xl font-semibold text-text-primary mb-4">
              14. Entire Agreement
            </h2>
            <p>
              These Terms, together with our{' '}
              <Link href="/privacy" className="text-accent-green hover:underline">
                Privacy Policy
              </Link>
              , constitute the entire agreement between you and ShieldPulse regarding the use of the
              Service and supersede any prior agreements or understandings.
            </p>
          </section>

          <section>
            <h2 className="font-mono text-xl font-semibold text-text-primary mb-4">
              15. Contact Us
            </h2>
            <p className="mb-2">
              If you have questions about these Terms, contact us at:
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
