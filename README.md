# wiki.mauricio

Portfólio pessoal de Maurício Oliveira, QA Engineer.

- Site: https://mauriciofeoli.github.io/wiki/
- Versão em inglês: https://mauriciofeoli.github.io/wiki/?lang=en

Página estática em HTML, CSS e JavaScript puros, sem dependências nem etapa de build, em português e inglês, com tema claro e escuro.

## Estrutura

```
index.html            Conteúdo da página (versões PT e EN)
assets/
  style.css           Estilos e variáveis de tema
  main.js             Botões de tema e idioma
  og-image.png        Imagem de pré-visualização em redes sociais (1200×630)
```

## Como editar

- **Conteúdo:** o `index.html` tem uma cópia do texto por idioma, em `<div class="v-pt">` e `<div class="v-en">`. Toda alteração precisa ser feita nas duas.
- **Nova experiência:** há um modelo comentado no fim da linha do tempo, na versão PT.
- **Data da última edição:** fica no `<footer>` de cada idioma.
- **Script no `<head>`:** define tema e idioma antes da primeira pintura. Fica inline para evitar uma requisição a mais.

## Rodar localmente

Abra o `index.html` no navegador, ou sirva a pasta:

```
python -m http.server 8000
```

## Publicação

O site é publicado pelo GitHub Pages. O `index.html` e a pasta `assets/` precisam estar na raiz do repositório.
