// Controle do footer inteligente
let lastScroll = 0;
const footer = document.querySelector('footer');
const scrollThreshold = 100; // Quantos pixels rolar antes de esconder

function handleScroll() {
    const currentScroll = window.scrollY;
    const scrollDirection = currentScroll > lastScroll;
    const windowHeight = window.innerHeight;
    const documentHeight = document.documentElement.scrollHeight;

    // Mostra o footer se estiver no topo ou no final da página
    if (currentScroll < 50 || currentScroll + windowHeight >= documentHeight - 50) {
        footer.classList.remove('hide');
        return;
    }

    // Esconde ao rolar para baixo, mostra ao rolar para cima
    if (scrollDirection && currentScroll > scrollThreshold) {
        footer.classList.add('hide');
    } else {
        footer.classList.remove('hide');
    }

    lastScroll = currentScroll;
}

// Adiciona o event listener com debounce para melhor performance
let scrollTimeout;
window.addEventListener('scroll', function() {
    clearTimeout(scrollTimeout);
    scrollTimeout = setTimeout(handleScroll, 50);
});

// Garante que o footer esteja visível quando a página carregar
document.addEventListener('DOMContentLoaded', function() {
    footer.classList.remove('hide');
});

// Função opcional para casos específicos
function toggleFooter(show) {
    if (show) {
        footer.classList.remove('hide');
    } else {
        footer.classList.add('hide');
    }
}