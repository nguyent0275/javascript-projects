let input = document.querySelector(".input"),
  character = document.querySelector(".character"),
  word = document.querySelector(".word"),
  readingTime = document.querySelector(".reading-time"),
  wordLimit = document.querySelector(".word-limit"),
  WORD_LIMIT = 225;

input.addEventListener("keyup", characterCount);
input.addEventListener("keyup", wordCount);

function characterCount() {
  character.innerHTML = input.value.length;
}
function wordCount(e) {
  let words = input.value.match(/\b[-?(\w+)?]+\b/gi);

  if (!words) {
    word.innerHTML = 0;
  } else {
    word.innerHTML = words.length;
    wordLimit.innerHTML = WORD_LIMIT - words.length;
  }

  // USING REGEX TO CHECK WORDS (SPACES AND HYPHENATED WORDS)
  input.addEventListener("keydown", function (e) {
    words = input.value.match(/\b[-?(\w+)?]+\b/gi);
    if (words) {
      if (words.length > WORD_LIMIT - 1 && e.code !== "Backspace") {
        e.preventDefault();
        alert("Word limit reached");
      }
    }
  });

  // READING TIME BASED ON 225 WORDS/MIN
  if (words) {
    let seconds = Math.floor((words.length * 60) / 225);
    if (seconds > 59) {
      const minutes = Math.floor(seconds / 60);
      seconds = seconds - minutes * 60;
      readingTime.innerHTML = `${minutes}m ${seconds}s`;
    } else {
      readingTime.innerHTML = `${seconds}s`;
    }
  } else {
    readingTime.innerHTML = "0";
  }
}
