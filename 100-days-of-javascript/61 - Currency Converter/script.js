const cur1 = document.querySelector(".cur-1");
const cur2 = document.querySelector(".cur-2");
const cur1Input = document.querySelector(".cur-1-input");
const cur2Input = document.querySelector(".cur-2-input");

const baseRate = document.querySelector(".base");
const switchCur = document.querySelector(".switch-cur");
const countries = [
  {
    name: "EUR",
    flagURL: "https://www.worldometers.info/img/flags/au-flag.gif",
  },
  {
    name: "USD",
    flagURL: "https://www.worldometers.info/img/flags/us-flag.gif",
  },
  {
    name: "GBP",
    flagURL: "https://www.worldometers.info/img/flags/uk-flag.gif",
  },
];
const API_KEY = "2d966c0755ca860d38fd6d19";
const API_URL = `https://v6.exchangerate-api.com/v6/`;

// Get exchange rates
async function getExchangeRates(params) {
  try {
    const cur1Value = cur1.value;
    const cur2Value = cur2.value;
    const response = await fetch(`${API_URL}${API_KEY}/latest/${cur1Value}`);
    const data = await response.json();
    const rate = data.conversion_rates[cur2Value];

    baseRate.textContent = `1 ${cur1Value} = ${rate.toFixed(2)} ${cur2Value}`;

    cur2Input.value = (cur1Input.value * rate).toFixed(2);
  } catch (err) {
    console.error(err);
  }
}

getExchangeRates();

// EVENT LISTENERS

// on changing country
cur1.addEventListener("change", () => {
  getExchangeRates();
  getFlag();
});

cur2.addEventListener("change", () => {
  getExchangeRates();
  getFlag();
});

// on changing number
cur1Input.addEventListener("input", () => {
  getExchangeRates();
});
cur2Input.addEventListener("input", () => {
  getExchangeRates();
});

// Swaps the From and To
switchCur.addEventListener("click", () => {
  const cur1Val = cur1.value;
  cur1.value = cur2.value;
  cur2.value = cur1Val;
  switchCur.classList.toggle("rotate");
  getExchangeRates();
  getFlag();
});

// Get Flag
function getFlag() {
  countries.forEach((country) => {
    if (cur1.value == country.name) {
      document.querySelector(".from img").src = country.flagURL;
    }
    if (cur2.value == country.name) {
      document.querySelector(".to img").src = country.flagURL;
    }
  });
}
