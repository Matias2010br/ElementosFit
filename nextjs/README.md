# Elemento Fit Academia — versão Next.js

Mesmo site, em Next.js 15 (App Router) + TypeScript. Zero dependências além do
React/Next: nada de bibliotecas de animação ou de UI.

```bash
npm install
npm run dev     # http://localhost:3000
npm run build   # build de produção
```

Deploy na Vercel: importe o repositório e publique — não há variáveis de ambiente.

## Estrutura

```
app/
├── layout.tsx                   ← metadata, Open Graph, JSON-LD (Schema + preços)
├── page.tsx                     ← composição das seções
├── globals.css                  ← o mesmo CSS do site estático
├── termos-de-uso/page.tsx
└── politica-de-privacidade/page.tsx
components/
├── Navbar / Hero / Sobre / Estrutura / Diferenciais / Planos
├── AppNextFit / Horarios / Avaliacoes / Instagram / Localizacao
├── CtaFinal / Footer / WhatsAppFab / LegalShell
└── SiteBehavior.tsx             ← 'use client': navbar, menu, animações,
                                    horários, mapa, fotos
lib/site.ts                      ← telefone, endereço, links e mensagens
                                    de WhatsApp em um lugar só
public/assets/                   ← fotos, logos e fontes
```

**Para trocar telefone, endereço, links ou mensagens de WhatsApp:** edite
`lib/site.ts`. **Para trocar fotos:** substitua os arquivos em
`public/assets/img/` mantendo os nomes. **Para mudar preços:** os cards ficam em
`components/Planos.tsx` e o `makesOffer` do Schema em `app/layout.tsx` — os dois
precisam ser atualizados juntos.

O restante das instruções é igual à versão estática e está reproduzido abaixo.

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

As fotos estão direto nos componentes, em tags `<img>`. Para trocar uma delas,
salve o arquivo novo em `public/assets/img/` **com o mesmo nome** — não precisa
mexer no código. Se mudar o nome ou as proporções, ajuste também o `src`, o
`width`, o `height` e o `alt` no componente da seção.

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
| Horários | Seg–Sex 06:00–00:00 · Sáb e feriados 07:00–19:00 · Dom fechado |
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

Os preços também estão no Schema (`makesOffer`, no fim do componente correspondente), o que
permite ao Google exibi-los direto no resultado de busca. **Quando os valores
mudarem, atualize os dois lugares:** os cards em `components/Planos.tsx` e o Schema em `app/layout.tsx`.

### Onde mudar cada coisa

- **Número de WhatsApp:** edite `WA_MENSAGENS` e `ACADEMIA.whatsapp` em `lib/site.ts` — cada botão
  tem uma mensagem pré-preenchida diferente (recepção, Clube+, Prata, Passaporte,
  dúvida, horários).
- **Horários:** altere a tabela em `#horarios`, o `SCHEDULE` no `HORARIOS` em `lib/site.ts`
  e o `openingHoursSpecification` no Schema. Os três precisam bater para o selo
  "Aberto agora" ficar correto.
- **Laranja da marca:** `--orange` no topo do `style.css`. O tom atual (`#FF6A00`)
  foi amostrado direto do logo oficial.

---

## 4. Avaliações do Google

O site **não publica depoimentos escritos por nós**. A seção de avaliações leva o
visitante para o perfil oficial no Google, onde as avaliações são reais e não
podem ser editadas.

Se um dia você quiser destacar avaliações reais dentro do site, há um bloco de
exemplo comentado no componente correspondente, logo abaixo da seção de avaliações. Copie o
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

- Sem bibliotecas externas: só HTML, CSS e ~7 KB de JavaScript.
- Fontes self-hosted — zero requisições ao Google Fonts.
- Fotos comprimidas (todas abaixo de 230 KB) e com lazy loading.
- O mapa do Google só carrega quando o visitante clica em "Ver no mapa".
- Animações respeitam `prefers-reduced-motion`.
- Navegação completa por teclado, com link "pular para o conteúdo" e foco visível.
- Todas as imagens têm texto alternativo descritivo.
