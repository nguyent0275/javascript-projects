const play = document.querySelector(".play");
const previous = document.querySelector(".prev");
const next = document.querySelector(".next");

const trackImage = document.querySelector(".track-image");
const title = document.querySelector(".title");
const artist = document.querySelector(".artist");

const trackCurrrentTime = document.querySelector(".current-time");
const trackDuration = document.querySelector(".duration-time");
const slider = document.querySelector(".duration-slider");

const currentVolume = document.querySelector("#volume");
const showVolume = document.querySelector("#show-volume");
const volumeIcon = document.querySelector("#volume-icon");

const autoPlayBtn = document.querySelector(".play-all");
const shuffleBtn = document.querySelector(".shuffle");
const hamburgerIcon = document.querySelector(".fa-bars");
const closeIcon = document.querySelector(".fa-times");

const musicPlaylist = document.querySelector(".music-playlist");
const playlistDiv = document.querySelector(".playlist-div");
const playlist = document.querySelector(".playlist");

let timer;
let autoplay = false;
let shuffle = false;
let indexTrack = 0;
let songIsPlaying = false;
let track = document.createElement("audio");
let muteState = false;

// Event Listeners
play.addEventListener("click", playPause);
next.addEventListener("click", nextSong);
previous.addEventListener("click", prevSong);
autoPlayBtn.addEventListener("click", autoPlayToggle);
shuffleBtn.addEventListener("click", shuffleToggle);
volumeIcon.addEventListener("click", muteSound);
currentVolume.addEventListener("change", changeVolume);
slider.addEventListener("change", changeDuration);
track.addEventListener("timeupdate", songTimeUpdate);
hamburgerIcon.addEventListener("click", showPlaylist);
closeIcon.addEventListener("click", hidePlaylist);

// Load tracks from music.js
function loadTrack(indexTrack) {
  clearInterval(timer);
  resetSlider();
  track.src = trackList[indexTrack].path;
  title.innerHTML = trackList[indexTrack].name;
  trackImage.src = trackList[indexTrack].img;
  artist.innerHTML = trackList[indexTrack].singer;
  track.load();

  timer = setInterval(updateSlider, 1000);
}
loadTrack(indexTrack);

// Play Song
function playSong() {
  track.play();
  songIsPlaying = true;
  play.innerHTML = `<i class="fas fa-pause"></i>`;
}

// Pause Song
function pauseSong() {
  track.pause();
  songIsPlaying = false;
  play.innerHTML = `<i class="fas fa-play"></i>`;
}

// Conditional Toggle of Play/Pause
function playPause() {
  if (songIsPlaying) {
    pauseSong();
  } else {
    playSong();
  }
}

function nextSong() {
  if (indexTrack < trackList.length - 1) {
    indexTrack++;
    loadTrack(indexTrack);
    playSong();
  } else {
    indexTrack = 0;
    loadTrack(indexTrack);
    playSong();
  }
}

function prevSong() {
  if (indexTrack == 0) {
    indexTrack = trackList.length - 1;
    loadTrack(indexTrack);
    playSong();
  } else {
    indexTrack--;
    loadTrack(indexTrack);
    playSong();
  }
}

// Mute Sound
let previousVolume;
function muteSound() {
  if (muteState == false) {
    previousVolume = currentVolume.value;
    muteState = true;
    toggleMute();
    track.volume = 0;
    showVolume.innerHTML = 0;
    currentVolume.value = 0;
  } else {
    muteState = false;
    toggleMute();
    track.volume = previousVolume / 100;
    showVolume.innerHTML = previousVolume;
    currentVolume.value = previousVolume;
  }
}

function toggleMute() {
  volumeIcon.classList.toggle("fa-volume-mute");
  volumeIcon.classList.toggle("fa-volume-up");
}

// Change Volume
function changeVolume() {
  showVolume.value = currentVolume.value;
  showVolume.textContent = currentVolume.value;
  track.volume = currentVolume.value / 100;
}

// Change Duration
function changeDuration() {
  let sliderPosition = track.duration * (slider.value / 100);
  track.currentTime = sliderPosition;
}

// Autoplay
function autoPlayToggle() {
  if (autoplay == false) {
    autoplay = true;
    autoPlayBtn.style.background = "#db6400";
  } else {
    autoplay = false;
    autoPlayBtn.style.background = "#ccc";
  }
}

// Shuffle
function shuffleToggle() {
  if (shuffle == false) {
    shuffle = true;
    shuffleBtn.style.background = "#db6400";
  } else {
    shuffle = false;
    shuffleBtn.style.background = "#ccc";
  }
}

// Reset Slider
function resetSlider() {
  slider.value = 0;
}

// Updating Slider
function updateSlider() {
  let position = 0;
  if (!isNaN(track.duration)) {
    position = track.currentTime * (100 / track.duration);
    slider.value = position;
  }

  if (track.ended) {
    play.innerHTML = `<i class="fas fa-play"></i>`;
    if (
      autoplay == true &&
      indexTrack < trackList.length - 1 &&
      shuffle == false
    ) {
      indexTrack++;
      loadTrack(indexTrack);
      playSong();
    } else if (
      autoplay == true &&
      indexTrack == trackList.length - 1 &&
      shuffle == false
    ) {
      indexTrack = 0;
      loadTrack(indexTrack);
      playSong();
    } else if (autoplay == true && shuffle == true) {
      indexTrack = Math.round(Math.random() * (trackList.length - 0) + 0);
      loadTrack(indexTrack);
      playSong();
    }
  }
}

// Update the current song time
function songTimeUpdate() {
  if (track.duration) {
    let currentMinutes = Math.floor(track.currentTime / 60);
    let currentSeconds = Math.floor(track.currentTime - currentMinutes * 60);
    let durationMinutes = Math.floor(track.duration / 60);
    let durationSeconds = Math.floor(track.duration - durationMinutes * 60);

    if (currentSeconds < 10) {
      currentSeconds = "0" + currentSeconds;
    }
    if (currentMinutes < 10) {
      currentMinutes = "0" + currentMinutes;
    }

    if (durationSeconds < 10) {
      durationSeconds = "0" + durationSeconds;
    }
    if (durationMinutes < 10) {
      durationMinutes = "0" + durationMinutes;
    }
    trackCurrrentTime.innerHTML = currentMinutes + ":" + currentSeconds;
    trackDuration.innerHTML = durationMinutes + ":" + durationSeconds;
  } else {
    trackCurrrentTime.innerHTML = "00" + ":" + "00";
    trackDuration.innerHTML = "00" + ":" + "00";
  }
}

// Show Playlist
function showPlaylist() {
  musicPlaylist.style.transform = "translateX(0)";
  displayTracks();
}

// Hide Playlist
function hidePlaylist() {
  musicPlaylist.style.transform = "translateX(-100%)";
  playlistDiv.innerHTML = "";
}

// Display songs in playlist
let counter = 1;
function displayTracks() {
  trackList.forEach((track, index) => {
    playlistDiv.innerHTML += `<div class="playlist"><span class="song-index">${
      index + 1
    }</span><p class="single-song">${track.name}</p></div>`;
  });
  playFromPlaylist();
}

function playFromPlaylist() {
  playlistDiv.addEventListener("click", (e) => {
    if (e.target.classList.contains("single-song")) {
      loadTrack(e.target.parentNode.childNodes[0].innerHTML - 1);
      playSong();
      hidePlaylist();
    }
  });
}
