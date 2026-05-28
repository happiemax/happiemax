/* ═══════════════════════════════════════════════════
   Happie Max — AI Cognitive Engine Section
   Scroll-triggered immersive simulation
   Terminal console + reactive neural visualization
   ═══════════════════════════════════════════════════ */

const INTAKE_NODES = [
  {
    id: 'codebases',
    label: 'Raw Codebases',
    icon: 'code',
    color: '#2563EB',
    lines: [
      '> scanning repository structure...',
      '> analyzing 2,847 source files across 12 modules',
      '> detecting legacy patterns: jQuery 1.x, PHP 5.4, monolith arch',
      '> mapping dependency graph... 847 packages identified',
      '> flagging 312 security vulnerabilities (94 critical)',
      '> calculating technical debt index: 8.7/10',
      '> generating refactoring blueprint...',
      '> AI architect: recommending microservices migration',
      '> estimated transformation: 6 weeks → production-ready',
      '✓ INTAKE COMPLETE — ready for elevation pipeline',
    ],
  },
  {
    id: 'data',
    label: 'Disorganized Data',
    icon: 'barChart',
    color: '#7C3AED',
    lines: [
      '> connecting to 14 data sources...',
      '> ingesting: Salesforce, HubSpot, Sheets, 3x SQL, 2x NoSQL',
      '> detecting schema conflicts across 847 tables',
      '> data quality score: 23% (critical fragmentation)',
      '> running NLP entity extraction on unstructured fields...',
      '> auto-mapping relationships: 2,341 entities linked',
      '> building unified data lake architecture...',
      '> deploying real-time ETL pipelines',
      '> AI: training predictive model on clean dataset',
      '✓ INTAKE COMPLETE — intelligence layer activated',
    ],
  },
  {
    id: 'funnels',
    label: 'Leaking Funnels',
    icon: 'target',
    color: '#06B6D4',
    lines: [
      '> auditing conversion pipeline...',
      '> current funnel: 12,000 visits → 47 conversions (0.39%)',
      '> heatmap analysis: 78% bounce at pricing page',
      '> detecting 14 UX friction points',
      '> A/B engine: generating 200 variant combinations',
      '> deploying AI personalization layer...',
      '> dynamic pricing model: elasticity score calculated',
      '> retargeting sequences: 8 autonomous flows created',
      '> projected conversion lift: 340%',
      '✓ INTAKE COMPLETE — growth engine deployed',
    ],
  },
  {
    id: 'ideas',
    label: 'Raw Concepts',
    icon: 'rocket',
    color: '#F59E0B',
    lines: [
      '> parsing vision document...',
      '> extracting core value propositions: 3 identified',
      '> market analysis: TAM $4.2B, SAM $890M',
      '> competitive landscape: 12 direct, 34 indirect',
      '> generating product architecture...',
      '> AI: designing optimal tech stack for scale',
      '> wireframes: 47 screens generated in 4.2 seconds',
      '> brand identity: 12 direction concepts synthesized',
      '> MVP roadmap: 8-week sprint plan locked',
      '✓ INTAKE COMPLETE — market-ready blueprint generated',
    ],
  },
  {
    id: 'infra',
    label: 'Legacy Infrastructure',
    icon: 'cloud',
    color: '#EC4899',
    lines: [
      '> scanning infrastructure topology...',
      '> detected: 3 bare-metal servers, 2003-era Windows Server',
      '> uptime last 90 days: 91.2% (target: 99.99%)',
      '> monthly cost: $34,800 (83% overprovisioned)',
      '> security audit: 47 exposed endpoints, no WAF',
      '> designing cloud-native architecture...',
      '> AI: auto-generating Terraform + K8s manifests',
      '> zero-downtime migration plan: 3 phases',
      '> projected cost reduction: 72%',
      '✓ INTAKE COMPLETE — cloud transformation queued',
    ],
  },
];

/* ── Terminal Console ───────────────────────── */
const TerminalConsole = ({ activeNode, isActive }) => {
  const [lines, setLines] = React.useState([]);
  const [cursor, setCursor] = React.useState(true);
  const termRef = React.useRef(null);
  const timerRef = React.useRef(null);
  const theme = useTheme();
  const isLight = theme === 'light';

  React.useEffect(() => {
    if (!isActive || !activeNode) {
      setLines([]);
      return;
    }

    setLines([]);
    let i = 0;
    const node = INTAKE_NODES.find(n => n.id === activeNode);
    if (!node) return;

    clearInterval(timerRef.current);
    timerRef.current = setInterval(() => {
      if (i < node.lines.length) {
        setLines(prev => [...prev, node.lines[i]]);
        i++;
        // Auto-scroll terminal
        if (termRef.current) {
          termRef.current.scrollTop = termRef.current.scrollHeight;
        }
      } else {
        clearInterval(timerRef.current);
      }
    }, 280);

    return () => clearInterval(timerRef.current);
  }, [activeNode, isActive]);

  // Cursor blink
  React.useEffect(() => {
    const t = setInterval(() => setCursor(c => !c), 530);
    return () => clearInterval(t);
  }, []);

  return (
    <div style={{
      borderRadius: 16,
      overflow: 'hidden',
      border: `1px solid ${isLight ? 'rgba(0,0,0,.08)' : 'rgba(255,255,255,.06)'}`,
      background: isLight ? 'rgba(15,23,42,.95)' : 'rgba(5,8,18,.9)',
      backdropFilter: 'blur(12px)',
      height: '100%',
      minHeight: 380,
      display: 'flex',
      flexDirection: 'column',
    }}>
      {/* Terminal titlebar */}
      <div style={{
        display: 'flex', alignItems: 'center', gap: 8,
        padding: '12px 16px',
        borderBottom: '1px solid rgba(255,255,255,.06)',
        background: 'rgba(255,255,255,.02)',
      }}>
        <div style={{ width: 12, height: 12, borderRadius: '50%', background: '#EF4444' }}></div>
        <div style={{ width: 12, height: 12, borderRadius: '50%', background: '#F59E0B' }}></div>
        <div style={{ width: 12, height: 12, borderRadius: '50%', background: '#22C55E' }}></div>
        <span style={{
          marginLeft: 12, fontSize: 12, color: 'rgba(255,255,255,.35)',
          fontFamily: "'SF Mono', 'Fira Code', 'Cascadia Code', monospace",
          letterSpacing: '0.5px',
        }}>happiemax-engine ~/intake</span>
      </div>

      {/* Terminal body */}
      <div
        ref={termRef}
        style={{
          flex: 1, padding: '16px 20px',
          overflowY: 'auto',
          fontFamily: "'SF Mono', 'Fira Code', 'Cascadia Code', 'Courier New', monospace",
          fontSize: 13, lineHeight: 1.8,
        }}
      >
        {!activeNode && (
          <div style={{ color: 'rgba(255,255,255,.3)' }}>
            <span style={{ color: '#22C55E' }}>$</span> select an intake node to begin simulation...
          </div>
        )}
        {lines.map((line, i) => {
          const isComplete = line.startsWith('✓');
          const node = INTAKE_NODES.find(n => n.id === activeNode);
          return (
            <div
              key={`${activeNode}-${i}`}
              style={{
                color: isComplete ? '#22C55E' : (node ? node.color : 'rgba(255,255,255,.7)'),
                opacity: 0,
                animation: 'hmFadeUp .3s ease forwards',
                animationDelay: `${i * 0.05}s`,
                whiteSpace: 'pre-wrap',
                wordBreak: 'break-word',
              }}
            >
              {line}
            </div>
          );
        })}
        {isActive && (
          <span style={{
            color: '#22C55E',
            opacity: cursor ? 1 : 0,
            transition: 'opacity .1s',
          }}>▋</span>
        )}
      </div>
    </div>
  );
};

/* ── Neural Pulse Visualization ─────────────── */
const NeuralVis = ({ activeNode, isActive }) => {
  const canvasRef = React.useRef(null);
  const frameRef = React.useRef(0);
  const intensityRef = React.useRef(0);
  const colorRef = React.useRef('#2563EB');

  React.useEffect(() => {
    if (activeNode) {
      const node = INTAKE_NODES.find(n => n.id === activeNode);
      if (node) colorRef.current = node.color;
    }
  }, [activeNode]);

  React.useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let raf;
    const size = 400;
    canvas.width = size;
    canvas.height = size;
    const cx = size / 2, cy = size / 2;

    const draw = () => {
      const t = frameRef.current++ * 0.012;
      const targetIntensity = isActive && activeNode ? 1 : 0.2;
      intensityRef.current += (targetIntensity - intensityRef.current) * 0.03;
      const intensity = intensityRef.current;
      const color = colorRef.current;

      ctx.clearRect(0, 0, size, size);

      // Parse hex color to RGB
      const r = parseInt(color.slice(1,3), 16);
      const g = parseInt(color.slice(3,5), 16);
      const b = parseInt(color.slice(5,7), 16);

      // Outer pulsing rings
      for (let ring = 0; ring < 5; ring++) {
        const radius = 40 + ring * 32 + Math.sin(t + ring * 0.8) * 8 * intensity;
        const alpha = (0.06 + intensity * 0.12) * (1 - ring * 0.15);
        ctx.beginPath();
        ctx.arc(cx, cy, radius, 0, Math.PI * 2);
        ctx.strokeStyle = `rgba(${r},${g},${b},${alpha})`;
        ctx.lineWidth = 1.5 + intensity * 1;
        ctx.stroke();

        // Orbiting nodes on each ring
        const nodeCount = 2 + ring;
        for (let n = 0; n < nodeCount; n++) {
          const angle = t * (0.3 + ring * 0.1) + (n / nodeCount) * Math.PI * 2;
          const nx = cx + radius * Math.cos(angle);
          const ny = cy + radius * Math.sin(angle);
          const nodeSize = (2 + intensity * 3) * (1 - ring * 0.1);

          ctx.beginPath();
          ctx.arc(nx, ny, nodeSize, 0, Math.PI * 2);
          ctx.fillStyle = `rgba(${r},${g},${b},${0.3 + intensity * 0.5})`;
          ctx.fill();

          // Connection lines to center (only when active)
          if (intensity > 0.3) {
            ctx.beginPath();
            ctx.moveTo(nx, ny);
            ctx.lineTo(cx, cy);
            ctx.strokeStyle = `rgba(${r},${g},${b},${0.03 * intensity})`;
            ctx.lineWidth = 0.5;
            ctx.stroke();
          }
        }
      }

      // Core nucleus — pulsing
      const coreRadius = 20 + Math.sin(t * 2) * 4 * intensity;
      const coreGrad = ctx.createRadialGradient(cx, cy, 0, cx, cy, coreRadius * 2.5);
      coreGrad.addColorStop(0, `rgba(${r},${g},${b},${0.4 + intensity * 0.4})`);
      coreGrad.addColorStop(0.5, `rgba(${r},${g},${b},${0.1 * intensity})`);
      coreGrad.addColorStop(1, `rgba(${r},${g},${b},0)`);
      ctx.fillStyle = coreGrad;
      ctx.beginPath();
      ctx.arc(cx, cy, coreRadius * 2.5, 0, Math.PI * 2);
      ctx.fill();

      // Inner bright core
      ctx.beginPath();
      ctx.arc(cx, cy, coreRadius, 0, Math.PI * 2);
      const innerGrad = ctx.createRadialGradient(cx, cy, 0, cx, cy, coreRadius);
      innerGrad.addColorStop(0, `rgba(255,255,255,${0.2 + intensity * 0.5})`);
      innerGrad.addColorStop(0.5, `rgba(${r},${g},${b},${0.5 + intensity * 0.4})`);
      innerGrad.addColorStop(1, `rgba(${r},${g},${b},${0.1})`);
      ctx.fillStyle = innerGrad;
      ctx.fill();

      // Data pulse waves (when active)
      if (intensity > 0.3) {
        for (let w = 0; w < 3; w++) {
          const waveT = (t * 1.5 + w * 2) % 6;
          const waveR = waveT * 35;
          const waveAlpha = Math.max(0, (1 - waveT / 6) * 0.15 * intensity);
          ctx.beginPath();
          ctx.arc(cx, cy, waveR, 0, Math.PI * 2);
          ctx.strokeStyle = `rgba(${r},${g},${b},${waveAlpha})`;
          ctx.lineWidth = 2;
          ctx.stroke();
        }
      }

      raf = requestAnimationFrame(draw);
    };

    draw();
    return () => cancelAnimationFrame(raf);
  }, [isActive, activeNode]);

  return (
    <div style={{
      display: 'flex', alignItems: 'center', justifyContent: 'center',
      width: '100%', height: '100%', minHeight: 380,
    }}>
      <canvas
        ref={canvasRef}
        style={{
          width: 'min(100%, 400px)',
          height: 'min(100%, 400px)',
        }}
      ></canvas>
    </div>
  );
};

/* ── Main AI Engine Section ─────────────────── */
const AIEngineSection = () => {
  const [activeNode, setActiveNode] = React.useState(null);
  const [sectionVis, setSectionVis] = React.useState(false);
  const sectionRef = React.useRef(null);
  const theme = useTheme();
  const isLight = theme === 'light';

  React.useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) setSectionVis(true); },
      { threshold: 0.15 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  // Auto-cycle through nodes if none selected
  React.useEffect(() => {
    if (activeNode || !sectionVis) return;
    const timer = setTimeout(() => setActiveNode('codebases'), 800);
    return () => clearTimeout(timer);
  }, [sectionVis, activeNode]);

  return (
    <section
      ref={sectionRef}
      style={{
        position: 'relative', zIndex: 1,
        padding: 'clamp(40px, 5vw, 80px) 0',
        overflow: 'hidden',
      }}
    >
      {/* Background accent */}
      <div style={{
        position: 'absolute', top: '50%', left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 800, height: 800, borderRadius: '50%',
        background: `radial-gradient(circle, ${activeNode ? (INTAKE_NODES.find(n => n.id === activeNode)?.color || '#2563EB') + '08' : 'rgba(37,99,235,.04)'}, transparent 70%)`,
        filter: 'blur(60px)',
        transition: 'background 1s ease',
      }}></div>

      <div style={{
        maxWidth: 1440, margin: '0 auto',
        padding: '0 48px',
      }}>
        {/* Section header */}
        <div
          className={`hm-reveal ${sectionVis ? 'visible' : ''}`}
          style={{ textAlign: 'center', marginBottom: 48 }}
        >
          <div className="hm-badge" style={{ marginBottom: 18 }}>
            <HMIcon name="cpu" size={14} />
            AI Cognitive Engine
          </div>
          <h2 className="font-heading" style={{
            fontSize: 'clamp(26px, 4vw, 48px)',
            fontWeight: 800, lineHeight: 1.12,
            letterSpacing: '-0.02em', marginBottom: 16,
          }}>
            Watch Our Engine{' '}
            <span className="gradient-text">Process Your Business</span>
          </h2>
          <p style={{
            fontSize: 'clamp(14px, 1.6vw, 17px)',
            color: 'var(--hm-text-2)', lineHeight: 1.7,
            maxWidth: 560, margin: '0 auto',
          }}>
            Select an intake node below to simulate our AI analyzing and
            transforming a real business challenge in real-time.
          </p>
        </div>

        {/* Intake node selector */}
        <div
          className={`hm-reveal ${sectionVis ? 'visible' : ''}`}
          style={{
            display: 'flex', gap: 10, justifyContent: 'center',
            flexWrap: 'wrap', marginBottom: 36,
            transitionDelay: '0.15s',
          }}
        >
          {INTAKE_NODES.map((node) => {
            const isSelected = activeNode === node.id;
            return (
              <button
                key={node.id}
                onClick={() => setActiveNode(node.id)}
                style={{
                  display: 'flex', alignItems: 'center', gap: 8,
                  padding: '10px 20px', borderRadius: 12,
                  border: `1px solid ${isSelected ? node.color + '50' : (isLight ? 'rgba(0,0,0,.08)' : 'rgba(255,255,255,.08)')}`,
                  background: isSelected
                    ? `${node.color}12`
                    : (isLight ? 'rgba(255,255,255,.6)' : 'rgba(255,255,255,.03)'),
                  color: isSelected ? node.color : 'var(--hm-text-2)',
                  fontSize: 13, fontWeight: 600,
                  fontFamily: "'Plus Jakarta Sans', sans-serif",
                  cursor: 'pointer',
                  transition: 'all .3s',
                  backdropFilter: 'blur(8px)',
                  WebkitBackdropFilter: 'blur(8px)',
                  boxShadow: isSelected ? `0 0 20px ${node.color}15` : 'none',
                }}
              >
                <HMIcon name={node.icon} size={16} strokeWidth={2} />
                {node.label}
              </button>
            );
          })}
        </div>

        {/* Split layout: Terminal + Neural Vis */}
        <div
          className={`hm-reveal ${sectionVis ? 'visible' : ''} hm-engine-grid`}
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: 24,
            transitionDelay: '0.25s',
          }}
        >
          <div className="hm-engine-terminal">
            <TerminalConsole activeNode={activeNode} isActive={sectionVis} />
          </div>
          <div className="hm-engine-vis">
            <NeuralVis activeNode={activeNode} isActive={sectionVis} />
          </div>
        </div>

        {/* Status bar */}
        <div
          className={`hm-reveal ${sectionVis ? 'visible' : ''}`}
          style={{
            display: 'flex', justifyContent: 'center', gap: 40,
            marginTop: 36, flexWrap: 'wrap',
            transitionDelay: '0.35s',
          }}
        >
          {[
            { label: 'Processing Speed', value: '< 0.8ms', icon: 'zap' },
            { label: 'Data Sources', value: '200+', icon: 'layers' },
            { label: 'Accuracy Rate', value: '99.7%', icon: 'target' },
          ].map((stat) => (
            <div key={stat.label} style={{
              display: 'flex', alignItems: 'center', gap: 10,
              padding: '8px 16px', borderRadius: 10,
              background: isLight ? 'rgba(255,255,255,.5)' : 'rgba(255,255,255,.03)',
              border: `1px solid ${isLight ? 'rgba(0,0,0,.05)' : 'rgba(255,255,255,.05)'}`,
              backdropFilter: 'blur(8px)',
            }}>
              <HMIcon name={stat.icon} size={16} className="gradient-text" style={{ color: '#60A5FA' }} />
              <span style={{ fontSize: 13, fontWeight: 700, color: 'var(--hm-text)' }}>{stat.value}</span>
              <span style={{ fontSize: 12, color: 'var(--hm-text-3)' }}>{stat.label}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Responsive */}
      <style>{`
        @media (max-width: 768px) {
          .hm-engine-grid {
            grid-template-columns: 1fr !important;
          }
          .hm-engine-terminal { order: 2; }
          .hm-engine-vis { order: 1; }
        }
      `}</style>
    </section>
  );
};

Object.assign(window, { AIEngineSection });
