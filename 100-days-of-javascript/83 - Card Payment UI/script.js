const cardNumber = document.querySelector("#number");
const cardValidity = document.querySelector("#valid");
const cardCvv = document.querySelector("#cvv");

cardNumber.addEventListener("input", formateCardNumber);
cardValidity.addEventListener("input", formatCardValidity);
cardCvv.addEventListener("input", formatCvv);

function formateCardNumber(e) {
  // 16 for card number, 3 for blank spaces between the numbers
  cardNumber.maxLength = "19";
  e.target.value = e.target.value
    // filters our letters from inputs
    .replace(/[^\dA-Z]/g, "")
    .replace(/[^\da-z]/g, "")
    // after ever 4 character will add a space
    .replace(/(.{4})/g, "$1 ")
    .trim();
  if (cardNumber.value.length == 19) {
    formatCardValidity();
  }
}

function formatCardValidity() {
  cardValidity.focus();
  cardValidity.maxLength = "5";

  if (cardValidity.value.length < 5) {
    cardValidity.value = cardValidity.value
      // filters our letters from inputs
      .replace(/[^\dA-Z]/g, "")
      .replace(/[^\da-z]/g, "")
      // after ever 4 character will add a space
      .replace(/(.{2})/g, "$1/")
      .trim();
  }
  if (cardValidity.value.length == 5) {
    formatCvv();
  }
}

function formatCvv(e) {
  cardCvv.focus();
  cardCvv.maxLength = "3";
  cardCvv.value = cardCvv.value
    .replace(/[^\dA-Z]/g, "")
    .replace(/[^\da-z]/g, "")
    .trim();
}
