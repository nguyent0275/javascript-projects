let state,
  password = document.getElementById("password"),
  passwordSTR = document.getElementById("password-strength"),
  caseSense = document.querySelector(".low-upper-case i"),
  number = document.querySelector(".number i"),
  specialChar = document.querySelector(".special-char i"),
  eightChar = document.querySelector(".eight-char i"),
  showPassword = document.querySelector(".show-pass"),
  eyeIcon = document.getElementById("eye");

showPassword.addEventListener("click", togglePassword);
eyeIcon.addEventListener("click", toggleEye);
password.addEventListener("keyup", () => {
  let pass = password.value;
  checkStrength(pass);
});

function togglePassword() {
  if (state) {
    password.setAttribute("type", "password");
    state = false;
  } else {
    password.setAttribute("type", "text");
    state = true;
  }
}

function toggleEye() {
  if (eyeIcon.classList.contains("fa-eye")) {
    eyeIcon.classList.remove("fa-eye");
    eyeIcon.classList.add("fa-eye-slash");
  } else {
    eyeIcon.classList.remove("fa-eye-slash");
    eyeIcon.classList.add("fa-eye");
  }
}

function checkStrength(password) {
  let strength = 0;
  if (password.match(/([a-z].*[A-Z])|([A-Z].*[a-z])/)) {
    console.log("lowerUpper");
    strength += 1;
    addCheck(caseSense);
  } else {
    removeCheck(caseSense);
    if (strength > 0) strength - 1;
  }
  if (password.match(/([0-9])/)) {
    console.log("number");
    strength += 1;
    addCheck(number);
  } else {
    removeCheck(number);
    if (strength > 0) strength - 1;
  }
  if (password.match(/([!,%,&,@,#,$,^,*,?,_,`])/)) {
    console.log("special");
    strength += 1;
    addCheck(specialChar);
  } else {
    removeCheck(specialChar);
    if (strength > 0) strength - 1;
  }
  if (password.length > 7) {
    console.log("length");
    strength += 1;
    addCheck(eightChar);
  } else {
    removeCheck(eightChar);
    if (strength > 0) strength - 1;
  }

  console.log(strength);

  if (strength == 1) {
    passwordSTR.className = "progress-bar pb-danger";
    passwordSTR.style = "width: 25%";
  } else if (strength == 2) {
    passwordSTR.className = "progress-bar pb-warning";
    passwordSTR.style = "width: 50%";
  } else if (strength == 3) {
    passwordSTR.className = "progress-bar pb-primary";
    passwordSTR.style = "width: 75%";
  } else if (strength == 4) {
    passwordSTR.className = "progress-bar pb-success";
    passwordSTR.style = "width: 100%";
  } else {
    passwordSTR.className = "progress-bar";
    passwordSTR.style = "width 10%";
  }
}

function addCheck(charRequired) {
  charRequired.classList.remove("fa-circle");
  charRequired.classList.add("fa-check");
}

function removeCheck(charRequired) {
  charRequired.classList.remove("fa-check");
  charRequired.classList.add("fa-circle");
}
