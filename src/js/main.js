"use strict";

//GALLERY ANIMATION
let currentImage = 0;
let timeChange = 4000;
const image1 = document.querySelector('.gallery__photo1--js');
const image2 = document.querySelector('.gallery__photo2--js');
const image3 = document.querySelector('.gallery__photo3--js');
const text1 = document.querySelector('.gallery__text1--js');
const text2 = document.querySelector('.gallery__text2--js');
const text3 = document.querySelector('.gallery__text3--js');
const images1 = ["assets/img/hotel-1-small.jpg 600w, assets/img/hotel-1.jpg 1500w",
  "assets/img/hotel-1a-small.jpg 600w, assets/img/hotel-1a.jpg 1500w",
  "assets/img/hotel-1b-small.jpg 600w, assets/img/hotel-1b.jpg 1500w"
];
const images2 = ["assets/img/hotel-2-small.jpg 600w, assets/img/hotel-2.jpg 1500w",
  "assets/img/hotel-2a-small.jpg 600w, assets/img/hotel-2a.jpg 1500w",
  "assets/img/hotel-2b-small.jpg 600w, assets/img/hotel-2b.jpg 1500w"
];
const images3 = ["assets/img/hotel-3-small.jpg 600w, assets/img/hotel-3.jpg 1500w",
  "assets/img/hotel-3a-small.jpg 600w, assets/img/hotel-3a.jpg 1500w",
  "assets/img/hotel-3b-small.jpg 600w, assets/img/hotel-3b.jpg 1500w"
];
const texts1 = ['night view', 'hotel interior design', 'city at night'];
const texts2 = ['charming swimming pool', 'sunbathing at pool', 'meet dolphins'];
const texts3 = ['exciting tours', 'tours in nature', 'city tours'];

function changeImages() {
  currentImage++;
  if (currentImage == images1.length) {
    currentImage = 0;
  }
  image1.srcset = images1[currentImage];
  image2.srcset = images2[currentImage];
  image3.srcset = images3[currentImage];
  text1.innerHTML = texts1[currentImage];
  text2.innerHTML = texts2[currentImage];
  text3.innerHTML = texts3[currentImage];
}
setInterval(changeImages, timeChange);

//ROOMS GALLERY SLIDER
let sliderImages = document.querySelectorAll('.rooms-gallery__slide');
let arrowRight = document.querySelector('#arrow-right');
let arrowLeft = document.querySelector('#arrow-left');
let current = 0;

function reset() {
  for (let i = 0; i < sliderImages.length; i++) {
    sliderImages[i].style.display = 'none';
  }
}

function startSlide() {
  reset();
  sliderImages[0].style.display = "block";
}

function slideLeft() {
  reset();
  sliderImages[current - 1].style.display = "block";
  current--;
}

function slideRight() {
  reset();
  sliderImages[current + 1].style.display = "block";
  current++;
}
arrowLeft.addEventListener('click', function () {
  if (current === 0) {
    current = sliderImages.length;
  }
  slideLeft();
});
arrowRight.addEventListener('click', function () {
  if (current === sliderImages.length - 1) {
    current = -1;
  }
  slideRight();
});
startSlide();

//MODAL
const button = document.querySelector('.btn');
const modalOut = document.querySelector('.modal');
const modalIn = document.querySelector('.modal__inner');

function handleButtonClick() {
  modalOut.classList.add('open');
}
button.addEventListener('click', handleButtonClick);

function closeModal() {
  modalOut.classList.remove('open');
}
modalOut.addEventListener('click', e => {
  const isOpen = !e.target.closest('.modal__inner');
  if(isOpen) {
    closeModal();
  }
});
window.addEventListener('keydown', e => {
  if(e.key === 'Escape') {
    closeModal();
  }
});

//tabs styling:
const tabs = document.querySelector('.tabs');
const tabButtons = tabs.querySelectorAll('[role="tab"]');
const tabPanels = Array.from(tabs.querySelectorAll('[role="tabpanel"]'));

function handleTabClick(event) {
  //hide all tabPanels
  tabPanels.forEach(panel => panel.hidden = true);
  //mark all tabButtons as unselected
  tabButtons.forEach(tab => tab.setAttribute('aria-selected', false));
  //mark the clicked tabButton as selected
  event.currentTarget.setAttribute('aria-selected', true);
  //find the associated tabPanel and show it!
  const id = event.currentTarget.id;
  const tabPanel = tabPanels.find(panel => panel.getAttribute('aria-labelledby') === id);
  tabPanel.hidden = false;
}

tabButtons.forEach(button => button.addEventListener('click', handleTabClick));