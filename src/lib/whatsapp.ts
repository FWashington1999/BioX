// TODO: replace placeholder with real BioxImport WhatsApp number (DDI + DDD, digits only)
export const WHATSAPP_NUMBER = '5511999999999';
export const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}`;

export interface QuoteData {
  empresa: string;
  responsavel: string;
  whatsapp: string;
  email: string;
  produto: string;
  quantidade: string;
  unidade: string;
  urgencia: string;
  obs: string;
  nda: boolean;
}

export function buildQuoteWaLink(data: QuoteData): string {
  const lines: (string | null)[] = [
    '*Solicitação de Cotação — BIOXIMPORT*',
    '',
    `Empresa: ${data.empresa}`,
    `Responsável: ${data.responsavel}`,
    `WhatsApp: ${data.whatsapp}`,
    `Email: ${data.email}`,
    '',
    `Produto: ${data.produto}`,
    `Quantidade: ${data.quantidade} ${data.unidade}`,
    `Urgência: ${data.urgencia}`,
    data.obs ? `Observações: ${data.obs}` : null,
    data.nda ? 'Requer NDA: sim' : null,
  ];
  const msg = lines.filter((l): l is string => l !== null).join('\n');
  return `${WHATSAPP_URL}?text=${encodeURIComponent(msg)}`;
}
