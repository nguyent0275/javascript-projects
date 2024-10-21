const btn = document.querySelector(".btn");
const result = document.querySelector(".result");

btn.addEventListener("click", countVowels);

function countVowels() {
  let numOfVowels = 0;
  const word = document.querySelector(".input-text").value.toLowerCase();

  for (let i = 0; i < word.length; i++) {
    let letter = word[i];
    if (letter.match(/([a,e,i,o,u])/)) {
      numOfVowels++;
    }
  }

  result.innerHTML = `${word.toUpperCase()} has ${numOfVowels} vowels`;
}
