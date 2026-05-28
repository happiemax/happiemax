/* ═══════════════════════════════════════════════════
   Happie Max — Shared Hooks, Icons & Components
   Foundation layer used by all section components
   ═══════════════════════════════════════════════════ */

/* ── Theme Toggle ───────────────────────────── */
function getSystemTheme() {
  return (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches)
    ? 'dark' : 'light';
}

let _hmSystemThemeBound = false;
function initTheme() {
  // User's saved choice wins; otherwise follow the OS preference
  const saved = localStorage.getItem('hm-theme');
  const theme = saved || getSystemTheme();
  document.body.classList.toggle('light-theme', theme === 'light');

  // Live-follow OS changes only while the user hasn't picked a theme
  if (!_hmSystemThemeBound && window.matchMedia) {
    _hmSystemThemeBound = true;
    const mq = window.matchMedia('(prefers-color-scheme: dark)');
    const onChange = (e) => {
      if (localStorage.getItem('hm-theme')) return; // manual override persists
      const sys = e.matches ? 'dark' : 'light';
      document.body.classList.toggle('light-theme', sys === 'light');
      window.dispatchEvent(new CustomEvent('hm-theme-change', { detail: sys }));
    };
    mq.addEventListener ? mq.addEventListener('change', onChange) : mq.addListener(onChange);
  }
  return theme;
}
function toggleTheme() {
  const isLight = document.body.classList.toggle('light-theme');
  const theme = isLight ? 'light' : 'dark';
  localStorage.setItem('hm-theme', theme);
  window.dispatchEvent(new CustomEvent('hm-theme-change', { detail: theme }));
  return theme;
}
function useTheme() {
  const [theme, setTheme] = React.useState(() => initTheme());
  React.useEffect(() => {
    const handler = (e) => setTheme(e.detail);
    window.addEventListener('hm-theme-change', handler);
    return () => window.removeEventListener('hm-theme-change', handler);
  }, []);
  return theme;
}

/* ── Scroll Reveal Hook ─────────────────────── */
function useScrollReveal(threshold = 0.05) {
  const ref = React.useRef(null);
  const [vis, setVis] = React.useState(false);
  React.useEffect(() => {
    const el = ref.current;
    if (!el) return;
    
    // Check if already in viewport on mount
    const rect = el.getBoundingClientRect();
    if (rect.top < window.innerHeight && rect.bottom > 0) {
      setVis(true);
      return;
    }
    
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { setVis(true); obs.unobserve(el); } },
      { threshold, rootMargin: '100px 0px' }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);
  return [ref, vis];
}

/* ── Mouse Position Hook ────────────────────── */
function useMouseGlow(cardRef) {
  const [pos, setPos] = React.useState({ x: 0, y: 0 });
  const [hovered, setHovered] = React.useState(false);
  const onMove = React.useCallback((e) => {
    const r = cardRef.current?.getBoundingClientRect();
    if (r) setPos({ x: e.clientX - r.left, y: e.clientY - r.top });
  }, []);
  return { pos, hovered, setHovered, onMove };
}

/* ── Count-Up Hook ──────────────────────────── */
function useCountUp(end, duration = 2000, start = false) {
  const [val, setVal] = React.useState(0);
  React.useEffect(() => {
    if (!start) return;
    let startTime = null;
    const step = (ts) => {
      if (!startTime) startTime = ts;
      const p = Math.min((ts - startTime) / duration, 1);
      setVal(Math.floor(p * end));
      if (p < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [start, end, duration]);
  return val;
}

/* ── Icon Component ─────────────────────────── */
const ICON_MAP = {
  menu: (
    <>
      <line x1="4" y1="6" x2="20" y2="6"></line>
      <line x1="4" y1="12" x2="20" y2="12"></line>
      <line x1="4" y1="18" x2="20" y2="18"></line>
    </>
  ),
  x: (
    <>
      <line x1="18" y1="6" x2="6" y2="18"></line>
      <line x1="6" y1="6" x2="18" y2="18"></line>
    </>
  ),
  arrowRight: <path d="M5 12h14M13 5l7 7-7 7"></path>,
  arrowUpRight: <path d="M7 17L17 7M7 7h10v10"></path>,
  chevronRight: <path d="M9 18l6-6-6-6"></path>,
  sparkles: (
    <>
      <path d="M12 3l1.5 4.5L18 9l-4.5 1.5L12 15l-1.5-4.5L6 9l4.5-1.5L12 3z"></path>
      <path d="M18 14l1 3 3 1-3 1-1 3-1-3-3-1 3-1 1-3z"></path>
    </>
  ),
  zap: <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"></path>,
  brain: (
    <>
      <path d="M9.5 2a3.5 3.5 0 0 0-3.18 4.96A4 4 0 0 0 4 11a4 4 0 0 0 1.28 2.93A3.5 3.5 0 0 0 9 18h.5"></path>
      <path d="M14.5 2a3.5 3.5 0 0 1 3.18 4.96A4 4 0 0 1 20 11a4 4 0 0 1-1.28 2.93A3.5 3.5 0 0 1 15 18h-.5"></path>
      <path d="M12 2v16"></path>
    </>
  ),
  globe: (
    <>
      <circle cx="12" cy="12" r="10"></circle>
      <path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>
    </>
  ),
  settings: (
    <>
      <circle cx="12" cy="12" r="3"></circle>
      <path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42"></path>
    </>
  ),
  shield: <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>,
  barChart: (
    <>
      <rect x="3" y="12" width="4" height="8" rx="1"></rect>
      <rect x="10" y="8" width="4" height="12" rx="1"></rect>
      <rect x="17" y="4" width="4" height="16" rx="1"></rect>
    </>
  ),
  shoppingCart: (
    <>
      <circle cx="9" cy="21" r="1"></circle>
      <circle cx="20" cy="21" r="1"></circle>
      <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>
    </>
  ),
  palette: (
    <>
      <circle cx="13.5" cy="6.5" r="1.5"></circle>
      <circle cx="17.5" cy="10.5" r="1.5"></circle>
      <circle cx="8.5" cy="7.5" r="1.5"></circle>
      <circle cx="6.5" cy="12.5" r="1.5"></circle>
      <path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10c.93 0 1.5-.67 1.5-1.5 0-.38-.15-.74-.4-1.02a1.48 1.48 0 0 1 1.12-2.48H16a8 8 0 0 0 0-16z"></path>
    </>
  ),
  code: <path d="M16 18l6-6-6-6M8 6l-6 6 6 6"></path>,
  cpu: (
    <>
      <rect x="4" y="4" width="16" height="16" rx="2"></rect>
      <rect x="9" y="9" width="6" height="6"></rect>
      <path d="M9 1v3M15 1v3M9 20v3M15 20v3M20 9h3M20 15h3M1 9h3M1 15h3"></path>
    </>
  ),
  layers: (
    <>
      <path d="M12 2L2 7l10 5 10-5-10-5z"></path>
      <path d="M2 17l10 5 10-5"></path>
      <path d="M2 12l10 5 10-5"></path>
    </>
  ),
  cloud: (
    <>
      <path d="M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z"></path>
    </>
  ),
  target: (
    <>
      <circle cx="12" cy="12" r="10"></circle>
      <circle cx="12" cy="12" r="6"></circle>
      <circle cx="12" cy="12" r="2"></circle>
    </>
  ),
  rocket: (
    <>
      <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z"></path>
      <path d="M12 15l-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z"></path>
      <path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0"></path>
      <path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5"></path>
    </>
  ),
  check: <path d="M20 6L9 17l-5-5"></path>,
};

const HMIcon = ({ name, size = 24, className = '', strokeWidth = 2 }) => (
  <svg
    width={size} height={size} viewBox="0 0 24 24"
    fill="none" stroke="currentColor"
    strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round"
    className={className}
  >
    {ICON_MAP[name] || null}
  </svg>
);

/* ── Section Header ─────────────────────────── */
const SectionHeader = ({ badge, title, subtitle, center = true }) => {
  const [ref, vis] = useScrollReveal();
  return (
    <div
      ref={ref}
      className={`hm-reveal ${vis ? 'visible' : ''}`}
      style={{
        textAlign: center ? 'center' : 'left',
        marginBottom: 48,
      }}
    >
      {badge && <div className="hm-badge" style={{ marginBottom: 20 }}>{badge}</div>}
      <h2
        className="font-heading"
        style={{
          fontSize: 'clamp(28px, 4vw, 52px)',
          fontWeight: 800,
          lineHeight: 1.15,
          marginBottom: subtitle ? 20 : 0,
          letterSpacing: '-0.02em',
        }}
      >
        {title}
      </h2>
      {subtitle && (
        <p style={{
          fontSize: 'clamp(15px, 1.8vw, 18px)',
          color: 'var(--hm-text-2)',
          maxWidth: 640,
          margin: center ? '0 auto' : 0,
          lineHeight: 1.7,
        }}>
          {subtitle}
        </p>
      )}
    </div>
  );
};

/* ── Glow Card (mouse-tracking border glow) ── */
const GlowCard = ({ children, className = '', style = {}, glowColor = 'var(--hm-blue)', delay = 0 }) => {
  const cardRef = React.useRef(null);
  const { pos, hovered, setHovered, onMove } = useMouseGlow(cardRef);
  const [ref, vis] = useScrollReveal();
  const theme = useTheme();
  const isLight = theme === 'light';

  return (
    <div
      ref={(el) => { cardRef.current = el; ref.current = el; }}
      data-glowcard="true"
      className={`hm-reveal ${vis ? 'visible' : ''} ${className}`}
      onMouseMove={onMove}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        position: 'relative',
        borderRadius: 20,
        overflow: 'hidden',
        background: isLight
          ? '#FFFFFF'
          : 'linear-gradient(145deg, rgba(14,19,32,.9), rgba(11,15,25,.7))',
        border: `1px solid ${isLight ? 'rgba(0,0,0,.06)' : 'rgba(255,255,255,0.05)'}`,
        transition: 'transform .4s cubic-bezier(.4,0,.2,1), box-shadow .4s, border-color .4s',
        transform: hovered ? 'translateY(-4px)' : 'translateY(0)',
        boxShadow: hovered
          ? (isLight
            ? `0 4px 24px ${glowColor}15, 0 8px 32px rgba(0,0,0,.06)`
            : `0 0 40px ${glowColor}22, 0 12px 40px rgba(0,0,0,.5)`)
          : (isLight
            ? '0 1px 3px rgba(0,0,0,.04), 0 4px 16px rgba(0,0,0,.04)'
            : '0 4px 20px rgba(0,0,0,.3)'),
        borderColor: hovered ? `${glowColor}40` : (isLight ? 'rgba(0,0,0,.06)' : 'rgba(255,255,255,0.05)'),
        transitionDelay: `${delay * 0.08}s`,
        ...style,
      }}
    >
      {/* Mouse-tracking glow overlay */}
      {hovered && (
        <div style={{
          position: 'absolute',
          top: pos.y - 120,
          left: pos.x - 120,
          width: 240,
          height: 240,
          borderRadius: '50%',
          background: `radial-gradient(circle, ${glowColor}18, transparent 70%)`,
          pointerEvents: 'none',
          zIndex: 0,
          transition: 'opacity .2s',
        }}></div>
      )}
      <div style={{ position: 'relative', zIndex: 1 }}>
        {children}
      </div>
    </div>
  );
};

Object.assign(window, {
  initTheme, toggleTheme, useTheme,
  useScrollReveal, useMouseGlow, useCountUp,
  HMIcon, SectionHeader, GlowCard,
});
