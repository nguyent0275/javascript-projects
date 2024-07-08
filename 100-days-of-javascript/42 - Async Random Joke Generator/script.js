const joke = document.querySelector(".joke");
const btn = document.querySelector(".btn");
const API_URL = "https://api.chucknorris.io/jokes/random";

btn.addEventListener("click", getJoke);

async function getJoke() {
  try {
    const response = await fetch(API_URL);
    const data = await response.json();
    joke.innerHTML = data.value;
  } catch (err) {
    joke.innerHTML = err.message;
  }
}
