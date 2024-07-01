const api = {
  key: "161b355a9dd41b55204725cd903f95ab",
  base: "https://api.openweathermap.org/data/2.5/",
  iconUrl: "http://openweathermap.org/img/w/",
};

const search = document.querySelector(".search");
const btn = document.querySelector(".btn");

btn.addEventListener("click", getInput);

function getInput(e) {
  e.preventDefault();
  if (e.type === "click") {
    getData(search.value);
    console.log(search.value);
  }
}

function getData() {
  fetch(`${api.base}weather?q=${search.value}&units=metric&appid=${api.key}`)
    .then((res) => {
      return res.json();
    })
    .then(displayData);
}

function displayData(location) {
  if (location.cod === "404") {
    const error = document.querySelector(".error");
    error.textContent = "Please enter a valid city";
    search.value - "";
  } else {
    console.log(location);
    const city = document.querySelector(".city");
    city.innerText = `${location.name}, ${location.sys.country}`;

    const today = new Date();
    const date = document.querySelector(".date");
    date.innerText = dateFormat(today);

    const temp = document.querySelector(".temp");
    temp.innerHTML = `Temp: ${Math.round(location.main.temp)} <span>°C</span>`;

    const weather = document.querySelector(".weather");
    weather.innerText = `Weather : ${location.weather[0].main}`;

    const tempRange = document.querySelector(".temp-range");
    tempRange.innerText = `Temp Range: ${Math.round(
      location.main.temp_min
    )}°C / ${Math.round(location.main.temp_max)}°C`;

    const weatherIcon = document.querySelector(".weather-icon");
    console.log(api.iconUrl + location.weather[0].icon + ".png");
    weatherIcon.src = api.iconUrl + location.weather[0].icon + ".png";
  }
}

function dateFormat(d) {
  let months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "June",
    "July",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];
  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  let day = days[d.getDay()];
  let date = d.getDate();
  let month = months[d.getMonth()];
  let year = d.getFullYear();

  return `${day}, ${date}, ${month} ${year}`;
}
