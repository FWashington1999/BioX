import { useState, type ComponentType, type ReactNode } from 'react';
import {
  IconBolt,
  IconLock,
  IconShield,
  IconWhatsApp,
  IconCheck,
  IconArrowRight,
  type IconProps,
} from './icons';
import { WHATSAPP_URL, buildQuoteWaLink, type QuoteData } from '../lib/whatsapp';

type Errors = Partial<Record<keyof QuoteData, string>>;

const INITIAL: QuoteData = {
  empresa: '',
  responsavel: '',
  whatsapp: '',
  email: '',
  produto: '',
  quantidade: '',
  unidade: 'kg',
  urgencia: 'Padrão (até 15 dias)',
  obs: '',
  nda: false,
};

function formatWa(v: string): string {
  const d = v.replace(/\D/g, '').slice(0, 11);
  if (d.length <= 2)  return d;
  if (d.length <= 6)  return `(${d.slice(0, 2)}) ${d.slice(2)}`;
  if (d.length <= 10) return `(${d.slice(0, 2)}) ${d.slice(2, 6)}-${d.slice(6)}`;
  return `(${d.slice(0, 2)}) ${d.slice(2, 7)}-${d.slice(7)}`;
}

export function QuoteForm() {
  const [step, setStep] = useState<1 | 2 | 3>(1);
  const [submitted, setSubmitted] = useState(false);
  const [data, setData] = useState<QuoteData>(INITIAL);
  const [errors, setErrors] = useState<Errors>({});

  function set<K extends keyof QuoteData>(field: K, val: QuoteData[K]) {
    setData(d => ({ ...d, [field]: val }));
    setErrors(e => ({ ...e, [field]: undefined }));
  }

  function validateStep(s: number): boolean {
    const err: Errors = {};
    if (s === 1) {
      if (!data.empresa.trim()) err.empresa = 'Informe a empresa';
      if (!data.responsavel.trim()) err.responsavel = 'Informe o responsável';
      if (!data.whatsapp.trim() || data.whatsapp.replace(/\D/g, '').length < 10) err.whatsapp = 'WhatsApp inválido';
      if (!/^\S+@\S+\.\S+$/.test(data.email)) err.email = 'E-mail inválido';
    }
    if (s === 2) {
      if (!data.produto.trim()) err.produto = 'Descreva o produto';
      if (!data.quantidade.trim()) err.quantidade = 'Informe a quantidade';
    }
    setErrors(err);
    return Object.keys(err).length === 0;
  }

  function next() {
    if (validateStep(step)) setStep(s => (Math.min(3, s + 1) as 1 | 2 | 3));
  }
  function back() {
    setStep(s => (Math.max(1, s - 1) as 1 | 2 | 3));
  }
  function submit() {
    if (!validateStep(2)) { setStep(2); return; }
    window.open(buildQuoteWaLink(data), '_blank', 'noopener');
    setSubmitted(true);
  }
  function reset() {
    setSubmitted(false);
    setStep(1);
    setData(INITIAL);
    setErrors({});
  }

  return (
    <section className="bx-quote bx-section" id="cotacao">
      <div className="wrap">
        <div className="info">
          <div className="bx-kicker" style={{ display: 'inline-flex' }}>
            <span style={{ width: 8, height: 8, borderRadius: 99, background: 'var(--bx-accent)', boxShadow: '0 0 12px var(--bx-accent)' }}></span>
            <span style={{ fontFamily: 'var(--bx-font-mono)', fontSize: 11.5, letterSpacing: '.18em', textTransform: 'uppercase', color: 'var(--bx-white-dim)' }}>
              05 / Solicitar cotação
            </span>
          </div>
          <h2 style={{ marginTop: 22 }}>
            Receba sua cotação <em>internacional</em> em até 24h.
          </h2>
          <p>Preencha o briefing técnico. Quanto mais detalhes sobre o produto, melhor a precisão da nossa cotação. Para operações sensíveis, ative o NDA logo no início.</p>

          <div className="infodots">
            <InfoDot Ic={IconBolt}     t="Resposta em 24h"       d="Cotações comparativas com 2–3 fornecedores qualificados." />
            <InfoDot Ic={IconLock}     t="Sigilo por padrão"     d="Operação confidencial; NDA disponível imediato." />
            <InfoDot Ic={IconShield}   t="Documentação completa" d="CoA, MSDS, GMP, CEP/DMF — quando aplicável." />
            <InfoDot Ic={IconWhatsApp} t="Atendimento humano"    d="Um gerente técnico dedicado por operação." />
          </div>

          <div style={{ marginTop: 28, display: 'flex', gap: 12, flexWrap: 'wrap' }}>
            <a
              className="bx-btn bx-btn-primary"
              href={`${WHATSAPP_URL}?text=${encodeURIComponent('Olá BIOXIMPORT, preciso de uma cotação.')}`}
              target="_blank"
              rel="noopener"
            >
              <span className="sweep"></span>
              <IconWhatsApp size={18} /> Prefiro WhatsApp
            </a>
          </div>
        </div>

        <div className="bx-quote-card">
          <div className="inner">
            {submitted ? (
              <div className="bx-success">
                <div className="ring"><IconCheck size={42} stroke={2.4} /></div>
                <h3>Cotação recebida.</h3>
                <p>
                  Abrimos uma conversa no WhatsApp com seu briefing. Se a janela não abriu, clique novamente em
                  "Falar no WhatsApp". Nosso time retorna em até 24h úteis.
                </p>
                <div className="proto">PROTOCOLO · BX-{Date.now().toString(36).toUpperCase().slice(-6)}</div>
                <div>
                  <button className="bx-btn bx-btn-neon" onClick={reset}>
                    <span className="sweep"></span>
                    Nova cotação <IconArrowRight size={16} />
                  </button>
                </div>
              </div>
            ) : (
              <>
                <div className="stepbar">
                  <div className={`item ${step === 1 ? 'active' : step > 1 ? 'done' : ''}`}>
                    <span className="num">{step > 1 ? <IconCheck size={12} stroke={3} /> : '1'}</span> Empresa
                  </div>
                  <div className={`item ${step === 2 ? 'active' : step > 2 ? 'done' : ''}`}>
                    <span className="num">{step > 2 ? <IconCheck size={12} stroke={3} /> : '2'}</span> Produto
                  </div>
                  <div className={`item ${step === 3 ? 'active' : ''}`}>
                    <span className="num">3</span> Revisar
                  </div>
                </div>

                {step === 1 && (
                  <div>
                    <Field label="Nome da empresa" req error={errors.empresa}>
                      <input className="bx-input" placeholder="Ex.: Farmácia Magistral Ltda."
                             value={data.empresa} onChange={e => set('empresa', e.target.value)} />
                    </Field>
                    <Field label="Nome do responsável" req error={errors.responsavel}>
                      <input className="bx-input" placeholder="Quem podemos chamar"
                             value={data.responsavel} onChange={e => set('responsavel', e.target.value)} />
                    </Field>
                    <div className="bx-row">
                      <Field label="WhatsApp" req error={errors.whatsapp}>
                        <input className="bx-input" placeholder="(11) 91234-5678"
                               value={data.whatsapp} onChange={e => set('whatsapp', formatWa(e.target.value))} />
                      </Field>
                      <Field label="E-mail corporativo" req error={errors.email}>
                        <input className="bx-input" placeholder="nome@empresa.com" type="email"
                               value={data.email} onChange={e => set('email', e.target.value)} />
                      </Field>
                    </div>

                    <div className={`bx-toggle ${data.nda ? 'on' : ''}`} style={{ marginTop: 10 }} onClick={() => set('nda', !data.nda)}>
                      <div className="sw"></div>
                      <div className="lbl">
                        <b>Solicitar NDA / acordo de sigilo</b>
                        <small>Padrão da BIOXIMPORT — sem custo, assinatura digital.</small>
                      </div>
                    </div>
                  </div>
                )}

                {step === 2 && (
                  <div>
                    <Field label="Produto desejado" req error={errors.produto}>
                      <textarea
                        className="bx-textarea"
                        placeholder="Nome comercial / CAS / pureza / certificações exigidas"
                        value={data.produto}
                        onChange={e => set('produto', e.target.value)}
                      />
                    </Field>
                    <div className="bx-row">
                      <Field label="Quantidade" req error={errors.quantidade}>
                        <input className="bx-input" placeholder="Ex.: 25"
                               value={data.quantidade} onChange={e => set('quantidade', e.target.value)} />
                      </Field>
                      <Field label="Unidade">
                        <div className="bx-chips">
                          {['g', 'kg', 'mg', 'L', 'un.'].map(u => (
                            <div
                              key={u}
                              className={`bx-chip ${data.unidade === u ? 'on' : ''}`}
                              onClick={() => set('unidade', u)}
                            >
                              {u}
                            </div>
                          ))}
                        </div>
                      </Field>
                    </div>
                    <Field label="Urgência">
                      <div className="bx-chips">
                        {['Cotação informativa', 'Padrão (até 15 dias)', 'Express (até 7 dias)'].map(u => (
                          <div
                            key={u}
                            className={`bx-chip ${data.urgencia === u ? 'on' : ''}`}
                            onClick={() => set('urgencia', u)}
                          >
                            {u}
                          </div>
                        ))}
                      </div>
                    </Field>
                    <Field label="Observações">
                      <textarea
                        className="bx-textarea"
                        placeholder="Documentação técnica, embalagem, prazo desejado, etc."
                        value={data.obs}
                        onChange={e => set('obs', e.target.value)}
                      />
                    </Field>
                  </div>
                )}

                {step === 3 && (
                  <div>
                    <div className="bx-summary">
                      <SumRow lbl="Empresa" val={data.empresa} />
                      <SumRow lbl="Responsável" val={data.responsavel} />
                      <SumRow lbl="Contato" val={`${data.whatsapp} · ${data.email}`} />
                      <SumRow lbl="Produto" val={data.produto} />
                      <SumRow lbl="Quantidade" val={`${data.quantidade} ${data.unidade}`} />
                      <SumRow lbl="Urgência" val={data.urgencia} />
                      <SumRow lbl="NDA" val={data.nda ? 'Solicitado' : 'Não solicitado'} />
                      {data.obs && <SumRow lbl="Observações" val={data.obs} />}
                    </div>
                    <p style={{ color: 'var(--bx-muted)', fontSize: 12.5, marginTop: 14, fontFamily: 'var(--bx-font-mono)', letterSpacing: '0.06em' }}>
                      Ao enviar, abriremos uma conversa no WhatsApp já preenchida com seu briefing. Não compartilhamos seus dados.
                    </p>
                  </div>
                )}

                <div className="bx-actions">
                  {step > 1 && <button className="bx-back" onClick={back}>← Voltar</button>}
                  <div style={{ flex: 1 }}></div>
                  {step < 3 ? (
                    <button className="bx-btn bx-btn-neon" onClick={next}>
                      <span className="sweep"></span>
                      Continuar <IconArrowRight size={16} />
                    </button>
                  ) : (
                    <button className="bx-btn bx-btn-primary" onClick={submit}>
                      <span className="sweep"></span>
                      <IconWhatsApp size={18} /> Enviar via WhatsApp
                    </button>
                  )}
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

interface FieldProps {
  label: string;
  req?: boolean;
  error?: string;
  children: ReactNode;
}

function Field({ label, req, error, children }: FieldProps) {
  return (
    <div className={`bx-field ${error ? 'err' : ''}`}>
      <label>
        {label}
        {req && <span className="req">*</span>}
      </label>
      {children}
      {error && <div className="emsg">⚠ {error}</div>}
    </div>
  );
}

interface SumRowProps { lbl: string; val: string }

function SumRow({ lbl, val }: SumRowProps) {
  return (
    <div className="row">
      <div className="lbl">{lbl}</div>
      <div className={`val ${!val ? 'empty' : ''}`}>{val || '—'}</div>
    </div>
  );
}

interface InfoDotProps {
  Ic: ComponentType<IconProps>;
  t: string;
  d: string;
}

function InfoDot({ Ic, t, d }: InfoDotProps) {
  return (
    <div className="infodot">
      <div className="b"><Ic size={14} /></div>
      <div>
        <b>{t}</b>
        <span style={{ color: 'var(--bx-muted)', fontSize: 13 }}>{d}</span>
      </div>
    </div>
  );
}
