/* ═══════════════════════════════════════════════════
   Happie Max — App Shell v2
   Restructured: Hero → Marquee → Services →
   Process → Stats → CTA → Footer
   ═══════════════════════════════════════════════════ */

const App = () => {
  return (
    <>
      <ParticleCanvas />
      <Navbar />

      <main style={{ position: 'relative', zIndex: 1 }}>
        <HeroSection />
        <MarqueeSection />
        <TechStackSection />
        <ServicesSection />
        <TransformMatrix />
        <ProcessSection />
        <TestimonialsSection />
        <StatsBar />
        <CTABanner />
      </main>

      <FooterSection />
    </>
  );
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(React.createElement(App));
