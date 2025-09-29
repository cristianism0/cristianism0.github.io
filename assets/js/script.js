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
        const isDark = document.documentElement.classList.contains('dark');
        toggleBtn.innerHTML = isDark ? sunIcon : moonIcon;

        toggleBtn.addEventListener('click', () => {
            document.documentElement.classList.toggle('dark');
            const darkNow = document.documentElement.classList.contains('dark');
            localStorage.setItem("theme", darkNow ? "dark" : "light");
            toggleBtn.innerHTML = darkNow ? sunIcon : moonIcon;
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
// Highlight em links interno e footnotes
// ============================================
(function () {
  'use strict';

  const FLASH_CLASS = 'fh-flash';
  const FLASH_DURATION = 2000; 

  function cssEscape(str) {
    if (window.CSS && CSS.escape) return CSS.escape(str);
    return String(str).replace(/([ !"#$%&'()*+,./:;<=>?@[\\\]^`{|}~])/g, '\\$1');
  }

  function getElementByIdRobust(id) {
    if (!id) return null;
    // tentativa direta
    let el = document.getElementById(id);
    if (el) return el;
    // fallback para ids com caracteres estranhos
    try {
      el = document.querySelector('[id="' + id + '"]') || document.querySelector('#' + cssEscape(id));
    } catch (e) {
      // fallback menos seguro
      el = document.querySelector('[id="' + id.replace(/"/g, '\\"') + '"]') || null;
    }
    return el;
  }

  function flashElement(el) {
    if (!el) return;
    

    el.classList.remove(FLASH_CLASS);

    const hadTabindex = el.hasAttribute('tabindex');
    if (!hadTabindex) el.setAttribute('tabindex', '-1');

    void el.offsetWidth;
    el.classList.add(FLASH_CLASS);

    try {
      el.focus({ preventScroll: true });
    } catch (err) {
      el.focus();
    }

    if (!window.matchMedia || !window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      el.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }

    setTimeout(function () {
      el.classList.remove(FLASH_CLASS);
      if (!hadTabindex) el.removeAttribute('tabindex');
    }, FLASH_DURATION + 50);
  }

  window.addEventListener('hashchange', function () {
    const id = location.hash ? location.hash.slice(1) : '';
    if (!id) return;
    const el = getElementByIdRobust(id);
    flashElement(el);
  });

  window.addEventListener('load', function () {
    if (!location.hash) return;
    const id = location.hash.slice(1);
    const el = getElementByIdRobust(id);
    setTimeout(function () { flashElement(el); }, 200);
  });

  document.addEventListener('click', function (e) {
    const a = e.target.closest('a[href^="#"]');
    if (!a) return;
    const href = a.getAttribute('href');
    if (!href || href === '#') return;
    const id = href.slice(1);

    setTimeout(function () {
      const el = getElementByIdRobust(id);
      flashElement(el);
    }, 10);
  });

})();
