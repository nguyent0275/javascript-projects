const modal = document.querySelector(".modal");
const btn = document.querySelector(".btn");
const closeBtn = document.querySelector(".close");

console.log(btn);
console.log(close);

btn.addEventListener("click", openModal);
closeBtn.addEventListener("click", closeModal);
modal.addEventListener("click", closeModal);

// OPEN MODAL
function openModal(e) {
  e.preventDefault();
  modal.style.display = "block";
}

//
function closeModal(e) {
  e.preventDefault();
  modal.style.display = "none";
}
