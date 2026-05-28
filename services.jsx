/* ═══════════════════════════════════════════════════
   Happie Max — Services Grid
   6 clear service cards showing full capability
   ═══════════════════════════════════════════════════ */

const SERVICES = [
  {
    icon: 'brain',
    title: 'AI & Machine Learning',
    desc: 'Custom model training, LLM integration, intelligent agents, computer vision, and predictive analytics — purpose-built for your domain.',
    accent: '#2563EB',
    features: ['Custom AI Models', 'LLM Integration', 'Predictive Analytics'],
  },
  {
    icon: 'globe',
    title: 'Web & Mobile Ecosystems',
    desc: 'Full-stack web platforms, native mobile apps, PWAs, and cross-platform systems — from MVP to enterprise-grade.',
    accent: '#7C3AED',
    features: ['React / Next.js', 'Native iOS & Android', 'Enterprise Dashboards'],
  },
  {
    icon: 'cloud',
    title: 'Cloud & Infrastructure',
    desc: 'Scalable cloud architecture, DevOps pipelines, zero-downtime deployments, and security hardened for enterprise compliance.',
    accent: '#06B6D4',
    features: ['AWS / Azure / GCP', 'CI/CD Pipelines', 'Cyber Security'],
  },
  {
    icon: 'shoppingCart',
    title: 'E-Commerce & Digital Commerce',
    desc: 'AI-powered storefronts, payment ecosystems, marketplace platforms, and conversion-optimization engines.',
    accent: '#10B981',
    features: ['Shopify / Custom', 'Payment Integration', 'AI Personalization'],
  },
  {
    icon: 'palette',
    title: 'Brand & Creative',
    desc: 'Complete identity systems, UI/UX design, motion graphics, and immersive visual assets that command attention.',
    accent: '#EC4899',
    features: ['Brand Identity', 'UI/UX Design', 'Motion & 3D'],
  },
  {
    icon: 'settings',
    title: 'Automation & Integration',
    desc: 'Autonomous workflow engines, API orchestration, legacy modernization, and intelligent process automation.',
    accent: '#F59E0B',
    features: ['Workflow Automation', 'API Development', 'Legacy Migration'],
  },
];

const ServiceCard = ({ data, index }) => {
  const [hovered, setHovered] = React.useState(false);

  return (
    <GlowCard glowColor={data.accent} delay={index}>
      <div
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        style={{ padding: 32, display: 'flex', flexDirection: 'column', minHeight: 300 }}
      >
        {/* Icon */}
        <div style={{
          width: 52, height: 52, borderRadius: 14,
          background: `${data.accent}10`,
          border: `1px solid ${data.accent}20`,
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          color: data.accent, marginBottom: 24,
          transition: 'all .35s',
          boxShadow: hovered ? `0 0 20px ${data.accent}30` : 'none',
        }}>
          <HMIcon name={data.icon} size={24} />
        </div>

        {/* Title */}
        <h3 className="font-heading" style={{
          fontSize: 'clamp(17px, 2vw, 21px)',
          fontWeight: 700, lineHeight: 1.3, marginBottom: 14,
        }}>{data.title}</h3>

        {/* Description */}
        <p style={{
          fontSize: 14, lineHeight: 1.7,
          color: 'var(--hm-text-2)', marginBottom: 24,
          flex: 1,
        }}>{data.desc}</p>

        {/* Feature tags */}
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
          {data.features.map((f) => (
            <span key={f} style={{
              fontSize: 11, fontWeight: 600,
              padding: '5px 12px', borderRadius: 8,
              background: `${data.accent}08`,
              border: `1px solid ${data.accent}18`,
              color: data.accent,
              letterSpacing: '0.02em',
            }}>{f}</span>
          ))}
        </div>
      </div>
    </GlowCard>
  );
};

const ServicesSection = () => {
  return (
    <section id="services" style={{ position: 'relative', zIndex: 1 }}>
      <div style={{
        position: 'absolute', top: '30%', right: '-5%',
        width: 500, height: 500, borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(124,58,237,.05), transparent 70%)',
        filter: 'blur(60px)',
      }}></div>

      <div className="hm-section">
        <SectionHeader
          badge="What We Do"
          title={<span>Full-Spectrum <span className="gradient-text">Digital Mastery</span></span>}
          subtitle="We don't specialize in one thing — we master everything. Whatever your vision requires, we have the expertise to build it."
        />

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)',
          gap: 20,
        }} className="hm-services-grid">
          {SERVICES.map((s, i) => (
            <ServiceCard key={i} data={s} index={i} />
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .hm-services-grid { grid-template-columns: repeat(2, 1fr) !important; }
        }
        @media (max-width: 580px) {
          .hm-services-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
};

Object.assign(window, { ServicesSection });
