// Get all necessary elements
const slides = document.querySelectorAll('.slide');
const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');

let currentSlide = 0;
let slideInterval;

// Function to show a specific slide
function showSlide(index) {
    // Remove active class from all slides
    slides.forEach(slide => slide.classList.remove('active'));
    
    // Handle circular navigation
    if (index >= slides.length) {
        currentSlide = 0;
    } else if (index < 0) {
        currentSlide = slides.length - 1;
    } else {
        currentSlide = index;
    }
    
    // Add active class to current slide
    slides[currentSlide].classList.add('active');
}

// Event listeners for next and previous buttons
nextBtn.addEventListener('click', () => {
    showSlide(currentSlide + 1);//means the current slide will increase by 1
    resetAutoSlide();
});

prevBtn.addEventListener('click', () => {
    showSlide(currentSlide - 1);//means the current slide will decrease by 1
    resetAutoSlide();
});

// Function to start automatic slideshow --->Extra point
function startAutoSlide() {
    slideInterval = setInterval(() => {
        showSlide(currentSlide + 1);// Automatically go to the next slide
    }, 3000); // Change slide every 3 seconds
}

// Function to reset automatic slideshow
function resetAutoSlide() {
    clearInterval(slideInterval);// Clear existing interval
    startAutoSlide();
}

// Initialize the slider
showSlide(0);
startAutoSlide();
