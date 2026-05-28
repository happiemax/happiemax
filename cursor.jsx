/* ═══════════════════════════════════════════════════
   Happie Max — Custom Cursor
   Branded glowing dot + lagging ring, hides on mobile
   ═══════════════════════════════════════════════════ */

const CustomCursor = () => {
  const dotRef  = React.useRef(null);
  const ringRef = React.useRef(null);
  const mouse   = React.useRef({ x: -200, y: -200 });
  const ring    = React.useRef({ x: -200, y: -200 });
  const hovered = React.useRef(false);
  const rafId   = React.useRef(null);

  React.useEffect(() => {
    // No-op on touch devices
    if (window.matchMedia('(pointer: coarse)').matches) return;

    const onMove = (e) => { mouse.current = { x: e.clientX, y: e.clientY }; };
    const onOver = (e) => { hovered.current = !!e.target.closest('a, button'); };

    const tick = () => {
      const { x, y } = mouse.current;
      const r = ring.current;

      // Ring lerps toward cursor with slight lag
      r.x += (x - r.x) * 0.13;
      r.y += (y - r.y) * 0.13;

      const ds = hovered.current ? 2.2 : 1;
      const rs = hovered.current ? 1.6 : 1;

      if (dotRef.current)  dotRef.current.style.transform  = `translate(${x - 4}px, ${y - 4}px) scale(${ds})`;
      if (ringRef.current) ringRef.current.style.transform = `translate(${r.x - 18}px, ${r.y - 18}px) scale(${rs})`;

      rafId.current = requestAnimationFrame(tick);
    };

    window.addEventListener('mousemove', onMove);
    window.addEventListener('mouseover', onOver);
    rafId.current = requestAnimationFrame(tick);

    return () => {
      window.removeEventListener('mousemove', onMove);
      window.removeEventListener('mouseover', onOver);
      cancelAnimationFrame(rafId.current);
    };
  }, []);

  return (
    <>
      <style>{`*, *::before, *::after { cursor: none !important; }`}</style>

      {/* Glowing dot — snaps to cursor exactly */}
      <div ref={dotRef} style={{
        position: 'fixed', top: 0, left: 0, zIndex: 999999,
        width: 8, height: 8, borderRadius: '50%',
        background: 'linear-gradient(135deg, #2563EB, #7C3AED)',
        boxShadow: '0 0 10px rgba(37,99,235,.9), 0 0 26px rgba(124,58,237,.5)',
        pointerEvents: 'none', willChange: 'transform',
        transition: 'transform .1s ease-out',
      }} />

      {/* Soft ring — lags behind */}
      <div ref={ringRef} style={{
        position: 'fixed', top: 0, left: 0, zIndex: 999998,
        width: 36, height: 36, borderRadius: '50%',
        border: '1.5px solid rgba(99,102,241,.5)',
        background: 'rgba(37,99,235,.03)',
        pointerEvents: 'none', willChange: 'transform',
        transition: 'transform .06s linear',
      }} />
    </>
  );
};

Object.assign(window, { CustomCursor });
