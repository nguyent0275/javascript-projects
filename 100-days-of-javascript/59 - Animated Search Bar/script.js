const searchIcon = document.querySelector(".fa-search");
const closeIcon = document.querySelector(".fa-times");
const searchEl = document.querySelector(".search");
const searchInput = document.querySelector(".search input");

searchIcon.addEventListener("click", () => {
  searchIcon.style.transform = "translateY(200%)";
  closeIcon.style.transform = "translateY(0)";
  showSearchBar();
});

closeIcon.addEventListener("click", () => {
  closeIcon.style.transform = "translateY(-200%)";
  searchIcon.style.transform = "translateY(0)";
  hideSearchBar();
});

function showSearchBar() {
  searchEl.style.transform = "translateX(0)";
  setTimeout(() => {
    searchEl.style.width = "30rem";
  }, 1000);
  setTimeout(() => {
    searchInput.setAttribute("placeholder", "Search...");
  }, 2000);
}

function hideSearchBar() {
  searchInput.setAttribute("placeholder", "");
  setTimeout(() => {
    searchEl.style.width = "4.5rem";
  }, 1000);
  setTimeout(() => {
    searchEl.style.transform = "translateX(200%)";
  }, 2000);
}
