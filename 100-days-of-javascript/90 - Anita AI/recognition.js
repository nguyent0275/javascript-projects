


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
    instructions.textContent = "Recording...";
    searchInput.focus();
    console.log("Speech Recognition Enabled");
  });

  //   Stop Speech Recognition
  recognition.addEventListener("end", () => {
    micBtn.classList.remove("fa-microphone-slash");
    micBtn.classList.add("fa-microphone");
    instructions.textContent = "Click the Mic icon to start";
    searchInput.focus();
    console.log("Speech Recognition Disabled");
  });

  //   will continue recording until you press mic button again
  recognition.continuous = true;

  //   Get results of speech recognition
  let content = "";
  recognition.addEventListener("result", (e) => {
    console.log(e);
    const current = e.resultIndex;
    const transcript = e.results[current][0].transcript;
    content += transcript;
    searchInput.value = content;
    searchInput.focus();
  });
} else {
  console.log("Speech Recognition not supported");
  speechBtnDiv.style.visibility = "hidden";
}
