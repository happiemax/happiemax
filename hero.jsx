/* ═══════════════════════════════════════════════════
   Happie Max — Hero Section v3
   Uses React state for entrance animations (no opacity:0 fragility)
   ═══════════════════════════════════════════════════ */

/* ── Slot Machine Word ──────────────────────── */
const SLOT_VERBS = [
  { word: 'Engineer It.', hold: 3800 },
  { word: 'Scale It.',    hold: 1000 },
  { word: 'Launch It.',   hold: 1000 },
  { word: 'Ship It.',     hold: 1000 },
];

const SlotWord = () => {
  const [idx, setIdx] = React.useState(0);
  const [tick, setTick] = React.useState(0);
  const timerRef = React.useRef(null);

  React.useEffect(() => {
    const cycle = (currentIdx) => {
      timerRef.current = setTimeout(() => {
        const nextIdx = (currentIdx + 1) % SLOT_VERBS.length;
        setIdx(nextIdx);
        setTick(t => t + 1);
        cycle(nextIdx);
      }, SLOT_VERBS[currentIdx].hold);
    };
    cycle(0);
    return () => clearTimeout(timerRef.current);
  }, []);

  const prevIdx = ((idx - 1) + SLOT_VERBS.length) % SLOT_VERBS.length;

  return (
    <span style={{
      position: 'relative', display: 'inline-block',
      overflow: 'hidden', verticalAlign: 'bottom',
    }}>
      {/* Hidden spacer — always holds 'Engineer It.' width */}
      <span className="gradient-text" style={{
        visibility: 'hidden', userSelect: 'none', display: 'block', whiteSpace: 'nowrap',
      }}>Engineer It.</span>

      {/* Outgoing word */}
      {tick > 0 && (
        <span
          key={`out-${tick}`}
          className="gradient-text"
          style={{
            position: 'absolute', top: 0, left: 0,
            animation: 'hmSlotOut .42s cubic-bezier(.4,0,.2,1) forwards',
            whiteSpace: 'nowrap',
          }}
        >{SLOT_VERBS[prevIdx].word}</span>
      )}

      {/* Incoming word */}
      <span
        key={`in-${tick}`}
        className="gradient-text"
        style={{
          position: 'absolute', top: 0, left: 0,
          animation: tick > 0 ? 'hmSlotIn .42s cubic-bezier(.4,0,.2,1) forwards' : 'none',
          whiteSpace: 'nowrap',
        }}
      >{SLOT_VERBS[idx].word}</span>
    </span>
  );
};

/* ── AI Core Visual ─────────────────────────── */
const AICoreVisual = () => {
  const [mouse, setMouse] = React.useState({ x: 0, y: 0 });
  const containerRef = React.useRef(null);

  const onMove = React.useCallback((e) => {
    const r = containerRef.current?.getBoundingClientRect();
    if (!r) return;
    const cx = r.left + r.width / 2;
    const cy = r.top + r.height / 2;
    setMouse({ x: (e.clientX - cx) * 0.02, y: (e.clientY - cy) * 0.02 });
  }, []);

  React.useEffect(() => {
    window.addEventListener('mousemove', onMove);
    return () => window.removeEventListener('mousemove', onMove);
  }, [onMove]);

  const ringBase = {
    position: 'absolute', borderRadius: '50%',
    border: '1.5px solid transparent',
    top: '50%', left: '50%',
  };

  const nodes = React.useMemo(() =>
    Array.from({ length: 8 }, (_, i) => ({
      angle: (i / 8) * Math.PI * 2,
      radius: 42 + (i % 3) * 6,
      size: 3 + Math.random() * 3,
      delay: i * 0.4,
      color: i % 2 === 0 ? '#2563EB' : '#7C3AED',
    })), []);

  return (
    <div ref={containerRef} className="hm-ai-core" style={{
      position: 'relative',
      width: 'clamp(260px, 38vw, 440px)',
      height: 'clamp(260px, 38vw, 440px)',
      flexShrink: 0,
      transform: `translate(${mouse.x}px, ${mouse.y}px)`,
      transition: 'transform .15s ease-out',
    }}>
      <div style={{ position: 'absolute', inset: '-30%', borderRadius: '50%', background: 'radial-gradient(circle, rgba(37,99,235,.2) 0%, transparent 70%)', animation: 'hmPulse 5s ease-in-out infinite' }}></div>
      <div style={{ position: 'absolute', inset: '-20%', borderRadius: '50%', background: 'radial-gradient(circle, rgba(124,58,237,.15) 0%, transparent 65%)', animation: 'hmPulse 7s ease-in-out infinite 1s' }}></div>

      <div style={{ ...ringBase, width: '92%', height: '92%', marginLeft: '-46%', marginTop: '-46%', borderColor: 'rgba(37,99,235,.2)', animation: 'hmSpin 20s linear infinite' }}>
        <div style={{ position: 'absolute', top: -3, left: '50%', width: 6, height: 6, borderRadius: '50%', background: '#2563EB', boxShadow: '0 0 12px #2563EB' }}></div>
      </div>
      <div style={{ ...ringBase, width: '74%', height: '74%', marginLeft: '-37%', marginTop: '-37%', borderColor: 'rgba(124,58,237,.25)', animation: 'hmSpin 15s linear infinite reverse' }}>
        <div style={{ position: 'absolute', bottom: -3, right: '20%', width: 5, height: 5, borderRadius: '50%', background: '#7C3AED', boxShadow: '0 0 12px #7C3AED' }}></div>
      </div>
      <div style={{ ...ringBase, width: '54%', height: '54%', marginLeft: '-27%', marginTop: '-27%', borderColor: 'rgba(56,189,248,.2)', animation: 'hmSpin 10s linear infinite' }}>
        <div style={{ position: 'absolute', top: '50%', right: -3, width: 4, height: 4, borderRadius: '50%', background: '#38BDF8', boxShadow: '0 0 10px #38BDF8' }}></div>
      </div>

      <div style={{
        position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)',
        width: '22%', height: '22%', borderRadius: '50%',
        background: 'linear-gradient(135deg, #2563EB, #7C3AED)',
        boxShadow: '0 0 50px rgba(37,99,235,.5), 0 0 100px rgba(124,58,237,.25), inset 0 0 30px rgba(255,255,255,.1)',
        animation: 'hmPulse 3s ease-in-out infinite',
      }}>
        <div style={{ position: 'absolute', inset: '20%', borderRadius: '50%', background: 'rgba(255,255,255,.12)', filter: 'blur(4px)' }}></div>
      </div>

      {nodes.map((n, i) => (
        <div key={i} style={{
          position: 'absolute',
          left: `${50 + n.radius * Math.cos(n.angle)}%`,
          top: `${50 + n.radius * Math.sin(n.angle)}%`,
          width: n.size, height: n.size, borderRadius: '50%',
          background: n.color, boxShadow: `0 0 8px ${n.color}`,
          animation: `hmFloat ${3 + n.delay}s ease-in-out infinite ${n.delay}s`,
          opacity: 0.7,
        }}></div>
      ))}
    </div>
  );
};

/* ── Staggered Fade-In wrapper ──────────────── */
const FadeIn = ({ children, delay = 0, style = {} }) => {
  const [visible, setVisible] = React.useState(false);
  React.useEffect(() => {
    const t = setTimeout(() => setVisible(true), delay * 1000);
    return () => clearTimeout(t);
  }, [delay]);

  return (
    <div style={{
      opacity: visible ? 1 : 0,
      transform: visible ? 'translateY(0)' : 'translateY(20px)',
      transition: 'opacity .6s cubic-bezier(.4,0,.2,1), transform .6s cubic-bezier(.4,0,.2,1)',
      ...style,
    }}>
      {children}
    </div>
  );
};

/* ── Hero Section ───────────────────────────── */
const HeroSection = () => {
  return (
    <section id="home" className="hm-hero-section" style={{
      position: 'relative', minHeight: '85vh',
      display: 'flex', alignItems: 'center',
      overflow: 'hidden', padding: '90px 24px 40px',
    }}>
      <div style={{ position: 'absolute', top: '10%', left: '60%', width: 600, height: 600, borderRadius: '50%', background: 'radial-gradient(circle, rgba(37,99,235,.08), transparent 70%)', filter: 'blur(40px)', animation: 'hmFloat 12s ease-in-out infinite' }}></div>
      <div style={{ position: 'absolute', bottom: '5%', left: '10%', width: 400, height: 400, borderRadius: '50%', background: 'radial-gradient(circle, rgba(124,58,237,.06), transparent 70%)', filter: 'blur(40px)', animation: 'hmFloat 15s ease-in-out infinite reverse' }}></div>

      <div className="hm-hero-inner" style={{
        maxWidth: 1440, margin: '0 auto', width: '100%',
        display: 'flex', alignItems: 'center', gap: 60,
        position: 'relative', zIndex: 1,
        flexWrap: 'wrap', justifyContent: 'center',
        padding: '0 48px',
      }}>
        <div className="hm-hero-text" style={{ flex: '1 1 480px', maxWidth: 640 }}>
          <FadeIn delay={0.1}>
            <div className="hm-badge" style={{ marginBottom: 18 }}>
              <HMIcon name="sparkles" size={14} />
              AI Solution for Business Growth
            </div>
          </FadeIn>

          <FadeIn delay={0.25}>
            <h1 className="font-heading" style={{
              fontSize: 'clamp(32px, 5vw, 64px)', fontWeight: 800,
              lineHeight: 1.08, letterSpacing: '-0.03em', marginBottom: 20,
            }}>
              You Dream It.
              <br />
              <span className="gradient-text">We </span><SlotWord />
            </h1>
          </FadeIn>

          <FadeIn delay={0.45}>
            <p style={{
              fontSize: 'clamp(15px, 1.8vw, 19px)', color: 'var(--hm-text-2)',
              lineHeight: 1.75, marginBottom: 28, maxWidth: 520,
            }}>
              From raw concepts to enterprise ecosystems — Happie Max is your
              end-to-end technical partner. We architect, build, and scale
              any digital product with cutting-edge AI at the core.
            </p>
          </FadeIn>

          <FadeIn delay={0.6}>
            <div className="hm-hero-btns" style={{ display: 'flex', gap: 16, flexWrap: 'wrap' }}>
              <a href="#contact" className="hm-btn-primary">
                Start Your Project
                <HMIcon name="arrowRight" size={16} strokeWidth={2.5} />
              </a>
              <a href="#services" className="hm-btn-secondary">
                Explore What We Do
              </a>
            </div>
          </FadeIn>

          <FadeIn delay={0.75}>
            <div className="hm-hero-stats" style={{ display: 'flex', gap: 36, marginTop: 36, flexWrap: 'wrap' }}>
              {[
                { val: 'Any Vision', label: 'New or Existing' },
                { val: 'AI-Powered', label: 'At the Core' },
                { val: 'No Limits', label: 'On Capability' },
              ].map((t) => (
                <div key={t.label}>
                  <div className="font-heading gradient-text" style={{ fontSize: 18, fontWeight: 700, marginBottom: 4 }}>{t.val}</div>
                  <div style={{ fontSize: 12, color: 'var(--hm-text-3)', letterSpacing: '.5px' }}>{t.label}</div>
                </div>
              ))}
            </div>
          </FadeIn>
        </div>

        <div className="hm-hero-globe-wrap">
          <FadeIn delay={0.3} style={{
            flex: '0 1 440px',
            display: 'flex', justifyContent: 'center', alignItems: 'center',
          }}>
            <AICoreVisual />
          </FadeIn>
        </div>
      </div>

      <style>{`
        @keyframes hmSlotOut {
          from { transform: translateY(0);      opacity: 1; }
          to   { transform: translateY(-115%);  opacity: 0; }
        }
        @keyframes hmSlotIn {
          from { transform: translateY(115%);   opacity: 0; }
          to   { transform: translateY(0);      opacity: 1; }
        }
        @media (max-width: 768px) {
          .hm-hero-section {
            padding-bottom: 80px !important;
          }
          .hm-hero-globe-wrap {
            display: none;
          }
          .hm-hero-inner {
            padding: 0 !important;
            gap: 28px !important;
          }
          .hm-ai-core {
            width: clamp(150px, 48vw, 200px) !important;
            height: clamp(150px, 48vw, 200px) !important;
          }
          .hm-hero-text {
            text-align: center;
          }
          .hm-hero-text .hm-badge {
            display: inline-flex;
          }
          .hm-hero-btns {
            justify-content: center;
          }
          .hm-hero-stats {
            justify-content: center;
            gap: 24px !important;
          }
        }
      `}</style>

      <FadeIn delay={1} style={{
        position: 'absolute', bottom: 20, left: '50%', transform: 'translateX(-50%)',
      }}>
        <div style={{
          display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 10,
          animation: 'hmScrollNudge 2.4s ease-in-out infinite',
        }}>
          <span style={{ fontSize: 11, color: 'var(--hm-text-3)', letterSpacing: '1px', textTransform: 'uppercase' }}>Scroll to explore</span>
          <div style={{
            position: 'relative', width: 1, height: 32,
            background: 'linear-gradient(to bottom, var(--hm-text-3), transparent)',
          }}>
            <div style={{
              position: 'absolute', top: 0, left: -1.5,
              width: 4, height: 4, borderRadius: '50%',
              background: 'var(--hm-blue)',
              boxShadow: '0 0 8px var(--hm-blue)',
              animation: 'hmScrollDot 1.8s cubic-bezier(.4,0,.2,1) infinite',
            }}></div>
          </div>
        </div>
      </FadeIn>
    </section>
  );
};

Object.assign(window, { HeroSection, FadeIn });
