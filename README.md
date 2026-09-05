# Portfólio — Raquel Renovato

Projeto em **Next.js 14** (App Router) + **Tailwind CSS**, pronto para rodar local e publicar na **Vercel**.

## Estrutura

```
raquel-portfolio/
├── app/
│   ├── layout.js       → layout raiz (fonte, metadados)
│   ├── page.js          → monta as seções na ordem
│   └── globals.css      → Tailwind + estilos customizados
├── components/
│   ├── Header.js
│   ├── Hero.js
│   ├── WhatIDo.js
│   ├── About.js
│   ├── Portfolio.js     → dados dos projetos + galerias (edite aqui!)
│   ├── Skills.js
│   ├── CtaBanner.js
│   └── Footer.js
└── public/
    └── img/              → coloque suas imagens reais aqui
```

## 1. Rodar localmente

Pré-requisito: [Node.js](https://nodejs.org) instalado (versão 18 ou mais recente).

```bash
# dentro da pasta raquel-portfolio
npm install
npm run dev
```

Abra **http://localhost:3000** no navegador.

## 2. Colocar suas imagens

Copie sua pasta `img` (com as subpastas `img-renata`, `img-fernando`, `img-voit`, `img-braduca`,
`img-aymee`, `img-perfil` etc.) para dentro de `public/`, assim:

```
public/
└── img/
    ├── img-renata/
    │   ├── renata-cover-1.png
    │   ├── renata-cover-2.png
    │   ├── renata-cover-3.png
    │   └── renata-cover-4.png
    ├── img-fernando/
    ├── img-voit/
    ├── img-braduca/
    ├── img-aymee/
    └── img-perfil/
```

No código, o caminho sempre começa com `/img/...` (com a barra no início), porque o Next.js
serve tudo que está em `public/` a partir da raiz do site.

## 3. Editar o conteúdo dos projetos

Todos os projetos do portfólio estão centralizados no topo do arquivo
`components/Portfolio.js`, em um array chamado `projects`. Para trocar imagens, textos ou
adicionar mais miniaturas de um projeto, edite só esse arquivo — o layout se ajusta sozinho.

Exemplo de como adicionar uma 4ª miniatura a um projeto: basta acrescentar mais um objeto
`{ src: '...', alt: '...' }` dentro do array `thumbs` daquele projeto (e mudar
`grid-cols-3` para `grid-cols-4` no `components/Portfolio.js`, dentro de `ProjectGallery`,
se quiser todas visíveis lado a lado).

## 4. Publicar na Vercel

### Opção A — pelo site da Vercel (mais simples, sem linha de comando)

1. Crie uma conta gratuita em [vercel.com](https://vercel.com) (dá pra entrar com GitHub).
2. Suba esse projeto para um repositório no **GitHub** (crie um repositório novo, ex:
   `raquel-portfolio`, e envie os arquivos por lá — pode usar o GitHub Desktop se preferir
   interface gráfica em vez de linha de comando).
3. Na Vercel, clique em **"Add New" → "Project"**, selecione o repositório que você acabou
   de criar e clique em **Deploy**. A Vercel detecta automaticamente que é um projeto Next.js
   e configura tudo sozinha.
4. Em poucos minutos você recebe uma URL pública, tipo
   `https://raquel-portfolio.vercel.app`.
5. Toda vez que você enviar uma alteração para o GitHub, a Vercel publica a atualização
   automaticamente.

### Opção B — pela linha de comando (Vercel CLI)

```bash
npm install -g vercel
vercel login
vercel
```

Siga as perguntas no terminal (aceite as opções padrão). No final, ele te dá o link publicado.
Para atualizar o site depois de uma alteração, rode `vercel --prod` de novo dentro da pasta.

## 5. Domínio próprio (opcional)

Se você tiver ou comprar um domínio (ex: `raquelrenovato.com`), dá para conectar direto no
painel da Vercel em **Project Settings → Domains** — a documentação oficial explica o passo a
passo: https://vercel.com/docs/projects/domains/add-a-domain
