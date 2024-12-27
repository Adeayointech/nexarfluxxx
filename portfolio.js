        const counters = document.querySelectorAll('.count');
        const speed = 200; // The speed of the counter

        const animateCounter = (counter) => {
            const target = +counter.getAttribute('data-target');
            let count = 0;
            const increment = Math.ceil(target / speed);

            const updateCounter = () => {
                count += increment;
                if (count < target) {
                    counter.textContent = count;
                    requestAnimationFrame(updateCounter);
                } else {
                    counter.textContent = target; // Ensure it ends at the target value
                }
            };

            updateCounter();
        };

        const observerOptions = {
            root: null,
            threshold: 0.1 // Adjust this for when the counter should start
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    counters.forEach(counter => animateCounter(counter));
                    observer.unobserve(entry.target); // Stop observing after running
                }
            });
        }, observerOptions);

        observer.observe(document.querySelector('#hello-there')); // Start observing the section
    
        document.querySelectorAll('.menu-list a').forEach(anchor => {
            anchor.addEventListener('click', function(e) {
                e.preventDefault();
                const targetId = this.getAttribute('href').substring(1);
                const targetElement = document.getElementById(targetId);
                
                if (targetElement) {
                    targetElement.scrollIntoView({ behavior: 'smooth' });
                }
            });
        });

// script.js

function toggleMenu() {
    const navLinks = document.getElementById('nav-links');
    if (navLinks.style.display === 'block') {
        navLinks.style.display = 'none';
    } else {
        navLinks.style.display = 'block';
    }
}

// function toggleMenu() {
//     const navLinks = document.getElementById('nav-links');
//     navLinks.classList.toggle('show'); 
// }

window.addEventListener('scroll', function() {
    const elements = document.querySelectorAll('.animate-on-scroll');
    const scrollPosition = window.innerHeight + window.scrollY;

    elements.forEach(element => {
        if (element.offsetTop < scrollPosition) {
            element.classList.add('in-view');
        }
    });
});


// function toggleMenu() {
//     const navLinks = document.getElementById('nav-links');
//     navLinks.classList.toggle('show');
//     if (navLinks.style.display === 'block') {
//         navLinks.style.display = 'none';
//     } else {
//         navLinks.style.display = 'block';
//     }
// }


// document.addEventListener('click', function (event) {
//     const navLinks = document.getElementById('nav-links');
//     const menuContainer = document.querySelector('.menu-container');
    
   
//     if (navLinks.style.display === 'block' && !menuContainer.contains(event.target) && !navLinks.contains(event.target)) {
//         navLinks.style.display = 'none';
//     }
// });

function toggleMenu() {
    const navLinks = document.getElementById('nav-links');
    navLinks.classList.toggle('show');
}

// Close the menu when clicking on the 'x' button
document.querySelector('.close-btn').addEventListener('click', toggleMenu);

// Close the menu when clicking outside the menu area
window.addEventListener('click', function(event) {
    const navLinks = document.getElementById('nav-links');
    const menuContainer = document.querySelector('.menu-container');
    if (navLinks.classList.contains('show') && !navLinks.contains(event.target) && !menuContainer.contains(event.target)) {
        navLinks.classList.remove('show');
    }
});

// script.js
// document.querySelector('.see-more-btn').addEventListener('click', function() {
//     const hiddenItems = document.querySelectorAll('.work-item.hidden');
//     hiddenItems.forEach(item => {
//         item.classList.remove('hidden');
//     });
//     this.style.display = 'none'; 
// });

// let isExpanded = false;

// function toggleProjects() {
//     const extraProjects = document.querySelectorAll('.work-item.hidden');
//     const seeMoreBtn = document.getElementById('see-more-btn');

//     if (isExpanded) {
//         // Hide extra projects
//         extraProjects.forEach(project => project.classList.add('hidden'));
//         seeMoreBtn.innerText = 'See More';
//     } else {
//         // Show extra projects
//         extraProjects.forEach(project => project.classList.remove('hidden'));
//         seeMoreBtn.innerText = 'See Less';
//     }

//     isExpanded = !isExpanded;
// }

// let isExpanded = false;

// function toggleProjects() {
//     const extraProjects = document.querySelectorAll('.work-item.hidden');
//     const seeMoreBtn = document.getElementById('see-more-btn');

//     if (isExpanded) {
//         // Hide extra projects and restore initial layout
//         extraProjects.forEach(project => project.classList.add('hidden'));
//         seeMoreBtn.innerText = 'See More';
//         // Scroll back to the top of the section
//         document.querySelector('.works-section').scrollIntoView({ behavior: 'smooth' });
//     } else {
//         // Show extra projects
//         extraProjects.forEach(project => project.classList.remove('hidden'));
//         seeMoreBtn.innerText = 'See Less';
//     }

//     isExpanded = !isExpanded;
// }

document.addEventListener('DOMContentLoaded', () => {
    const seeMoreBtn = document.getElementById('see-more-btn');
    let isExpanded = false;

    function toggleProjects() {
        const extraProjects = document.querySelectorAll('.work-item.hidden');

        if (!isExpanded) {
            // Show the hidden projects
            extraProjects.forEach(project => {
                project.classList.remove('hidden');
            });
            seeMoreBtn.innerText = 'See Less';
        } else {
            // Hide the extra projects
            extraProjects.forEach(project => {
                project.classList.add('hidden');
            });
            seeMoreBtn.innerText = 'See More';
        }

        // Toggle the state
        isExpanded = !isExpanded;
    }

    // Attach the click event listener
    if (seeMoreBtn) {
        seeMoreBtn.addEventListener('click', toggleProjects);
    }
});


document.addEventListener("DOMContentLoaded", function() {
    const elements = document.querySelectorAll('.typing-effect');

    elements.forEach(el => {
        const text = el.getAttribute('data-text');
        el.textContent = ''; // Clear existing text
        let index = 0;
        
        const typing = setInterval(() => {
            if (index < text.length) {
                el.textContent += text.charAt(index);
                index++;
            } else {
                clearInterval(typing);
            }
        }, 100);
    });
});


const text = "We are a creative group of people who design influential brands and digital experiences.";
const breakPoints = [27, 67]; // Adjust these indices to where you want the line breaks
let index = 0;

function typeEffect() {
    const typingElement = document.querySelector('.typing-effect');

    if (index < text.length) {
        if (breakPoints.includes(index)) {
            typingElement.innerHTML += '<br>'; // Add a line break at the specified points
        }
        typingElement.innerHTML += text.charAt(index); // Type the current character
        index++;
        setTimeout(typeEffect, 100); // Adjust the typing speed (100ms)
    }
}

document.addEventListener('DOMContentLoaded', () => {
    const typingElement = document.querySelector('.typing-effect');
    typingElement.innerHTML = ""; // Clear any existing content before starting
    typeEffect(); // Start typing
});


const phrases = [
    "Welcome to nexarfluX.",
    "Amazing digital experiences.",
    "Your vision, our design.",
    "Very responsive websites.",
    "Very creative video editings.",
    "Social media accounts.",
    "Content writing.",
    "We are always at your service."
];

let currentPhrase = 0;
let currentLetter = 0;
let isDeleting = false;
let typingSpeed = 150; 
let delayAfterComplete = 2000; 

function typeEffect() {
    const typingElement = document.querySelector('.typing');
    let currentText = phrases[currentPhrase];
    
    if (isDeleting) {
        
        typingElement.textContent = currentText.substring(0, currentLetter--);
        typingSpeed = 75; 
    } else {
     
        typingElement.textContent = currentText.substring(0, currentLetter++);
        typingSpeed = 150; 
    }
    
  
    if (!isDeleting && currentLetter === currentText.length) {
        isDeleting = true;
        typingSpeed = delayAfterComplete; 
    }

    else if (isDeleting && currentLetter === 0) {
        isDeleting = false;
        currentPhrase = (currentPhrase + 1) % phrases.length; 
    }

    setTimeout(typeEffect, typingSpeed);
}

document.addEventListener('DOMContentLoaded', typeEffect);


  