const tabLinks = document.getElementsByClassName("tab-link");
const allContent = document.querySelectorAll(".tab-content");

for (let i = 0; i < tabLinks.length; i++) {
  // HIGHLIGHTS CLICKED TAB
  tabLinks[i].addEventListener("click", function (e) {
    const current = document.getElementsByClassName("active");
    // deletes active class
    current[0].classList.remove("active");
    // clicked tablink will be given active class
    this.classList.add("active");

    // SWITCH CONTENT
    // gets the data-filter attribute of clicked element
    const filter = e.target.dataset.filter;

    allContent.forEach((content) => {
      // checks the clicked tab's filter against all the content's classlist
      if (content.classList.contains(filter)) {
        content.style.display = "block";
      } else {
        content.style.display = "none";
      }
    });
  });
}
