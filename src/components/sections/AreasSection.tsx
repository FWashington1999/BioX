import type { ComponentType } from 'react';
import { SectionHead } from './SectionHead';
import {
  IconMolecule,
  IconDNA,
  IconAtom,
  IconBeaker,
  IconCapsule,
  IconFlask,
  IconContainer,
  IconArrowRight,
  IconArrowUpRight,
  type IconProps,
} from '../icons';

interface AreaItem {
  Ic: ComponentType<IconProps>;
  t: string;
  d: string;
  code: string;
}

const AREAS: AreaItem[] = [
  { Ic: IconMolecule,  t: 'Matéria-prima farmacêutica', d: 'Princípios ativos, sais e bases para formulação industrial e magistral.', code: 'API-RAW' },
  { Ic: IconDNA,       t: 'Peptídeos',                  d: 'Síntese sob demanda e fornecimento de peptídeos terapêuticos e cosméticos.', code: 'PEP' },
  { Ic: IconAtom,      t: 'Hormônios',                  d: 'Hormônios bioidênticos e sintéticos com documentação técnica completa.', code: 'HRM' },
  { Ic: IconBeaker,    t: 'APIs farmacêuticos',         d: 'Active Pharmaceutical Ingredients certificados (GMP, CEP/DMF).', code: 'API' },
  { Ic: IconCapsule,   t: 'Insumos para manipulação',   d: 'Excipientes, bases, veículos e aditivos para farmácias magistrais.', code: 'MAN' },
  { Ic: IconFlask,     t: 'Produtos laboratoriais',     d: 'Reagentes, padrões analíticos e consumíveis de uso laboratorial.', code: 'LAB' },
  { Ic: IconContainer, t: 'Importação internacional',   d: 'Operação aduaneira completa, com cold chain e rastreabilidade.', code: 'IMP' },
];

export function AreasSection() {
  return (
    <section className="bx-areas bx-section" id="areas">
      <SectionHead
        eyebrow="02 / Áreas de atuação"
        title="Um portfólio <em>completo</em> de insumos críticos."
        sub="Mapeamos, validamos e importamos os insumos que sustentam laboratórios, indústrias e farmácias magistrais. Trabalhamos sob demanda — cada cotação parte de um briefing técnico."
      />

      <div className="grid">
        {AREAS.map((a, i) => {
          if (i === 6) {
            return (
              <div key={i} className={`bx-area bx-area-${i + 1}`}>
                <div>
                  <div className="head">
                    <div className="ic"><a.Ic size={22} /></div>
                    <div className="code">{a.code}</div>
                  </div>
                  <h3 style={{ fontSize: 24 }}>{a.t}</h3>
                  <p style={{ maxWidth: 580 }}>{a.d}</p>
                </div>
                <div className="right">
                  <span className="pill">Aéreo</span>
                  <span className="pill">Marítimo</span>
                  <span className="pill">Cold Chain</span>
                  <a className="bx-btn bx-btn-neon" href="#cotacao" style={{ marginLeft: 8 }}>
                    Operar agora <IconArrowRight size={16} />
                  </a>
                </div>
              </div>
            );
          }
          return (
            <div key={i} className={`bx-area bx-area-${i + 1}`}>
              <div className="head">
                <div className="ic"><a.Ic size={22} /></div>
                <div className="code">{a.code}</div>
              </div>
              <h3>{a.t}</h3>
              <p>{a.d}</p>
              <span className="link">Cotar <IconArrowUpRight size={14} /></span>
            </div>
          );
        })}
      </div>
    </section>
  );
}
