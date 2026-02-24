let menuBtn = document.querySelector(".menu-btn");
let header = document.querySelector(".header-wrap");
let mainMenu = document.querySelector(".menu-wrap");

menuBtn.addEventListener("click", () => {
  menuBtn.classList.toggle("turn");
  header.classList.toggle("unfold");
  mainMenu.classList.toggle("unfold");
});

window.addEventListener("scroll", () => {
  if (window.scrollY > 180) {
    header.classList.add("scroll");
  } else {
    header.classList.remove("scroll");
  }
});

let section2 = document.querySelector(".section2");
let textBoxes = document.querySelectorAll(".section2-text-box");

//다시
let observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        textBoxes.forEach((box) => {
          box.classList.add("active");
        });
      } else {
        textBoxes.forEach((box) => {
          box.classList.remove("active");
        });
      }
    });
  },
  {
    threshold: 0.4,
  }
);

observer.observe(section2);

//다시
document.addEventListener("DOMContentLoaded", () => {
  const texts = document.querySelectorAll(".section1-text1");

  let current = 0;

  function cycle() {
    // 현재 보이기
    texts[current].classList.add("show");

    // 3초 유지
    setTimeout(() => {
      // 숨기기
      texts[current].classList.remove("show");

      // 다음으로 이동
      current++;

      if (current >= texts.length) {
        current = 0;
      }

      // 사라진 후 다음 시작 (1초 대기)
      setTimeout(cycle, 1000);
    }, 3000);
  }

  cycle();
});

//슬라이드
const swiperMain = new Swiper(".swiper", {
  loop: true,

  pagination: {
    el: ".swiper-pagination",
  },

  navigation: {
    nextEl: ".next",
    prevEl: ".prev",
  },

  scrollbar: {
    el: ".swiper-scrollbar",
  },
});

const bgImages = [
  "url(img/section4-bg1.png)",
  "url(img/section4-bg2.png)",
  "url(img/section4-bg3.png)",
  "url(img/section4-bg4.png)",
];

const section = document.querySelector(".section4");

const swiper = new Swiper(".swiper", {
  loop: true,
  navigation: {
    nextEl: ".next",
    prevEl: ".prev",
  },
});

/* 🔥 버튼 클릭할 때만 배경 변경 */
document.querySelector(".next").addEventListener("click", () => {
  section.style.backgroundImage = bgImages[swiper.realIndex];
});

document.querySelector(".prev").addEventListener("click", () => {
  section.style.backgroundImage = bgImages[swiper.realIndex];
});
