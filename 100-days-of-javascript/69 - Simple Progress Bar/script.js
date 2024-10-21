function start() {
  const progress = document.querySelector(".progress");
  let width = 0;
  //   rate of progress bar being filled
  const timeInterval = setInterval(fill, 20);

  function fill() {
    if (width >= 50) {
      clearInterval(timeInterval);
    } else {
      width++;
      progress.style.width = width + "%";
      progress.innerHTML = width + "%";
    }
  }
}

window.onload = () => {
  start();
};
