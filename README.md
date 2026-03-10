# cristianism0.github.io

Blog pessoal sobre filosofia, computação e literatura.
Construído com [Hugo](https://gohugo.io) e o tema [Seeding](https://github.com/cristianism0/cristianism0.github.io/tree/main/themes/seeding).

## Dependências
```bash
sudo dnf install golang hugo
```

Versão mínima recomendada:
```bash
hugo version   # => v0.120.0+extended
```

## Clonar
```bash
git clone git@github.com:cristianism0/cristianism0.github.io.git
cd cristianism0.github.io
hugo server -D
```

## Imagens

Redimensionar e otimizar antes de commitar:
```bash
mogrify -resize "1600x>" -strip -quality 82 *.{jpg,jpeg,png}
```

Imagens devem ficar no page bundle do post:
```
content/posts/meu-post/
  index.md
  imagem.png
```

## Escrita 

**Regex para Replace**:

Imagem simples:
- Find: `!\[\[([^\]|]+)\]\]`
- Replace: `![]($1)`

Imagem com alt:
- Find: `!\[\[([^\]|]+)\|([^\]]+)\]\]`
- Replace: `![$2]($1)`

Imagem como shortcode figure (com caption):
- Find: `!\[\[([^\]|]+)\]\]`
- Replace: `{{< figure src="$1" alt="" caption="" >}}`

### Frontmatter default
```yaml
---
title: ""
date: 2026-01-01
description: ""
tags: []
math: false       # true = ativa KaTeX
toc: false        # true = mostra índice
image: ""         # imagem Open Graph
noindex: false
draft: true
# Overrides opcionais:
# shareButtons: false
# breadcrumbs: false
# readingTime: false
# postNav: false
---
```

### Shortcodes disponíveis
```
{{< figure src="imagem.png" alt="alt" caption="caption" >}}

{{< callout icon="💡" >}}
**Nota:** texto aqui.
{{< /callout >}}

{{< math >}}
E = mc^2
{{< /math >}}
```