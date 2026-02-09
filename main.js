let menuBtn = document.querySelector('.menu-btn');
let header = document.querySelector('.header-wrap');
let mainMenu = document.querySelector('.menu-wrap');

menuBtn.addEventListener('click', () => {
  menuBtn.classList.toggle('turn');
  header.classList.toggle('unfold');
  mainMenu.classList.toggle('unfold');
});

window.addEventListener('scroll', () => {
  if (window.scrollY > 180) {
    header.classList.add('scroll');
  } else {
    header.classList.remove('scroll');
  }
});