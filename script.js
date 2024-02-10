const carousel = document.querySelector(".carousel");
const carouselImages = document.querySelector(".carousel-images");
const prevBtn = document.querySelector(".prev");
const nextBtn = document.querySelector(".next");

let currentIndex = 0;

nextBtn.addEventListener("click", () => {
  currentIndex = (currentIndex + 1) % carouselImages.children.length;
  updateCarousel();
});

prevBtn.addEventListener("click", () => {
  currentIndex =
    (currentIndex - 1 + carouselImages.children.length) %
    carouselImages.children.length;
  updateCarousel();
});

function updateCarousel() {
  const offset = -currentIndex * carousel.offsetWidth;
  carouselImages.style.transform = `translateX(${offset}px)`;
}
