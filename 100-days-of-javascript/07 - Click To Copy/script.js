const btn = document.querySelector(".btn");
const coupon = document.querySelector(".coupon");

const copyText = function (e) {
  e.preventDefault();

  // DEPRACATED
  // coupon.select();
  // coupon.setSelectionRange(0, coupon.value.length);
  // document.execCommand("copy");

  navigator.clipboard.writeText(coupon.value).then(() => {
    btn.textContent = "Copied!";
    setTimeout(() => {
      btn.textContent = "Copy";
    }, 3000);
  });
};

btn.addEventListener("click", copyText);
