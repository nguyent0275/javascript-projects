const modal = document.querySelector(".modal");
const modalContent = document.querySelector(".modal-content");
const btn = document.querySelector(".btn");
const closeBtn = document.querySelector(".close");

console.log(btn);
console.log(close);

btn.addEventListener("click", openModal);
closeBtn.addEventListener("click", closeModal);
modal.addEventListener("click", closeModal);

function openModal(e) {
  e.preventDefault();
  modal.style.display = "block";
}

function closeModal(e) {
  modalContent.classList.add("slide-up");

  setTimeout(() => {
    modal.style.display = "none";
    modalContent.classList.remove("slide-up");
  }, 500);
}
