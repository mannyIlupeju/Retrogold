"use strict";

//to use for multiple Carousels if need be 
function setUpCarousel(carousel) {
  var buttonPrev = carousel.querySelector('[data-carousel-button-previous]');
  var buttonNext = carousel.querySelector('[data-carousel-button-next]');
  var slidesContainer = carousel.querySelector('[data-carousel-slides-container]');
  var currentSlide = 0;
  var numSlides = slidesContainer.children.length;

  function handleNext() {
    currentSlide = modulo(currentSlide + 1, numSlides);
    carousel.style.setProperty('--current-slide', currentSlide);
  }

  function handlePrev() {
    currentSlide = modulo(currentSlide - 1, numSlides);
    carousel.style.setProperty('--current-slide', currentSlide);
  }

  function modulo(number, mod) {
    var result = number % mod;

    if (result < 0) {
      result += mod;
    }

    return result;
  }

  buttonNext.addEventListener("click", handleNext);
  buttonPrev.addEventListener("click", handlePrev);
}

var carousels = document.querySelectorAll('[data-carousel]');
carousels.forEach(setUpCarousel); ////////////////////////////////////////////////////////////////////////////
//# sourceMappingURL=script.dev.js.map
