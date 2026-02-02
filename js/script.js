// HERO SLIDER
const heroSlides = document.querySelectorAll('.hero__slide');
let heroIndex = 0;

setInterval(() => {
    heroSlides[heroIndex].classList.remove('active');
    heroIndex = (heroIndex + 1) % heroSlides.length;
    heroSlides[heroIndex].classList.add('active');
}, 3000);

// EXHIBITION SLIDER
const exSlides = document.querySelectorAll('.exhibition__slide');
let exIndex = 0;

document.getElementById('next').onclick = () => {
    exSlides[exIndex].classList.remove('active');
    exIndex = (exIndex + 1) % exSlides.length;
    exSlides[exIndex].classList.add('active');
};

document.getElementById('prev').onclick = () => {
    exSlides[exIndex].classList.remove('active');
    exIndex = (exIndex - 1 + exSlides.length) % exSlides.length;
    exSlides[exIndex].classList.add('active');
};
