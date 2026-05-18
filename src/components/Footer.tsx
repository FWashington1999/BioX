import { useMemo } from 'react';
import {
  IconAtom,
  IconInstagram,
  IconWhatsApp,
  IconMail,
} from './icons';
import { WHATSAPP_URL } from '../lib/whatsapp';

export function Footer() {
  return (
    <footer className="bx-foot">
      <div className="grid">
        <div className="brand">
          <a href="#topo" className="bx-logo" style={{ marginBottom: 16 }}>
            <span className="mark"><IconAtom size={20} /></span>
            <span className="name">BIO<b>X</b>IMPORT</span>
          </a>
          <p>
            Importação internacional de matéria-prima farmacêutica e biotecnológica.
            Conectando qualidade ao seu negócio.
          </p>
          <div className="channels">
            <a className="channel" href="https://instagram.com/bioximport" target="_blank" rel="noopener" aria-label="Instagram"><IconInstagram size={18} /></a>
            <a className="channel" href={WHATSAPP_URL} target="_blank" rel="noopener" aria-label="WhatsApp"><IconWhatsApp size={18} /></a>
            <a className="channel" href="mailto:contato@bioximport.com.br" aria-label="E-mail"><IconMail size={18} /></a>
          </div>
        </div>

        <div>
          <h6>Navegação</h6>
          <a href="#sobre">Sobre</a>
          <a href="#areas">Áreas de atuação</a>
          <a href="#fluxo">Fluxo de funcionamento</a>
          <a href="#diferenciais">Diferenciais</a>
          <a href="#cotacao">Solicitar cotação</a>
        </div>

        <div>
          <h6>Contato</h6>
          <a href={WHATSAPP_URL} target="_blank" rel="noopener">+55 (00) 0000-0000</a>
          <a href="mailto:contato@bioximport.com.br">contato@bioximport.com.br</a>
          <a href="https://instagram.com/bioximport" target="_blank" rel="noopener">@bioximport</a>
          <a href="#" style={{ color: 'var(--bx-muted)', cursor: 'default' }}>São Paulo · SP · Brasil</a>
        </div>

        <div>
          <h6>WhatsApp direto</h6>
          <div className="qr"><FakeQR /></div>
          <div className="qr-label">Escaneie · cotação rápida</div>
        </div>
      </div>

      <div className="legal">
        <div>© 2026 BIOXIMPORT · CNPJ 00.000.000/0001-00 · Todos os direitos reservados.</div>
        <div>Site institucional · v1.0 · <span style={{ color: 'var(--bx-accent)' }}>● online</span></div>
      </div>
    </footer>
  );
}

function FakeQR() {
  const N = 21;
  const cells = useMemo(() => {
    const out: boolean[] = [];
    let seed = 7;
    const rnd = () => {
      seed = (seed * 9301 + 49297) % 233280;
      return seed / 233280;
    };
    for (let y = 0; y < N; y++) {
      for (let x = 0; x < N; x++) {
        out.push(rnd() > 0.5);
      }
    }
    return out;
  }, []);
  const isFinder = (x: number, y: number) => {
    const inBox = (bx: number, by: number) => x >= bx && x < bx + 7 && y >= by && y < by + 7;
    return inBox(0, 0) || inBox(N - 7, 0) || inBox(0, N - 7);
  };
  const finderFill = (x: number, y: number): boolean | null => {
    if (!isFinder(x, y)) return null;
    const fx = x < 7 ? 0 : N - 7;
    const fy = y < 7 ? 0 : N - 7;
    const lx = x - fx, ly = y - fy;
    const onOuter = lx === 0 || lx === 6 || ly === 0 || ly === 6;
    const inInner = lx >= 2 && lx <= 4 && ly >= 2 && ly <= 4;
    return onOuter || inInner;
  };
  return (
    <svg viewBox={`0 0 ${N} ${N}`}>
      {cells.map((on, i) => {
        const x = i % N, y = Math.floor(i / N);
        const f = finderFill(x, y);
        const fill = f !== null ? f : on;
        return fill ? <rect key={i} x={x} y={y} width="1" height="1" fill="#0B1426" /> : null;
      })}
    </svg>
  );
}
