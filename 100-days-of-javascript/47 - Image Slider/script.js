const slides = document.querySelectorAll(".slide");
const next = document.querySelector(".next");
const prev = document.querySelector(".prev");
let autoScroll = true;
let slideInterval;
let intervalTime = 5000;

const nextSlide = function () {
  const current = document.querySelector(".current");
  current.classList.remove("current");
  if (current.nextElementSibling) {
    current.nextElementSibling.classList.add("current");
  } else {
    slides[0].classList.add("current");
  }
  current.classList.remove("current");
};

const prevSlide = function () {
  const current = document.querySelector(".current");
  current.classList.remove("current");
  if (current.previousElementSibling) {
    current.previousElementSibling.classList.add("current");
  } else {
    slides[slides.length - 1].classList.add("current");
  }
  current.classList.remove("current");
};

next.addEventListener("click", () => {
  nextSlide();
  if (autoScroll) {
    clearInterval(slideInterval);
    auto();
  }
});
prev.addEventListener("click", () => {
  prevSlide();
  if (autoScroll) {
    clearInterval(slideInterval);
    auto();
  }
});

if (autoScroll) {
  function auto() {
    slideInterval = setInterval(nextSlide, intervalTime);
  }
}

auto();
