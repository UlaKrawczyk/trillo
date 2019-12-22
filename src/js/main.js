"use strict";

let currentImage = 0;
let timeChange = 4000;

const image1 = document.querySelector('.gallery__photo1--js');
const image2 = document.querySelector('.gallery__photo2--js');
const image3 = document.querySelector('.gallery__photo3--js');

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

function changeImages() {
  currentImage++;
  if (currentImage == images1.length) {
    currentImage = 0;
  }
  image1.srcset = images1[currentImage];
  image2.srcset = images2[currentImage];
  image3.srcset = images3[currentImage];
}

setInterval(changeImages, timeChange)