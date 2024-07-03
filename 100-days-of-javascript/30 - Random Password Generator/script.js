const empty = "",
  uCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
  lCase = "abcdefghijklmnopqrstuvwxyz",
  number = "0123456789",
  symbol = "!@#$%^&*=-_";

const passwordLen = document.getElementById("p-length"),
  upperCase = document.getElementById("p-uppercase"),
  lowerCase = document.getElementById("p-lowercase"),
  passwordNum = document.getElementById("p-number"),
  passwordSymbol = document.getElementById("p-symbol"),
  submit = document.getElementById("submit"),
  password = document.getElementById("password");

submit.addEventListener("click", () => {
  let initalPassword = empty;
  // add character if option is checked
  upperCase.checked ? (initalPassword += uCase) : "";
  lowerCase.checked ? (initalPassword += lCase) : "";
  passwordNum.checked ? (initalPassword += number) : "";
  passwordSymbol.checked ? (initalPassword += symbol) : "";

  password.value = generatePassword(passwordLen.value, initalPassword);
});

function generatePassword(l, initalPassword) {
  let pass = "";
  for (let i = 0; i < l; i++) {
    pass += initalPassword.charAt(
      Math.floor(Math.random() * initalPassword.length)
    );
  }
  return pass;
}

const copy = document.querySelector("#copy");
copy.addEventListener("click", () => {
  if (!password.value) return alert("Please generate a password");
  navigator.clipboard.writeText(password.value);
});
