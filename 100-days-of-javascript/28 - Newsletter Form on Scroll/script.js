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
}

// SCROLL INDICATOR
window.onscroll = () => {
  scrollProgress();
};

function scrollProgress() {
  // Targets Safari browsers || Chrome/Firefox
  const currentScrollState =
    document.body.scrollTop || document.documentElement.scrollTop;

  const pageHeight =
    document.documentElement.scrollHeight -
    document.documentElement.clientHeight;

  const scrollPercentage = (currentScrollState / pageHeight) * 100;

  const progressBar = document.querySelector(".progress");

  progressBar.style.visibility = "visible";
  progressBar.style.width = scrollPercentage + "%";

  // Newsletter JS
  const newsLetter = document.querySelector(".newsletter");

  if (scrollPercentage > 80) {
    newsLetter.style.transform = "translateX(0)";
  } else {
    newsLetter.style.transform = "translateX(100)";
  }

  document.querySelector(".fa-times").addEventListener("click", () => {
    newsLetter.style.transform = "translateX(100)";
  });
}
