// ============================================
// Ícones SVG
// ============================================
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

// ============================================
// Toggle Seção com animação suave
// ============================================
function toggleSection(sectionId) {
    const section = document.getElementById(sectionId);
    if (!section) return;
    
    const content = section.querySelector('.conteudo-secao');
    const isAberta = section.classList.contains('aberta');

    // Se não está aberta, fechar outras seções
    if (!isAberta) {
        document.querySelectorAll('.section.aberta').forEach(sec => {
            if (sec.id !== sectionId) {
                const secContent = sec.querySelector('.conteudo-secao');
                secContent.style.maxHeight = "0";
                sec.classList.remove('aberta');
                
                // Atualizar a seta
                const seta = sec.querySelector('.seta');
                if (seta) seta.style.transform = 'rotate(0deg)';
            }
        });
    }

    // Alternar a seção atual
    if (!isAberta) {
        // Abrir a seção
        section.classList.add('aberta');
        content.style.maxHeight = content.scrollHeight + "px";
        
        // Atualizar a seta
        const seta = section.querySelector('.seta');
        if (seta) seta.style.transform = 'rotate(180deg)';
        
        // Scroll suave para a seção
        setTimeout(() => {
            section.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }, 100);
    } else {
        // Fechar a seção
        content.style.maxHeight = "0";
        section.classList.remove('aberta');
        
        // Atualizar a seta
        const seta = section.querySelector('.seta');
        if (seta) seta.style.transform = 'rotate(0deg)';
    }
}

// ============================================
// Inicialização quando o DOM estiver carregado
// ============================================
document.addEventListener('DOMContentLoaded', () => {
    // Configurar o botão de modo claro/escuro
    const toggleBtn = document.getElementById('modo-toggle');
    if (toggleBtn) {
        // Inicializar modo baseado no localStorage
        if (localStorage.getItem('modoEscuro') === 'true') {
            document.body.classList.add('modo-escuro');
            toggleBtn.innerHTML = sunIcon;
        } else {
            toggleBtn.innerHTML = moonIcon;
        }

        // Event listener para alternância de modo
        toggleBtn.addEventListener('click', () => {
            document.body.classList.toggle('modo-escuro');
            const isModoEscuro = document.body.classList.contains('modo-escuro');
            localStorage.setItem('modoEscuro', isModoEscuro);
            toggleBtn.innerHTML = isModoEscuro ? sunIcon : moonIcon;
        });
    }

    // Configurar os links de seção (MINI FEED)
    document.querySelectorAll('.section-link').forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const sectionId = this.getAttribute('data-section');
            toggleSection(sectionId);
        });
    });

    // Configurar os títulos das seções para toggle
    document.querySelectorAll('.section h2').forEach(title => {
        title.addEventListener('click', function() {
            const sectionId = this.closest('.section').id;
            toggleSection(sectionId);
        });
        
        // Melhorar acessibilidade
        title.setAttribute('role', 'button');
        title.setAttribute('tabindex', '0');
        title.setAttribute('aria-expanded', 'false');
        
        // Permitir ativação com Enter e Espaço
        title.addEventListener('keydown', function(e) {
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                const sectionId = this.closest('.section').id;
                toggleSection(sectionId);
            }
        });
    });

    // Abrir seção se houver hash na URL
    const hash = window.location.hash.substring(1);
    if (hash && document.getElementById(hash)) {
        // Pequeno delay para garantir que o DOM esteja totalmente pronto
        setTimeout(() => {
            toggleSection(hash);
        }, 100);
    }
});

// ============================================
// Fechar seções ao clicar fora ou pressionar Escape
// ============================================
document.addEventListener('click', event => {
    if (!event.target.closest('.section') && !event.target.closest('nav') && 
        !event.target.closest('.recent-news')) {
        document.querySelectorAll('.section.aberta').forEach(section => {
            const content = section.querySelector('.conteudo-secao');
            content.style.maxHeight = "0";
            section.classList.remove('aberta');
            
            // Atualizar a seta
            const seta = section.querySelector('.seta');
            if (seta) seta.style.transform = 'rotate(0deg)';
        });
    }
});

document.addEventListener('keydown', event => {
    if (event.key === 'Escape') {
        document.querySelectorAll('.section.aberta').forEach(section => {
            const content = section.querySelector('.conteudo-secao');
            content.style.maxHeight = "0";
            section.classList.remove('aberta');
            
            // Atualizar a seta
            const seta = section.querySelector('.seta');
            if (seta) seta.style.transform = 'rotate(0deg)';
        });
    }
});

// ============================================
// Recalcular altura quando a janela for redimensionada
// ============================================
window.addEventListener('resize', () => {
    document.querySelectorAll('.section.aberta .conteudo-secao').forEach(content => {
        content.style.maxHeight = content.scrollHeight + "px";
    });
});