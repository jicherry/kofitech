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

const section2 = document.querySelector('.section2');
const textBoxes = document.querySelectorAll('.section2-text-box');

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach(entry => {

      if (entry.isIntersecting) {
        textBoxes.forEach(box => {
          box.classList.add('active');
        });

      } else {
        textBoxes.forEach(box => {
          box.classList.remove('active');
        });
      }

    });
  },
  {
    threshold: 0.4,
  }
);

observer.observe(section2);
