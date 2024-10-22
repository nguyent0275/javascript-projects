const imgLarge = document.getElementById("large-img");
const productImages = document.querySelectorAll(".img-sm img");

productImages.forEach((image) => {
  image.addEventListener("click", (e) => {
    let src = e.target.getAttribute("src");
    imgLarge.src = src;
  });
});
