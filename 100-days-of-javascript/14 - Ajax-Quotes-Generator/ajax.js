const btn = document.querySelector(".get-quotes");
btn.addEventListener("click", getQuotes);
const number = document.querySelector("#number");

function getQuotes(e) {
  e.preventDefault();

  if (number.value.length === 0) {
    return alert("Please enter a number");
  } else {
    const http = new XMLHttpRequest();

    http.open("GET", "https://type.fit/api/quotes", true);

    http.onload = function () {
      if (this.status === 200) {
        let output = "";

        const response = JSON.parse(this.responseText);

        for (let i = 0; i < number.value; i++) {
          output += `
            <li>Quote: ${response[i].text}</li>
            <li>Author: ${response[i].author}</li>
            <hr>
            `;
        }
        document.querySelector(".quotes").innerHTML = output;
      }
    };

    http.send();
  }
}

function randomizeQuotes(quote) {
    let currentI
}