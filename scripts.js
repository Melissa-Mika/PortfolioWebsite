
/* Scrolling down the page after clicking on navigation buttons */
document.addEventListener('DOMContentLoaded', function () {
    const links = document.querySelectorAll('a[href^="#"]');
    links.forEach(function (link) {
        link.addEventListener('click', function (e) {
            e.preventDefault();

            const targetId = this.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);

            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });
});

/* Navigation Scrolling */
// Function to handle smooth scrolling
function scrollToSection(id) {
    var section = document.getElementById(id);
    if (section) {
        var offsetTop = section.offsetTop;
        window.scrollTo({
            top: offsetTop,
            behavior: "smooth"
        });
    }
    /* Delay before the animation (scrolling) starts */
    if (duration) {
        setTimeout(function() {
            window.scrollTo({
                top: offsetTop,
                behavior: "smooth"
            });
        }, duration);
    }
}

// Smooth scroll for navigation links
document.getElementById("home-link").addEventListener("click", function() {
    scrollToSection("home", 2000);
});

document.getElementById("education-link").addEventListener("click", function() {
    scrollToSection("education"), 2000;
});

document.getElementById("experience-link", 2000).addEventListener("click", function() {
    scrollToSection("experience");
});

document.getElementById("skills-link").addEventListener("click", function() {
    scrollToSection("skills", 2000);
});

document.getElementById("projects-link").addEventListener("click", function() {
    scrollToSection("projects", 2000);
});

document.getElementById("contact-link").addEventListener("click", function() {
    scrollToSection("contact", 2000);
});



/* Home */
document.addEventListener('DOMContentLoaded', function () {
    const jobTitles = ['programmer', 'designer']; // Add more job titles as needed
    let currentIndex = 0;
    const jobTitleElement = document.getElementById('job-title');

    setInterval(function () {
        jobTitleElement.style.animation = 'none';
        void jobTitleElement.offsetWidth; // Trigger reflow
        jobTitleElement.style.animation = 'slideIn 0.5s forwards';

        currentIndex = (currentIndex + 1) % jobTitles.length;
        jobTitleElement.textContent = jobTitles[currentIndex];
    }, 2000); // Change job title every 2 seconds (adjust as needed)
});

