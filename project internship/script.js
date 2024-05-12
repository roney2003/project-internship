const slider = document.querySelector('.slider');
let slideIndex = 0;

function showSlides() {
  const slides = slider.querySelectorAll('img');
  slideIndex++;

  if (slideIndex >= slides.length) {
    slideIndex = 0;
  }

  slider.style.transform = `translateX(-${slideIndex * 100}%)`; // ye jab bhi chalega toh 100% translate karega matlab ek slide ke liye 100% translate karega
}

setInterval(showSlides, 2000);
