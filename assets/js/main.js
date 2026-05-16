// Get DOM elements
const bars = document.querySelector('.bars');
const navContainer = document.querySelector('.NavContainer');
const closeBtn = document.querySelector('.NavContainer p');

// Open navigation when bars are clicked
bars.addEventListener('click', function() {
    navContainer.classList.add('active');
    bars.classList.remove('active');
});

// Close navigation when X is clicked
closeBtn.addEventListener('click', function() {
    navContainer.classList.remove('active');
    bars.classList.add('active');
});

// Close navigation when a link is clicked
const navLinks = document.querySelectorAll('.NavContainer nav ul li a');
navLinks.forEach(link => {
    link.addEventListener('click', function() {
        navContainer.classList.remove('active');
        bars.classList.add('active');
    });
});

document.addEventListener("DOMContentLoaded", () => {
    const hrElement = document.getElementById("LineAnimate");
    const titleHeading = document.querySelector(".boxHeader h1");
    
    // Check if the user has been here before
    if (!localStorage.getItem("hasVisitedBefore")) {
      // First time visit: Add the animation class
      hrElement.classList.add("animate-line");
      if (titleHeading) {
        titleHeading.classList.add("fill-text");
      }
      // Set the flag so it won't animate on reload
      localStorage.setItem("hasVisitedBefore", "true");
    }
    // If they have visited before, the class is ignored and the line displays instantly
});