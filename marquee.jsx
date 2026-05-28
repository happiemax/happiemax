/* ═══════════════════════════════════════════════════
   Happie Max — Capabilities Marquee
   Auto-scrolling tech & capability ticker
   ═══════════════════════════════════════════════════ */

const MARQUEE_ITEMS = [
  'AI Integration', 'Machine Learning', 'Web Development', 'Mobile Apps',
  'Cloud Architecture', 'E-Commerce', 'Brand Identity', 'UI/UX Design',
  'Enterprise Automation', 'Data Analytics', 'Cyber Security', 'API Development',
  'DevOps & CI/CD', 'Custom Software', 'Digital Marketing', 'LLM Fine-Tuning',
  'Computer Vision', 'IoT Systems', 'Blockchain', 'AR/VR Experiences',
];

const MarqueeDot = () => (
  <span style={{
    width: 6, height: 6, borderRadius: '50%',
    background: 'linear-gradient(135deg, #2563EB, #7C3AED)',
    flexShrink: 0, opacity: 0.5,
  }}></span>
);

const MarqueeSection = () => {
  const [ref, vis] = useScrollReveal(0.1);

  // Duplicate items for seamless loop
  const items = [...MARQUEE_ITEMS, ...MARQUEE_ITEMS];

  return (
    <section
      ref={ref}
      className={`hm-reveal ${vis ? 'visible' : ''} hm-marquee-wrap`}
      style={{
        position: 'relative', zIndex: 1,
        padding: '48px 0',
        borderTop: '1px solid rgba(255,255,255,.04)',
        borderBottom: '1px solid rgba(255,255,255,.04)',
        background: 'linear-gradient(180deg, rgba(14,19,32,.5), rgba(9,13,22,.8))',
        overflow: 'hidden',
      }}
    >
      {/* Fade edges */}
      <div className="hm-fade-l" style={{
        position: 'absolute', top: 0, left: 0, bottom: 0, width: 120,
        background: 'linear-gradient(to right, var(--hm-bg), transparent)',
        zIndex: 2, pointerEvents: 'none',
      }}></div>
      <div className="hm-fade-r" style={{
        position: 'absolute', top: 0, right: 0, bottom: 0, width: 120,
        background: 'linear-gradient(to left, var(--hm-bg), transparent)',
        zIndex: 2, pointerEvents: 'none',
      }}></div>

      <div className="hm-marquee-track" style={{ alignItems: 'center' }}>
        {items.map((item, i) => (
          <React.Fragment key={i}>
            <span style={{
              fontSize: 15, fontWeight: 500,
              color: 'var(--hm-text-2)',
              whiteSpace: 'nowrap',
              letterSpacing: '0.02em',
              transition: 'color .2s',
            }}>{item}</span>
            <MarqueeDot />
          </React.Fragment>
        ))}
      </div>
    </section>
  );
};

Object.assign(window, { MarqueeSection });
