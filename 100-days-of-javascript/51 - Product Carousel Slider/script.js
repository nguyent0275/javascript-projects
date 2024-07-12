const thumbnails = document.getElementsByClassName("thumbnail");
const slider = document.getElementById("slider");
const nextBtn = document.getElementById("slide-right");
const prevBtn = document.getElementById("slide-left");

nextBtn.addEventListener("click", () => {
  scrollAmount = 0;
  let slideTimer = setInterval(() => {
    slider.scrollLeft += 10;
    scrollAmount += 10;
    if (scrollAmount >= 100) {
      window.clearInterval(slideTimer);
    }
  }, 25);
});

prevBtn.addEventListener("click", () => {
  scrollAmount = 0;
  let slideTimer = setInterval(() => {
    slider.scrollLeft -= 10;
    scrollAmount += 10;
    if (scrollAmount >= 100) {
      window.clearInterval(slideTimer);
    }
  }, 25);
});

// Slider Width values
// scrollWidth is the total width of the slider
// scrollLeft is the position of the slider on the X axis
// clientWidth is the visible part of the slider on the browser

// Auto Play Function
function autoPlay() {
  // reset position at the end of the slider
  // have to take into account that scrollLeft measures the left most position of the slider, and only the right side of the slider hits the scrollWidth when we want to reset.
  // therefore we need to subtract the scrollWidth from the clienWidth and 1 (good measure) to register  when the scrollLeft hits it's furthest point
  if (slider.scrollLeft >= slider.scrollWidth - slider.clientWidth - 1) {
    slider.scrollLeft = 0;
  } else {
    slider.scrollLeft += 1;
  }
}

let play = setInterval(autoPlay, 10);

// Pause slider on hover
// loop through HTML collection of thumbnails and adds a mouseover and mouseout event
// mouseover pauses slider, mouseout resumes slider
for (let i = 0; i < thumbnails.length; i++) {
  thumbnails[i].addEventListener("mouseover", () => {
    clearInterval(play);
  });
  thumbnails[i].addEventListener("mouseout", () => {
    return (play = setInterval(autoPlay, 10));
  });
}
