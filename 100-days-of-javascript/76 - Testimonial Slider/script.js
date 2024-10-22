const next = document.querySelector(".next");
const prev = document.querySelector(".prev");
const slides = document.querySelectorAll(".slide");
let index = 0;

function display(index) {
  slides.forEach((slide) => {
    slide.style.display = "none";
  });
  slides[index].style.display = "flex";
}

next.addEventListener("click", () => {
  index++;
  if (index > slides.length - 1) {
    index = 0;
  }
  display(index);
});

prev.addEventListener("click", () => {
  index--;
  if (index < 0) {
    index = slides.length - 1;
  }
  display(index);
});

display(index);
