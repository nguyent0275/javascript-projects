const rangeSlider = document.querySelector("input");
const valueEl = document.querySelector(".value");
// default value
valueEl.textContent = rangeSlider.value;

rangeSlider.oninput = function () {
  valueEl.textContent = rangeSlider.value;
};
