<div align="center" id="top">
 <img src="https://blog.cubos.io/content/images/2019/02/cubosteste-1.png" />
  &#xa0;
</div>

<h1 align="center">Deafio Cubos</h1>

<p align="center">
  <img alt="Made by" src="https://img.shields.io/badge/made%20by-Morpa%20-%2356BEB8">

  <img alt="GitHub last commit" src="https://img.shields.io/github/last-commit/morpa/desafio-cubos.svg?color=56BEB8">

  <img alt="Code size" src="https://img.shields.io/github/languages/code-size/morpa/desafio-cubos.svg?color=56BEB8">

  <img alt="Github top language" src="https://img.shields.io/github/languages/top/Morpa/desafio-cubos?color=56BEB8">

  <img alt="Github language count" src="https://img.shields.io/github/languages/count/Morpa/desafio-cubos?color=56BEB8">

  <img alt="Repository size" src="https://img.shields.io/github/repo-size/Morpa/desafio-cubos?color=56BEB8">

  <img alt="License" src="https://img.shields.io/github/license/Morpa/desafio-cubos?color=56BEB8">

</p>

<p align="center">
  <a href="#dart-about">Sobre</a> &#xa0; | &#xa0;
  <a href="#rocket-technologies">Tecnologias</a> &#xa0; | &#xa0;
  <a href="#checkered_flag-starting">Iniciando</a> &#xa0; | &#xa0;
  <a href="https://github.com/Morpa" target="_blank">Autor</a>
</p>

<br>

## :dart: Sobre o projeto ##

Este projeto foi desenvolvido para o desafio Front-End da Cubos, a idéia é replicar o layout que foi disponibilizado e desenvolver suas funções conforme foram solicitadas no desafio. O Projeto foi criado em NextJS utilizando TypeScript e as informações são da API do The Movie Database.

## :sparkles: Features ##

:heavy_check_mark: Permitir buscar filmes por nome ou gênero;\
:heavy_check_mark: Resultados de busca paginados, 5 por página;\
:heavy_check_mark: Exibir nos resultados da busca: nome, cartaz, data de lançamento, sinopse, pontuação do filme e categorias;\
:heavy_check_mark: Possa ver, ao clicar em um resultado da busca, detalhes do filme além dos mostrados na busca, como: status (lançado, previsto, etc), idioma, duração, orçamento, receita, lucro, categorias e trailer, quando disponíveis;\
:heavy_check_mark: Responsivo;\
:heavy_check_mark: PWA;\

## :rocket: Tecnologias ##

- [TypeScript](https://www.typescriptlang.org/)
- [NextJS](https://nextjs.org/)
- [Styled Components](https://styled-components.com/)
- [Jest](https://jestjs.io/)
- [React Testing Library](https://testing-library.com/docs/react-testing-library/intro)
- [Storybook](https://storybook.js.org/)
- [Eslint](https://eslint.org/)
- [Prettier](https://prettier.io/)
- [Husky](https://github.com/typicode/husky)

## :checkered_flag: Iniciando ##
**Será necessária a instalação do [Node.js](https://nodejs.org/en/download/) ou [Yarn](https://yarnpkg.com/) e do [Git](https://git-scm.com/) na sua máquina (caso ainda não tenha instalado).

Dentro da raíz do projeto, crie um arquivo .env.local (conforme o aqruivo .env.example) e insira sua chave da API. Disponível em [TMDB](https://www.themoviedb.org/?language=pt-PT)


```bash
# Clone o repositório
$ git clone https://github.com/Morpa/deafio-cubos

# Accesse a pasta
$ cd deafio-cubos

# Instale as dependências
$ yarn

```

## Comandos

```bash
yarn dev: executa a plicação em `localhost:3000`

yarn build: cria o build de produção

yarn start:  inicia um simples servidor para executar o build gerado

yarn lint: executa r linter em todos componentes e páginas

yarn test: executa o jest para testar todos os componentes e páginas

yarn test:watch: executa o jest no modo watch

yarn storybook: executa o storybook em `localhost:6006`

yarn build-storybook:  cria um build de produção do storybook
```

Made with :heart: by <a href="https://github.com/Morpa" target="_blank">Morpa</a>

&#xa0;

<a href="#top">Back to top</a>
