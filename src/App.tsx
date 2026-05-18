import { useEffect } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { SobreSection } from './components/sections/SobreSection';
import { AreasSection } from './components/sections/AreasSection';
import { FluxoSection } from './components/sections/FluxoSection';
import { DiferenciaisSection } from './components/sections/DiferenciaisSection';
import { QuoteForm } from './components/QuoteForm';
import { Footer } from './components/Footer';
import { FloatingWA } from './components/FloatingWA';

function scrollToQuote() {
  const el = document.getElementById('cotacao');
  if (!el) return;
  const top = el.getBoundingClientRect().top + window.scrollY - 80;
  window.scrollTo({ top, behavior: 'smooth' });
}

export function App() {
  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach(e => {
          if (e.isIntersecting) {
            e.target.classList.add('in');
            obs.unobserve(e.target);
          }
        });
      },
      { threshold: 0.08 },
    );
    document.querySelectorAll('.bx-reveal').forEach(el => obs.observe(el));
    return () => obs.disconnect();
  }, []);

  return (
    <div style={{ position: 'relative', zIndex: 1 }}>
      <Header onQuote={scrollToQuote} />
      <main>
        <Hero onQuote={scrollToQuote} />
        <SobreSection />
        <AreasSection />
        <FluxoSection />
        <DiferenciaisSection />
        <QuoteForm />
      </main>
      <Footer />
      <FloatingWA />
    </div>
  );
}
