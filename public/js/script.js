const menuBurger = document.getElementById('burger');
const navLinks = document.getElementById('nav-links');

menuBurger.addEventListener('click', () => {
    navLinks.classList.toggle('is-active');
});