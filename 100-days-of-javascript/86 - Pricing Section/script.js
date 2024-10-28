const checkBox = document.querySelector("#checkbox");
const slider = document.querySelector(".slider");
const pro = document.querySelector(".pro");
const basic = document.querySelector(".basic");
const master = document.querySelector(".master");

slider.addEventListener("click", () => {
  if (!checkBox.checked) {
    basic.innerHTML = "49.99";
    pro.innerHTML = "99.99";
    master.innerHTML = "149.99";
  } else {
    basic.innerHTML = "9.99";
    pro.innerHTML = "19.99";
    master.innerHTML = "29.99";
  }
});
