// add copyright year
document.querySelector('#currentDate').innerHTML = (new Date).getFullYear();

// mobile navigation toggle
const navButton = document.querySelector('.navigation__button');
const navLinks = document.querySelector('.navigation__links');
navButton.addEventListener('click', function() {
    this.classList.toggle('crossed');
    navLinks.classList.toggle('fullwidth');
});

// modals
const modal = document.querySelector('.modal');
const modalTrigger = document.querySelector('#modalTrigger');
const modalCloseButton = document.querySelector('#modalCloseButton');
modal.style.display = 'none';

modalTrigger.addEventListener('click', function() {
    modal.style.display = 'flex';
});

modalCloseButton.addEventListener('click', function() {
    modal.style.display = 'none';
});