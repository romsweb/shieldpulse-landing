const columns = [
  {
    title: 'Product',
    links: [
      { label: 'Features', href: '#features' },
      { label: 'Pricing', href: '#pricing' },
      { label: 'Status', href: 'https://status.shieldpulse.io' },
      { label: 'Changelog', href: '#' },
    ],
  },
  {
    title: 'Resources',
    links: [
      { label: 'Docs', href: '#' },
      { label: 'Guides', href: '#' },
    ],
  },
  {
    title: 'Company',
    links: [
      { label: 'About', href: '#' },
      { label: 'The Pledge', href: '#pledge' },
      { label: 'Privacy', href: '/privacy' },
      { label: 'Terms', href: '/terms' },
    ],
  },
  {
    title: 'Connect',
    links: [
      { label: 'X / Twitter', href: 'https://x.com/shieldpulse' },
      { label: 'Discord', href: '#' },
      { label: 'GitHub', href: 'https://github.com/shieldpulse' },
      { label: 'Email', href: 'mailto:contact@shieldpulse.io' },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="bg-bg-surface border-t border-border">
      <div className="max-w-6xl mx-auto px-6 py-16">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8">
          {/* Brand */}
          <div className="col-span-2 md:col-span-1">
            <p className="font-mono text-lg font-bold text-terminal-green mb-4">
              &#9889; Sentinel
            </p>
            <p className="text-sm text-text-muted leading-relaxed">
              AI backup monitoring
              <br />
              built by an MSP.
            </p>
          </div>

          {/* Link columns */}
          {columns.map((col) => (
            <div key={col.title}>
              <p className="font-mono text-xs text-text-muted uppercase tracking-wider mb-4">
                {col.title}
              </p>
              <ul className="space-y-2">
                {col.links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-sm text-text-secondary hover:text-text-primary transition-colors"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="border-t border-border mt-12 pt-8 text-center">
          <p className="text-sm text-text-muted font-mono">
            &#9889; Sentinel by ShieldPulse &copy; 2026. Bootstrapped &amp; proud.
          </p>
        </div>
      </div>
    </footer>
  );
}
