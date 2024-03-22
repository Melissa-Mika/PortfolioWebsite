
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
    const jobTitleElement = document.getElementById('job-title'); 
    const jobTitles = ['designer', 'programmer', 'developer']; 
    const wordColors = ['#FFC374', '#7F9F80', '#124076']
    let currentIndex = 0;
    

    setInterval(function () {
        jobTitleElement.style.animation = 'none';
        void jobTitleElement.offsetWidth; // Trigger reflow
        jobTitleElement.style.animation = 'slideIn 0.5s forwards';

        const jobTitleWords = jobTitles[currentIndex].split(' ');
        let coloredText = '';

        for (let i = 0; i < jobTitleWords.length; i++) {
            const colorIndex = (i + currentIndex) % wordColors.length; // Ensure each word gets a different color
            coloredText += `<span class="job-title-word" style="color: ${wordColors[colorIndex]};">${jobTitleWords[i]}</span> `;
        }

        jobTitleElement.innerHTML = coloredText.trim();

        currentIndex = (currentIndex + 1) % jobTitles.length;
    }, 2000); // Change job title every 2 seconds 
});

