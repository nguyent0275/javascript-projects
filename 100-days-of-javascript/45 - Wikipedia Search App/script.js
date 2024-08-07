const search = document.querySelector("input");
const form = document.querySelector("form");
const searchResults = document.querySelector(".results");
const errorMsg = document.querySelector(".alert");
const line = document.querySelector("hr");

const API_URL =
  "https://en.wikipedia.org/w/api.php?action=query&list=search&prop=info&inprop=url&utf8=&format=json&origin=*&srlimit=20&srsearch=";

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const searchValue = search.value;
  if (!searchValue) {
    errorMessage("Search cannot be empty, please enter a search term");
  } else {
    getResults(searchValue);
  }
});

function errorMessage(msg) {
  errorMsg.style.display = "block";
  line.style.display = "block";
  errorMsg.innerHTML = msg;
}

async function getResults() {
  try {
    const response = await fetch(API_URL + search.value);
    const data = await response.json();
    console.log(data);

    if (!data.query.search.length) {
      return errorMessage("Invalid search, please enter another search term.");
    } else {
      console.log("Success");
      displayResults(data);
    }
  } catch (err) {
    console.error(err);
  }
}

function displayResults(results) {
  line.style.display = "block";
  let output = "";

  results.query.search.forEach((result) => {
    let resultURL = `https://en.wikipedia.org/?curid=${result.pageid}`;
    output += `
              <div class="result p-2">
                <a href="${resultURL}" target="_blank" rel="noopener" class="h3 fw-bold"
                  >${result.title}</a
                >
                <br />
                <a
                  href="${resultURL}"
                  target="_blank"
                  rel="noopener"
                  class="fs-5 text-success"
                  >${resultURL}</a
                >
                <p class="fs-5">
                ${result.snippet}
                </p>
              </div>    
    `;
    searchResults.innerHTML = output;
  });
}
