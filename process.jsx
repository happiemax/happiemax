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

const ProcessStep = ({ step, index }) => {
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
  { value: 5, suffix: '+', label: 'Projects Delivered' },
  { value: 100, suffix: '%', label: 'Client Satisfaction' },
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

          <div style={{ position: 'relative', zIndex: 1, textAlign: 'center' }}>
            <div className="hm-badge" style={{ marginBottom: 24, margin: '0 auto 24px', display: 'inline-flex' }}>
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

            {/* Primary buttons */}
            <div style={{ display: 'flex', gap: 16, justifyContent: 'center', flexWrap: 'wrap' }}>
              <a href="#contact" className="hm-btn-primary hm-cta-btn" style={{ fontSize: 16, padding: '16px 40px' }}>
                Start Your Project
                <HMIcon name="arrowRight" size={18} strokeWidth={2.5} />
              </a>
              <a href="mailto:contacthappiemax@gmail.com" className="hm-btn-secondary hm-cta-btn" style={{ fontSize: 16, padding: '16px 40px' }}>
                contacthappiemax@gmail.com
              </a>
            </div>

            {/* Contact numbers + WhatsApp */}
            <div style={{
              display: 'flex', gap: 24, justifyContent: 'center', flexWrap: 'wrap',
              marginTop: 28, paddingTop: 28,
              borderTop: '1px solid rgba(255,255,255,.07)',
            }}>
              {[
                { num: '+919677976609', display: '+91 96779 76609' },
                { num: '+918870042498', display: '+91 88700 42498' },
              ].map(({ num, display }) => (
                <div key={num} style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                  <a
                    href={`tel:${num}`}
                    style={{
                      display: 'inline-flex', alignItems: 'center', gap: 7,
                      fontSize: 15, fontWeight: 600, color: 'var(--hm-text)',
                      textDecoration: 'none', transition: 'color .2s',
                    }}
                    onMouseEnter={(e) => { e.currentTarget.style.color = '#60A5FA'; }}
                    onMouseLeave={(e) => { e.currentTarget.style.color = 'var(--hm-text)'; }}
                  >
                    <svg width={15} height={15} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.61 3.4 2 2 0 0 1 3.6 1.21h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.81a16 16 0 0 0 6.29 6.29l.95-.95a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/>
                    </svg>
                    {display}
                  </a>
                  <a
                    href={`https://wa.me/${num}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    title="Chat on WhatsApp"
                    style={{
                      display: 'inline-flex', alignItems: 'center', gap: 5,
                      fontSize: 12, fontWeight: 600, padding: '4px 10px',
                      borderRadius: 8, textDecoration: 'none',
                      background: 'rgba(37,211,102,.12)',
                      border: '1px solid rgba(37,211,102,.25)',
                      color: '#25D366',
                      transition: 'all .2s',
                    }}
                    onMouseEnter={(e) => { e.currentTarget.style.background = 'rgba(37,211,102,.2)'; }}
                    onMouseLeave={(e) => { e.currentTarget.style.background = 'rgba(37,211,102,.12)'; }}
                  >
                    <svg width={13} height={13} viewBox="0 0 24 24" fill="currentColor">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413z"/>
                    </svg>
                    WhatsApp
                  </a>
                </div>
              ))}
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
