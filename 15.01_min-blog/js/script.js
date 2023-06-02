"use strict";

const footerUp = document.querySelector(".footer__up");
const bodyStart = document.querySelector(".home");

footerUp.addEventListener("click", moveTop);

function moveTop() {
  let start = bodyStart.getBoundingClientRect().top;
  window.scrollTo({
    top: start + window.pageYOffset,
    left: 0,
    behavior: "smooth",
  });
}
/***************************************** 
let slideIndex = 1;
const allSlides = document.querySelectorAll(".swiper-slide");
console.log(allSlides);
setTimeout(function () {
  let i;
  if (i > allSlides.length) {
    slideIndex = 1;
  }
  if (i < 1) {
    slideIndex = allSlides.length;
  }
  for (i = 0; i < allSlides.length; i++) {
    allSlides[i].classList.remove("active");
  }
  allSlides[slideIndex - 1].classList.toggle("active");
}, 5000);

/************************** */

let pags = document.querySelectorAll(".pag");

pags.forEach((item) => item.addEventListener("click", changeSlide));
let slides = document.querySelectorAll(".swiper-slide");
function changeSlide() {
  slides.forEach((e) => e.classList.remove("active-slide"));
  slides[this.id - 1].classList.toggle("active-slide");
}

function autoChangeSlide() {
  setInterval(() => {
    let currentSlide = document.querySelector(".active-slide");

    if (currentSlide.id == slides.length) {
      slides.forEach((e) => e.classList.remove("active-slide"));
      slides[1].classList.add("active-slide");
      setTimeout(() => {
        slides.forEach((e) => e.classList.remove("active-slide"));
        slides[0].classList.add("active-slide");
      }, 5000);
    } else {
      slides.forEach((e) => e.classList.remove("active-slide"));
      slides[currentSlide.id].classList.toggle("active-slide");
    }
  }, 5000);
}

setTimeout(autoChangeSlide(), 4000);

/***********************************************************/

const advBtn = document.querySelector(".adventure");
const trBtn = document.querySelector(".travel");
const fshBtn = document.querySelector(".fashion");
const tchBtn = document.querySelector(".technology");

const allTabsBtn = document.querySelectorAll(".topics__tab-button");

allTabsBtn.forEach((item) => item.addEventListener("click", setActive));

function setActive() {
  allTabsBtn.forEach((item) => item.classList.remove("active"));
  let allTabs = document.querySelectorAll(".tabs-card");
  allTabs.forEach((item) => item.classList.remove("active"));

  let allForActive = document.querySelectorAll("." + this.id);
  allForActive.forEach((item) => item.classList.add("active"));
  event.preventDefault();
}

const allTopicsBtn = document.querySelector(".topics__title");
allTopicsBtn.addEventListener("click", setAllActive);

function setAllActive() {
  let allTabs = document.querySelectorAll(".tabs-card");
  allTabs.forEach((item) => item.classList.add("active"));
  allTabsBtn.forEach((item) => item.classList.remove("active"));
  event.preventDefault();
}
