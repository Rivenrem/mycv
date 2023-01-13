let offset = 0;
const sliderLine = document.querySelector(".slider__content-line");

document.querySelector(".slider__next").addEventListener("click", () => {
  offset += 240;
  if (offset >= 720) {
    offset = 0;
  }
  sliderLine.style.left = -offset + "px";
});

document.querySelector(".slider__previous").addEventListener("click", () => {
  offset -= 240;
  if (offset < 0) {
    offset = 480;
  }
  sliderLine.style.left = -offset + "px";
});
