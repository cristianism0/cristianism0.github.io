---
date: 2025-12-10T18:38:34-03:00
title: Minha Experiência Linux
layout: tech
description: Como está minha experiência usando Linux há mais de 6 meses...
tags: ["linux"]
topics: ["tech"]
draft: true
math: false
mermaid: false
---
## Minha experiência com Linux
Há pouco mais de 6 meses tenho utilizado distribuições Linux como boot principal no meu notebook. Tomei essa decisão com pouco tempo de uso com o [Linux Mint](https://linuxmint.com/) em *dual boot* com o Windows. O Mint se tornou muito mais agravável para mim por ser mais limpo, comecei a achar o Windows muito *sobrecarregado*.

Então, Mint foi meu primeiro contato com Linux. A interface Cinnamon é bem agradável porém sempre sentia que faltava alguma coisa. Então comecei com um **Distro Hopping** até me estabelecer de fato no *[Fedora Workstation](https://www.fedoraproject.org/)*. Até lá, passei pelos grandes **Debian e Arch**, mas sempre acabei voltando para o Fedora. 

O Fedora é uma distribuição completa. Embora você possa instalar tudo que precisa nas demais, o Fedora já vem pronto para você, ainda mais, se escolher uma interface gráfica mais sólida como o [GNOME](https://www.gnome.org/). Você não precisa customizar quase nada (*pelo menos, pra mim*) e isso me poupa de cair na *espiral do Ricing*.

Além disso, a minha saturação com IA's casou perfeitamente com o momento atual. Não concordo com as novas atribuições do Windows 11, **usar IA até um explorador de arquivos** é um pouco demais na minha opinião.

### Uso do Terminal
Como alguém recém saído do Windows, o terminal era uma **mágica**. Como o Linux Mint era mais **amigável**, não tinha tanto contato com o terminal, apenas para:

```bash
sudo apt update
```

Como queria mudar esse cenário, esperava adentrar mais no mundo GNU/Linux, mudei para uma distribuição mais **instável**. Embora essa palavra possa causar um certo receio - como medo do seu computador falecer - é mais tranquilo. 

O aprendizado é ganho através da experiência e nada melhor para ganhar experiência do que a prática. Em distribuições mais instáveis, a prática é praticamente forçada, pacotes novos são *deployados* diretamente para teste e você irá testá-los. Irá se deparar com inconsistências e bugs e **terá que saber como resolvê-los ou buscar ajuda**. E todo esse processo e feito via **terminal**, manipulação de arquivos. diretórios, até mesmo editores de texto são usados diretamente no terminal.

Com o uso constante, o terminal acaba se tornando seu melhor amigo, mais confortável e mais sólido até mesmo que usar o CLI. Foi de fato uma experiência.

### Distro Hopping

Quando fazia mudanças de distribuição, tinha sempre um protocolo de instalação pós formatação. Como a experiência com o terminal te traz esse aprendizado prático, você aprenderá que também é mais prático ter seus arquivos e scripts salvos em algum repositório remoto.

Normalmente, minhas configurações de IDE ficam salvas no meu *GitHub*, mas as configurações podem se estender ainda mais. Scripts Bash, Wallpapers, Softlinks podem ser enviados e automatizar mais ainda o set do seu setup em uma instalação fresh.

#### Protocolo
1. Configurar o GitHub (Git já vem instalado no Fedora);
```bash
which git
git config --global user.name "meu nome"
git config --global user.email "email@email.com"
```

2. Criar uma chave para SSH e linkar com o GitHub;
```bash
ssh-keygen -t ed25519 -C "email@email.com"
```
Ed25519 é um modelo de criptografia mais moderno. Isso irá criar um diretório `~/.ssh`, onde `~` é um *alias* para sua `home`.

3. Entrar no `~/.ssh` e pegar a chave pública.
```bash
cd ~/.ssh
ls -a
cat id_ed25519.pub
```
Iremos pegar o conteúdo da chave pública e dar para o GitHub.

4. Clonar meus diretórios.
```bash
mkdir repos
cd repos
git clone git@github...
```

Então, baixos meus IDE's e sempre deixo dependências no README do meu repositório para não me esquecer.

*ex: Esse site é gerado pelo [Hugo](https://gohugo.io/installation/), então, posso verificar a versão mínima no Hugo no site do template e verificar se há essa versão no gerenciador de pacotes da minha distribuição. O Fedora usa o [DNF](https://docs.fedoraproject.org/pt_BR/fedora/f29/system-administrators-guide/package-management/DNF/):*
```bash
sudo dnf install golang hugo
hugo version
git clone git@github... meu_site
cd repos/meu_site
code .
hugo server
```
*E terá que funcionar.*

### Comunidade GNU e Open-Source

Esse tópico não necessariamente precisaria mudar para o Linux para se ter o contato, mas de fato, é mais fácil ter com o próprio Linux. 

Como é sabido - ou até mesmo esperado - Linux é um sistema operacional Unix-based de *código aberto*, ou seja, eu como usuário, tenho acesso a todo o código estrutural do meu sistema. Isso foi por muito tempo um dos **grandes empecilhos para o uso do sistema** - além de problemas com bugs ou compatibilidade - que tem sido amenizado por distribuições mais amigáveis como o próprio Mint ou ZorinOS (que teve um grande *boom* em 2025).

Dentro do Linux você irá se deparar com infinitas mais coisas feitas também em código aberto e agora **você sabe disso**. A praticidade do Windows às vezes colocava uma ***mágica*** em torno do processo e escondia todo o projeto - em partes, às vezes nem nos importamos na verdade - que nos mantinha mais afastado do source. Com o Linux isso me pareceu diferente, aplicações **GNU e Open-Source tem maior credibilidade dentro da comunidade**. Não é raro encontrar pessoas que usam até mesmo editores de texto GNU/Open-Source e serem completamente devotas a isso (**EMACS!!!**).

O projeto GNU foi criado na década de 70 por [Stallman](https://pt.wikipedia.org/wiki/Richard_Stallman) - o criador do Emacs, GCC e GDB e da GPL - com o simples objetivo do **software livre**. O GNU veio com o boom da comunidade hacker e do open-source.
O GNU é baseado em 4 liberdades:
1. a liberdade de executar o programa como **você desejar**
2. a liberdade de **copiá-lo e dá-lo** a seus amigos e colegas
3. a liberdade de **modificar o programa como você desejar,** por ter acesso total ao [código-fonte](https://pt.wikipedia.org/wiki/C%C3%B3digo-fonte "Código-fonte")
4. a liberdade de **distribuir versões melhoradas** e, portanto, ajudar a construir a [comunidade](https://pt.wikipedia.org/wiki/Comunidade "Comunidade").
Essas liberdades são mantidas pela GPL - maior licença de software livre atualmente -. 

O conhecimento desse projeto cativou grandemente e, certamente, ter mudado do Windows para o Linux foi um abrir de portas. 

*embora ainda não consiga me acostumar com Emacs :(*