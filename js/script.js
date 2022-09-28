// Getting elements

const hamburger = document.querySelector(".hamburger");
const nav = document.querySelector("nav");
const overlay = document.querySelector(".overlay");
const sliderImages = document.querySelector(".slider-images");
const sliderImage = Array.from(sliderImages.children);
const contentSlider = document.querySelector(".content-slider");
const contentSlide = Array.from(contentSlider.children);
const prevBtn = document.querySelector(".slider-btn-prev");
const nextBtn = document.querySelector(".slider-btn-next");
const prevBtnMob = document.querySelector(".slider-btn-prev-mob");
const nextBtnMob = document.querySelector(".slider-btn-next-mob");

//Open menu , add overlay and change style of hamburger on click

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("open");
  nav.classList.toggle("active");
  overlay.classList.toggle("active");
});

//Getting width of slider containers

const sliderImageWidth = sliderImages.getBoundingClientRect().width;
const sliderContentWidth = contentSlider.getBoundingClientRect().width;
let count = 0;

//Activating desktop slider on button clicks

prevBtn.addEventListener("click", () => {
  count -= 1;
  sliderImages.style.translate = "-" + sliderImageWidth * count + "px";
  contentSlider.style.translate = "-" + sliderContentWidth * count + "px";

  if (count < 0) {
    sliderImages.style.translate = "-" + sliderImageWidth * 2 + "px";
    contentSlider.style.translate = "-" + sliderContentWidth * 2 + "px";
    count = 2;
  }
});

nextBtn.addEventListener("click", () => {
  count += 1;
  sliderImages.style.translate = "-" + sliderImageWidth * count + "px";
  contentSlider.style.translate = "-" + sliderContentWidth * count + "px";

  if (count === sliderImage.length && count === contentSlide.length) {
    sliderImages.style.translate = sliderImageWidth * 0 + "px";
    contentSlider.style.translate = sliderContentWidth * 0 + "px";
    count = 0;
  }
});

//Activating mobile slider on button clicks

prevBtnMob.addEventListener("click", () => {
  count -= 1;
  sliderImages.style.translate = "-" + sliderImageWidth * count + "px";
  contentSlider.style.translate = "-" + sliderContentWidth * count + "px";

  if (count < 0) {
    sliderImages.style.translate = "-" + sliderImageWidth * 2 + "px";
    contentSlider.style.translate = "-" + sliderContentWidth * 2 + "px";
    count = 2;
  }
});

nextBtnMob.addEventListener("click", () => {
  count += 1;
  sliderImages.style.translate = "-" + sliderImageWidth * count + "px";
  contentSlider.style.translate = "-" + sliderContentWidth * count + "px";

  if (count === sliderImage.length && count === contentSlide.length) {
    sliderImages.style.translate = sliderImageWidth * 0 + "px";
    contentSlider.style.translate = sliderContentWidth * 0 + "px";
    count = 0;
  }
});
