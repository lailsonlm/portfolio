// Animação Menu
const navbar = document.querySelector('header')

function animeNavbar() {
    navbar.classList.toggle('navbarAnime', window.scrollY > 200)
}

window.addEventListener('scroll', function() {
    animeNavbar()
})