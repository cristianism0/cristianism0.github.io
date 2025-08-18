function toggleMenu(id) {
    const submenu = document.getElementById(id);
    submenu.style.display = submenu.style.display === 'block' ? 'none' : 'block';
}

// Fecha os menus se clicar fora
document.addEventListener('click', function(event) {
    if (!event.target.matches('nav a')) {
        const menus = document.querySelectorAll('.submenu');
        menus.forEach(menu => {
            menu.style.display = 'none';
        });
    }
})
let lastScroll = 0;
const footer = document.querySelector('footer');

window.addEventListener('scroll', function() {
    const currentScroll = window.scrollY;

    // Rolar para BAIXO: esconde o footer
    if (currentScroll > lastScroll && currentScroll > 100) {
        footer.classList.add('hide');
    } 
    // Rolar para CIMA: mostra o footer
    else {
        footer.classList.remove('hide');
    }

    lastScroll = currentScroll;
});