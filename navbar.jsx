/* ═══════════════════════════════════════════════════
   Happie Max — Navbar
   Persistent global navigation with mobile drawer
   ═══════════════════════════════════════════════════ */

const NAV_LINKS = [
  { label: 'Home', href: '#home' },
  { label: 'Services', href: '#services' },
  { label: 'Process', href: '#process' },
  { label: 'Contact', href: '#contact' },
];

const Navbar = () => {
  const [scrolled, setScrolled] = React.useState(false);
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const theme = useTheme();
  const isLight = theme === 'light';

  const brandNavy = isLight ? '#0A2463' : '#C8D6F0';
  const brandCyan = '#00ACC1';

  React.useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  React.useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [mobileOpen]);

  const navBg = scrolled
    ? (isLight ? 'rgba(248,250,253,.88)' : 'rgba(9,13,22,.88)')
    : 'transparent';
  const navBorder = scrolled
    ? `1px solid ${isLight ? 'rgba(0,0,0,.06)' : 'rgba(255,255,255,.06)'}`
    : '1px solid transparent';
  const navBlur = scrolled ? 'blur(20px)' : 'none';

  return (
    <>
      <nav
        style={{
          position: 'fixed', top: 0, left: 0, right: 0, zIndex: 1000,
          background: navBg,
          borderBottom: navBorder,
          backdropFilter: navBlur,
          WebkitBackdropFilter: navBlur,
          transition: 'all .35s ease',
        }}
      >
        <div style={{
          maxWidth: 1440, margin: '0 auto',
          padding: '0 48px',
          height: scrolled ? 64 : 76,
          display: 'flex', alignItems: 'center', justifyContent: 'space-between',
          transition: 'height .35s ease',
        }}>
          {/* Logo / Wordmark */}
          <a href="#home" style={{
            display: 'flex', alignItems: 'center', gap: 10,
            textDecoration: 'none', color: 'inherit',
          }}>
            <img src="logo-icon.png" alt="Happie Max" style={{
              width: 36, height: 36, borderRadius: 10,
              objectFit: 'cover',
            }} />
            <span className="font-heading" style={{
              fontSize: 20, fontWeight: 800, letterSpacing: '-0.02em',
            }}>
              <span style={{ color: brandNavy }}>Happie</span>{' '}
              <span style={{ color: brandCyan }}>Max</span>
            </span>
          </a>

          {/* Desktop Links */}
          <div style={{
            display: 'flex', alignItems: 'center', gap: 8,
          }} className="hm-nav-desktop">
            {NAV_LINKS.map((l) => (
              <a
                key={l.label} href={l.href}
                style={{
                  color: 'var(--hm-text-2)', textDecoration: 'none',
                  fontSize: 14, fontWeight: 500, padding: '8px 18px',
                  borderRadius: 10, transition: 'all .25s',
                }}
                onMouseEnter={(e) => {
                  e.target.style.color = '#F1F5F9';
                  e.target.style.background = 'rgba(255,255,255,.05)';
                }}
                onMouseLeave={(e) => {
                  e.target.style.color = 'var(--hm-text-2)';
                  e.target.style.background = 'transparent';
                }}
              >{l.label}</a>
            ))}
            <a href="#contact" className="hm-btn-primary" style={{
              padding: '10px 24px', fontSize: 13, marginLeft: 8,
            }}>
              Elevate Your Business
              <HMIcon name="arrowUpRight" size={15} strokeWidth={2.5} />
            </a>

            {/* Theme toggle */}
            <button
              className="hm-theme-toggle"
              onClick={() => toggleTheme()}
              title={isLight ? 'Switch to dark mode' : 'Switch to light mode'}
              style={{ marginLeft: 4 }}
            >
              {isLight ? (
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
                </svg>
              ) : (
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="5"></circle>
                  <path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42"></path>
                </svg>
              )}
            </button>
          </div>

          {/* Mobile Hamburger */}
          <button
            className="hm-nav-mobile-btn"
            onClick={() => setMobileOpen(!mobileOpen)}
            style={{
              display: 'none', background: 'none', border: 'none',
              color: '#F1F5F9', cursor: 'pointer', padding: 4,
            }}
          >
            <HMIcon name={mobileOpen ? 'x' : 'menu'} size={26} />
          </button>
        </div>
      </nav>

      {/* Mobile Drawer Overlay */}
      <div
        onClick={() => setMobileOpen(false)}
        style={{
          position: 'fixed', inset: 0, zIndex: 999,
          background: 'rgba(0,0,0,.6)',
          opacity: mobileOpen ? 1 : 0,
          pointerEvents: mobileOpen ? 'auto' : 'none',
          transition: 'opacity .3s',
        }}
      ></div>

      {/* Mobile Drawer */}
      <div className="hm-mobile-drawer" style={{
        position: 'fixed', top: 0, right: 0, bottom: 0,
        width: 300, maxWidth: '85vw',
        zIndex: 1001,
        background: isLight ? 'rgba(248,250,253,.97)' : 'rgba(9,13,22,.96)',
        backdropFilter: 'blur(24px)',
        WebkitBackdropFilter: 'blur(24px)',
        borderLeft: `1px solid ${isLight ? 'rgba(0,0,0,.06)' : 'rgba(255,255,255,.06)'}`,
        transform: mobileOpen ? 'translateX(0)' : 'translateX(100%)',
        transition: 'transform .35s cubic-bezier(.4,0,.2,1)',
        display: 'flex', flexDirection: 'column',
        padding: '80px 32px 40px',
        gap: 8,
      }}>
        <button
          onClick={() => setMobileOpen(false)}
          style={{
            position: 'absolute', top: 20, right: 20,
            background: 'none', border: 'none', color: '#F1F5F9',
            cursor: 'pointer',
          }}
        >
          <HMIcon name="x" size={24} />
        </button>

        {NAV_LINKS.map((l) => (
          <a
            key={l.label} href={l.href}
            onClick={() => setMobileOpen(false)}
            style={{
              color: 'var(--hm-text)', textDecoration: 'none',
              fontSize: 18, fontWeight: 600, fontFamily: 'Space Grotesk, sans-serif',
              padding: '14px 0',
              borderBottom: '1px solid rgba(255,255,255,.06)',
              transition: 'color .2s',
            }}
          >{l.label}</a>
        ))}

        <a
          href="#contact"
          onClick={() => setMobileOpen(false)}
          className="hm-btn-primary"
          style={{ marginTop: 24, justifyContent: 'center' }}
        >
          Elevate Your Business
          <HMIcon name="arrowUpRight" size={15} strokeWidth={2.5} />
        </a>
      </div>

      {/* Responsive breakpoint styles */}
      <style>{`
        @media (min-width: 769px) {
          .hm-nav-mobile-btn { display: none !important; }
        }
        @media (max-width: 768px) {
          .hm-nav-desktop { display: none !important; }
          .hm-nav-mobile-btn { display: block !important; }
        }
      `}</style>
    </>
  );
};

Object.assign(window, { Navbar });
