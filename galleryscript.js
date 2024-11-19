let slideIndex = 0;
let slideInterval; // To store the interval ID
showSlides();

// Function to display slides
function showSlides() {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}
  slides[slideIndex - 1].style.display = "block";
  slideInterval = setTimeout(showSlides, 2000); // Change image every 2 seconds
}

// Add event listeners for pausing on hover
const slideshowContainer = document.querySelector(".slideshow-container");

slideshowContainer.addEventListener("mouseenter", function() {
  clearTimeout(slideInterval); // Stop the slideshow when hovering
});

slideshowContainer.addEventListener("mouseleave", function() {
  showSlides(); // Resume the slideshow when mouse leaves
});