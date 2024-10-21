const main = document.querySelector(".main");
const alertBox = document.querySelector(".alert");
const exclamationIcon = document.querySelector(".fa-exclamation-circle");
const msg = document.querySelector(".msg");
const closeBtn = document.querySelector(".close-btn");
const closeIcon = document.querySelector(".fa-times");
const alertDuration = 5000;

class ShowAlert {
  // all parameters are colors
  constructor(state, borderColor, color) {
    this.state = state;
    this.borderColor = borderColor;
    this.color = color;
  }

  trigger(message) {
    alertBox.style.background = this.state;
    alertBox.style.borderColor = this.borderColor;
    msg.textContent = message;
    msg.style.color = this.color;
    exclamationIcon.style.color = this.color;
    closeIcon.style.color = this.color;

    alertBox.classList.add("show");
    alertBox.classList.remove("hide");
    setTimeout(() => {
      alertBox.classList.remove("show");
      alertBox.classList.add("hide");
    }, alertDuration);
    start();
    closeBtn.addEventListener("click", () => {
      alertBox.classList.remove("show");
      alertBox.classList.add("hide");
    });
  }
}

// New objects with the properties and methods of the ShowAlert class
const warning = new ShowAlert("#ffdb9b", "#ffa502", "#ca8500");
const danger = new ShowAlert("#f8d7da", "#d1281f", "#721c24");

// when the element with main class is clicked, will run the trigger method based on which button is clicked
main.addEventListener("click", (e) => {
  if (e.target.classList.contains("btn-danger")) {
    danger.trigger("Alert! This is a dangerous alert!");
  } else if (e.target.classList.contains("btn-warning")) {
    warning.trigger("Alert! This is a warning alert!");
  }
});

// Progress Bar
function start() {
  const progress = document.querySelector(".progress");
  let width = 0;
  //   rate of progress bar being filled
  const timeInterval = setInterval(fill, alertDuration / 100);

  function fill() {
    if (width >= 100) {
      clearInterval(timeInterval);
    } else {
      width++;
      progress.style.width = width + "%";
      // progress.innerHTML = width + "%";
    }
  }
}
