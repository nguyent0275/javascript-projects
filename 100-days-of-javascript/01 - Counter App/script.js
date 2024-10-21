const count = document.querySelector(".count");
const buttons = document.querySelector(".buttons");

const setColor = function () {
  if (+count.innerHTML > 0) {
    count.style.color = "yellow";
  } else if (+count.innerHTML < 0) {
    count.style.color = "orangered";
  } else {
    count.style.color = "white";
  }
};

// EVENT DELEGATION
buttons.addEventListener("click", (e) => {
  if (e.target.classList.contains("add")) {
    count.innerHTML++;
    setColor();
  } else if (e.target.classList.contains("subtract")) {
    count.innerHTML--;
    setColor();
  } else if (e.target.classList.contains("reset")) {
    count.innerHTML = 0;
    setColor();
  }
});
