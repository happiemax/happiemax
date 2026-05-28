/* ═══════════════════════════════════════════════════
   Happie Max — Footer
   Corporate footer with multi-page link structure
   ═══════════════════════════════════════════════════ */

const FOOTER_COLS = [
  {
    title: 'Navigation',
    links: [
      { label: 'Home', href: '#home' },
      { label: 'Services', href: '#services' },
      { label: 'Process', href: '#process' },
      { label: 'Contact', href: '#contact' },
    ],
  },
  {
    title: 'Solutions',
    links: [
      { label: 'AI Integration', href: '#services' },
      { label: 'Enterprise Automation', href: '#services' },
      { label: 'Cloud Infrastructure', href: '#services' },
      { label: 'Brand Reconstruction', href: '#services' },
    ],
  },
  {
    title: 'Company',
    links: [
      { label: 'Careers', href: '#' },
      { label: 'Blog', href: '#' },
      { label: 'Privacy Policy', href: '#' },
      { label: 'Terms of Service', href: '#' },
    ],
  },
];

const SOCIALS = [
  { name: 'X', href: '#', path: 'M18.9 1.15h3.68l-8.04 9.2L24 22.85h-7.4l-5.8-7.58-6.63 7.58H.49l8.6-9.83L0 1.15h7.59l5.24 6.93 6.07-6.93zM17.6 20.64h2.04L6.49 3.24H4.3l13.3 17.4z' },
  { name: 'LinkedIn', href: '#', path: 'M20.45 20.45h-3.55v-5.57c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.36V9h3.41v1.56h.05a3.74 3.74 0 0 1 3.37-1.85c3.6 0 4.27 2.37 4.27 5.46v6.28zM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12zM7.12 20.45H3.56V9h3.56v11.45zM22.22 0H1.77A1.75 1.75 0 0 0 0 1.73v20.54A1.75 1.75 0 0 0 1.77 24h20.45A1.76 1.76 0 0 0 24 22.27V1.73A1.76 1.76 0 0 0 22.22 0z' },
  { name: 'Instagram', href: '#', path: 'M12 2.16c3.2 0 3.58.01 4.85.07 1.17.05 1.97.24 2.44.41a4.08 4.08 0 0 1 1.52.99c.47.47.76.92.99 1.52.17.47.36 1.27.41 2.44.06 1.27.07 1.65.07 4.85s-.01 3.58-.07 4.85c-.05 1.17-.24 1.97-.41 2.44a4.08 4.08 0 0 1-.99 1.52 4.08 4.08 0 0 1-1.52.99c-.47.17-1.27.36-2.44.41-1.27.06-1.65.07-4.85.07s-3.58-.01-4.85-.07c-1.17-.05-1.97-.24-2.44-.41a4.08 4.08 0 0 1-1.52-.99 4.08 4.08 0 0 1-.99-1.52c-.17-.47-.36-1.27-.41-2.44C2.17 15.58 2.16 15.2 2.16 12s.01-3.58.07-4.85c.05-1.17.24-1.97.41-2.44a4.08 4.08 0 0 1 .99-1.52A4.08 4.08 0 0 1 5.15 2.2c.47-.17 1.27-.36 2.44-.41C8.42 2.17 8.8 2.16 12 2.16zM12 0C8.74 0 8.33.01 7.05.07 5.78.13 4.9.33 4.14.63a5.83 5.83 0 0 0-2.13 1.38A5.83 5.83 0 0 0 .63 4.14C.33 4.9.13 5.78.07 7.05.01 8.33 0 8.74 0 12s.01 3.67.07 4.95c.06 1.27.26 2.15.56 2.91a5.83 5.83 0 0 0 1.38 2.13 5.83 5.83 0 0 0 2.13 1.38c.76.3 1.64.5 2.91.56C8.33 23.99 8.74 24 12 24s3.67-.01 4.95-.07c1.27-.06 2.15-.26 2.91-.56a5.83 5.83 0 0 0 2.13-1.38 5.83 5.83 0 0 0 1.38-2.13c.3-.76.5-1.64.56-2.91.06-1.28.07-1.69.07-4.95s-.01-3.67-.07-4.95c-.06-1.27-.26-2.15-.56-2.91a5.83 5.83 0 0 0-1.38-2.13A5.83 5.83 0 0 0 19.86.63C19.1.33 18.22.13 16.95.07 15.67.01 15.26 0 12 0zm0 5.84a6.16 6.16 0 1 0 0 12.32 6.16 6.16 0 0 0 0-12.32zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.41-11.05a1.44 1.44 0 1 0 0 2.88 1.44 1.44 0 0 0 0-2.88z' },
];

const FooterSection = () => {
  const [ref, vis] = useScrollReveal();
  const theme = useTheme();
  const isLight = theme === 'light';
  const brandNavy = isLight ? '#0A2463' : '#C8D6F0';
  const brandCyan = '#00ACC1';

  return (
    <footer id="footer" style={{
      position: 'relative', zIndex: 1,
      background: 'linear-gradient(180deg, var(--hm-bg), #060911)',
      borderTop: '1px solid rgba(255,255,255,.04)',
    }}>
      <div
        ref={ref}
        className={`hm-reveal ${vis ? 'visible' : ''} hm-footer-inner`}
        style={{
          maxWidth: 1440, margin: '0 auto',
          padding: '80px 48px 40px',
        }}
      >
        {/* Top: brand + columns */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: '1.4fr repeat(3, 1fr)',
          gap: 48,
          marginBottom: 64,
        }} className="hm-footer-grid">
          {/* Brand column */}
          <div>
            <div style={{
              display: 'flex', alignItems: 'center', gap: 10,
              marginBottom: 20,
            }}>
              <img src="logo-icon.png" alt="Happie Max" style={{
                width: 36, height: 36, borderRadius: 10,
                objectFit: 'cover',
              }} />
              <span className="font-heading" style={{ fontSize: 20, fontWeight: 800 }}>
                <span style={{ color: brandNavy }}>Happie</span>{' '}
                <span style={{ color: brandCyan }}>Max</span>
              </span>
            </div>
            <p style={{
              fontSize: 14, lineHeight: 1.7,
              color: 'var(--hm-text-2)',
              maxWidth: 280, marginBottom: 28,
            }}>
              End-to-end business elevation. We intake brands at any stage and transform them into AI-powered market leaders.
            </p>

            {/* Contact numbers */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: 8, marginBottom: 20 }}>
              {['+91 96984 58438', '+91 96779 76609', '+91 88700 42498'].map((num) => (
                <a
                  key={num}
                  href={`tel:${num.replace(/\s/g, '')}`}
                  style={{
                    display: 'inline-flex', alignItems: 'center', gap: 8,
                    fontSize: 14, fontWeight: 500, color: 'var(--hm-text-2)',
                    textDecoration: 'none', transition: 'color .2s',
                  }}
                  onMouseEnter={(e) => { e.currentTarget.style.color = '#60A5FA'; }}
                  onMouseLeave={(e) => { e.currentTarget.style.color = 'var(--hm-text-2)'; }}
                >
                  <svg width={14} height={14} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.61 3.4 2 2 0 0 1 3.6 1.21h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.81a16 16 0 0 0 6.29 6.29l.95-.95a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/>
                  </svg>
                  {num}
                </a>
              ))}
            </div>

            {/* Socials */}
            <div style={{ display: 'flex', gap: 12 }}>
              {SOCIALS.map((s) => (
                <a
                  key={s.name} href={s.href}
                  className="hm-social-icon"
                  style={{
                    width: 38, height: 38, borderRadius: 10,
                    background: 'rgba(255,255,255,.04)',
                    border: '1px solid rgba(255,255,255,.06)',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    color: 'var(--hm-text-3)',
                    transition: 'all .25s',
                    textDecoration: 'none',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = 'rgba(37,99,235,.12)';
                    e.currentTarget.style.borderColor = 'rgba(37,99,235,.3)';
                    e.currentTarget.style.color = '#60A5FA';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = 'rgba(255,255,255,.04)';
                    e.currentTarget.style.borderColor = 'rgba(255,255,255,.06)';
                    e.currentTarget.style.color = 'var(--hm-text-3)';
                  }}
                >
                  <svg width={16} height={16} viewBox="0 0 24 24" fill="currentColor">
                    <path d={s.path}></path>
                  </svg>
                </a>
              ))}
            </div>
          </div>

          {/* Link columns */}
          {FOOTER_COLS.map((col) => (
            <div key={col.title}>
              <h4 style={{
                fontSize: 13, fontWeight: 700, letterSpacing: '1px',
                textTransform: 'uppercase', color: 'var(--hm-text)',
                marginBottom: 20,
              }}>{col.title}</h4>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
                {col.links.map((l) => (
                  <a
                    key={l.label} href={l.href}
                    style={{
                      color: 'var(--hm-text-3)', textDecoration: 'none',
                      fontSize: 14, transition: 'color .2s',
                    }}
                    onMouseEnter={(e) => { e.target.style.color = '#60A5FA'; }}
                    onMouseLeave={(e) => { e.target.style.color = 'var(--hm-text-3)'; }}
                  >{l.label}</a>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div style={{
          borderTop: '1px solid rgba(255,255,255,.05)',
          paddingTop: 28,
          display: 'flex', justifyContent: 'space-between', alignItems: 'center',
          flexWrap: 'wrap', gap: 12,
        }}>
          <span style={{ fontSize: 13, color: 'var(--hm-text-3)' }}>
            © 2026 Happie Max. All rights reserved.
          </span>
          <span style={{ fontSize: 13, color: 'var(--hm-text-3)' }}>
            Engineered for limitless growth.
          </span>
        </div>
      </div>

      {/* Responsive */}
      <style>{`
        @media (max-width: 768px) {
          .hm-footer-grid { grid-template-columns: 1fr 1fr !important; }
          .hm-footer-inner { padding: 60px 20px 32px !important; }
        }
        @media (max-width: 480px) {
          .hm-footer-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </footer>
  );
};

Object.assign(window, { FooterSection });
