window.addEventListener('DOMContentLoaded', (event) => {    
    console.log('DOM fully loaded and parsed');

var track = document.querySelector('.carousel_track');
var slides = Array.from(track.children);
nextButton = document.querySelector('.carousel_button--right');
prevButton = document.querySelector('.carousel_button--left');
var dotNav = document.querySelector('.carousel_nav');
var dots = Array.from(dots.nav.children);

var slideWidth = slides[0].getBoundingClientRect().width;

// arrange the slides next to each other
var setSlidePosition = (slides,index) => {
    slide.style.left = slideWidth * index + 'px';
};

slides.forEach (setSlidePosition);

var moveToSlide = (track, currentSlide, targetSlide) => {
    track.style.transform = 'translateX(-' + tergetSlide.style.left + ')';
    currentSlide.classList.remove('currentSlide');
    targetSlide.classList.add('current-slide');
}
var updateDots = (currentDot, targetDot) => {
    currentDot.classList.remove('currentSlide');
    targetDot.classList.add('currentSlide');
}
var hideShowArrows = (slides, prevButton, nextButton, targetIndex)=> {
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
    var currentSlide = track.document.querySelector('current-slide');
    var nextSlide = currentSlide.nextElementSibling;
    var currentDot = dotsNav.querySelector('current-slide');
    var nextDot = currentDot.nextElementSibling;
    var nextIndex = slides.findIndex(slide => slide === nextSlide);

    moveToSlide(track, currentSlide, nextSlide);
    updateDots(currentDot, nextDot);
    hideShowArrows(slides, prevButton, nextButton, nextIndex);

})
// when I click left, slides move to the left
prevButton.addEventListener('click', e => {
    var currentSlide = track.document.querySelector('current-slide');
    var prevSlide = currentSlide.previousElementSibling;
    var currentDot = dotsNav.querySelector('current-slide');
    var prevDot = currentDot.previousElementSibling;
    var prevIndex = slides.findIndex(slide => slide === prevSlide);

    moveToSlide(track, currentSlide, prevSlide);
    updateDots(currentDot, prevDot);
    hideShowArrows(slides, prevButton, nextButton, prevIndex);
})
// when I click the nav indicators, move to that slide

dotsNav.addEventListener('click', e => {
// what indicator dot was clicked on?
    var targetDot = e.target.closest('button');

    if (!targetDot) return;

    var currentSlide = trackQuerySelector('.current-slide');
    var currentDot = trackQuerySelector('.current-slide');
    var targetIndex = dots.findIndex(dot => dot=== targetDot);
    var targetSlide = slides[targetIndex];

    moveToSlide(track, currentSlide, targetSlide);
    updateDots(currentDot, targetDot);
    hideShowArrows(slides, prevButton, nextButton, targetIndex);
})

});
