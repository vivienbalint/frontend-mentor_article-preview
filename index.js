const author = document.querySelector(".author");
const shareBtn = document.querySelector(".share");
const bubble = document.querySelector(".active-bubble");
const activeState = document.querySelector(".active");
const activeShareBtn = document.querySelector(".active-share");
const desktopSize = window.matchMedia("(min-width: 1025px)");

desktopSize.addEventListener("change", () => {
  if (desktopSize.matches) {
    activeState.classList.add("hide");
    author.classList.remove("hide");
  } else {
    bubble.classList.add("hide");
    shareBtn.classList.remove("active-share");
  }
});

shareBtn.addEventListener("click", (e) => {
  if (desktopSize.matches) {
    if (bubble.classList.contains("hide")) {
      bubble.classList.remove("hide");
      shareBtn.classList.add("active-share");
    } else {
      bubble.classList.add("hide");
      shareBtn.classList.remove("active-share");
    }
  } else {
    author.classList.add("hide");
    activeState.classList.remove("hide");
  }
});

activeShareBtn.addEventListener("click", (e) => {
  author.classList.remove("hide");
  activeState.classList.add("hide");
});
