const countTo = "1 Jan 2025";

const c = setInterval(() => {
  const endDate = new Date(countTo);
  const currentDate = new Date();

  const totalSeconds = (endDate - currentDate) / 1000;

  const days = Math.floor(totalSeconds / 3600 / 24);
  const hours = Math.floor(totalSeconds / 3600) % 24;
  const minutes = Math.floor(totalSeconds / 3600) % 60;
  const seconds = Math.floor(totalSeconds % 60);

  const countDown = document.getElementById("countdown");

  countDown.textContent = `${days}Days ${formatTime(hours)}Hrs : ${formatTime(
    minutes
  )}Min : ${formatTime(seconds)}s`;

  if (totalSeconds <= 0) {
    clearInterval(c);
    countDown.textContent = "Happy New Year";
  }
}, 1000);

function formatTime(time) {
  return time < 10 ? `0${time}` : time;
}
