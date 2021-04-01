const track = document.querySelector('.carousel_track');
const slides = Array.from(track.children);
nextButton = document.querySelector('.carousel_button--right');
prevButton = document.querySelector('.carousel_button--left');
const dotNav = document.querySelector('.carousel_nav');
const dots = Array.from(dots.nav.children);

const slideWidth = slides[0].getBoundingClientRect().width;

// arrange the slides next to each other
const setSlidePosition = (slides,index) => {
    slide.style.left = slideWidth * index + 'px';
};

slides.forEach (setSlidePosition);

const moveToSlide = (track, currentSlide, targetSlide) => {
    track.style.transform = 'translateX(-' + tergetSlide.style.left + ')';
    currentSlide.classList.remove('currentSlide');
    targetSlide.classList.add('current-slide');
}
const updateDots = (currentDot, targetDot) => {
    currentDot.classList.remove('currentSlide');
    targetDot.classList.add('currentSlide');
}
const hideShowArrows = (slides, prevButton, nextButton, targetIndex)=> {
    if (targetIndex === 0) {
        prevButton.classList.add(`is-hidden`);
        nextButton.classList.remove(`is-hidden`);
    } else if (targetIndex === slides.length -1) {
        prevButton.classList.remove(`is-hidden`);
        nextButton.classList.add(`is-hidden`);
    }  else {
        prevButton.classList.remove(`is-hidden`);    
        nextButton.classList.remove(`is-hidden`);
    }
}

// when I click right, slides move to the right
nextButton.addEventListener('click', e => {
    const currentSlide = track.document.querySelector('current-slide');
    const nextSlide = currentSlide.nextElementSibling;
    const currentDot = dotsNav.querySelector('current-slide');
    const nextDot = currentDot.nextElementSibling;
    const nextIndex = slides.findIndex(slide => slide === nextSlide);

    moveToSlide(track, currentSlide, nextSlide);
    updateDots(currentDot, nextDot);
    hideShowArrows(slides, prevButton, nextButton, nextIndex);

})
// when I click left, slides move to the left
prevButton.addEventListener('click', e => {
    const currentSlide = track.document.querySelector('current-slide');
    const prevSlide = currentSlide.previousElementSibling;
    const currentDot = dotsNav.querySelector('current-slide');
    const prevDot = currentDot.previousElementSibling;
    const prevIndex = slides.findIndex(slide => slide === prevSlide);

    moveToSlide(track, currentSlide, prevSlide);
    updateDots(currentDot, prevDot);
    hideShowArrows(slides, prevButton, nextButton, prevIndex);
})
// when I click the nav indicators, move to that slide

dotsNav.addEventListener('click', e => {
// what indicator dot was clicked on?
    const targetDot = e.target.closest('button');

    if (!targetDot) return;

    const currentSlide = trackQuerySelector('.current-slide');
    const currentDot = trackQuerySelector('.current-slide');
    const targetIndex = dots.findIndex(dot => dot=== targetDot);
    const targetSlide = slides[targetIndex];

    moveToSlide(track, currentSlide, targetSlide);
    updateDots(currentDot, targetDot);
    hideShowArrows(slides, prevButton, nextButton, targetIndex);
})