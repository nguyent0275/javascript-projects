// built in API for speech (only works on certain browsers)
const speechSynthesis = window.speechSynthesis;

// Check for browser support
if (speechSynthesis) {
  console.log("Speech Synthesis supported.");

  micBtn.addEventListener("click", speak);

  function speak(e) {
    e.preventDefault();
    const inputVal = input.value;
    const speech = new SpeechSynthesisUtterance();
    speech.lang = "en-US";
    speech.text = inputVal;
    speech.volume = "1";
    speech.rate = "1";
    speech.pitch = "1";
    speech.voice = speechSynthesis.speak(speech);
  }
} else {
  console.log("Speech Synthesis not supported");
  speechBtnDiv.style.visibility = "hidden";
}
