const links = document.querySelectorAll(".nav-list li a");

for (link of links) {
  link.addEventListener("click", smoothScroll);
}

function smoothScroll(e) {
  e.preventDefault();
  const href = this.getAttribute("href");
  document.querySelector(href).scrollIntoView({
    behavior: "smooth",
  });
  hideMenu();
}

// RESPONSIVE MOBILE MENU
const menu = document.querySelector(".nav-list");
const hamburger = document.querySelector(".hamburger");
const close = document.querySelector(".close");
const menuWrapper = document.querySelector(".nav-wrapper");

hamburger.addEventListener("click", showMenu);

function showMenu() {
  hamburger.style.display = "none";
  close.style.transform = "translateY(0)";
  menuWrapper.style.transform = "translateX(0)";
  menu.style.transform = "translateX(0)";
}

close.addEventListener("click", hideMenu);

function hideMenu() {
  close.style.transform = "translateY(-20rem)";
  hamburger.style.display = "block";
  menuWrapper.style.transform = "translateX(-200%)";
  menu.style.transform = "translateX(200%)";
  subMenuThree.style.transform = "translateX(-100%)";
}

menuWrapper.addEventListener("click", hideMenu);

// SUBMENU

const thirdLink = document.querySelector(".third-link");
const back = document.querySelector(".back-to-menu");
const subMenuThree = document.querySelector(".submenu-three");

thirdLink.addEventListener("click", () => {
  menu.style.transform = "translateX(-100%)";
  subMenuThree.style.transform = "translateX(0)";
});

back.addEventListener("click", () => {
  menu.style.transform = "translateX(0)";
  subMenuThree.style.transform = "translateX(-100%)";
});
