const toggleDarkModeBtn = document.querySelector(".toggle-darkmode");
const toggleBtnText = document.querySelector(".toggle-text");

// checks local storage for dark mode setting
let darkMode = localStorage.getItem("darkMode");

function toggleDarkMode() {
  if (!document.body.classList.contains("darkmode")) {
    document.body.classList.add("darkmode");
    toggleBtnText.textContent = "Light";
    localStorage.setItem("darkMode", "enabled");
  } else {
    document.body.classList.remove("darkmode");
    toggleBtnText.textContent = "Dark";
    localStorage.setItem("darkMode", null);
  }
}

if (darkMode === "enabled") {
  toggleDarkMode();
}

toggleDarkModeBtn.addEventListener("click", toggleDarkMode);
