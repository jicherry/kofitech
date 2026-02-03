const menuBtn = document.querySelector('.menu-btn');
const mainMenu = document.querySelector('.main-menu');
const header = document.querySelector('.main-header');

menuBtn.addEventListener('click', () => {
  mainMenu.classList.toggle('active');
  header.classList.toggle('is-open');
});

window.addEventListener('scroll', () => {
  if (window.scrollY > 200) {
    header.classList.add('scroll');
  } else {
    header.classList.remove('scroll');
  }
});
