const swiper = new Swiper('.swiper', {
  spaceBetween: 100,
  loop: true,
  autoplay: false,
  effect: "fade",

  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  }
});

const p0 = document.querySelector('#portfolio0')
const p1 = document.querySelector('#portfolio1')
const p2 = document.querySelector('#portfolio2')
const p3 = document.querySelector('#portfolio3')
const p4 = document.querySelector('#portfolio4')
const p5 = document.querySelector('#portfolio5')
const p6 = document.querySelector('#portfolio6')

p0.addEventListener('click', (e) => {
  e.preventDefault();
  swiper.slideTo(1, 0);
})

p1.addEventListener('click', (e) => {
  e.preventDefault();
  swiper.slideTo(2, 0);
})

p2.addEventListener('click', (e) => {
  e.preventDefault();
  swiper.slideTo(3, 0);
})

p3.addEventListener('click', (e) => {
  e.preventDefault();
  swiper.slideTo(4, 0);
})

p4.addEventListener('click', (e) => {
  e.preventDefault();
  swiper.slideTo(5, 0);
})

p5.addEventListener('click', (e) => {
  e.preventDefault();
  swiper.slideTo(6, 0);
})

p6.addEventListener('click', (e) => {
  e.preventDefault();
  swiper.slideTo(7, 0);
})