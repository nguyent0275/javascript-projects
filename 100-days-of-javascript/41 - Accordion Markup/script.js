const accordion = document.querySelectorAll(".accordion");

for (let i = 0; i < accordion.length; i++) {
  accordion[i].addEventListener("click", function () {
    // checks the accordion's div next sibling which is the desc's div
    const desc = this.nextElementSibling;
    const allDesc = document.querySelectorAll(".desc");
    const activeAccordion = document.getElementsByClassName("accordion active");
    if (desc.style.maxHeight) {
      desc.style.maxHeight = null;
      this.classList.remove("active");
    } else {
      // LOOPS THROUGH ALL THE ACCORDIONS AND DIVS TO CLOSE THEM
      for (let i = 0; i < activeAccordion.length; i++) {
        activeAccordion[i].classList.remove("active");
      }
      for (let i = 0; i < allDesc.length; i++) {
        allDesc[i].style.maxHeight = null;
      }

      // ADDS THE ACTIVE CLASS AND SHOWS THE DESCRIPTION OF THE CLICKED DIV
      desc.style.maxHeight = desc.scrollHeight + "px";
      this.classList.add("active");
    }
  });
}
