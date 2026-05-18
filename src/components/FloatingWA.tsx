import { useEffect, useState } from 'react';
import { IconWhatsApp, IconClose } from './icons';
import { WHATSAPP_URL } from '../lib/whatsapp';

export function FloatingWA() {
  const [open, setOpen] = useState(false);
  const [show, setShow] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setShow(true), 1200);
    return () => clearTimeout(t);
  }, []);

  return (
    <div className={`bx-wa ${show ? 'show' : ''}`}>
      <div className={`bx-wa-tip ${show && !open ? 'show' : ''}`}>
        Cotação rápida no WhatsApp
      </div>

      <div className={`bx-wa-pop ${open ? 'open' : ''}`}>
        <button className="close" onClick={() => setOpen(false)} aria-label="Fechar">
          <IconClose size={14} />
        </button>
        <div className="head">
          <div className="av"><IconWhatsApp size={22} /></div>
          <div>
            <h5>BIOXIMPORT · Comercial</h5>
            <div className="stat">● ONLINE · RESPONDE EM ~5 MIN</div>
          </div>
        </div>
        <div className="bx-wa-bubble">
          Olá! Sou da equipe BIOXIMPORT. Sobre qual matéria-prima podemos te ajudar com uma cotação internacional?
          <br />
          <small style={{ marginTop: 6, display: 'block' }}>15:24 ✓✓</small>
        </div>
        <a
          className="cta"
          href={`${WHATSAPP_URL}?text=${encodeURIComponent('Olá BIOXIMPORT, gostaria de uma cotação.')}`}
          target="_blank"
          rel="noopener"
        >
          <IconWhatsApp size={16} /> Iniciar conversa
        </a>
      </div>

      <button className="bx-wa-btn" onClick={() => setOpen(o => !o)} aria-label="WhatsApp">
        {open ? <IconClose size={22} /> : <IconWhatsApp size={28} />}
      </button>
    </div>
  );
}
