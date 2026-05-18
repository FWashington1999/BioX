import { SectionHead } from './SectionHead';

const FLUXO = [
  { n: '01', t: 'Cliente entra em contato',     d: 'WhatsApp ou formulário de cotação iniciam a operação. NDA disponível sob solicitação.' },
  { n: '02', t: 'Informa o produto necessário', d: 'Briefing técnico: nome, CAS, pureza, certificações, quantidade e timing.' },
  { n: '03', t: 'Sourcing internacional',       d: 'Localizamos e qualificamos fornecedores em 40+ países, com auditoria documental.' },
  { n: '04', t: 'Importação & intermediação',   d: 'Operação aduaneira, cold chain quando aplicável, e rastreabilidade ponta-a-ponta.' },
  { n: '05', t: 'Entrega estratégica',          d: 'Logística doméstica até o seu endereço com toda documentação técnica e fiscal.' },
];

export function FluxoSection() {
  return (
    <section className="bx-fluxo bx-section" id="fluxo">
      <SectionHead
        eyebrow="03 / Fluxo de funcionamento"
        title="Do briefing à <em>entrega</em>. Cinco etapas, zero atrito."
        sub="Um processo claro, documentado e auditável — do primeiro contato até a entrega da matéria-prima na porta do seu laboratório."
      />

      <div className="track">
        {FLUXO.map((s, i) => (
          <div className="bx-step" key={i}>
            <div className="badge">{s.n}</div>
            <h4>{s.t}</h4>
            <p>{s.d}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
