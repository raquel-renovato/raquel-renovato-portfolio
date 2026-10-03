# Raquel Renovato — Portfólio

Portfólio de Comunicação Visual e UI Design, desenvolvido com HTML, CSS e JavaScript.

**Site:** https://raquel-renovato-portfolio.vercel.app/

A Home reúne os cinco projetos completos na mesma página. As páginas `/projetos/` e os cases individuais continuam disponíveis como acessos adicionais. O case Fernando Amaral mantém as abas Case, Antes × depois, Sistema visual, Responsivo e Protótipo.

## Estrutura

- `index.html`: apresentação, wireframe interativo, cinco projetos completos, sobre, método, habilidades e contato.
- `projetos/index.html`: todos os projetos.
- `projetos/<nome>/index.html`: cases individuais.
- `css/portfolio.css`: estilos originais do portfólio e cases.
- `css/navigation.css`: vitrine, navegação contextual e páginas individuais.
- `js/portfolio.js`: interações originais, wireframe, carrosséis e apresentação.
- `js/navigation.js`: preferência de tema, abas acessíveis, carregamento de embeds e foco do lightbox.
- `img/previews/`: versões WebP usadas na vitrine.
- `img/`: materiais dos cases e demais imagens existentes.

## Executar localmente

Na raiz do repositório:

```sh
python -m http.server 8080
```

Abra http://localhost:8080. Sirva o projeto pela raiz: os caminhos de assets são absolutos para funcionar nas páginas individuais.

## Publicação

O projeto é um site estático, sem etapa de build, publicado na Vercel. O domínio usado nos metadados, `sitemap.xml` e `robots.txt` deve ser atualizado caso o endereço público mude.

## Manutenção

O HTML e as interações do wireframe da Hero foram preservados durante a separação dos cases. Evite alterar esse componente ao editar os projetos.

Ao adicionar um projeto, atualize a Home (quando fizer parte da seleção), a página de todos os projetos, a navegação de próximo projeto e o sitemap. Os materiais originais continuam no repositório.
