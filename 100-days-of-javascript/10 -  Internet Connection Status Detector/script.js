const image = document.getElementById("image");
const statusDisplay = document.getElementById("status");
const bgColor = document.getElementById("main");
image.src = "images/online.png";

const setColor = function () {
  bgColor.classList.add("online");
};

const connectionStatus = async function () {
  try {
    const res = await fetch(
      "https://upload.wikimedia.org/wikipedia/en/thumb/7/7d/Lenna_%28test_image%29.png/440px-Lenna_%28test_image%29.png?time=" +
        new Date().getTime()
    );
    image.src = "images/online.png";
    setColor();
    return res.status >= 200 && res.status < 300;
  } catch (err) {
    console.error(err);
    statusDisplay.textContent = "Your internet connection is down";
    image.src = "images/offline.png";
    bgColor.classList.remove("online");
  }
};

// MONITORS AND CHECKS EVERY 5 SECONDS
setInterval(async () => {
  const res = await connectionStatus();
  if (!res) return;
  statusDisplay.textContent = "You are ONLINE, CONNECTION LOOKS GOOD";
  setColor();
}, 5000);

// CHECKS CONNECTION ON FIRST LOAD
window.addEventListener("load", async (e) => {
  if (connectionStatus()) {
    statusDisplay.textContent = "ONLINE";
  } else {
    statusDisplay.textContent = "OFFLINE";
  }
});
