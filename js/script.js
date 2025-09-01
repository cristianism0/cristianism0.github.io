// Verificar preferência de modo salva
if (localStorage.getItem('modoEscuro') === 'true') {
    document.body.classList.add('modo-escuro');
    document.getElementById('modo-toggle').textContent = '☀️';
}

// Alternar entre modo claro e escuro
document.getElementById('modo-toggle').addEventListener('click', function() {
    document.body.classList.toggle('modo-escuro');
    const isModoEscuro = document.body.classList.contains('modo-escuro');
    localStorage.setItem('modoEscuro', isModoEscuro);
    this.textContent = isModoEscuro ? '☀️' : '🌙';
});

// Função para toggle das seções
function toggleSection(sectionId, event = null) {
    if (event) event.preventDefault();
    
    const section = document.getElementById(sectionId);
    const isAberta = section.classList.contains('aberta');
    
    // Fechar todas as seções primeiro
    document.querySelectorAll('.section').forEach(sec => {
        sec.classList.remove('aberta');
    });
    
    // Abrir a seção clicada se não estava aberta
    if (!isAberta) {
        section.classList.add('aberta');
    }
}

// Fechar seções ao clicar fora delas
document.addEventListener('click', function(event) {
    if (!event.target.closest('.section') && !event.target.closest('nav')) {
        document.querySelectorAll('.section').forEach(section => {
            section.classList.remove('aberta');
        });
    }
});

// Tecla Escape para fechar seções
document.addEventListener('keydown', function(event) {
    if (event.key === 'Escape') {
        document.querySelectorAll('.section').forEach(section => {
            section.classList.remove('aberta');
        });
    }
});

// Abrir seção com hash na URL
document.addEventListener('DOMContentLoaded', function() {
    const hash = window.location.hash.substring(1);
    if (hash && document.getElementById(hash)) {
        toggleSection(hash);
    }
});