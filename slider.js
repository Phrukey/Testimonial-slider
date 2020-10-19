const nextButton = document.getElementById("nextbtn");
const prevButton = document.getElementById("prevbtn");
const slider = document.querySelector(".card-slider");
const slides = Array.from(slider.children);
const slideWidth = slides[0].getBoundingClientRect().width;

slides.forEach((slide, index) => {
  slide.style.right = slideWidth * index + "px";
})

// const moveToSlide = (track,currentSlide) => {
//   slider.style.transform = "translateX("+ targetSlide.style.right +")";
//   currentSlide.classList.remove("currentSlide");
//   targetSlide.classList.add("current-slide");
// }

nextButton.addEventListener("click", (e) => {
  const currentSlide = slider.querySelector(".current-slide");
  const nextSlide = currentSlide.nextElementSibling;
  const amountToMove = nextSlide.style.right;

 slider.style.transform = "translateX("+ amountToMove +")";
//  currentSlide.classList.remove("currentSlide");
//  nextSlide.classList.add("current-slide");
})
prevButton.addEventListener("click", (e) => {
  const currentSlide = slider.querySelector(".current-slide");
  const prevSlide = currentSlide.nextElementSibling.previousElementSibling;
  const amountToMove = prevSlide.style.right;

  slider.style.transform = "translateX("+ amountToMove + ")";
})




console.log(slideWidth)