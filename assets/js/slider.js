let slides = document.querySelectorAll('.slide');
let currentSlide = 0;

setInterval(() => {
    slides[currentSlide].style.opacity = 0;
    currentSlide = (currentSlide + 1) % slides.length;
    slides[currentSlide].style.opacity = 1;
}, 5000);
