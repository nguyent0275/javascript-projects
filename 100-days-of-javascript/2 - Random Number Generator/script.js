const number = document.querySelector(".number");
const generateBtn = document.querySelector(".generate");

const generateRandom = function () {
  let randomNumber = Math.floor(Math.random() * 100);
  number.innerHTML = randomNumber;
};

generateRandom();

generateBtn.addEventListener("click", generateRandom);
