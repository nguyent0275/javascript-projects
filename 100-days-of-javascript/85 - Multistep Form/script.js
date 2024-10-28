const formItems = document.getElementsByClassName("form-item");
const button = document.getElementsByClassName("btn");
const steps = document.getElementsByClassName("step");

let currentFormItem = 0;

formItems[currentFormItem].style.display = "block";

if (currentFormItem == 0) {
  button[0].style.display = "none";
  steps[0].style.backgroundColor = "#1e9df7";
}

// Next Button
button[1].addEventListener("click", () => {
  currentFormItem++;
  const previousFormItem = currentFormItem - 1;
  if (currentFormItem > 0 && currentFormItem < 4) {
    button[0].style.display = "inline-block";
    formItems[previousFormItem].style.display = "none";
    formItems[currentFormItem].style.display = "block";
    steps[currentFormItem].style.backgroundColor = "#1e9df7";
    if (currentFormItem == 3) {
      button[1].innerHTML = "Submit";
    }
  } else {
    alert("Form Submitted Successfully");
  }
});

button[0].addEventListener("click", () => {
  if (currentFormItem > 0) {
    currentFormItem--;
    const nextFormItem = currentFormItem + 1;
    formItems[nextFormItem].style.display = "none";
    formItems[currentFormItem].style.display = "block";
    steps[nextFormItem].style.backgroundColor = "#cfd2d4";
    if (currentFormItem == 0) {
      button[0].style.display = "none";
    }
    if (currentFormItem < 3) {
      button[1].innerHTML = "Next";
    }
  }
});
