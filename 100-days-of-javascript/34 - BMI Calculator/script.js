// BMI - kg/m^2
// Underweight Less than 18.5
// Normal = 18.5 - 24.9
// Overweight = 25 - 29.9
// Obese = Greater than 30

const btn = document.querySelector(".btn"),
  result = document.querySelector(".result"),
  reset = document.querySelector(".reset");

btn.addEventListener("click", calculteBMI);
function calculteBMI(e) {
  e.preventDefault();
  let height = document.querySelector(".height").value;
  let weight = document.querySelector(".weight").value;

  console.log(height, weight);

  if (!height || isNaN(height)) {
    return (result.innerHTML = `Provide a valid Height`);
  } else if (!weight || isNaN(weight)) {
    return (result.innerHTML = `Provide a valid Weight`);
  } else {
    height = height / 100;
    let bmi = (weight / Math.pow(height, 2)).toFixed(2);
    checkBMI(bmi);
  }
}

function renderResults(val, color) {
  result.style.backgroundColor = color;
  renderReset();
  return (result.innerHTML = val);
}

function checkBMI(bmi) {
  if (bmi < 18.5) {
    renderResults(`Underweight: <span>${bmi}</span>`, "orange");
  } else if (bmi >= 18.5 && bmi < 24.9) {
    renderResults(`Normal: <span>${bmi}</span>`, "green");
  } else if (bmi >= 25.0 && bmi < 29.9) {
    renderResults(`Overweight: <span>${bmi}</span>`, "blue");
  } else {
    renderResults(`Obese: <span>${bmi}</span>`, "red");
  }
}

function renderReset() {
  reset.style.display = "block";
  reset.addEventListener("click", () => {
    document.querySelector("form").reset();
    result.style.display = "none";
    reset.style.display = "none";
  });
}
