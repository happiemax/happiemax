/* ═══════════════════════════════════════════════════
   Happie Max — Transformation Matrix
   5 interactive Before → After cards
   ═══════════════════════════════════════════════════ */

const MATRIX_DATA = [
  {
    input: 'A great idea with no one to build it',
    output: 'A fully launched product with real users',
    desc: 'You have the vision — we bring the engineers, designers, and AI architects. From first sketch to live product, we own the entire build so you can focus on the business.',
    icon: 'rocket',
    accent: '#A855F7',
    accentAfter: '#2563EB',
  },
  {
    input: 'Your team buried in tasks that should take minutes',
    output: 'Intelligent automation running operations 24/7',
    desc: 'We map every repetitive process in your business and replace it with AI-powered workflows — approvals, reporting, data entry, follow-ups — all handled without a human in the loop.',
    icon: 'settings',
    accent: '#EF4444',
    accentAfter: '#7C3AED',
  },
  {
    input: 'High traffic, low sales, customers leaving',
    output: 'A store that knows what each customer wants',
    desc: 'We rebuild your commerce experience with AI personalization, smarter checkout flows, and real-time conversion optimization — turning browsers into buyers at every step.',
    icon: 'shoppingCart',
    accent: '#F59E0B',
    accentAfter: '#2563EB',
  },
  {
    input: 'Big decisions made on gut feel and guesswork',
    output: 'Live intelligence turning data into your edge',
    desc: 'We unify your scattered data into a single real-time dashboard with predictive insights — so every decision you make is backed by what your business is actually telling you.',
    icon: 'barChart',
    accent: '#F97316',
    accentAfter: '#06B6D4',
  },
  {
    input: 'Aging systems slowing every part of your business',
    output: 'A modern platform that scales with your ambition',
    desc: 'We surgically migrate legacy infrastructure into clean, cloud-native architecture — zero downtime, no data loss, and a codebase your team will actually enjoy working in.',
    icon: 'cloud',
    accent: '#DC2626',
    accentAfter: '#10B981',
  },
];

/* ── Single Transform Card ──────────────────── */
const TransformCard = ({ data, index }) => {
  const [flipped, setFlipped] = React.useState(false);
  const [ref, vis] = useScrollReveal();
  const cardRef = React.useRef(null);
  const { pos, hovered, setHovered, onMove } = useMouseGlow(cardRef);
  const theme = useTheme();
  const isLight = theme === 'light';
  const isTouch = React.useMemo(
    () => window.matchMedia('(hover: none) and (pointer: coarse)').matches, []
  );

  const accentColor = flipped ? data.accentAfter : data.accent;

  const cardBg = isLight
    ? (flipped ? 'rgba(255,255,255,0.95)' : 'rgba(255,255,255,0.85)')
    : (flipped ? 'linear-gradient(145deg, rgba(16,22,38,.97), rgba(13,18,30,.85))' : 'linear-gradient(145deg, rgba(14,19,32,.92), rgba(11,15,25,.75))');

  const cardBorder = flipped
    ? `1px solid ${data.accentAfter}40`
    : `1px solid ${isLight ? 'rgba(0,0,0,0.07)' : 'rgba(255,255,255,0.05)'}`;

  const cardShadow = flipped
    ? `0 0 40px ${data.accentAfter}22, 0 16px 48px ${isLight ? 'rgba(0,0,0,.1)' : 'rgba(0,0,0,.5)'}`
    : isLight
      ? '0 1px 3px rgba(0,0,0,.04), 0 4px 20px rgba(0,0,0,.06)'
      : '0 4px 24px rgba(0,0,0,.3)';

  return (
    <div
      ref={(el) => { cardRef.current = el; ref.current = el; }}
      className={`hm-reveal ${vis ? 'visible' : ''}`}
      onMouseMove={isTouch ? undefined : onMove}
      onMouseEnter={isTouch ? undefined : () => { setHovered(true); setFlipped(true); }}
      onMouseLeave={isTouch ? undefined : () => { setHovered(false); setFlipped(false); }}
      onClick={isTouch ? () => setFlipped(f => !f) : undefined}
      style={{
        position: 'relative',
        borderRadius: 20,
        overflow: 'hidden',
        cursor: isTouch ? 'pointer' : 'default',
        minHeight: 280,
        background: cardBg,
        border: cardBorder,
        transition: 'all .5s cubic-bezier(.4,0,.2,1)',
        transform: (isTouch ? flipped : hovered) ? 'translateY(-6px) scale(1.01)' : 'translateY(0) scale(1)',
        boxShadow: cardShadow,
        transitionDelay: `${index * 0.08}s`,
        backdropFilter: isLight ? 'blur(12px)' : 'none',
        WebkitBackdropFilter: isLight ? 'blur(12px)' : 'none',
      }}
    >
      {/* Scan line animation on flip */}
      {flipped && (
        <div style={{
          position: 'absolute', left: 0, right: 0,
          height: 2,
          background: `linear-gradient(90deg, transparent, ${data.accentAfter}, transparent)`,
          animation: 'hmScanLine .6s ease-out forwards',
          zIndex: 5,
        }}></div>
      )}

      {/* Mouse glow */}
      {hovered && (
        <div style={{
          position: 'absolute',
          top: pos.y - 100, left: pos.x - 100,
          width: 200, height: 200, borderRadius: '50%',
          background: `radial-gradient(circle, ${accentColor}${isLight ? '10' : '15'}, transparent 70%)`,
          pointerEvents: 'none', zIndex: 0,
        }}></div>
      )}

      {/* Card content */}
      <div style={{
        position: 'relative', zIndex: 2,
        padding: 32,
        display: 'flex', flexDirection: 'column', height: '100%',
        minHeight: 280,
      }}>
        {/* Status badge */}
        <div style={{
          display: 'inline-flex', alignItems: 'center', gap: 6,
          padding: '4px 12px', borderRadius: 100,
          background: flipped ? `${data.accentAfter}15` : `${data.accent}12`,
          border: `1px solid ${flipped ? data.accentAfter + '30' : data.accent + '25'}`,
          fontSize: 11, fontWeight: 600, letterSpacing: '1px', textTransform: 'uppercase',
          color: flipped ? data.accentAfter : data.accent,
          marginBottom: 20, alignSelf: 'flex-start',
          transition: 'all .4s',
        }}>
          <HMIcon name={flipped ? 'check' : 'zap'} size={12} strokeWidth={2.5} />
          {flipped ? 'After Happie Max' : 'The Problem'}
        </div>

        {/* Icon */}
        <div style={{
          width: 48, height: 48, borderRadius: 14,
          background: `${accentColor}12`,
          border: `1px solid ${accentColor}20`,
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          marginBottom: 20,
          color: accentColor,
          transition: 'all .4s',
        }}>
          <HMIcon name={data.icon} size={22} />
        </div>

        {/* Title */}
        <h3 className="font-heading" style={{
          fontSize: 'clamp(15px, 1.8vw, 19px)',
          fontWeight: 700,
          lineHeight: 1.35,
          marginBottom: 14,
          transition: 'color .3s',
          color: flipped ? data.accentAfter : 'var(--hm-text)',
        }}>
          {flipped ? data.output : data.input}
        </h3>

        {/* Description — visible on hover */}
        <p style={{
          fontSize: 13.5, lineHeight: 1.7,
          color: 'var(--hm-text-2)',
          opacity: flipped ? 1 : 0,
          transform: flipped ? 'translateY(0)' : 'translateY(10px)',
          transition: 'all .4s .1s',
          flex: 1,
        }}>
          {data.desc}
        </p>

        {/* Bottom hint */}
        <div style={{
          display: 'flex', alignItems: 'center', gap: 8,
          marginTop: 16, fontSize: 12, fontWeight: 600,
          color: flipped ? data.accentAfter : 'var(--hm-text-3)',
          transition: 'all .3s',
        }}>
          <span>{flipped ? 'This is what we do' : (isTouch ? 'Tap to see the outcome' : 'Hover to see the outcome')}</span>
          <HMIcon name="arrowRight" size={14} />
        </div>
      </div>
    </div>
  );
};

/* ── Transform Matrix Section ───────────────── */
const TransformMatrix = () => {
  return (
    <section id="intake" style={{
      position: 'relative', zIndex: 1,
      background: 'linear-gradient(180deg, var(--hm-bg) 0%, var(--hm-bg-alt) 50%, var(--hm-bg) 100%)',
    }}>
      <div style={{
        position: 'absolute', top: '20%', left: '-5%',
        width: 400, height: 400, borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(37,99,235,.06), transparent 70%)',
        filter: 'blur(60px)',
      }}></div>

      <div className="hm-section">
        <SectionHeader
          badge="The Happie Max Effect"
          title={
            <span>We Meet You <span className="gradient-text">Where You Are</span></span>
          }
          subtitle="Every business starts somewhere. Whether you have an idea, a problem, or a system that's holding you back — we take it from there."
        />

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)',
          gap: 20,
        }} className="hm-transform-grid">
          {MATRIX_DATA.slice(0, 3).map((d, i) => (
            <TransformCard key={i} data={d} index={i} />
          ))}
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(2, 1fr)',
          gap: 20,
          marginTop: 20,
          maxWidth: 780,
          margin: '20px auto 0',
        }} className="hm-transform-grid-2">
          {MATRIX_DATA.slice(3).map((d, i) => (
            <TransformCard key={i + 3} data={d} index={i + 3} />
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .hm-transform-grid { grid-template-columns: repeat(2, 1fr) !important; }
        }
        @media (max-width: 580px) {
          .hm-transform-grid { grid-template-columns: 1fr !important; }
          .hm-transform-grid-2 { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
};

Object.assign(window, { TransformMatrix });
