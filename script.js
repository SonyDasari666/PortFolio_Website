// ================================
// Animate skill bars on scroll
// ================================
const skillFills = document.querySelectorAll('.skill-fill');

function isElementInViewport(el) {
    const rect = el.getBoundingClientRect();
    return (
        rect.top < (window.innerHeight || document.documentElement.clientHeight) &&
        rect.bottom >= 0
    );
}

function animateSkills() {
    skillFills.forEach(bar => {
        if (isElementInViewport(bar) && !bar.classList.contains('animated')) {
            bar.style.width = bar.getAttribute('data-width');
            bar.classList.add('animated');
        }
    });
}

window.addEventListener('scroll', animateSkills);
window.addEventListener('load', animateSkills);

// ================================
// Fade-in animation on scroll
// ================================
const fadeIns = document.querySelectorAll('.fade-in');

function showOnScroll() {
    fadeIns.forEach(el => {
        if (isElementInViewport(el)) {
            el.classList.add('show');
        }
    });
}

window.addEventListener('scroll', showOnScroll);
window.addEventListener('load', showOnScroll);

// ================================
// Smooth scroll for anchor links
// ================================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// ================================
// Contact Form Validation
// ================================
const contactForm = document.querySelector('form');
if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        const name = this.name.value.trim();
        const email = this.email.value.trim();
        const message = this.message.value.trim();
        let valid = true;

        if (name === '') { alert('Please enter your name.'); valid = false; }
        else if (email === '') { alert('Please enter your email.'); valid = false; }
        else if (!email.includes('@')) { alert('Please enter a valid email.'); valid = false; }
        else if (message === '') { alert('Please enter a message.'); valid = false; }

        if (!valid) e.preventDefault();
    });
}

// ================================
// Mobile Hamburger Toggle
// ================================
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

if (hamburger) {
    hamburger.addEventListener('click', () => {
        navLinks.classList.toggle('show');
    });
}

// ================================
// Highlight Active Section
// ================================
const sections = document.querySelectorAll('section');
const navItems = document.querySelectorAll('.nav-links li a');

window.addEventListener('scroll', () => {
    let current = '';
    sections.forEach(section => {
        const sectionTop = section.offsetTop - 70; // adjust for navbar height
        const sectionHeight = section.clientHeight;
        if (pageYOffset >= sectionTop && pageYOffset < sectionTop + sectionHeight) {
            current = section.getAttribute('id');
        }
    });

    navItems.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${current}`) {
            link.classList.add('active');
        }
    });
});
