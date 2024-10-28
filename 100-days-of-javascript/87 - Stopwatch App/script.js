const timer = document.querySelector(".time");
const start = document.querySelector(".start");
const pause = document.querySelector(".pause");
const reset = document.querySelector(".reset");

let [milliseconds, seconds, minutes, hours] = [0, 0, 0, 0];
let t = null;

start.addEventListener("click", startTimer);
pause.addEventListener("click", pauseTimer);
reset.addEventListener("click", resetTimer);

function startTimer() {
  if (t !== null) {
    clearInterval(t);
  }
  t = setInterval(displayTime, 10);
}

function pauseTimer() {
  clearInterval(t);
}

function resetTimer() {
  clearInterval(t);
  [milliseconds, seconds, minutes, hours] = [0, 0, 0, 0];
  timer.innerHTML = "00 : 00 : 00 : 000";
}

// Display Time
function displayTime() {
  milliseconds += 10;
  if (milliseconds == 1000) {
    milliseconds = 0;
    seconds++;
    if (seconds == 60) {
      seconds = 0;
      minutes++;
      if (minutes == 60) {
        minutes = 0;
        hours++;
      }
    }
  }

  let h = hours < 10 ? "0" + hours : hours;
  let m = minutes < 10 ? "0" + minutes : minutes;
  let s = seconds < 10 ? "0" + seconds : seconds;
  let ms =
    milliseconds < 10
      ? "00" + milliseconds
      : milliseconds < 100
      ? "0" + milliseconds
      : milliseconds;

  timer.innerHTML = `${h} : ${m} : ${s} : ${ms}`;
}
