---
date: '{{ .Date }}'
title: '{{ replace .File.ContentBaseName "-" " " | title }}'
layout: default
summary: {{ .Summary }}
tags: []
draft: true
math: false
mermaid: false
---
