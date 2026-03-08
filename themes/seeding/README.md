# Seeding — Tema Hugo

Tema minimalista para leitura longa. Optimizado para posts com texto corrido,
equações em LaTeX, blocos de código e citações.

> O nome *Seeding* — semear — reflecte a ideia de plantar ideias
> numa página clara, sem ruído, deixando o conteúdo crescer sozinho.

## Funcionalidades

- 3 modos de cor: Claro / Sépia / Escuro (preferência guardada no browser)
- 3 tamanhos de fonte: A− / A / A+ (guardado no browser)
- Barra de progresso de leitura
- Breadcrumbs automáticos
- Índice automático (toc: true no front matter)
- KaTeX para LaTeX — por post ou global
- Share buttons: Twitter/X, Mastodon, LinkedIn, WhatsApp, copiar link
- Página /tags/ com nuvem e contagem
- Modo perfil na home (avatar, bio, social links)
- Menu de navegação configurável
- Copy button automático nos code blocks
- Tipografia: Lora + JetBrains Mono + DM Sans

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
