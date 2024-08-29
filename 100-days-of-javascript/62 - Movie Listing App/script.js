// API VARIABLES
const apiKEY = "api_key=0b081fab795ebef8bcf25a5e6e71e51c";
const apiPopular = `https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&${apiKEY}&page=1`;
const searchAPI = `http://api.themoviedb.org/3/search/movie?&${apiKEY}&query=`;
const imgPATH = "https://image.tmdb.org/t/p/w1280";

// HTML SELECTOR VARIABLES
let moviesDiv = document.querySelector(".movies");
let form = document.querySelector("#form");
let search = document.querySelector(".search");

// SEARCHES API FOR MOVIES
async function getMovies(url) {
  try {
    const response = await fetch(url);
    const data = await response.json();
    console.log(data.results);

    renderMovies(data.results);
  } catch (err) {
    console.error(err);
  }
}

// DISPLAY MOVIES
async function renderMovies(movies) {
  moviesDiv.innerHTML = "";

  movies.forEach((movie) => {
    const div = document.createElement("div");
    div.classList.add("movie");
    // Only show movies with poster image or overview
    if (movie.overview !== "" || movie.poster_path !== "") {
      div.innerHTML = `<div class="movie">
            <img src="${imgPATH + movie.poster_path}" alt="" />
            <div class="details">
              <h2 class="title">${movie.title}</h2>
              <p class="rate">Rating: <span class="rating">${movie.vote_average.toFixed(
                2
              )}</span></p>
              <p class="overview">
              ${movie.overview}
              </p>
            </div>
          </div>`;
      moviesDiv.append(div);
    }
  });
}

// SEARCHES MOVIES
form.addEventListener("submit", (e) => {
  e.preventDefault();
  moviesDiv.innerHTML = "";

  const input = search.value;
  if (!input) {
    return;
  } else {
    getMovies(searchAPI + input);
    input = "";
  }
});

getMovies(apiPopular);
