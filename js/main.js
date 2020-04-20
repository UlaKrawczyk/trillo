!function(n){var c={};function t(l){if(c[l])return c[l].exports;var e=c[l]={i:l,l:!1,exports:{}};return n[l].call(e.exports,e,e.exports,t),e.l=!0,e.exports}t.m=n,t.c=c,t.d=function(n,c,l){t.o(n,c)||Object.defineProperty(n,c,{enumerable:!0,get:l})},t.r=function(n){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(n,"__esModule",{value:!0})},t.t=function(n,c){if(1&c&&(n=t(n)),8&c)return n;if(4&c&&"object"==typeof n&&n&&n.__esModule)return n;var l=Object.create(null);if(t.r(l),Object.defineProperty(l,"default",{enumerable:!0,value:n}),2&c&&"string"!=typeof n)for(var e in n)t.d(l,e,function(c){return n[c]}.bind(null,e));return l},t.n=function(n){var c=n&&n.__esModule?function(){return n.default}:function(){return n};return t.d(c,"a",c),c},t.o=function(n,c){return Object.prototype.hasOwnProperty.call(n,c)},t.p="",t(t.s=0)}([function(module,exports,__webpack_require__){"use strict";eval("\r\n\r\n//GALLERY ANIMATION\r\nlet currentImage = 0;\r\nlet timeChange = 4000;\r\nconst image1 = document.querySelector('.gallery__photo1--js');\r\nconst image2 = document.querySelector('.gallery__photo2--js');\r\nconst image3 = document.querySelector('.gallery__photo3--js');\r\nconst text1 = document.querySelector('.gallery__text1--js');\r\nconst text2 = document.querySelector('.gallery__text2--js');\r\nconst text3 = document.querySelector('.gallery__text3--js');\r\nconst images1 = [\"assets/img/hotel-1-small.jpg 600w, assets/img/hotel-1.jpg 1500w\",\r\n  \"assets/img/hotel-1a-small.jpg 600w, assets/img/hotel-1a.jpg 1500w\",\r\n  \"assets/img/hotel-1b-small.jpg 600w, assets/img/hotel-1b.jpg 1500w\"\r\n];\r\nconst images2 = [\"assets/img/hotel-2-small.jpg 600w, assets/img/hotel-2.jpg 1500w\",\r\n  \"assets/img/hotel-2a-small.jpg 600w, assets/img/hotel-2a.jpg 1500w\",\r\n  \"assets/img/hotel-2b-small.jpg 600w, assets/img/hotel-2b.jpg 1500w\"\r\n];\r\nconst images3 = [\"assets/img/hotel-3-small.jpg 600w, assets/img/hotel-3.jpg 1500w\",\r\n  \"assets/img/hotel-3a-small.jpg 600w, assets/img/hotel-3a.jpg 1500w\",\r\n  \"assets/img/hotel-3b-small.jpg 600w, assets/img/hotel-3b.jpg 1500w\"\r\n];\r\nconst texts1 = ['night view', 'hotel interior design', 'city at night'];\r\nconst texts2 = ['charming swimming pool', 'sunbathing at pool', 'meet dolphins'];\r\nconst texts3 = ['exciting tours', 'tours in nature', 'city tours'];\r\n\r\nfunction changeImages() {\r\n  currentImage++;\r\n  if (currentImage == images1.length) {\r\n    currentImage = 0;\r\n  }\r\n  image1.srcset = images1[currentImage];\r\n  image2.srcset = images2[currentImage];\r\n  image3.srcset = images3[currentImage];\r\n  text1.innerHTML = texts1[currentImage];\r\n  text2.innerHTML = texts2[currentImage];\r\n  text3.innerHTML = texts3[currentImage];\r\n}\r\nsetInterval(changeImages, timeChange);\r\n\r\n//ROOMS GALLERY SLIDER\r\nlet sliderImages = document.querySelectorAll('.rooms-gallery__slide');\r\nlet arrowRight = document.querySelector('#arrow-right');\r\nlet arrowLeft = document.querySelector('#arrow-left');\r\nlet current = 0;\r\n\r\nfunction reset() {\r\n  for (let i = 0; i < sliderImages.length; i++) {\r\n    sliderImages[i].style.display = 'none';\r\n  }\r\n}\r\n\r\nfunction startSlide() {\r\n  reset();\r\n  sliderImages[0].style.display = \"block\";\r\n}\r\n\r\nfunction slideLeft() {\r\n  reset();\r\n  sliderImages[current - 1].style.display = \"block\";\r\n  current--;\r\n}\r\n\r\nfunction slideRight() {\r\n  reset();\r\n  sliderImages[current + 1].style.display = \"block\";\r\n  current++;\r\n}\r\narrowLeft.addEventListener('click', function () {\r\n  if (current === 0) {\r\n    current = sliderImages.length;\r\n  }\r\n  slideLeft();\r\n});\r\narrowRight.addEventListener('click', function () {\r\n  if (current === sliderImages.length - 1) {\r\n    current = -1;\r\n  }\r\n  slideRight();\r\n});\r\nstartSlide();\r\n\r\n//MODAL\r\nconst button = document.querySelector('.btn');\r\nconst modalOut = document.querySelector('.modal');\r\nconst modalIn = document.querySelector('.modal__inner');\r\n\r\nfunction handleButtonClick() {\r\n  modalOut.classList.add('open');\r\n}\r\nbutton.addEventListener('click', handleButtonClick);\r\n\r\nfunction closeModal() {\r\n  modalOut.classList.remove('open');\r\n}\r\nmodalOut.addEventListener('click', e => {\r\n  const isOpen = !e.target.closest('.modal__inner');\r\n  if(isOpen) {\r\n    closeModal();\r\n  }\r\n});\r\nwindow.addEventListener('keydown', e => {\r\n  if(e.key === 'Escape') {\r\n    closeModal();\r\n  }\r\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvanMvbWFpbi5qcz85MjkxIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFhOztBQUViO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsaUJBQWlCLHlCQUF5QjtBQUMxQztBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDIiwiZmlsZSI6IjAuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcclxuXHJcbi8vR0FMTEVSWSBBTklNQVRJT05cclxubGV0IGN1cnJlbnRJbWFnZSA9IDA7XHJcbmxldCB0aW1lQ2hhbmdlID0gNDAwMDtcclxuY29uc3QgaW1hZ2UxID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmdhbGxlcnlfX3Bob3RvMS0tanMnKTtcclxuY29uc3QgaW1hZ2UyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmdhbGxlcnlfX3Bob3RvMi0tanMnKTtcclxuY29uc3QgaW1hZ2UzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmdhbGxlcnlfX3Bob3RvMy0tanMnKTtcclxuY29uc3QgdGV4dDEgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZ2FsbGVyeV9fdGV4dDEtLWpzJyk7XHJcbmNvbnN0IHRleHQyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmdhbGxlcnlfX3RleHQyLS1qcycpO1xyXG5jb25zdCB0ZXh0MyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5nYWxsZXJ5X190ZXh0My0tanMnKTtcclxuY29uc3QgaW1hZ2VzMSA9IFtcImFzc2V0cy9pbWcvaG90ZWwtMS1zbWFsbC5qcGcgNjAwdywgYXNzZXRzL2ltZy9ob3RlbC0xLmpwZyAxNTAwd1wiLFxyXG4gIFwiYXNzZXRzL2ltZy9ob3RlbC0xYS1zbWFsbC5qcGcgNjAwdywgYXNzZXRzL2ltZy9ob3RlbC0xYS5qcGcgMTUwMHdcIixcclxuICBcImFzc2V0cy9pbWcvaG90ZWwtMWItc21hbGwuanBnIDYwMHcsIGFzc2V0cy9pbWcvaG90ZWwtMWIuanBnIDE1MDB3XCJcclxuXTtcclxuY29uc3QgaW1hZ2VzMiA9IFtcImFzc2V0cy9pbWcvaG90ZWwtMi1zbWFsbC5qcGcgNjAwdywgYXNzZXRzL2ltZy9ob3RlbC0yLmpwZyAxNTAwd1wiLFxyXG4gIFwiYXNzZXRzL2ltZy9ob3RlbC0yYS1zbWFsbC5qcGcgNjAwdywgYXNzZXRzL2ltZy9ob3RlbC0yYS5qcGcgMTUwMHdcIixcclxuICBcImFzc2V0cy9pbWcvaG90ZWwtMmItc21hbGwuanBnIDYwMHcsIGFzc2V0cy9pbWcvaG90ZWwtMmIuanBnIDE1MDB3XCJcclxuXTtcclxuY29uc3QgaW1hZ2VzMyA9IFtcImFzc2V0cy9pbWcvaG90ZWwtMy1zbWFsbC5qcGcgNjAwdywgYXNzZXRzL2ltZy9ob3RlbC0zLmpwZyAxNTAwd1wiLFxyXG4gIFwiYXNzZXRzL2ltZy9ob3RlbC0zYS1zbWFsbC5qcGcgNjAwdywgYXNzZXRzL2ltZy9ob3RlbC0zYS5qcGcgMTUwMHdcIixcclxuICBcImFzc2V0cy9pbWcvaG90ZWwtM2Itc21hbGwuanBnIDYwMHcsIGFzc2V0cy9pbWcvaG90ZWwtM2IuanBnIDE1MDB3XCJcclxuXTtcclxuY29uc3QgdGV4dHMxID0gWyduaWdodCB2aWV3JywgJ2hvdGVsIGludGVyaW9yIGRlc2lnbicsICdjaXR5IGF0IG5pZ2h0J107XHJcbmNvbnN0IHRleHRzMiA9IFsnY2hhcm1pbmcgc3dpbW1pbmcgcG9vbCcsICdzdW5iYXRoaW5nIGF0IHBvb2wnLCAnbWVldCBkb2xwaGlucyddO1xyXG5jb25zdCB0ZXh0czMgPSBbJ2V4Y2l0aW5nIHRvdXJzJywgJ3RvdXJzIGluIG5hdHVyZScsICdjaXR5IHRvdXJzJ107XHJcblxyXG5mdW5jdGlvbiBjaGFuZ2VJbWFnZXMoKSB7XHJcbiAgY3VycmVudEltYWdlKys7XHJcbiAgaWYgKGN1cnJlbnRJbWFnZSA9PSBpbWFnZXMxLmxlbmd0aCkge1xyXG4gICAgY3VycmVudEltYWdlID0gMDtcclxuICB9XHJcbiAgaW1hZ2UxLnNyY3NldCA9IGltYWdlczFbY3VycmVudEltYWdlXTtcclxuICBpbWFnZTIuc3Jjc2V0ID0gaW1hZ2VzMltjdXJyZW50SW1hZ2VdO1xyXG4gIGltYWdlMy5zcmNzZXQgPSBpbWFnZXMzW2N1cnJlbnRJbWFnZV07XHJcbiAgdGV4dDEuaW5uZXJIVE1MID0gdGV4dHMxW2N1cnJlbnRJbWFnZV07XHJcbiAgdGV4dDIuaW5uZXJIVE1MID0gdGV4dHMyW2N1cnJlbnRJbWFnZV07XHJcbiAgdGV4dDMuaW5uZXJIVE1MID0gdGV4dHMzW2N1cnJlbnRJbWFnZV07XHJcbn1cclxuc2V0SW50ZXJ2YWwoY2hhbmdlSW1hZ2VzLCB0aW1lQ2hhbmdlKTtcclxuXHJcbi8vUk9PTVMgR0FMTEVSWSBTTElERVJcclxubGV0IHNsaWRlckltYWdlcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5yb29tcy1nYWxsZXJ5X19zbGlkZScpO1xyXG5sZXQgYXJyb3dSaWdodCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNhcnJvdy1yaWdodCcpO1xyXG5sZXQgYXJyb3dMZWZ0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2Fycm93LWxlZnQnKTtcclxubGV0IGN1cnJlbnQgPSAwO1xyXG5cclxuZnVuY3Rpb24gcmVzZXQoKSB7XHJcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBzbGlkZXJJbWFnZXMubGVuZ3RoOyBpKyspIHtcclxuICAgIHNsaWRlckltYWdlc1tpXS5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xyXG4gIH1cclxufVxyXG5cclxuZnVuY3Rpb24gc3RhcnRTbGlkZSgpIHtcclxuICByZXNldCgpO1xyXG4gIHNsaWRlckltYWdlc1swXS5zdHlsZS5kaXNwbGF5ID0gXCJibG9ja1wiO1xyXG59XHJcblxyXG5mdW5jdGlvbiBzbGlkZUxlZnQoKSB7XHJcbiAgcmVzZXQoKTtcclxuICBzbGlkZXJJbWFnZXNbY3VycmVudCAtIDFdLnN0eWxlLmRpc3BsYXkgPSBcImJsb2NrXCI7XHJcbiAgY3VycmVudC0tO1xyXG59XHJcblxyXG5mdW5jdGlvbiBzbGlkZVJpZ2h0KCkge1xyXG4gIHJlc2V0KCk7XHJcbiAgc2xpZGVySW1hZ2VzW2N1cnJlbnQgKyAxXS5zdHlsZS5kaXNwbGF5ID0gXCJibG9ja1wiO1xyXG4gIGN1cnJlbnQrKztcclxufVxyXG5hcnJvd0xlZnQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbiAoKSB7XHJcbiAgaWYgKGN1cnJlbnQgPT09IDApIHtcclxuICAgIGN1cnJlbnQgPSBzbGlkZXJJbWFnZXMubGVuZ3RoO1xyXG4gIH1cclxuICBzbGlkZUxlZnQoKTtcclxufSk7XHJcbmFycm93UmlnaHQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbiAoKSB7XHJcbiAgaWYgKGN1cnJlbnQgPT09IHNsaWRlckltYWdlcy5sZW5ndGggLSAxKSB7XHJcbiAgICBjdXJyZW50ID0gLTE7XHJcbiAgfVxyXG4gIHNsaWRlUmlnaHQoKTtcclxufSk7XHJcbnN0YXJ0U2xpZGUoKTtcclxuXHJcbi8vTU9EQUxcclxuY29uc3QgYnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmJ0bicpO1xyXG5jb25zdCBtb2RhbE91dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tb2RhbCcpO1xyXG5jb25zdCBtb2RhbEluID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1vZGFsX19pbm5lcicpO1xyXG5cclxuZnVuY3Rpb24gaGFuZGxlQnV0dG9uQ2xpY2soKSB7XHJcbiAgbW9kYWxPdXQuY2xhc3NMaXN0LmFkZCgnb3BlbicpO1xyXG59XHJcbmJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGhhbmRsZUJ1dHRvbkNsaWNrKTtcclxuXHJcbmZ1bmN0aW9uIGNsb3NlTW9kYWwoKSB7XHJcbiAgbW9kYWxPdXQuY2xhc3NMaXN0LnJlbW92ZSgnb3BlbicpO1xyXG59XHJcbm1vZGFsT3V0LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZSA9PiB7XHJcbiAgY29uc3QgaXNPcGVuID0gIWUudGFyZ2V0LmNsb3Nlc3QoJy5tb2RhbF9faW5uZXInKTtcclxuICBpZihpc09wZW4pIHtcclxuICAgIGNsb3NlTW9kYWwoKTtcclxuICB9XHJcbn0pO1xyXG53aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIGUgPT4ge1xyXG4gIGlmKGUua2V5ID09PSAnRXNjYXBlJykge1xyXG4gICAgY2xvc2VNb2RhbCgpO1xyXG4gIH1cclxufSk7Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///0\n")}]);