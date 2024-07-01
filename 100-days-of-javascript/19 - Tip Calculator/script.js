const btn = document.querySelector(".btn");
const tip = document.querySelector(".tip");
const total = document.querySelector(".total");
const error = document.querySelector(".error");
btn.addEventListener("click", calculateTip);

function hideError() {
  setTimeout(() => {
    error.style.display = "none";
  }, 5000);
}

function calculateTip(e) {
  e.preventDefault();
  const bill = document.querySelector(".bill").value;
  const rate = document.querySelector(".rate").value;

  if (!bill || !rate) {
    error.style.display = "block";
    hideError();
    return;
  } else if (isNaN(bill)) {
    error.innerHTML = `Please enter a valid number`;
    error.style.display = "block";
    hideError();
  } else {
    let tipAmount = Math.ceil(bill * rate);
    tip.innerHTML = `Tip Amount: $${tipAmount}`;
    total.innerHTML = `Total Amount: $${+bill + +tipAmount}`;
  }
}
