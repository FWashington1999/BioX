import type { ComponentType } from 'react';
import { SectionHead } from './SectionHead';
import {
  IconGlobe,
  IconShield,
  IconLock,
  IconBolt,
  type IconProps,
} from '../icons';

interface PillarProps {
  Ic: ComponentType<IconProps>;
  t: string;
  d: string;
  n?: string;
  k?: string;
  v?: string;
}

function Pillar({ Ic, t, d, n, k, v }: PillarProps) {
  return (
    <div className="bx-pillar">
      <div className="row1">
        <div className="ic"><Ic size={20} /></div>
        {n && <div className="nm">{n}</div>}
      </div>
      <div>
        <div className="t">{t}</div>
        <p className="d" style={{ marginTop: 6 }}>{d}</p>
      </div>
      {(k || v) && (
        <div className="stat"><span>{k}</span><b>{v}</b></div>
      )}
    </div>
  );
}

export function SobreSection() {
  return (
    <section className="bx-sobre bx-section" id="sobre">
      <SectionHead
        eyebrow="01 / Sobre a empresa"
        title="A ponte estratégica entre <em>laboratórios brasileiros</em> e os melhores fornecedores do <em>mundo</em>."
      />

      <div className="intro">
        <p className="lead">
          A <b>BIOXIMPORT</b> atua na intermediação e importação de matéria-prima farmacêutica e biotecnológica, conectando empresas brasileiras aos principais fornecedores internacionais do mercado.
        </p>
        <p className="body">
          Trabalhamos como extensão do seu time técnico: localizamos fornecedores qualificados em mercados regulados, validamos documentação, conduzimos cotações comparativas e operamos a importação ponta-a-ponta — com segurança regulatória, sigilo comercial e padrão internacional de qualidade.
        </p>
      </div>

      <div className="bottom">
        <div className="bx-pillars">
          <Pillar n="01" Ic={IconGlobe}  t="Sourcing global"        d="Mapeamento ativo em mercados regulados, com auditoria documental dos fornecedores antes de qualquer cotação." k="Países" v="40+" />
          <Pillar n="02" Ic={IconShield} t="Compliance regulatório" d="Documentação técnica completa — CoA, MSDS, GMP, CEP/DMF — para alinhamento com ANVISA, RDC e exigências fiscais." k="Conformidade" v="100%" />
          <Pillar n="03" Ic={IconLock}   t="Sigilo comercial"       d="NDA padrão da casa, sem custo. Operação confidencial em toda a cadeia, do briefing à entrega." k="NDA" v="Padrão" />
          <Pillar n="04" Ic={IconBolt}   t="Cotações em 24h"        d="Resposta rápida com cenários comparativos de 2 a 3 fornecedores qualificados." k="SLA" v="≤ 24h" />
        </div>

        <div className="bx-lab-card">
          <span className="ticker">LAB · SOURCING · LOG</span>
          <div className="frame-marks">
            <span className="tl" /><span className="tr" /><span className="bl" /><span className="br" />
          </div>

          <div className="lab-vignette">
            <svg viewBox="0 0 400 400">
              <defs>
                <radialGradient id="bxRgLab" cx="50%" cy="40%" r="60%">
                  <stop offset="0%" stopColor="currentColor" stopOpacity="0.4" />
                  <stop offset="100%" stopColor="currentColor" stopOpacity="0" />
                </radialGradient>
              </defs>
              <circle cx="200" cy="200" r="180" fill="url(#bxRgLab)" />
              <g fill="none" stroke="currentColor" strokeWidth="1.2" opacity="0.45">
                {Array.from({ length: 6 }).map((_, i) => {
                  const a = (Math.PI / 3) * i;
                  return <line key={i} x1="200" y1="200" x2={200 + Math.cos(a) * 140} y2={200 + Math.sin(a) * 140} />;
                })}
                {[80, 120, 160].map(r => (
                  <polygon
                    key={r}
                    points={Array.from({ length: 6 })
                      .map((_, i) => {
                        const a = (Math.PI / 3) * i + Math.PI / 6;
                        return `${200 + Math.cos(a) * r},${200 + Math.sin(a) * r}`;
                      })
                      .join(' ')}
                  />
                ))}
              </g>
              <g stroke="currentColor" strokeWidth="2" fill="#05070D">
                <circle cx="120" cy="160" r="14" />
                <circle cx="200" cy="120" r="14" />
                <circle cx="280" cy="160" r="14" />
                <circle cx="160" cy="240" r="14" />
                <circle cx="240" cy="240" r="14" />
                <circle cx="200" cy="300" r="14" />
              </g>
              <g stroke="currentColor" strokeWidth="2" opacity="0.7" fill="none">
                <line x1="120" y1="160" x2="200" y2="120" />
                <line x1="200" y1="120" x2="280" y2="160" />
                <line x1="120" y1="160" x2="160" y2="240" />
                <line x1="280" y1="160" x2="240" y2="240" />
                <line x1="160" y1="240" x2="240" y2="240" />
                <line x1="160" y1="240" x2="200" y2="300" />
                <line x1="240" y1="240" x2="200" y2="300" />
              </g>
              <circle cx="200" cy="200" r="6" fill="currentColor" />
            </svg>
          </div>

          <div className="lab-meta">
            <div className="tag">Sample · Pharma-Grade</div>
            <h4>Padrão GMP &amp; documentação completa</h4>
            <div className="row">
              <div className="item"><div className="lbl">Pureza</div><div className="val">≥ 99.5%</div></div>
              <div className="item"><div className="lbl">CoA</div><div className="val">Lote-a-lote</div></div>
              <div className="item"><div className="lbl">Origem</div><div className="val">UE · ÁSIA · NA</div></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
