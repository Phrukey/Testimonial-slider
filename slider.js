const nextButton = document.getElementById("nextbtn");
const prevButton = document.getElementById("prevbtn");
const slider = document.querySelector(".card-slider");
const slides = Array.from(slider.children);
const slideWidth = slides[0].getBoundingClientRect().width;

slides.forEach((slide, index) => {
  slide.style.right = slideWidth * index + "px";
})

nextButton.addEventListener("click", (e) => {
  const currentSlide = slider.querySelector(".current-slide");
  const nextSlide = currentSlide.nextElementSibling;
  const amountToMove = nextSlide.style.right;

  slider.style.transform = "translateX(" + amountToMove +")";
  currentSlide.style.display = "none";
})




console.log(slideWidth)