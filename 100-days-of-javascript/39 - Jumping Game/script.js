const hero = document.querySelector(".hero");
const heroBoy = document.querySelector(".hero-boy");
const villain = document.querySelector(".villain");

const jump = () => {
  if (hero.classList != "animate") {
    hero.classList.add("animate");
    villain.style.animation = "move 1s infinite linear";
  }
  setTimeout(() => {
    hero.classList.remove("animate");
  }, 300);
};

document.addEventListener("keydown", (e) => {
  if (e.code === "Space") {
    jump();
  }
});

let isAlive = setInterval(() => {
  let heroTop = parseInt(window.getComputedStyle(hero).getPropertyValue("top"));
  let villainLeft = parseInt(
    window.getComputedStyle(villain).getPropertyValue("left")
  );

  if (villainLeft < 40 && villainLeft > 20 && heroTop >= 130) {
    villain.style.animation = "none";
    alert("GAME OVER. Press spacebar to start");
  }
}, 10);
