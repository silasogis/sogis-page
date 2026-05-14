# somap — pacote de ícones (Mark 03)

Marca finalizada na v2 — mapa dobrado com lentes de observação binocular.

## Estrutura

```
somap-icons/
├── somap-mark.svg            ← marca preta · fundo transparente · uso geral
├── somap-mark-paper.svg      ← marca clara · fundo transparente · use sobre fundos escuros
├── favicon-light.svg         ← marca preta sobre fundo paper (#F5F2EC)
├── favicon-dark.svg          ← marca paper sobre fundo ink (#0E0E0E)
├── apple-touch-icon.svg      ← versão com safe-area de 10% para iOS
├── apple-touch-icon.png      ← 180×180 (iOS home screen)
├── png-light/                ← paper bg · 16/32/48/64/96/128/180/192/256/512
├── png-dark/                 ← ink bg · 32/64/128/256/512
└── png-transparent/          ← marca preta sobre transparente · 128/256/512
```

## Uso recomendado no `<head>`

```html
<!-- SVG moderno (preferido por navegadores recentes) -->
<link rel="icon" href="/somap-icons/somap-mark.svg" type="image/svg+xml">

<!-- Fallback PNG -->
<link rel="icon" type="image/png" sizes="32x32" href="/somap-icons/png-light/somap-32.png">
<link rel="icon" type="image/png" sizes="16x16" href="/somap-icons/png-light/somap-16.png">

<!-- iOS home screen -->
<link rel="apple-touch-icon" sizes="180x180" href="/somap-icons/apple-touch-icon.png">

<!-- Cor da theme bar (mobile) -->
<meta name="theme-color" content="#F5F2EC">
```

## Cores oficiais

- somap ink   · `#0E0E0E`
- somap paper · `#F5F2EC`
