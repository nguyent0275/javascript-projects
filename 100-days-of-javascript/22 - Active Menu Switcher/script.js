// Active Menu Switcher

const navList = document.querySelector(".nav-list");

navList.addEventListener("click", (e) => {
  // EVENT DELEGATION
  // when you click on the <a> tag, it will check if the parent element (<li>) contains a class of 'link'
  const navLink = e.target.parentElement;
  if (navLink.classList.contains("link")) {
    // looking for the <li> with the class of "active" and removing it
    navList.querySelector(".active").classList.remove("active");
    // the clicked navLink will get the "active" class
    navLink.classList.add("active");
  }
});
