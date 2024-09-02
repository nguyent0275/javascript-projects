const searchForm = document.querySelector("#search-form");
const searchInput = document.querySelector("#search-input");
const speechBtnDiv = document.querySelector("#speech-btn");
const micBtn = document.querySelector(".btn .fas");
const instructions = document.querySelector(".instructions");

// built in API for speech (only works on certain browsers)
const speechRecognition =
  window.SpeechRecognition || window.webkitSpeechRecognition;

// Check for browser support
if (speechRecognition) {
  console.log("Speech Recognition supported.");

  const recognition = new speechRecognition();
  micBtn.addEventListener("click", (e) => {
    e.preventDefault();
    if (micBtn.classList.contains("fa-microphone")) {
      recognition.start();
    } else {
      recognition.stop();
    }
  });

  //   Start Speech Recognition
  recognition.addEventListener("start", () => {
    micBtn.classList.remove("fa-microphone");
    micBtn.classList.add("fa-microphone-slash");
    instructions.textContent = "Recording... Press Crtl + M to stop";
    searchInput.focus();
    console.log("Speech Recognition Enabled");
  });

  //   Stop Speech Recognition
  recognition.addEventListener("end", () => {
    micBtn.classList.remove("fa-microphone-slash");
    micBtn.classList.add("fa-microphone");
    instructions.textContent = "Press Crtl + X or Click the Mic icon to start";
    searchInput.focus();
    console.log("Speech Recognition Disabled");
  });

  //   will continue recording until you press mic button again
  recognition.continuous = true;

  //   Get results of speech recognition
  recognition.addEventListener("result", (e) => {
    console.log(e);
    const current = e.resultIndex;
    const transcript = e.results[current][0].transcript;

    if (transcript.toLowerCase().trim() === "stop recording") {
      recognition.stop();
    } else if (!searchInput.value) {
      searchInput.value = transcript;
    } else {
      if (transcript.toLowerCase().trim() === "search") {
        searchForm.submit();
      } else if (transcript.toLowerCase().trim() === "reset form") {
        searchInput.value = "";
      } else {
        searchInput.value = transcript;
      }
    }
  });

  // Add keyboard event listener (crtl + x)
  document.addEventListener("keydown", (e) => {
    if (e.ctrlKey && e.key === "x") {
      recognition.start();
    }
    if (e.ctrlKey && e.key === "m") {
      recognition.stop();
    }
  });
} else {
  console.log("Speech Recognition not supported");
  speechBtnDiv.style.visibility = "hidden";
}
