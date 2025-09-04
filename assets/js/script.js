// Definição dos ícones SVG
const sunIcon = `
<svg width="24" height="24" viewBox="0 0 24 24" fill="none"
     xmlns="http://www.w3.org/2000/svg" stroke="white" stroke-width="2"
     stroke-linecap="round" stroke-linejoin="round">
  <circle cx="12" cy="12" r="4"/>
  <line x1="12" y1="2" x2="12" y2="5"/>
  <line x1="12" y1="19" x2="12" y2="22"/>
  <line x1="2" y1="12" x2="5" y2="12"/>
  <line x1="19" y1="12" x2="22" y2="12"/>
  <line x1="4.22" y1="4.22" x2="6.34" y2="6.34"/>
  <line x1="17.66" y1="17.66" x2="19.78" y2="19.78"/>
  <line x1="4.22" y1="19.78" x2="6.34" y2="17.66"/>
  <line x1="17.66" y1="6.34" x2="19.78" y2="4.22"/>
</svg>`;

const moonIcon = `
<svg width="24" height="24" viewBox="0 0 24 24" fill="none"
     xmlns="http://www.w3.org/2000/svg" stroke="black" stroke-width="2"
     stroke-linecap="round" stroke-linejoin="round">
  <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79Z"/>
</svg>`;

// Verificar preferência de modo salva
const toggleBtn = document.getElementById('modo-toggle');
if (localStorage.getItem('modoEscuro') === 'true') {
    document.body.classList.add('modo-escuro');
    toggleBtn.innerHTML = sunIcon;
} else {
    toggleBtn.innerHTML = moonIcon;
}

// Alternar entre modo claro e escuro
toggleBtn.addEventListener('click', function() {
    document.body.classList.toggle('modo-escuro');
    const isModoEscuro = document.body.classList.contains('modo-escuro');
    localStorage.setItem('modoEscuro', isModoEscuro);
    this.innerHTML = isModoEscuro ? sunIcon : moonIcon;
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
