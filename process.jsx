/* ═══════════════════════════════════════════════════
   Happie Max — Process + Stats + CTA
   How it works, credibility numbers, conversion block
   ═══════════════════════════════════════════════════ */

/* ── How It Works ───────────────────────────── */
const STEPS = [
  {
    num: '01',
    title: 'Share Your Vision',
    desc: 'Whether it\'s a napkin sketch, a legacy system, or an ambitious new idea — tell us what you want to build, transform, or scale.',
    icon: 'target',
  },
  {
    num: '02',
    title: 'We Architect the Solution',
    desc: 'Our team designs the perfect technical blueprint — selecting the right stack, AI integrations, and delivery roadmap for your goals.',
    icon: 'layers',
  },
  {
    num: '03',
    title: 'We Build & Launch',
    desc: 'Rapid development, rigorous testing, and seamless deployment. You get a production-ready product built to scale infinitely.',
    icon: 'rocket',
  },
];

const ProcessStep = ({ step, index, isLast }) => {
  const [ref, vis] = useScrollReveal();

  return (
    <div
      ref={ref}
      className={`hm-reveal ${vis ? 'visible' : ''}`}
      style={{
        display: 'flex', flexDirection: 'column', alignItems: 'center',
        textAlign: 'center', position: 'relative',
        flex: 1, minWidth: 200,
        transitionDelay: `${index * 0.15}s`,
      }}
    >
      {/* Step number + icon circle */}
      <div className="hm-step-circle" style={{
        width: 80, height: 80, borderRadius: '50%',
        background: 'linear-gradient(135deg, rgba(37,99,235,.12), rgba(124,58,237,.08))',
        border: '1px solid rgba(37,99,235,.2)',
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        marginBottom: 24, position: 'relative',
      }}>
        <HMIcon name={step.icon} size={28} className="gradient-text" style={{ color: '#60A5FA' }} />
        <div style={{
          position: 'absolute', top: -6, right: -6,
          width: 28, height: 28, borderRadius: '50%',
          background: 'linear-gradient(135deg, #2563EB, #7C3AED)',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          fontSize: 11, fontWeight: 700, color: '#fff',
        }}>{step.num}</div>
      </div>

      <h3 className="font-heading" style={{
        fontSize: 20, fontWeight: 700, marginBottom: 12,
      }}>{step.title}</h3>

      <p style={{
        fontSize: 14, lineHeight: 1.7, color: 'var(--hm-text-2)',
        maxWidth: 300,
      }}>{step.desc}</p>
    </div>
  );
};

const ProcessSection = () => {
  return (
    <section id="process" style={{
      position: 'relative', zIndex: 1,
      background: 'linear-gradient(180deg, var(--hm-bg) 0%, var(--hm-bg-alt) 50%, var(--hm-bg) 100%)',
    }}>
      <div className="hm-section">
        <SectionHeader
          badge="How It Works"
          title={<span>Three Steps to <span className="gradient-text">Liftoff</span></span>}
          subtitle="A streamlined process designed for speed, clarity, and zero friction — no matter how complex the vision."
        />

        <div style={{
          display: 'flex', gap: 48, justifyContent: 'center',
          position: 'relative', flexWrap: 'wrap',
        }}>
          {/* Connector lines (desktop only) */}
          <div className="hm-process-connectors" style={{
            position: 'absolute', top: 40, left: '20%', right: '20%',
            height: 1,
            background: 'linear-gradient(90deg, transparent, rgba(37,99,235,.2), rgba(124,58,237,.2), transparent)',
          }}></div>

          {STEPS.map((s, i) => (
            <ProcessStep key={i} step={s} index={i} isLast={i === STEPS.length - 1} />
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 640px) {
          .hm-process-connectors { display: none !important; }
        }
      `}</style>
    </section>
  );
};

/* ── Stats Bar ──────────────────────────────── */
const STATS = [
  { value: 50, suffix: '+', label: 'Projects Delivered' },
  { value: 98, suffix: '%', label: 'Client Satisfaction' },
  { value: 100, suffix: '+', label: 'Technologies Mastered' },
  { value: 2, suffix: 'x', label: 'Faster Time to Launch' },
];

const StatItem = ({ stat }) => {
  const [ref, vis] = useScrollReveal();
  const count = useCountUp(stat.value, 2000, vis);

  return (
    <div ref={ref} style={{ textAlign: 'center', flex: '1 1 140px' }}>
      <div className="font-heading" style={{
        fontSize: 'clamp(32px, 4vw, 48px)',
        fontWeight: 800, lineHeight: 1,
        marginBottom: 8,
      }}>
        <span className="gradient-text">{count}{stat.suffix}</span>
      </div>
      <div style={{
        fontSize: 13, color: 'var(--hm-text-3)',
        fontWeight: 500, letterSpacing: '0.03em',
      }}>{stat.label}</div>
    </div>
  );
};

const StatsBar = () => {
  return (
    <section className="hm-stats-bar" style={{
      position: 'relative', zIndex: 1,
      borderTop: '1px solid rgba(255,255,255,.04)',
      borderBottom: '1px solid rgba(255,255,255,.04)',
    }}>
      <div style={{
        maxWidth: 1000, margin: '0 auto',
        padding: '64px 24px',
        display: 'flex', gap: 40, flexWrap: 'wrap',
        justifyContent: 'center',
      }}>
        {STATS.map((s, i) => <StatItem key={i} stat={s} />)}
      </div>
    </section>
  );
};

/* ── CTA Banner ─────────────────────────────── */
const CTABanner = () => {
  const [ref, vis] = useScrollReveal();

  return (
    <section style={{ position: 'relative', zIndex: 1 }}>
      <div className="hm-section" style={{ paddingBottom: 60 }}>
        <div
          ref={ref}
          className={`hm-reveal ${vis ? 'visible' : ''} hm-cta-banner`}
          style={{
            position: 'relative', overflow: 'hidden',
            borderRadius: 24,
            background: 'linear-gradient(135deg, rgba(37,99,235,.12), rgba(124,58,237,.08))',
            border: '1px solid rgba(37,99,235,.15)',
            padding: 'clamp(40px, 6vw, 80px)',
            textAlign: 'center',
          }}
        >
          {/* Background glow */}
          <div style={{
            position: 'absolute', top: '-50%', left: '50%', transform: 'translateX(-50%)',
            width: 600, height: 600, borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(37,99,235,.12), transparent 70%)',
            filter: 'blur(40px)', pointerEvents: 'none',
          }}></div>

          <div style={{ position: 'relative', zIndex: 1 }}>
            <div className="hm-badge" style={{ marginBottom: 24 }}>
              <HMIcon name="zap" size={14} />
              Ready to Begin?
            </div>

            <h2 className="font-heading" style={{
              fontSize: 'clamp(26px, 4vw, 46px)',
              fontWeight: 800, lineHeight: 1.15,
              marginBottom: 20, letterSpacing: '-0.02em',
            }}>
              Let's Build Something{' '}
              <span className="gradient-text">Extraordinary</span>
            </h2>

            <p style={{
              fontSize: 'clamp(14px, 1.6vw, 17px)',
              color: 'var(--hm-text-2)', lineHeight: 1.7,
              maxWidth: 520, margin: '0 auto 36px',
            }}>
              Whether you're starting from scratch or scaling to the next level,
              Happie Max is your unfair advantage. Let's talk.
            </p>

            <div style={{ display: 'flex', gap: 16, justifyContent: 'center', flexWrap: 'wrap' }}>
              <a href="#contact" className="hm-btn-primary hm-cta-btn" style={{ fontSize: 16, padding: '16px 40px' }}>
                Start Your Project
                <HMIcon name="arrowRight" size={18} strokeWidth={2.5} />
              </a>
              <a href="mailto:contacthappiemax@gmail.com" className="hm-btn-secondary hm-cta-btn" style={{ fontSize: 16, padding: '16px 40px' }}>
                contacthappiemax@gmail.com
              </a>
            </div>
            <style>{`
              @media (max-width: 600px) {
                .hm-cta-btn { width: 100%; justify-content: center; font-size: 14px !important; padding: 14px 24px !important; }
              }
            `}</style>
          </div>
        </div>
      </div>
    </section>
  );
};

Object.assign(window, { ProcessSection, StatsBar, CTABanner });
