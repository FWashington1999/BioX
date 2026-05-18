# BIOXIMPORT — Landing institucional

Site institucional B2B da BIOXIMPORT — importação internacional de matéria-prima farmacêutica e biotecnológica.

Stack: **Vite + React 18 + TypeScript**, estilo dark-premium, sem backend (formulário envia briefing direto via WhatsApp deep link).

## Como rodar

Pré-requisitos: **Node.js 20+** (e npm, que vem junto).

```bash
git clone <url-do-repo>
cd BioX
npm install
npm run dev
```

Abre em http://localhost:5173.

## Scripts

| Comando           | O que faz |
|-------------------|-----------|
| `npm run dev`     | Dev server com hot reload |
| `npm run build`   | Bundle de produção em `dist/` (tsc + vite build) |
| `npm run preview` | Serve o `dist/` localmente pra revisar o build final |

## Configuração pendente

**Número do WhatsApp.** Está com placeholder. Editar em `src/lib/whatsapp.ts`:

```ts
export const WHATSAPP_NUMBER = '5511999999999'; // ← trocar aqui
```

Formato: dígitos puros, com DDI (55) + DDD + número, sem espaços ou símbolos.

Esse mesmo número é usado em: botões do Hero, Header, FloatingWA, Footer, e no submit do formulário de cotação.

## Estrutura

```
src/
├─ main.tsx, App.tsx
├─ lib/whatsapp.ts             # buildQuoteWaLink + WHATSAPP_NUMBER
├─ styles/                     # tokens, animations, hero, sections, form, chrome
└─ components/
    ├─ icons.tsx, WorldMap.tsx
    ├─ Hero.tsx, Header.tsx, Footer.tsx, FloatingWA.tsx, QuoteForm.tsx
    └─ sections/               # SectionHead, Sobre, Areas, Fluxo, Diferenciais
public/uploads/                # PDFs e imagens estáticas
```

## Deploy

Site estático — qualquer host serve. Rode `npm run build` e suba o `dist/`:

- **Vercel / Netlify:** importar o repo, ele detecta Vite automaticamente.
- **GitHub Pages:** publica o conteúdo de `dist/` na branch `gh-pages`.
- **S3 / Cloudflare Pages / qualquer CDN:** upload do `dist/` como pasta estática.

O `base: './'` em `vite.config.ts` faz os caminhos serem relativos, então funciona em subpasta também.
