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

// GSAP Scroll Trigger Function
gsap.registerPlugin(ScrollTrigger);

// Example 1: Fade in elements on scroll
function scrollFadeIn() {
    gsap.utils.toArray(".fade-in-scroll").forEach((element) => {
        gsap.to(element, {
            scrollTrigger: {
                trigger: element,
                start: "top 80%",
                end: "top 50%",
                scrub: 1,
                markers: false,
            },
            opacity: 1,
            duration: 1,
        });
    });
}

// Example 2: Slide in from left on scroll
function scrollSlideInLeft() {
    gsap.utils.toArray(".slide-left-scroll").forEach((element) => {
        gsap.to(element, {
            scrollTrigger: {
                trigger: element,
                start: "top 75%",
                end: "top 25%",
                scrub: 1,
            },
            x: 0,
            opacity: 1,
            duration: 0.8,
        });
    });
}

// Example 3: Scale up on scroll
function scrollScaleUp() {
    gsap.utils.toArray(".scale-scroll").forEach((element) => {
        gsap.to(element, {
            scrollTrigger: {
                trigger: element,
                start: "top center",
                end: "center center",
                scrub: 2,
            },
            scale: 1,
            opacity: 1,
            duration: 1,
        });
    });
}

// Example 4: Rotate on scroll
function scrollRotate() {
    gsap.utils.toArray(".rotate-scroll").forEach((element) => {
        gsap.to(element, {
            scrollTrigger: {
                trigger: element,
                start: "top 80%",
                end: "bottom 50%",
                scrub: 1.5,
            },
            rotation: 360,
            opacity: 1,
            duration: 1,
        });
    });
}

// Call all scroll functions on page load
document.addEventListener("DOMContentLoaded", () => {
    scrollFadeIn();
    scrollSlideInLeft();
    scrollScaleUp();
    scrollRotate();
});