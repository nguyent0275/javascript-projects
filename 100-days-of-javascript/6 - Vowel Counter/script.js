const btn = document.querySelector(".btn");
const result = document.querySelector(".result");

btn.addEventListener("click", checkPalindrome);

function checkPalindrome() {
  const word = document.querySelector(".input-text").value.toLowerCase();
  const reverseWord = Array.from(word).reverse().join("").toLowerCase();
  if (word === reverseWord) {
    result.innerHTML = `${word.toUpperCase()} is a Palindrome`;
  } else {
    result.innerHTML = `${word.toUpperCase()} is NOT a Palindrome`;
  }
}
