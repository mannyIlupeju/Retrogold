

//to use for multiple Carousels if need be 
function setUpCarousel(carousel) {
  const buttonPrev = carousel.querySelector('[data-carousel-button-previous]');

  const buttonNext = carousel.querySelector('[data-carousel-button-next]');

  const slidesContainer = carousel.querySelector('[data-carousel-slides-container]');

  let currentSlide = 0;
  const numSlides = slidesContainer.children.length;


  function handleNext() {
    currentSlide = modulo(currentSlide + 1, numSlides);
    carousel.style.setProperty 
    ('--current-slide', currentSlide);
  }

  function handlePrev() {
    currentSlide = modulo(currentSlide - 1, numSlides);
    carousel.style.setProperty
    ('--current-slide', currentSlide)
  }

  function modulo(number, mod) {
    let result = number % mod;
    if (result < 0) {
      result += mod;
    }
    return result;
  }

  buttonNext.addEventListener("click", handleNext);
  buttonPrev.addEventListener("click", handlePrev);
  
}

const carousels = document.querySelectorAll('[data-carousel]');

carousels.forEach(setUpCarousel)


////////////////////////////////////////////////////////////////////////////










