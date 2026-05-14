
> Consultor GIS solo | Visual claro inspirado em lunageo.com | Bilíngue PT+EN

---

## 1. Premissas do projeto

| Decisão                  | Definição                                                                    |
| ------------------------ | ---------------------------------------------------------------------------- |
| **Perfil**               | Consultor individual, não empresa                                            |
| **Objetivo do site**     | Apresentar serviços + SOMAP + links de portais + CTA contato                 |
| **Idioma**               | Bilíngue PT-BR / EN (i18n Next.js)                                           |
| **Visual**               | Claro (light mode), inspirado LunaGeo — fundo branco/cinza frio, navy + teal |
| **Fora do escopo agora** | Webinars, tutoriais, blog, prova social                                      |
| **Projeto destaque**     | SOMAP — seção dedicada, análoga ao LunaMap do LunaGeo                        |

---

## 2. Diagnóstico do site atual

Problemas que o redesign deve resolver:

- **Site muito escuro** — afasta visitantes não-técnicos, reduz legibilidade
- **Sem identidade visual** — genérico, poderia ser qualquer freelancer
- **Não deixa claro que é consultor solo** — copy ambígua ("ofereço", "ajudo" misturado com tom de empresa)
- **SOMAP invisível** — seu único projeto público não aparece como destaque
- **Sem links de portais** — GitHub, Upwork, LinkedIn não estão em evidência
- **Formulário de contato não funciona** — `mailto:` puro é lixo em 2026; use Formspree/Resend
- **Sem i18n** — estrutura de roteamento PT/EN precisa existir antes do visual

---

## 3. O que aproveitar do LunaGeo

|Elemento|Como aplicar|
|---|---|
|Fundo branco/cinza claro|Adotar como base — elimina o dark mode atual|
|Whitespace generoso|`padding` vertical de seções: 80px desktop, 48px mobile|
|Cards de serviço limpos|Borda sutil, sombra leve, sem cor de fundo pesada|
|Tech strip com logos|Logos SVG das stacks em destaque, estilo grayscale→color no hover|
|Projeto destaque (LunaMap → SOMAP)|Seção com screenshot real + stack técnica + links|
|Formulário de contato inline|Não redirecionar — formulário na própria página|
|Nav simples e sticky|Logo + links + 1 CTA button|

**O que NÃO copiar:**

- Estrutura de empresa com múltiplos produtos — você é solo
- Seções de webinars/training — fora do escopo agora
- Tom corporativo no copy — o seu é pessoal ("Eu faço X", não "Nós fazemos X")

---

## 4. Sistema de Design

### 4.1 Paleta de Cores

```css
:root {
  /* Backgrounds */
  --color-bg:           #F8F9FB;   /* fundo geral — branco frio */
  --color-bg-alt:       #EEF1F6;   /* seções alternadas */
  --color-surface:      #FFFFFF;   /* cards */

  /* Primário — navy (profissional, técnico) */
  --color-primary:      #1A2E4A;
  --color-primary-mid:  #2E4D7A;

  /* Accent — teal (GIS, mapas, open source) */
  --color-accent:       #2A8C6E;
  --color-accent-light: #3DB38A;

  /* Texto */
  --color-text:         #1A2E4A;
  --color-text-muted:   #6B7A90;

  /* Bordas */
  --color-border:       #DDE2EC;
}
```

**Uso das cores:**

- `primary` → headlines, nav, footer
- `accent` → CTAs, ícones de serviço, links ativos, destaques do SOMAP
- `bg-alt` → seções alternadas (tech strip, seção de suporte)
- `muted` → subtítulos, meta, textos secundários

### 4.2 Tipografia

```css
/* Import */
/* https://fonts.google.com/specimen/Sora */
/* https://fonts.google.com/specimen/DM+Sans */
@import url('https://fonts.googleapis.com/css2?family=Sora:wght@400;600;700&family=DM+Sans:ital,opsz,wght@0,9..40,400;0,9..40,500&display=swap');

:root {
  --font-display: 'Sora', sans-serif;   /* headlines, nav logo */
  --font-body:    'DM Sans', sans-serif; /* corpo, botões, labels */
}
```

**Escala:**

```css
--text-xs:   0.75rem;    /* 12px — labels, badges */
--text-sm:   0.875rem;   /* 14px — meta, caption */
--text-base: 1rem;       /* 16px — body padrão */
--text-lg:   1.125rem;   /* 18px — lead, card body */
--text-xl:   1.25rem;    /* 20px — card titles */
--text-2xl:  1.5rem;     /* 24px — section subtitles */
--text-3xl:  1.875rem;   /* 30px — section titles */
--text-4xl:  2.25rem;    /* 36px — hero subheadline */
--text-5xl:  3rem;       /* 48px — hero headline */
```

### 4.3 Espaçamento

```css
--container-max: 1200px;
--container-pad: 1.5rem;   /* lateral padding mobile */
--section-py:    5rem;     /* padding vertical seções (desktop) */
--section-py-sm: 3rem;     /* padding vertical seções (mobile) */
--grid-gap:      1.5rem;   /* gap cards */
--card-pad:      2rem;     /* padding interno cards */
--radius-card:   8px;
--radius-btn:    6px;
```

### 4.4 Sombras

```css
--shadow-card:       0 1px 3px rgba(0,0,0,0.06), 0 1px 2px rgba(0,0,0,0.04);
--shadow-card-hover: 0 4px 16px rgba(0,0,0,0.10);
--shadow-nav:        0 1px 0 var(--color-border);
```

---

## 5. Estrutura de Página

```
┌─────────────────────────────────────────────┐
│ NAV (sticky)                                │
│ [Logo/Nome]  Serviços  SOMAP  Contato  [EN] │
│                              [Fale Comigo]  │
├─────────────────────────────────────────────┤
│ HERO                                        │
│ Consultor GIS Open Source                   │
│ Subheadline: o que você resolve             │
│ [Ver Serviços]  [Ver SOMAP]                 │
├─────────────────────────────────────────────┤
│ TECH STRIP (bg-alt)                         │
│ Logos: PostGIS | GeoServer | QGIS |         │
│ OpenLayers | Vue | FastAPI | Docker         │
├─────────────────────────────────────────────┤
│ SOBRE / PROPOSTA DE VALOR                   │
│ "Especialista em Open Source GIS"           │
│ Texto em 1ª pessoa + lista de stacks        │
├─────────────────────────────────────────────┤
│ SERVIÇOS (grid 3 col → 2 col → 1 col)       │
│ [Consultoria] [Dev WebGIS] [Suporte]        │
│ [GeoServer]   [PostGIS]    [Training]       │
├─────────────────────────────────────────────┤
│ SOMAP — PROJETO DESTAQUE (bg-alt)           │
│ Screenshot/demo + stack técnica             │
│ [Ver Demo ao Vivo]  [Código no GitHub]      │
├─────────────────────────────────────────────┤
│ PORTAIS / PRESENÇA ONLINE                   │
│ [GitHub] [Upwork] [LinkedIn]  (cards simples│
│ com ícone + label + link)                   │
├─────────────────────────────────────────────┤
│ CONTATO (CTA seção)                         │
│ Headline + formulário funcional (Formspree) │
│ ou link direto email + calendário           │
├─────────────────────────────────────────────┤
│ FOOTER                                      │
│ Nome | Links | Social | Copyright           │
└─────────────────────────────────────────────┘
```

---

## 6. Especificação de Componentes

### 6.1 Navbar

```
altura:     64px desktop / 56px mobile
background: white
borda:      border-bottom: 1px solid var(--color-border)
position:   sticky, top: 0, z-index: 50

logo:       font-display, weight 700, cor primary, tamanho 1.25rem
links:      font-body, weight 500, cor text-muted → primary no hover
lang toggle: botão simples "PT | EN", sem ícone de bandeira (evita problema político)
CTA button: background accent, texto branco, radius 6px, padding: 10px 20px
```

**Nota i18n:** o toggle de idioma deve alterar o `lang` do `<html>` e usar `next/link` com locale — não implementar com state local.

### 6.2 Hero

**Layout:** duas colunas no desktop (texto + visual), coluna única no mobile.

```
col esquerda (60%):
  - Tag/badge: "Open Source GIS Consultant" (accent, texto pequeno, borda)
  - H1: headline forte, font-display, weight 700, cor primary
  - Parágrafo: 2-3 linhas, font-body, cor text-muted
  - 2 CTAs: primário (accent filled) + secundário (outline primary)

col direita (40%):
  - Screenshot do SOMAP OU mapa OpenLayers embutido simples
  - Borda arredondada, sombra média
  - Opcional: badge "Live Demo" sobre a imagem
```

**Headlines sugeridas (bilíngue):**

PT: `"Transformo dados geoespaciais em soluções open source"`  
EN: `"I turn geospatial data into open source solutions"`

Sub PT: `"Consultoria GIS, desenvolvimento WebGIS e suporte técnico para projetos que precisam de precisão e confiabilidade."`  
Sub EN: `"GIS consulting, WebGIS development, and technical support for projects that demand precision and reliability."`

### 6.3 Tech Strip

```
layout:     flex, justify-center, flex-wrap, gap: 2.5rem
background: var(--color-bg-alt)
padding:    2.5rem 1.5rem

item:       logo SVG (32px altura) + nome abaixo (text-xs, muted)
            grayscale(0.8) opacity(0.7) por padrão
            grayscale(0) opacity(1) no hover
            transition: filter 0.2s, opacity 0.2s
```

**Tecnologias e fontes dos logos (SVG via simpleicons.org):**

|Tech|Simple Icons slug|
|---|---|
|PostgreSQL|`postgresql`|
|Docker|`docker`|
|Python|`python`|
|Vue.js|`vuedotjs`|
|FastAPI|`fastapi`|
|QGIS|`qgis`|
|OpenLayers|sem ícone — usar initials ou logo oficial|
|GeoServer|sem ícone — usar logo oficial (geoserver.org/img)|

### 6.4 Cards de Serviço

```
grid:    repeat(3, 1fr) → repeat(2, 1fr) → 1fr
padding: var(--card-pad)
radius:  var(--radius-card)
borda:   1px solid var(--color-border)
sombra:  var(--shadow-card) → var(--shadow-card-hover) no hover
transform: translateY(-2px) no hover
transition: all 0.2s ease
```

**Ícones (Lucide React):**

|Serviço|Ícone Lucide|
|---|---|
|Consultoria GIS|`Map`|
|Desenvolvimento WebGIS|`Code2`|
|GeoServer Gerenciado|`Server`|
|PostGIS / Banco de Dados|`Database`|
|Suporte Técnico|`Headphones`|
|Treinamentos|`GraduationCap`|

```
ícone:   24px, cor accent, margin-bottom: 1rem
título:  text-xl, font-display, weight 600, cor primary
texto:   text-sm, font-body, cor text-muted, line-height 1.6
link:    "Saiba Mais →" / "Learn More →", cor accent, font-medium, hover underline
```

### 6.5 Seção SOMAP (Destaque)

Análoga à seção LunaMap do LunaGeo. Layout de duas colunas.

```
background: var(--color-bg-alt)
padding:    var(--section-py)

col esquerda (texto):
  - Label pequeno: "Projeto Open Source" / "Open Source Project"
  - H2: "SOMAP — WebGIS Platform"
  - Descrição: 3-4 linhas sobre o que é, para quem serve, tech usada
  - Stack badges: Vue 3 | OpenLayers | FastAPI | PostGIS | Docker
  - CTAs: [Ver Demo] (accent) + [GitHub] (outline)

col direita (visual):
  - Screenshot real do SOMAP
  - OU: GIF animado da interface
  - border-radius: 12px, sombra média
```

**Stack badges:**

```css
.tech-badge {
  display: inline-flex;
  padding: 4px 10px;
  background: white;
  border: 1px solid var(--color-border);
  border-radius: 999px;
  font-size: var(--text-xs);
  font-weight: 500;
  color: var(--color-primary);
  gap: 6px; /* espaço para mini-ícone opcional */
}
```

### 6.6 Seção de Portais

Cards simples, linha horizontal (flex), centralizados.

```
3 cards: GitHub | Upwork | LinkedIn

card:
  width: 180px (desktop), 100% (mobile)
  padding: 1.5rem
  text-align: center
  border: 1px solid var(--color-border)
  border-radius: var(--radius-card)
  ícone: 32px (Lucide: Github, Briefcase, Linkedin)
  label: nome do portal
  subtext: @username ou URL curta
  link: target="_blank", rel="noopener noreferrer"
  hover: border-color accent, shadow leve
```

### 6.7 Seção de Contato

```
background: var(--color-primary)   /* navy — contraste com resto do site */
texto: branco

headline:  "Vamos conversar sobre seu projeto GIS"
           "Let's talk about your GIS project"
sub:       "Consulta gratuita de 30 minutos"
           "Free 30-minute consultation"

opções de contato (flex, gap: 1.5rem):
  - Botão email (outline branco) → mailto: ou Formspree
  - Botão calendário (outline branco) → Calendly se tiver, senão email
  - Links: LinkedIn, GitHub (ícones menores)
```

**Alternativa:** formulário simples (nome + email + mensagem) via Formspree — mais profissional que mailto puro.

---

## 7. i18n — Estrutura Next.js

Configure antes de implementar o visual. Senão você refatora tudo.

### next.config.js

```js
const nextConfig = {
  i18n: {
    locales: ['pt', 'en'],
    defaultLocale: 'pt',
  },
  // se usar GitHub Pages com basePath:
  // basePath: '/sogis-page',
}
```

### Estrutura de arquivos

```
/locales
  /pt
    common.json   ← nav, footer, botões
    home.json     ← todo conteúdo da home
    somap.json    ← conteúdo da seção/página SOMAP
  /en
    common.json
    home.json
    somap.json
```

### Biblioteca recomendada

```bash
npm install next-i18next react-i18next i18next
```

**Atenção:** se o site está em GitHub Pages com export estático (`output: 'export'`), o i18n do Next.js nativo **não funciona com `output: export`**. Alternativa: `next-intl` com middleware, ou rota manual `/en/` como subpasta estática.

---

## 8. Checklist de Implementação

### Pré-requisitos (antes do visual)

- [ ] Definir estrutura i18n (resolver conflito com `output: export` se aplicável)
- [ ] Criar arquivos de tradução PT + EN para todo o conteúdo existente
- [ ] Configurar Formspree (ou similar) para o formulário de contato
- [ ] Tirar screenshot limpo do SOMAP para usar no site

### Visual / UI

- [ ] Configurar tokens de cor no `globals.css` ou `tailwind.config.js`
- [ ] Importar fontes Sora + DM Sans
- [ ] Implementar Navbar sticky com toggle de idioma e CTA
- [ ] Implementar Hero (2 colunas, badge, 2 CTAs, visual do SOMAP)
- [ ] Implementar Tech Strip com logos SVG
- [ ] Redesenhar cards de serviço (ícone Lucide + estrutura limpa)
- [ ] Implementar seção SOMAP (2 colunas, screenshot, badges, CTAs)
- [ ] Implementar seção de Portais (GitHub, Upwork, LinkedIn)
- [ ] Implementar seção de Contato (fundo navy, formulário ou CTAs)
- [ ] Implementar Footer

### QA

- [ ] Testar mobile: 320px, 375px, 768px
- [ ] Testar toggle PT ↔ EN em todas as seções
- [ ] Verificar todos os links externos (GitHub, Upwork, LinkedIn, SOMAP demo)
- [ ] Lighthouse: Performance > 90, Accessibility > 90, SEO > 90
- [ ] Testar formulário de contato (submissão real)

---

## 9. Copy de Referência (bilíngue)

### Hero

**PT:**

> **Consultoria GIS Open Source**
> 
> Transformo dados geoespaciais em soluções práticas — do banco de dados ao mapa na web. Especialista em PostGIS, GeoServer e WebGIS com mais de 12 anos de experiência.
> 
> [Ver Serviços] [Conhecer o SOMAP]

**EN:**

> **Open Source GIS Consultant**
> 
> I turn geospatial data into practical solutions — from database to web map. Specialized in PostGIS, GeoServer, and WebGIS with 12+ years of experience.
> 
> [View Services] [Explore SOMAP]

### Proposta de Valor

**PT:** "Meu foco é ajudar empresas e organizações a adotarem soluções open source GIS de forma segura e eficiente. Trabalho com tecnologias comprovadas e resolvo problemas reais."

**EN:** "My focus is helping companies and organizations adopt open source GIS solutions safely and efficiently. I work with proven technologies and solve real problems."

### SOMAP

**PT:** "SOMAP é minha plataforma WebGIS open source — construída com Vue 3, OpenLayers, FastAPI e PostGIS. Demonstra na prática como entrego soluções geoespaciais escaláveis do zero."

**EN:** "SOMAP is my open source WebGIS platform — built with Vue 3, OpenLayers, FastAPI, and PostGIS. It demonstrates in practice how I deliver scalable geospatial solutions from scratch."

---

_v2 — Scope: consultor solo, visual claro, bilíngue PT+EN, destaque SOMAP_