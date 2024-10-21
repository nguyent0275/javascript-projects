const modal = document.getElementById("modal");
const input = document.getElementById("link");
const btn = document.getElementById("btn");
const closeEl = document.getElementsByClassName("close")[0];

btn.addEventListener("click", openModal);
closeEl.addEventListener("click", closeModal);

// open modal
function openModal(e) {
  e.preventDefault();
  modal.style.display = "block";
  startCountdown();
}

function closeModal(e) {
  modal.style.display = "none";
}

window.addEventListener("click", (e) => {
  if (e.target == modal) {
    modal.style.display = "none";
  }
});

// Countdown Function
let counter = 10;
let progressBar = document.getElementById("pbar");
const counting = document.getElementById("counting");

function startCountdown() {
  let downloadTimer = setInterval(() => {
    progressBar.value = 10 - --counter;
    if (counter <= 0) {
      clearInterval(downloadTimer);
      closeModal();
      window.open(input.value, "_blank");
    }
    counting.innerHTML = counter;
  }, 1000);
  counter = 10;
}
