# Elemento Fit Academia — site institucional

Site estático (HTML + CSS + JavaScript puro, sem build e sem dependências externas).
Funciona em qualquer hospedagem: Vercel, Netlify, Hostinger, cPanel, GitHub Pages.

---

## 1. Como publicar

Suba a pasta inteira para a hospedagem. O arquivo de entrada é `index.html`.

```
elementofit/
├── index.html                     ← página principal
├── termos-de-uso.html
├── politica-de-privacidade.html
├── robots.txt
├── sitemap.xml
└── assets/
    ├── css/style.css
    ├── js/main.js
    ├── fonts/                     ← Archivo Variable + Space Mono (self-hosted)
    └── img/                       ← logos + fotos da academia
```

**Antes de publicar, troque o domínio.** Procure por
`https://www.elementofitbombinhas.com.br` em `index.html`, `termos-de-uso.html`,
`politica-de-privacidade.html`, `robots.txt` e `sitemap.xml` e substitua pelo
domínio real. Isso afeta canonical, Open Graph, sitemap e o Schema.

---

## 2. Fotos

As fotos reais da academia já estão no site. Elas foram recortadas, redimensionadas
e comprimidas a partir dos originais que você enviou.

| Arquivo | Onde aparece | O que mostra |
|---|---|---|
| `hero.jpg` | Hero (tela cheia) | salão de musculação cheio |
| `sobre.jpg` | Seção "Mais que uma academia" | corredor de cardio com alunos |
| `musculacao.jpg` | Estrutura — Musculação | sala de máquinas Cimerian |
| `cardio.jpg` | Estrutura — Cardio | esteiras Matrix e bikes, com o letreiro |
| `peso-livre.jpg` | Estrutura — Peso livre | rack de halteres |
| `og-elemento-fit.jpg` | WhatsApp / Google / redes | 1200×630, gerado a partir do hero |

### Trocar ou adicionar fotos

As fotos estão direto no HTML, em tags `<img>`. Para trocar uma delas, salve o
arquivo novo em `assets/img/` **com o mesmo nome** — não precisa mexer no código.
Se mudar o nome ou as proporções, ajuste também o `src`, o `width`, o `height`
e o `alt` correspondentes no `index.html`.

### O que ainda renderia bem no site, se você tiver

- **Fachada / entrada** — hoje não há foto externa; é a primeira coisa que quem
  chega de carro procura.
- **Recepção** — reforça o "atendimento humanizado".
- **Equipe / professores** — dá rosto ao "acompanhamento profissional".

### Antes de subir fotos novas
- Máximo ~2000 px no lado maior.
- Comprima (Squoosh, TinyPNG) — mire em menos de 300 KB por foto.
- `.webp` funciona e é bem mais leve; basta trocar a extensão no `src`.

---

## 3. Dados usados no site

Tudo abaixo foi confirmado — em fontes públicas oficiais ou pelo material da
própria academia. **Nada foi inventado.**

| Dado | Valor |
|---|---|
| Endereço | R. Martim Pescador, 917 — Bombas, Bombinhas/SC |
| Telefone / WhatsApp | (47) 99104-7652 |
| Horários | Seg–Sex 06:00–00:00 · Sáb e feriados 07:00–19:00 · Dom 08:00–12:00 |
| Instagram | @elementofitbombinhas |
| Facebook | facebook.com/academiaelementofit |
| Google Maps | maps.app.goo.gl/gdfTFMGCrNQ36X6Y9 |
| Avaliar no Google | g.page/r/CWf6QwMtRwa6EBM/review |
| App NextFit iOS | apps.apple.com/br/app/next-fit/id1360859531 |
| App NextFit Android | play.google.com/store/apps/details?id=br.com.fitastic.appaluno |
| Equipamentos | máquinas **Cimerian**, cardio **Matrix**, bikes de spinning |
| Frases | "Mais que uma academia, uma casa, uma família." · "Academia com vantagens que te inspiram." · "Sua academia completa, com equipamentos e profissionais de ponta." |

### Planos publicados

| Plano | Condições | Preços |
|---|---|---|
| **Clube+** | musculação com horário livre; matrícula isenta; 3 avaliações físicas; Plano Flex; 60 dias de liberdade; 1 consulta com nutricionista; 1 sessão na AFINATO; estrutura completa | a partir de **R$ 119** média mensal — 9× R$ 158,76 (R$ 1.428,00) |
| **Prata** | musculação 3× por semana + matrícula R$ 50 | 12 meses **R$ 119**/mês (6× R$ 238,00) · 6 meses **R$ 149** (4× R$ 223,50) · mensal **R$ 179** |
| **Passaporte** | musculação 6× por semana, 1× por dia + matrícula R$ 50 | 12 meses **R$ 129**/mês (6× R$ 258,00) · 6 meses **R$ 159** (4× R$ 238,50) · mensal **R$ 199** |

Os preços também estão no Schema (`makesOffer`, no fim do `index.html`), o que
permite ao Google exibi-los direto no resultado de busca. **Quando os valores
mudarem, atualize os dois lugares:** os cards em `#planos` e o Schema.

### Onde mudar cada coisa

- **Número de WhatsApp:** procure por `5547991047652` no `index.html` — cada botão
  tem uma mensagem pré-preenchida diferente (recepção, Clube+, Prata, Passaporte,
  dúvida, horários).
- **Horários:** altere a tabela em `#horarios`, o `SCHEDULE` no `main.js` (item 6)
  e o `openingHoursSpecification` no Schema. Os três precisam bater para o selo
  "Aberto agora" ficar correto.
- **Laranja da marca:** `--orange` no topo do `style.css`. O tom atual (`#FF6A00`)
  foi amostrado direto do logo oficial.
- **Tipografia:** `--fd` (títulos), `--ft` (texto) e `--fm` (etiquetas e números)
  no bloco de tokens do `style.css`. Os títulos usam o eixo de largura da Archivo
  comprimido a 62% (`font-stretch:62%`).

---

## 4. Avaliações do Google

O site **não publica depoimentos escritos por nós**. A seção de avaliações leva o
visitante para o perfil oficial no Google, onde as avaliações são reais e não
podem ser editadas.

Se um dia você quiser destacar avaliações reais dentro do site, há um bloco de
exemplo comentado no `index.html`, logo abaixo da seção de avaliações. Copie o
texto e o nome **exatamente como aparecem no Google**.

---

## 5. Único ponto em aberto

- **CNPJ** não foi incluído nos documentos legais porque existem dois registros
  públicos com o nome Elemento Fit em Bombinhas. Se quiser incluir, me diga qual é
  o correto.
- Os **Termos de Uso** e a **Política de Privacidade** são um texto-base sólido e
  aderente à LGPD, mas não substituem revisão de um advogado.

---

## 6. Depois de publicar (SEO local)

1. **Google Business Profile** — coloque o endereço do site no perfil da academia.
   É o que mais move o ponteiro em buscas como "academia em Bombinhas".
2. **Google Search Console** — cadastre o domínio e envie o `sitemap.xml`.
3. Confira que o NAP (nome, endereço, telefone) está **idêntico** no site, no
   Google, no Instagram e no Facebook. Divergência derruba o ranqueamento local.
4. Peça a correção do endereço antigo ("Av. Pavão, 218") nos diretórios que ainda
   o listam — Solutudo, Bendito Guia e similares.

---

## 7. Acessibilidade e performance

- Sem bibliotecas externas: só HTML, CSS e ~9 KB de JavaScript.
- Fontes self-hosted (Archivo Variable + Space Mono) — zero requisições ao Google Fonts.
- Fotos comprimidas (todas abaixo de 230 KB) e com lazy loading.
- O mapa do Google só carrega quando o visitante clica em "Ver no mapa".
- Animações respeitam `prefers-reduced-motion`.
- Navegação completa por teclado, com link "pular para o conteúdo" e foco visível.
- Todas as imagens têm texto alternativo descritivo.

---

## 8. Sistema visual

Direção **editorial brutalista**, dentro da paleta preto · laranja · branco:

- **Tipografia** — *Archivo Variable* nos títulos, com o eixo de largura comprimido
  a 62%; *Space Mono* nas etiquetas, preços, horários e fichas de dados.
- **Grelha** — 12 colunas de margem a margem, com as linhas da grelha visíveis ao
  fundo. Nada é centrado: os títulos encostam à margem esquerda e os textos de
  apoio caem na coluna da direita.
- **Sem cantos arredondados e sem sombras suaves.** As divisões são réguas de 1px;
  os botões deslocam-se com sombra dura no hover.
- **Ritmo** — a secção de planos inverte para fundo branco e o CTA final para
  laranja de borda a borda, quebrando o preto.
- **Animações** — títulos revelados linha a linha por máscara, imagens descobertas
  com corte horizontal, linhas de tabela escalonadas, faixa rolante, barra de
  progresso de leitura e parallax no hero. Tudo respeita `prefers-reduced-motion`.
