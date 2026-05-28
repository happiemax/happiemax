/* ═══════════════════════════════════════════════════
   Happie Max — Interactive Particle Canvas
   Mouse-reactive particle field with connections
   ═══════════════════════════════════════════════════ */

const ParticleCanvas = () => {
  const canvasRef = React.useRef(null);
  const mouseRef = React.useRef({ x: -9999, y: -9999 });
  const particlesRef = React.useRef([]);
  const frameRef = React.useRef(0);

  React.useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    let raf;
    let W, H;

    const resize = () => {
      W = canvas.width = window.innerWidth;
      H = canvas.height = window.innerHeight;
    };

    const COUNT = Math.min(100, Math.floor(window.innerWidth / 16));
    const COLORS = ['#2563EB', '#7C3AED', '#38BDF8', '#6366F1'];

    const init = () => {
      const arr = [];
      for (let i = 0; i < COUNT; i++) {
        arr.push({
          x: Math.random() * W,
          y: Math.random() * H,
          vx: (Math.random() - 0.5) * 0.4,
          vy: (Math.random() - 0.5) * 0.4 - 0.15,
          r: Math.random() * 2 + 0.8,
          color: COLORS[Math.floor(Math.random() * COLORS.length)],
          alpha: Math.random() * 0.45 + 0.15,
          phase: Math.random() * Math.PI * 2,
        });
      }
      particlesRef.current = arr;
    };

    const draw = () => {
      ctx.clearRect(0, 0, W, H);
      const pts = particlesRef.current;
      const m = mouseRef.current;
      const t = frameRef.current++ * 0.008;
      const isLight = document.body.classList.contains('light-theme');
      const alphaScale = isLight ? 0.80 : 1;
      const lineAlphaScale = isLight ? 3.0 : 1;
      const lightColors = { '#2563EB': '#3B82F6', '#7C3AED': '#8B5CF6', '#38BDF8': '#0EA5E9', '#6366F1': '#6366F1' };

      for (let i = 0; i < pts.length; i++) {
        const p = pts[i];

        // Sinusoidal drift
        p.x += p.vx + Math.sin(t + p.phase) * 0.12;
        p.y += p.vy + Math.cos(t + p.phase * 1.3) * 0.08;

        // Mouse repulsion
        const dx = p.x - m.x;
        const dy = p.y - m.y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < 160 && dist > 0) {
          const force = (160 - dist) / 160 * 0.6;
          p.vx += (dx / dist) * force;
          p.vy += (dy / dist) * force;
        }

        // Damping
        p.vx *= 0.985;
        p.vy *= 0.985;

        // Wrap
        if (p.x < -10) p.x = W + 10;
        if (p.x > W + 10) p.x = -10;
        if (p.y < -10) p.y = H + 10;
        if (p.y > H + 10) p.y = -10;

        // Draw particle
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = isLight ? (lightColors[p.color] || p.color) : p.color;
        ctx.globalAlpha = Math.min(p.alpha * alphaScale, 0.85);
        ctx.fill();

        // Connections (check subset to save perf)
        for (let j = i + 1; j < pts.length; j++) {
          const q = pts[j];
          const cx = p.x - q.x;
          const cy = p.y - q.y;
          const cd = cx * cx + cy * cy;
          if (cd < 12100) { // 110^2 — shorter reach = fewer clustered lines
            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(q.x, q.y);
            ctx.strokeStyle = isLight ? (lightColors[p.color] || '#1E3A8A') : p.color;
            ctx.globalAlpha = Math.min((1 - cd / 12100) * 0.1 * lineAlphaScale, 0.35);
            ctx.lineWidth = 0.6;
            ctx.stroke();
          }
        }
      }
      ctx.globalAlpha = 1;
      raf = requestAnimationFrame(draw);
    };

    const onMove = (e) => {
      mouseRef.current = { x: e.clientX, y: e.clientY };
    };
    const onLeave = () => {
      mouseRef.current = { x: -9999, y: -9999 };
    };

    resize();
    init();
    draw();

    window.addEventListener('resize', () => { resize(); init(); });
    window.addEventListener('mousemove', onMove);
    window.addEventListener('mouseleave', onLeave);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener('resize', resize);
      window.removeEventListener('mousemove', onMove);
      window.removeEventListener('mouseleave', onLeave);
    };
  }, []);

  return React.createElement('canvas', {
    ref: canvasRef,
    style: {
      position: 'fixed', inset: 0,
      width: '100%', height: '100%',
      pointerEvents: 'none', zIndex: 0,
      maskImage: 'linear-gradient(to bottom, transparent 0%, rgba(0,0,0,.5) 15%, #000 32%)',
      WebkitMaskImage: 'linear-gradient(to bottom, transparent 0%, rgba(0,0,0,.5) 15%, #000 32%)',
    }
  });
};

Object.assign(window, { ParticleCanvas });
