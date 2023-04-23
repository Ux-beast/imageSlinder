// Select all the slider images on the page and store them in an array
// Set the initial slide index to 0
// Set up an interval that calls the nextSlide function every 2 seconds
// Define the nextSlide function that will be called by the interval
// Add the 'active' class to the new slide to show it
// Increment the slide index and loop back to the beginning if necessary
// Remove the 'active' class from the current slide to hide it

const sliderImages = document.querySelectorAll(".slider-image");
let currentSlide = 0;
const slideInterval = setInterval(nextSlide,2000);

function nextSlide(){

sliderImages[currentSlide].classList.add("active");
currentSlide = (currentSlide + 1) % sliderImages.length;
sliderImages[currentSlide].classList.remove("active");

}

