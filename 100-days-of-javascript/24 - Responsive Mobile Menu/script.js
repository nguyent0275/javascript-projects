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

hamburger.addEventListener("click", showMenu);

function showMenu() {
  hamburger.style.display = "none";
  close.style.transform = "translateY(0)";
  menu.style.transform = "translateY(0)";
}

close.addEventListener("click", hideMenu);

function hideMenu() {
  close.style.transform = "translateY(-20rem)";
  hamburger.style.display = "block";
  menu.style.transform = "translateY(-200%)";
}
