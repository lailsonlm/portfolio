// Animação Menu
const navbar = document.querySelector('.container_nav')

function animeNavbar() {
    navbar.classList.toggle('navbarAnime', window.scrollY > 200)
}

window.addEventListener('scroll', function() {
    animeNavbar()
})