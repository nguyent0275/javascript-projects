const searchForm = document.querySelector("#search-form");
const searchInput = document.querySelector("#search-input");
const speechBtnDiv = document.querySelector("#speech-btn");
const micBtn = document.querySelector(".btn .fas");
const instructions = document.querySelector(".instructions");

const speechRecognition =
  window.speechRecognition || window.webkitSpeechRecognition;

const speechSynthesis = window.speechSynthesis;
const recognition = new speechRecognition();

// Check if browser supports
if (speechRecognition && speechSynthesis) {
  console.log("Speech Recognition and Synthesis Supported");

  micBtn.addEventListener("click", (e) => {
    e.preventDefault();
    if (micBtn.classList.contains("fa-microphone")) {
      recognition.start();
    } else {
      recognition.stop();
    }

    //   Start Speech Recognition
    recognition.addEventListener("start", () => {
      micBtn.classList.replace('"fa-microphone', "fa-microphone-slash");
      instructions.textContent = "Recording...";
      searchInput.focus();
      console.log("Speech Recognition Started");
    });

    //   Stop Speech Recognition
    recognition.addEventListener("end", () => {
      micBtn.classList.replace('"fa-microphone-slash', "fa-microphone");
      instructions.textContent =
        "Press Crtl + X or Click the Mic icon to start";
      searchInput.focus();
      console.log("Speech Recognition Disabled");
    });
  });
  recognition.continuous = true;
  const recognitionOn = setInterval(() => {
    if (instructions.textContent.includes("start")) {
      recognition.start();
    }
  }, 3000);

  // Shortcuts
  speechRecognitionKeys();
  loadTranscript();
} else {
  console.log("Speech Recognition and Synthesis NOT Supported");
  speechBtnDiv.style.visibility = "hidden";
}

// Keyboard Shortcuts
function speechRecognitionKeys() {
  document.addEventListener("keydown", (e) => {
    if (e.ctrlKey && e.key === "x") {
      recognition.start();
    }
    if (e.ctrlKey && e.key === "m") {
      recognition.stop();
    }
  });
}

function loadTranscript() {
  recognition.addEventListener("result", (e) => {
    const current = e.resultIndex;
    const transcript = e.results[current][0].transcript;
    showTranscript(transcript);

    // loop through the list array in data.js
    for (let i = 0; i < lists.length; i++) {
      let askedQuestion = transcript.toLowerCase().trim();

      // use include instead of "==" because we want it to partially match the askedQuestion with the list questions not strictly check
      // ex. if askedQuestion = "Anita introduce yourself"; It would still match "introduce yourself" because it includes part of the question
      if (askedQuestion.includes(lists[i].question)) {
        console.log(lists[i].answer);
        respond(lists[i].answer);
        break;
      }
      if (
        askedQuestion.startsWith("what is", 0) &&
        askedQuestion !== lists[i].question &&
        (i = 1)
      ) {
        console.log("No Match");
        let errorMsg =
          "Apologies, I do not have enough data to answer this question at this time";
        respond(errorMsg);
        break;
      }
    }
  });
}

// Handle Response
function respond(res) {
  let voices = window.speechSynthesis.getVoices();
  // console.log(voices);
  const speech = new SpeechSynthesisUtterance();
  speech.lang = "en-US";
  speech.text = res;
  speech.volume = "2";
  speech.rate = "0.9";
  speech.pitch = "1";

  if (voices) {
    speech.voice = voices[20];
  } else {
    speech.voice = voices[1];
  }
  // need the cancel before speak to prevent speechSynthesis from getting stuck
  window.speechSynthesis.cancel();
  window.speechSynthesis.speak(speech);
}

// Show Transcript
function showTranscript(transcript) {
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
}
