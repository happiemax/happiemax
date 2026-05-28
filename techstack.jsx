/* ═══════════════════════════════════════════════════
   Happie Max — Tech Stack
   Interactive spotlight grid of real brand logos
   with category filtering. Professional, not flashy.
   ═══════════════════════════════════════════════════ */

const TS_CATS = [
  { id: 'all',      label: 'All',            color: '#60A5FA' },
  { id: 'ai',       label: 'AI & ML',        color: '#2563EB' },
  { id: 'frontend', label: 'Frontend',       color: '#7C3AED' },
  { id: 'backend',  label: 'Backend',        color: '#06B6D4' },
  { id: 'cloud',    label: 'Cloud & DevOps', color: '#10B981' },
  { id: 'data',     label: 'Data',           color: '#F59E0B' },
];

const TECHS = [
  // AI & ML
  { name: 'Python',      cat: 'ai',       color: '#3776AB', mono: 'Py' },
  { name: 'TensorFlow',  cat: 'ai',       color: '#FF6F00', mono: 'TF' },
  { name: 'PyTorch',     cat: 'ai',       color: '#EE4C2C', mono: 'Pt' },
  { name: 'OpenAI',      cat: 'ai',       color: '#10A37F', mono: 'AI' },
  { name: 'LangChain',   cat: 'ai',       color: '#1C3C3C', mono: 'LC' },
  { name: 'Hugging Face',cat: 'ai',       color: '#FFD21E', mono: 'HF' },
  // Frontend
  { name: 'React',       cat: 'frontend', color: '#61DAFB', logo: 'react' },
  { name: 'Next.js',     cat: 'frontend', color: '#94A3B8', logo: 'next' },
  { name: 'Angular',     cat: 'frontend', color: '#DD0031', mono: 'Ng' },
  { name: 'Vue.js',      cat: 'frontend', color: '#4FC08D', mono: 'Vue' },
  { name: 'TypeScript',  cat: 'frontend', color: '#3178C6', logo: 'ts' },
  { name: 'JavaScript',  cat: 'frontend', color: '#F7DF1E', logo: 'js' },
  { name: 'Tailwind',    cat: 'frontend', color: '#38BDF8', logo: 'tailwind' },
  { name: 'Flutter',     cat: 'frontend', color: '#54C5F8', logo: 'flutter' },
  // Backend
  { name: 'Node.js',     cat: 'backend',  color: '#539E43', logo: 'node' },
  { name: 'Java',        cat: 'backend',  color: '#ED8B00', mono: 'Jv' },
  { name: '.NET',        cat: 'backend',  color: '#512BD4', mono: '.NET' },
  { name: 'PHP',         cat: 'backend',  color: '#777BB4', mono: 'PHP' },
  { name: 'GraphQL',     cat: 'backend',  color: '#E10098', logo: 'graphql' },
  { name: 'FastAPI',     cat: 'backend',  color: '#009688', mono: 'Fa' },
  // Cloud & DevOps
  { name: 'AWS',         cat: 'cloud',    color: '#FF9900', logo: 'aws' },
  { name: 'Azure',       cat: 'cloud',    color: '#0078D4', mono: 'Az' },
  { name: 'GCP',         cat: 'cloud',    color: '#4285F4', mono: 'GCP' },
  { name: 'Docker',      cat: 'cloud',    color: '#2496ED', logo: 'docker' },
  { name: 'Kubernetes',  cat: 'cloud',    color: '#326CE5', mono: 'K8s' },
  { name: 'Vercel',      cat: 'cloud',    color: '#94A3B8', logo: 'vercel' },
  // Data
  { name: 'PostgreSQL',  cat: 'data',     color: '#4169E1', mono: 'Pg' },
  { name: 'MongoDB',     cat: 'data',     color: '#47A248', logo: 'mongo' },
  { name: 'Firebase',    cat: 'data',     color: '#FFA000', logo: 'firebase' },
  { name: 'Redis',       cat: 'data',     color: '#DC382D', mono: 'Rd' },
  { name: 'Supabase',    cat: 'data',     color: '#3ECF8E', mono: 'SB' },
];

/* ── Brand logos (hand-built SVG) ───────────── */
const TechLogo = ({ tech, size = 34, isLight }) => {
  const c = tech.color;
  const neutral = isLight ? '#0F172A' : '#F1F5F9';

  switch (tech.logo) {
    case 'react':
      return (
        <svg width={size} height={size} viewBox="-11.5 -10.23 23 20.46" style={{ color: c }}>
          <circle r="2.05" fill="currentColor" />
          <g fill="none" stroke="currentColor" strokeWidth="1">
            <ellipse rx="11" ry="4.2" />
            <ellipse rx="11" ry="4.2" transform="rotate(60)" />
            <ellipse rx="11" ry="4.2" transform="rotate(120)" />
          </g>
        </svg>
      );
    case 'next':
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" style={{ color: neutral }}>
          <circle cx="12" cy="12" r="10.5" fill="none" stroke="currentColor" strokeWidth="1.4" />
          <path d="M8.5 16.5V7.5L15.5 16.5M15 7.5v8" stroke="currentColor" strokeWidth="1.6" fill="none" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      );
    case 'ts':
      return (
        <svg width={size} height={size} viewBox="0 0 24 24">
          <rect width="24" height="24" rx="4" fill="#3178C6" />
          <text x="12" y="16.6" textAnchor="middle" fontFamily="'Space Grotesk',sans-serif" fontSize="10" fontWeight="700" fill="#fff">TS</text>
        </svg>
      );
    case 'js':
      return (
        <svg width={size} height={size} viewBox="0 0 24 24">
          <rect width="24" height="24" rx="4" fill="#F7DF1E" />
          <text x="12" y="16.6" textAnchor="middle" fontFamily="'Space Grotesk',sans-serif" fontSize="10" fontWeight="700" fill="#000">JS</text>
        </svg>
      );
    case 'tailwind':
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" style={{ color: c }}>
          <path fill="currentColor" d="M12 4.8c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.91.23 1.57.89 2.29 1.62C13.67 10.62 15.03 12 18 12c3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.91-.23-1.57-.89-2.29-1.62C16.34 6.18 14.98 4.8 12 4.8zM6 12c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.91.23 1.57.89 2.29 1.62C7.67 17.82 9.03 19.2 12 19.2c3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.91-.23-1.57-.89-2.29-1.62C10.34 13.38 8.98 12 6 12z" />
        </svg>
      );
    case 'vercel':
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" style={{ color: neutral }}>
          <path d="M12 3l10.5 18H1.5L12 3z" fill="currentColor" />
        </svg>
      );
    case 'node':
      return (
        <svg width={size} height={size} viewBox="0 0 24 24">
          <path d="M12 2l9 5v10l-9 5-9-5V7l9-5z" fill="#539E43" fillOpacity="0.16" stroke="#539E43" strokeWidth="1.3" strokeLinejoin="round" />
          <text x="12" y="16" textAnchor="middle" fontFamily="'Space Grotesk',sans-serif" fontSize="8.5" fontWeight="800" fill="#539E43">node</text>
        </svg>
      );
    case 'graphql':
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" style={{ color: c }}>
          <path d="M12 2.5l8.5 4.9v9.2L12 21.5l-8.5-4.9V7.4L12 2.5z" fill="none" stroke="currentColor" strokeWidth="1.1" />
          <path d="M12 3.5L20 17M12 3.5L4 17M4.5 7.5h15" stroke="currentColor" strokeWidth="0.9" opacity="0.55" />
          <g fill="currentColor">
            <circle cx="12" cy="3.2" r="1.7" />
            <circle cx="20.2" cy="7.4" r="1.7" />
            <circle cx="20.2" cy="16.6" r="1.7" />
            <circle cx="12" cy="20.8" r="1.7" />
            <circle cx="3.8" cy="16.6" r="1.7" />
            <circle cx="3.8" cy="7.4" r="1.7" />
          </g>
        </svg>
      );
    case 'aws':
      return (
        <svg width={size * 1.5} height={size} viewBox="0 0 48 28">
          <text x="24" y="15" textAnchor="middle" fontFamily="'Space Grotesk',sans-serif" fontSize="15" fontWeight="800" fill="#FF9900" letterSpacing="-1">aws</text>
          <path d="M8 21c8 4 24 4 32 0" stroke="#FF9900" strokeWidth="2" fill="none" strokeLinecap="round" />
          <path d="M38 19l2.5 1.5L38 23" stroke="#FF9900" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      );
    case 'docker':
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill="#2496ED">
          <g>
            <rect x="6" y="9" width="2.6" height="2.6" rx="0.4" />
            <rect x="9.2" y="9" width="2.6" height="2.6" rx="0.4" />
            <rect x="12.4" y="9" width="2.6" height="2.6" rx="0.4" />
            <rect x="9.2" y="5.8" width="2.6" height="2.6" rx="0.4" />
            <rect x="12.4" y="5.8" width="2.6" height="2.6" rx="0.4" />
            <rect x="15.6" y="9" width="2.6" height="2.6" rx="0.4" />
          </g>
          <path d="M2.5 12.5h18c.4 2.6-1 5.4-3.6 6.6-2 .9-4.6 1.1-7 .7-3.3-.6-6.2-2.6-7.4-5.8a8 8 0 0 1-.3-1.1c0-.3.1-.4.3-.4z" />
          <path d="M20 11c.8-.6 2-0.7 2.8-.2-.3 1-1.3 1.4-2.2 1.2" />
        </svg>
      );
    case 'flutter':
      return (
        <svg width={size} height={size} viewBox="0 0 24 24">
          <path d="M14.7 2L4 12.7l3.3 3.3L21.3 2h-6.6z" fill="#54C5F8" />
          <path d="M14.7 11.3l-4.1 4.1 3.3 3.4h6.6l-4.1-4.1 4.1-3.4h-5.8z" fill="#54C5F8" />
          <path d="M7.3 16l3.3 3.3 3.3-3.3-3.3-3.3L7.3 16z" fill="#0468D7" />
        </svg>
      );
    case 'mongo':
      return (
        <svg width={size} height={size} viewBox="0 0 24 24">
          <path d="M12 2c2.6 3.4 4 7 4 10.4 0 4-1.7 6.8-3.4 8.2L12 22l-.6-1.4C9.7 19.2 8 16.4 8 12.4 8 9 9.4 5.4 12 2z" fill="#47A248" />
          <path d="M12 3.5v17" stroke="#2F6B2F" strokeWidth="0.8" opacity="0.5" />
        </svg>
      );
    case 'firebase':
      return (
        <svg width={size} height={size} viewBox="0 0 24 24">
          <path d="M4 18.5L9.2 3.6c.2-.5.9-.6 1.2-.1l2 3.4-5.6 11.9L4 18.5z" fill="#FFA000" />
          <path d="M4 18.5l2.8-12 2.2 3.7L4 18.5z" fill="#FFCA28" />
          <path d="M4 18.5l10.6-7.4c.4-.3.9 0 .9.4L17 18.5l-5.6 3.2c-.5.3-1.1.3-1.6 0L4 18.5z" fill="#F57C00" />
        </svg>
      );
    default:
      return (
        <div style={{
          width: size, height: size, borderRadius: 9,
          background: `linear-gradient(135deg, ${c}, ${c}AA)`,
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          color: '#fff', fontWeight: 800, fontSize: Math.round(size * 0.4),
          fontFamily: "'Space Grotesk', sans-serif", letterSpacing: '-0.5px',
        }}>{tech.mono}</div>
      );
  }
};

/* ── Single tile ────────────────────────────── */
const TechTile = ({ tech, index, vis, isLight }) => {
  const [hov, setHov] = React.useState(false);

  return (
    <div
      onMouseEnter={() => setHov(true)}
      onMouseLeave={() => setHov(false)}
      style={{
        position: 'relative',
        display: 'flex', flexDirection: 'column', alignItems: 'center',
        justifyContent: 'center', gap: 12,
        padding: '22px 10px',
        borderRadius: 16,
        background: hov
          ? (isLight ? 'rgba(255,255,255,0.95)' : 'rgba(255,255,255,0.05)')
          : (isLight ? 'rgba(255,255,255,0.55)' : 'rgba(255,255,255,0.02)'),
        border: `1px solid ${hov ? tech.color + '55' : (isLight ? 'rgba(0,0,0,0.06)' : 'rgba(255,255,255,0.06)')}`,
        boxShadow: hov ? `0 8px 30px ${tech.color}26` : 'none',
        cursor: 'default',
        opacity: vis ? 1 : 0,
        transform: vis
          ? (hov ? 'translateY(-5px) scale(1.03)' : 'translateY(0)')
          : 'translateY(16px)',
        transition: 'opacity .4s ease, transform .35s cubic-bezier(.4,0,.2,1), box-shadow .35s, border-color .35s, background .35s',
        transitionDelay: vis ? `${index * 0.04}s` : '0s',
      }}
    >
      <div style={{
        height: 40, display: 'flex', alignItems: 'center', justifyContent: 'center',
        transition: 'transform .35s',
        transform: hov ? 'scale(1.08)' : 'scale(1)',
      }}>
        <TechLogo tech={tech} isLight={isLight} />
      </div>
      <span style={{
        fontSize: 12.5, fontWeight: 600, letterSpacing: '0.01em',
        color: hov ? (isLight ? '#0F172A' : '#F1F5F9') : 'var(--hm-text-2)',
        transition: 'color .3s', whiteSpace: 'nowrap',
      }}>{tech.name}</span>
    </div>
  );
};

/* ── Section ────────────────────────────────── */
const TechStackSection = () => {
  const [active, setActive] = React.useState('all');
  const [spot, setSpot] = React.useState(false);
  const visibleTechs = active === 'all'
    ? TECHS
    : TECHS.filter(t => t.cat === active);
  const stageRef = React.useRef(null);
  const [gridRef, vis] = useScrollReveal();
  const theme = useTheme();
  const isLight = theme === 'light';

  const onMove = (e) => {
    const el = stageRef.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    el.style.setProperty('--mx', `${e.clientX - r.left}px`);
    el.style.setProperty('--my', `${e.clientY - r.top}px`);
  };

  return (
    <section style={{ position: 'relative', zIndex: 1 }}>
      <div className="hm-section" style={{ paddingBottom: 56 }}>
        <SectionHeader
          badge="Our Tech Arsenal"
          title={<span>Engineered With the <span className="gradient-text">World's Best Tools</span></span>}
          subtitle="We choose the right technology for every layer — battle-tested, modern, and built to scale. Filter by discipline to see what powers your product."
        />

        {/* Filter chips */}
        <div style={{
          display: 'flex', flexWrap: 'wrap', gap: 10,
          justifyContent: 'center', marginBottom: 32,
        }}>
          {TS_CATS.map((cat) => {
            const on = active === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => setActive(cat.id)}
                style={{
                  padding: '8px 18px', borderRadius: 100,
                  fontSize: 13, fontWeight: 600, letterSpacing: '0.02em',
                  cursor: 'pointer',
                  fontFamily: "'Plus Jakarta Sans', sans-serif",
                  background: on ? cat.color : (isLight ? 'rgba(0,0,0,0.03)' : 'rgba(255,255,255,0.04)'),
                  color: on ? '#fff' : 'var(--hm-text-2)',
                  border: `1px solid ${on ? cat.color : (isLight ? 'rgba(0,0,0,0.08)' : 'rgba(255,255,255,0.08)')}`,
                  boxShadow: on ? `0 4px 16px ${cat.color}40` : 'none',
                  transition: 'all .25s ease',
                }}
              >{cat.label}</button>
            );
          })}
        </div>

        {/* Spotlight stage */}
        <div
          ref={stageRef}
          onMouseMove={onMove}
          onMouseEnter={() => setSpot(true)}
          onMouseLeave={() => setSpot(false)}
          style={{
            position: 'relative', overflow: 'hidden',
            borderRadius: 28,
            padding: 'clamp(20px, 3vw, 36px)',
            background: isLight
              ? 'linear-gradient(180deg, rgba(255,255,255,0.5), rgba(241,245,249,0.4))'
              : 'linear-gradient(180deg, rgba(14,19,32,0.55), rgba(9,13,22,0.35))',
            border: `1px solid ${isLight ? 'rgba(0,0,0,0.06)' : 'rgba(255,255,255,0.06)'}`,
            backdropFilter: 'blur(8px)', WebkitBackdropFilter: 'blur(8px)',
          }}
        >
          {/* Ambient mesh */}
          <div style={{
            position: 'absolute', inset: 0, pointerEvents: 'none', opacity: isLight ? 0.5 : 0.8,
            background: `radial-gradient(600px circle at 15% 0%, ${isLight ? 'rgba(37,99,235,.05)' : 'rgba(37,99,235,.08)'}, transparent 60%),
                         radial-gradient(600px circle at 85% 100%, ${isLight ? 'rgba(124,58,237,.05)' : 'rgba(124,58,237,.07)'}, transparent 60%)`,
          }} />

          {/* Mouse spotlight */}
          <div style={{
            position: 'absolute', inset: 0, pointerEvents: 'none',
            opacity: spot ? 1 : 0, transition: 'opacity .35s',
            background: `radial-gradient(360px circle at var(--mx) var(--my), ${isLight ? 'rgba(37,99,235,.07)' : 'rgba(99,102,241,.12)'}, transparent 65%)`,
          }} />

          {/* Tiles */}
          <div
            ref={gridRef}
            style={{
              position: 'relative', zIndex: 1,
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fill, minmax(120px, 1fr))',
              gap: 12,
            }}
          >
            {visibleTechs.map((tech, i) => (
              <TechTile
                key={`${active}-${tech.name}`}
                tech={tech}
                index={i}
                vis={vis}
                isLight={isLight}
              />
            ))}
          </div>
        </div>

        {/* Footer line */}
        <p style={{
          textAlign: 'center', marginTop: 24,
          fontSize: 13, color: 'var(--hm-text-3)',
        }}>
          …and many more. We stay fluent in whatever your project demands.
        </p>
      </div>
    </section>
  );
};

Object.assign(window, { TechStackSection });
