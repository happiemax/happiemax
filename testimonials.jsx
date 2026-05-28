/* ═══════════════════════════════════════════════════
   Happie Max — Testimonials / Client Stories
   Real client projects — placeholder quotes for now
   ═══════════════════════════════════════════════════ */

const TESTIMONIALS = [
  {
    quote: "Happie Max completely transformed how we run our hospital. Patient records, appointment scheduling, billing — everything is now automated and running seamlessly. Our staff spends time on patients, not paperwork.",
    name: "Kumudha Hospital",
    role: "Healthcare Operations",
    project: 'Hospital Management System',
    projectUrl: 'https://kumudha-hms.vercel.app/',
    accent: '#2563EB',
    initials: 'KH',
  },
  {
    quote: "We needed a travel booking platform that handled complex multi-city itineraries and real-time pricing without breaking. Happie Max built exactly that — clean, fast, and our customers love it.",
    name: "Travel Client",
    role: "Travel & Hospitality",
    project: 'Travel Booking Platform',
    projectUrl: null,
    accent: '#7C3AED',
    initials: 'TC',
  },
  {
    quote: "The money management app they shipped for Android is polished and genuinely useful. The AI-powered spending insights set it apart from everything else in the market — users keep coming back.",
    name: "Brush Expense",
    role: "FinTech / Mobile",
    project: 'Money Manager App',
    projectUrl: null,
    accent: '#10B981',
    initials: 'BE',
  },
];

const StarRating = ({ color }) => (
  <div style={{ display: 'flex', gap: 3 }}>
    {[...Array(5)].map((_, i) => (
      <svg key={i} width={15} height={15} viewBox="0 0 24 24" fill={color} style={{ opacity: 0.85 }}>
        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
      </svg>
    ))}
  </div>
);

const TestimonialCard = ({ data, index }) => {
  const [ref, vis] = useScrollReveal();
  const theme = useTheme();
  const isLight = theme === 'light';

  return (
    <div
      ref={ref}
      className={`hm-reveal ${vis ? 'visible' : ''}`}
      style={{
        transitionDelay: `${index * 0.12}s`,
        background: isLight
          ? 'rgba(255,255,255,0.92)'
          : 'linear-gradient(145deg, rgba(14,19,34,.96), rgba(10,14,24,.82))',
        border: `1px solid ${isLight ? 'rgba(0,0,0,0.07)' : 'rgba(255,255,255,0.06)'}`,
        borderRadius: 20,
        padding: 32,
        display: 'flex', flexDirection: 'column', gap: 20,
        backdropFilter: isLight ? 'blur(12px)' : 'none',
        WebkitBackdropFilter: isLight ? 'blur(12px)' : 'none',
        boxShadow: isLight
          ? '0 2px 24px rgba(0,0,0,.07)'
          : '0 4px 28px rgba(0,0,0,.32)',
      }}
    >
      {/* Stars */}
      <StarRating color={data.accent} />

      {/* Quote */}
      <p style={{
        fontSize: 14.5, lineHeight: 1.78,
        color: 'var(--hm-text-2)', flex: 1,
        fontStyle: 'italic',
        margin: 0,
      }}>
        "{data.quote}"
      </p>

      {/* Divider */}
      <div style={{
        height: 1,
        background: `linear-gradient(90deg, ${data.accent}20, transparent)`,
      }} />

      {/* Footer row */}
      <div style={{ display: 'flex', alignItems: 'center', gap: 14 }}>
        {/* Avatar */}
        <div style={{
          width: 44, height: 44, borderRadius: '50%', flexShrink: 0,
          background: `linear-gradient(135deg, ${data.accent}28, ${data.accent}14)`,
          border: `1.5px solid ${data.accent}35`,
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          fontSize: 13, fontWeight: 800, color: data.accent,
          letterSpacing: '0.03em',
        }}>{data.initials}</div>

        <div style={{ flex: 1, minWidth: 0 }}>
          <div className="font-heading" style={{
            fontSize: 14, fontWeight: 700,
            color: 'var(--hm-text)', marginBottom: 2,
          }}>{data.name}</div>
          <div style={{ fontSize: 12, color: 'var(--hm-text-3)' }}>{data.role}</div>
        </div>

        {/* Project tag / live link */}
        {data.projectUrl ? (
          <a
            href={data.projectUrl}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: 'inline-flex', alignItems: 'center', gap: 5,
              fontSize: 11, fontWeight: 700,
              padding: '5px 12px', borderRadius: 8,
              background: `${data.accent}12`,
              border: `1px solid ${data.accent}28`,
              color: data.accent,
              textDecoration: 'none',
              letterSpacing: '0.03em',
              whiteSpace: 'nowrap',
              transition: 'all .2s',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = `${data.accent}22`;
              e.currentTarget.style.borderColor = `${data.accent}50`;
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = `${data.accent}12`;
              e.currentTarget.style.borderColor = `${data.accent}28`;
            }}
          >
            View Live
            <svg width={10} height={10} viewBox="0 0 24 24" fill="none"
              stroke="currentColor" strokeWidth={2.5} strokeLinecap="round" strokeLinejoin="round">
              <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6" />
              <polyline points="15 3 21 3 21 9" />
              <line x1="10" y1="14" x2="21" y2="3" />
            </svg>
          </a>
        ) : (
          <span style={{
            fontSize: 11, fontWeight: 600,
            padding: '5px 12px', borderRadius: 8,
            background: `${data.accent}0C`,
            border: `1px solid ${data.accent}20`,
            color: data.accent,
            letterSpacing: '0.03em',
            whiteSpace: 'nowrap',
          }}>{data.project}</span>
        )}
      </div>
    </div>
  );
};

const TestimonialsSection = () => {
  return (
    <section style={{ position: 'relative', zIndex: 1 }}>
      <div className="hm-section">
        <SectionHeader
          badge="Client Stories"
          title={<span>Real Results, <span className="gradient-text">Real Clients</span></span>}
          subtitle="Every project starts with a conversation and ends with a product that changes how a business operates."
        />

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gap: 20,
          }}
          className="hm-testimonials-grid"
        >
          {TESTIMONIALS.map((t, i) => (
            <TestimonialCard key={i} data={t} index={i} />
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .hm-testimonials-grid { grid-template-columns: 1fr 1fr !important; }
        }
        @media (max-width: 580px) {
          .hm-testimonials-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
};

Object.assign(window, { TestimonialsSection });
