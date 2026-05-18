import { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import {
  IconAtom,
  IconArrowRight,
  IconWhatsApp,
  IconMenu,
  IconClose,
} from './icons';
import { WHATSAPP_URL } from '../lib/whatsapp';

interface HeaderProps { onQuote: () => void }

export function Header({ onQuote }: HeaderProps) {
  const [scrolled, setScrolled] = useState(false);
  const [mobile, setMobile] = useState(false);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 30);
    window.addEventListener('scroll', fn, { passive: true });
    fn();
    return () => window.removeEventListener('scroll', fn);
  }, []);

  useEffect(() => {
    document.body.classList.toggle('bx-no-scroll', mobile);
    return () => document.body.classList.remove('bx-no-scroll');
  }, [mobile]);

  return (
    <header className={`bx-nav ${scrolled ? 'scrolled' : ''}`}>
      <a href="#topo" className="bx-logo">
        <span className="mark"><IconAtom size={20} /></span>
        <span className="name">BIO<b>X</b>IMPORT</span>
        <span className="tld">.com.br</span>
      </a>

      <nav className="bx-menu">
        <a href="#sobre">Sobre</a>
        <a href="#areas">Áreas de atuação</a>
        <a href="#fluxo">Fluxo</a>
        <a href="#diferenciais">Diferenciais</a>
        <a href="#cotacao">Contato</a>
      </nav>

      <div className="bx-nav-cta">
        <a
          className="bx-btn bx-btn-neon"
          href="#cotacao"
          onClick={(e) => { e.preventDefault(); onQuote(); }}
          style={{ padding: '10px 16px', fontSize: 13 }}
        >
          <span className="sweep"></span>
          <span className="label-hide">Solicitar cotação</span>
          <IconArrowRight size={14} />
        </a>
        <a
          className="bx-btn bx-btn-primary"
          style={{ padding: '10px 14px', fontSize: 13 }}
          href={WHATSAPP_URL}
          target="_blank"
          rel="noopener"
        >
          <span className="sweep"></span>
          <IconWhatsApp size={16} />
          <span className="label-hide">WhatsApp</span>
        </a>
        <button className="bx-burger" onClick={() => setMobile(true)} aria-label="Abrir menu">
          <IconMenu size={20} />
        </button>
      </div>

      {mobile && createPortal(
        <>
          <div
            className="bx-mobile-backdrop"
            onClick={() => setMobile(false)}
            aria-hidden="true"
          />
          <div className="bx-mobile" role="dialog" aria-modal="true" aria-label="Menu">
            <button className="bx-mobile-close" onClick={() => setMobile(false)} aria-label="Fechar menu">
              <IconClose size={18} />
            </button>
            <a onClick={() => setMobile(false)} href="#sobre">Sobre</a>
            <a onClick={() => setMobile(false)} href="#areas">Áreas de atuação</a>
            <a onClick={() => setMobile(false)} href="#fluxo">Fluxo</a>
            <a onClick={() => setMobile(false)} href="#diferenciais">Diferenciais</a>
            <a onClick={() => setMobile(false)} href="#cotacao">Contato / Cotação</a>
          </div>
        </>,
        document.body,
      )}
    </header>
  );
}
