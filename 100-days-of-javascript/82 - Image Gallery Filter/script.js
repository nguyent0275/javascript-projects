const galleryFilter = document.querySelector(".gallery-filter");
const galleryImages = document.querySelectorAll(".image");

galleryFilter.addEventListener("click", (e) => {
  if (e.target.classList.contains("filter-gallery")) {
    // checks all element for the .active class and then removes it
    galleryFilter.querySelector(".active").classList.remove("active");
    // added to the singular clicked element
    e.target.classList.add("active");

    const filter = e.target.dataset.filter;
    console.log(filter);

    galleryImages.forEach((image) => {
      if (filter === "all" || image.classList.contains(filter)) {
        image.style.display = "block";
      } else {
        image.style.display = "none";
      }
    });
  }
});
