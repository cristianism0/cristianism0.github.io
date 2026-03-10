# Seeding — Tema Hugo

Tema minimalista para leitura longa. Otimizado para posts com texto corrido,
equações em LaTeX, blocos de código e citações.

## Funcionalidades

- 3 modos de cor: Claro / Sépia / Escuro (preferência guardada no browser)
- 3 tamanhos de fonte: A− / A / A+ (guardado no browser)
- Barra de progresso de leitura
- Breadcrumbs automáticos controláveis por página
- Índice automático (`toc: true` no frontmatter)
- KaTeX para LaTeX — por post ou global (`math: true`)
- Share buttons: Twitter/X, Bluesky, LinkedIn, WhatsApp, copiar link
- Página `/tags/` com nuvem e contagem
- Modo perfil na home (avatar, bio, links sociais)
- Menu de navegação configurável
- Copy button automático nos blocos de código com detecção de linguagem
- Tipografia: Source Serif 4 + JetBrains Mono + DM Sans
- Navegação anterior/próximo entre posts
- Tempo de leitura e contagem de palavras
- CSS customizável via `assets/css/custom.css`

## Parâmetros (`hugo.yaml`)
```yaml
params:
  author: "Nome"
  description: "Descrição do site."
  avatar: "/images/avatar.jpeg"     # usado no profileMode
  bio: "Biografia curta."           # usado no profileMode
  ogImage: "/images/og.png"
  favicon: "/favicon"
  math: false           # true = KaTeX em todas as páginas
  shareButtons: true    # botões de compartilhar no fim de cada post
  profileMode: false    # true = home com avatar e bio
  customCSS: false      # true = ativa assets/css/custom.css
  breadcrumbs: true     # false = oculta o caminho de navegação
  readingTime: true     # false = oculta o tempo de leitura
  wordCount: true       # false = oculta a contagem de palavras
  lastModified: false   # true = mostra data de última edição
  postNav: true         # false = oculta navegação anterior/próximo
  showCopyright: true   # false = oculta o copyright no rodapé
  footerText: ""        # texto livre no rodapé
  social:
    github: "usuario"
    twitter: "usuario"
    email: "email@exemplo.com"
```

Qualquer parâmetro pode ser sobrescrito por página no frontmatter:
```yaml
---
title: "Sobre"
shareButtons: false
breadcrumbs: false
readingTime: false
---
```

## Instalação
```bash
hugo new site meu-site
cd meu-site
unzip seeding-theme.zip -d themes/
mv themes/seeding-theme themes/seeding
cp themes/seeding/hugo.yaml.example hugo.yaml
hugo new posts/primeiro-post.md
hugo server -D
```

## Requisitos

- Hugo 0.120.0+ Extended
