let slideIndex = 0;
let slideTimeout; // To store the timeout ID

// Function to show slides
function showSlides() {
  let slides = document.getElementsByClassName("mySlides");
  
  // Hide all slides
  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }

  // Show the next slide
  slideIndex++;
  if (slideIndex > slides.length) { slideIndex = 1; }
  slides[slideIndex - 1].style.display = "block";

  // Set the timeout for the next slide
  slideTimeout = setTimeout(showSlides, 2000); // Change image every 2 seconds
}

// Start the slideshow
showSlides();
