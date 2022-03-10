function nextSlide(){
    let activeSlide = document.querySelector('.slide.translate-x-0');
    activeSlide.classList.remove('translate-x-0');
    activeSlide.classList.add('-translate-x-full');
    
    let nextSlide = activeSlide.nextElementSibling;
    nextSlide.classList.remove('translate-x-full');
    nextSlide.classList.add('translate-x-0');
}

function previousSlide(){
    let activeSlide = document.querySelector('.slide.translate-x-0');
    activeSlide.classList.remove('translate-x-0');
    activeSlide.classList.add('translate-x-full');
    
    let previousSlide = activeSlide.previousElementSibling;
    previousSlide.classList.remove('-translate-x-full');
    previousSlide.classList.add('translate-x-0');
}