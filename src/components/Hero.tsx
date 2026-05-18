import { Fragment } from 'react';
import { WorldMap } from './WorldMap';
import {
  IconWhatsApp,
  IconArrowRight,
  IconMolecule,
  IconShield,
  IconContainer,
} from './icons';
import { WHATSAPP_URL } from '../lib/whatsapp';

const HEADLINE_SUB = 'conectada ao seu negócio.';
const SUBHEAD =
  'Conectamos empresas brasileiras aos principais fornecedores internacionais — peptídeos, hormônios, APIs, insumos para manipulação e produtos laboratoriais — com agilidade, sigilo e padrão regulatório.';
const CTA_LABEL = 'Solicitar cotação';

interface HeroProps {
  onQuote: () => void;
}

export function Hero({ onQuote }: HeroProps) {
  return (
    <section className="bx-hero" id="topo">
      <div className="bx-hero-grid">
        <div>
          <div className="bx-kicker">
            <span className="dot"></span>
            <span>B2B · Importação Internacional</span>
            <span style={{ opacity: 0.4 }}>/</span>
            <span style={{ color: 'var(--bx-accent)' }}>BR · US · DE · CN · IN · JP</span>
          </div>

          <h1>
            <span className="strike">Matéria-prima</span>{' '}
            <span className="accent">farmacêutica</span>
            <br />
            &amp; <span className="accent">biotecnológica</span>
            <br />
            <span style={{ color: 'var(--bx-white-dim)', fontWeight: 600 }}>{HEADLINE_SUB}</span>
          </h1>

          <p className="bx-sub">{SUBHEAD}</p>

          <div className="bx-cta-row">
            <a
              className="bx-btn bx-btn-primary"
              href={`${WHATSAPP_URL}?text=${encodeURIComponent('Olá BIOXIMPORT, gostaria de uma cotação.')}`}
              target="_blank"
              rel="noopener"
            >
              <span className="sweep"></span>
              <IconWhatsApp size={20} />
              Falar no WhatsApp
            </a>
            <button className="bx-btn bx-btn-neon" onClick={onQuote}>
              <span className="sweep"></span>
              {CTA_LABEL}
              <IconArrowRight size={18} />
            </button>
          </div>

          <div className="bx-stats">
            <Stat n="24" plus unit="h" l="Resposta de Cotação" />
            <Stat n="40" plus l="Países / Fornecedores" />
            <Stat n="100" plus unit="%" l="Conformidade Regulatória" />
            <Stat n="ISO" l="Padrão Internacional" />
          </div>
        </div>

        <div style={{ position: 'relative' }}>
          <HeroVisual />

          <div className="bx-float-chip" style={{ top: '-28px', left: '6%' }}>
            <span className="ic"><IconMolecule size={14} /></span>
            API · GMP CERTIFIED
          </div>
          <div className="bx-float-chip" style={{ bottom: '10%', right: '-12px', animationDelay: '1.4s' }}>
            <span className="ic"><IconShield size={14} /></span>
            ANVISA · COFINS · RDC
          </div>
          <div className="bx-float-chip" style={{ top: '32%', left: '-18px', animationDelay: '2.8s' }}>
            <span className="ic"><IconContainer size={14} /></span>
            COLD CHAIN · 2-8°C
          </div>
        </div>
      </div>

      <div className="marquee">
        <div className="marquee-track">
          {Array.from({ length: 2 }).map((_, k) => (
            <Fragment key={k}>
              <span className="hi">Peptídeos</span><span className="sep">◆</span>
              <span>Hormônios</span><span className="sep">◆</span>
              <span className="hi">APIs Farmacêuticos</span><span className="sep">◆</span>
              <span>Excipientes</span><span className="sep">◆</span>
              <span className="hi">Insumos para Manipulação</span><span className="sep">◆</span>
              <span>Reagentes Laboratoriais</span><span className="sep">◆</span>
              <span className="hi">Biotecnológicos</span><span className="sep">◆</span>
              <span>Cold Chain Logistics</span><span className="sep">◆</span>
              <span className="hi">Importação Sob Demanda</span><span className="sep">◆</span>
            </Fragment>
          ))}
        </div>
      </div>
    </section>
  );
}

interface StatProps { n: string; plus?: boolean; unit?: string; l: string }

function Stat({ n, plus, unit, l }: StatProps) {
  return (
    <div className="bx-stat">
      <div className="n">
        {n}
        {plus && <span className="plus">+</span>}
        {unit && <span className="unit">{unit}</span>}
      </div>
      <div className="l">{l}</div>
    </div>
  );
}

function HeroVisual() {
  return (
    <div className="bx-hero-vis">
      <div className="vis-label">
        <span>GLOBAL TRADE NETWORK</span>
        <span className="liv">LIVE</span>
      </div>
      <div className="vis-meta">
        <span>v · 26.05</span>
        <span>UTC -3</span>
      </div>

      <div className="scan"></div>

      <div className="map-wrap">
        <WorldMap />
      </div>

      <div className="plane-wrap">
        <div className="plane">
          <svg width="38" height="38" viewBox="0 0 24 24" fill="currentColor">
            <path d="M21 16v-2l-8-5V3.5c0-.83-.67-1.5-1.5-1.5S10 2.67 10 3.5V9l-8 5v2l8-2.5V19l-2 1.5V22l3.5-1 3.5 1v-1.5L13 19v-5.5l8 2.5z"/>
          </svg>
        </div>
      </div>

      <div className="bx-tele">
        <div className="cell">
          <div className="lbl">Em trânsito</div>
          <div className="val">14 <span className="u">SKUs</span> <span className="ok">▲ 3</span></div>
        </div>
        <div className="cell">
          <div className="lbl">Cotações 24h</div>
          <div className="val">37 <span className="u">req.</span> <span className="ok">▲ 12</span></div>
        </div>
        <div className="cell">
          <div className="lbl">Lead time médio</div>
          <div className="val">9–14 <span className="u">dias</span></div>
        </div>
      </div>
    </div>
  );
}
