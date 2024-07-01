let time = 10;
let promoTime = time * 60;

let counting = document.getElementById("countdown");

function startCountdown() {
  let promoTimer = setInterval(() => {
    if (promoTime <= 0) {
      clearInterval(promoTimer);
      counting.innerHTML = "Promo has ended";
    } else {
      promoTime--;
      const days = Math.floor(promoTime / 3600 / 24);
      const hours = Math.floor(promoTime / 3600) % 24;
      const min = Math.floor(promoTime / 3600) % 60;
      const sec = Math.floor(promoTime % 60);

      counting.innerHTML = `TIME: ${formatTime(days)}DAYS : ${formatTime(
        hours
      )}HR : ${formatTime(min)}MIN: ${formatTime(sec)}S`;
    }
  }, 1000);
}

function formatTime(time) {
  return time < 10 ? `0${time}` : time;
}

startCountdown();
