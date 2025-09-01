# Template para Posts

```html
<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Título do Post | Espaço do Cristianism0</title>
    <link rel="stylesheet" href="../css/style.css">
    <link rel="apple-touch-icon" sizes="180x180" href="../favicon/apple-touch-icon.png">
    <link rel="icon" type="image/png" sizes="32x32" href="../favicon/favicon-32x32.png">
    <link rel="icon" type="image/png" sizes="16x16" href="../favicon/favicon-16x16.png">
</head>
<body>
    <header>
        <h1>Título do Post</h1>
        <p><small>Publicado em: DD/MM/AAAA</small></p>
        <button id="modo-toggle" aria-label="Alternar modo claro/escuro">🌙</button>
        <nav>
            <ul>
                <li><a href="../index.html">← Voltar para a Página Inicial</a></li>
            </ul>
        </nav>
    </header>

    <main>
        <div class="conteudo-post">
            <!-- ESCREVA SEU CONTEÚDO AQUI -->
            <p>Escreva seu conteúdo livre aqui. Pode usar:</p>
            
            <h2>Título de Seção</h2>
            <p>Parágrafos normais de texto.</p>
            
            <h3>Subtítulo</h3>
            <p>Mais detalhes...</p>
            
            <ul>
                <li>Listas com <strong>itens importantes</strong></li>
                <li>Segundo item da lista</li>
            </ul>
            
            <p>Texto com <strong>negrito</strong>, <em>itálico</em> ou <a href="#" target="_blank">links</a>.</p>
            
            <pre><code>// Código de exemplo
function exemplo() {
    console.log("Hello World");
}</code></pre>
            
            <blockquote>
                <p>Citação ou pensamento interessante...</p>
            </blockquote>
        </div>
    </main>

    <footer>
        <p>&copy; 2025 Espaço do Cristianism0</p>
    </footer>

    <script src="../js/script.js"></script>
</body>
</html>
```