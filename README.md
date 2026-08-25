# Elemento Fit Academia — site institucional

Site da **Elemento Fit Academia**, em Bombas, Bombinhas/SC.
Identidade preto · laranja · branco, com o laranja `#FF6A00` amostrado do logo oficial.

🔗 R. Martim Pescador, 917 — Bombas, Bombinhas/SC · (47) 99104-7652 · [@elementofitbombinhas](https://www.instagram.com/elementofitbombinhas/)

---

## O que tem neste repositório

| Pasta | O que é |
|---|---|
| **`site-estatico/`** | Site pronto em HTML + CSS + JS puro. Sem build, sem dependências. Sobe direto em qualquer hospedagem. |
| **`nextjs/`** | O mesmo site em Next.js 15 (App Router) + TypeScript, componentizado. |
| **`preview/`** | Arquivo único com tudo embutido (fotos, logo e fontes). Abre com duplo clique, funciona offline. |

Cada pasta tem o seu próprio `README.md` com as instruções completas.

---

## Publicar

### GitHub Pages
O repositório já inclui um workflow em `.github/workflows/deploy-pages.yml` que publica automaticamente `site-estatico/` quando houver push na branch `main`. Em **Settings → Pages**, selecione **GitHub Actions** como fonte.


### Site estático
Suba o conteúdo de `site-estatico/` para a hospedagem. O arquivo de entrada é `index.html`.

Na Vercel ou Netlify, aponte o diretório raiz para `site-estatico/` — não há comando de build.

### Next.js
```bash
cd nextjs
npm install
npm run dev     # http://localhost:3000
npm run build
```
Na Vercel, aponte o diretório raiz para `nextjs/`. Não há variáveis de ambiente.

---

## Antes de publicar

1. **Trocar o domínio.** Procure por `https://www.elementofitbombinhas.com.br` e
   substitua pelo domínio real — afeta canonical, Open Graph, sitemap e Schema.
2. **Conferir os preços.** Estão nos cards de planos e também no Schema
   (`makesOffer`). Quando mudarem, atualize os dois lugares.
3. **Google Search Console** — cadastre o domínio e envie o `sitemap.xml`.
4. **Google Business Profile** — coloque o endereço do site no perfil da academia.

---

## Sistema visual

Direção **editorial brutalista** dentro da paleta preto · laranja · branco:
grelha de 12 colunas visível e de margem a margem, títulos em Archivo Variable
comprimida a 62%, dados e etiquetas em Space Mono, réguas de 1px no lugar de
cards, zero cantos arredondados. A secção de planos inverte para branco e o CTA
final para laranja. Animações próprias: revelação linha a linha, corte horizontal
nas imagens, barra de progresso e parallax.

## Seções do site

Navbar fixa · Hero · Sobre · Estrutura · Diferenciais · Planos · App NextFit ·
Horários (com selo "aberto agora" calculado em tempo real) · Avaliações ·
Instagram · Localização · CTA de fechamento · Footer · Termos de Uso ·
Política de Privacidade.

## Planos publicados

| Plano | Condições | Preços |
|---|---|---|
| **Clube+** | horário livre, matrícula isenta, 3 avaliações físicas, Plano Flex, 60 dias de liberdade, 1 consulta com nutricionista, 1 sessão na AFINATO | a partir de R$ 119 média mensal — 9× R$ 158,76 |
| **Prata** | musculação 3× por semana + matrícula R$ 50 | 12 meses R$ 119/mês · 6 meses R$ 149 · mensal R$ 179 |
| **Passaporte** | musculação 6× por semana, 1× por dia + matrícula R$ 50 | 12 meses R$ 129/mês · 6 meses R$ 159 · mensal R$ 199 |

## Notas técnicas

- Sem bibliotecas externas — só HTML, CSS e ~9 KB de JavaScript.
- Fontes Archivo Variable e Space Mono self-hosted: zero requisições a terceiros.
- O mapa do Google só carrega quando o visitante clica em "Ver no mapa".
- Fotos comprimidas (todas abaixo de 230 KB), com lazy loading.
- Schema.org `ExerciseGym` com endereço, horários, geo e preços.
- Acessível: navegação por teclado, foco visível, `prefers-reduced-motion`,
  alt text em todas as imagens.

## Ponto em aberto

O **CNPJ** não foi incluído nos documentos legais: existem dois registros públicos
com o nome Elemento Fit em Bombinhas. Os Termos de Uso e a Política de Privacidade
são um texto-base aderente à LGPD, mas não substituem revisão jurídica.
