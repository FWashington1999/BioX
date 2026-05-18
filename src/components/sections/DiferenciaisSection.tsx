import type { ComponentType } from 'react';
import { SectionHead } from './SectionHead';
import {
  IconGlobe,
  IconNet,
  IconUser,
  IconLock,
  IconBolt,
  IconShield,
  type IconProps,
} from '../icons';

interface DifItem {
  Ic: ComponentType<IconProps>;
  t: string;
  d: string;
}

const DIFS: DifItem[] = [
  { Ic: IconGlobe,  t: 'Qualidade Internacional',        d: 'Padrões GMP, USP, EP e JP em todos os insumos.' },
  { Ic: IconNet,    t: 'Rede Global de Fornecedores',    d: 'Mais de 200 fábricas qualificadas em 40+ países.' },
  { Ic: IconUser,   t: 'Atendimento Personalizado',      d: 'Um gerente técnico dedicado por operação.' },
  { Ic: IconLock,   t: 'Segurança e Confidencialidade',  d: 'NDA padrão e protocolo de sigilo comercial.' },
  { Ic: IconBolt,   t: 'Agilidade em Cotações',          d: 'Resposta em até 24h com cenários comparativos.' },
  { Ic: IconShield, t: 'Importação Sob Demanda',         d: 'Sem estoque obrigatório, sem MOQ artificial.' },
];

export function DiferenciaisSection() {
  return (
    <section className="bx-difs bx-section" id="diferenciais">
      <SectionHead
        eyebrow="04 / Diferenciais"
        title="Por que escolher a <em>BIOXIMPORT</em>."
      />

      <div className="grid">
        {DIFS.map((d, i) => (
          <div className="bx-dif" key={i}>
            <span className="nrm">0{i + 1}</span>
            <div className="ic"><d.Ic size={26} /></div>
            <h4>{d.t}</h4>
            <p>{d.d}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
