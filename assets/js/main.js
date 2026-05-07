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
