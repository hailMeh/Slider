var slider1 = sliderFactory.addNewSlider();
var slider2 = sliderFactory.addNewSlider();
slider1.start("mySlider1");
slider2.start("mySlider2");
// get elements by id
// var prevSlideButtonEl = document.getElementById("prevSlideButton");
// var nextSlideButtonEl = document.getElementById("nextSlideButton");
// var showSrcEl = document.getElementById("mainSrcWindow");
// add listeners for click
// prevSlideButtonEl.addEventListener("click", prevSlideClick);
// nextSlideButtonEl.addEventListener("click", nextSlideClick);

//make array of pictures
// var imageSrc = [];
// imageSrc.push("/img/doroga.jpg");
// imageSrc.push("/img/coffee.jpg");
// imageSrc.push("/img/papo.jpg");
// imageSrc.push("/img/prichal.jpg");

//make current index of picture with blocked previous button
// var indexOfPicture = 0;
// showSrcEl.src = imageSrc[indexOfPicture];
// prevSlideButtonEl.disabled = true;

//functions for clicking with blocked/active buttons
// function prevSlideClick() {
//   indexOfPicture--;
//   showSrcEl.src = imageSrc[indexOfPicture];
//   nextSlideButtonEl.disabled = false;
//   if (indexOfPicture === 0) {
//     prevSlideButtonEl.disabled = true;
//   }
// }

// function nextSlideClick() {
//   indexOfPicture++;
//   showSrcEl.src = imageSrc[indexOfPicture];
//   prevSlideButtonEl.disabled = false;
//   if (indexOfPicture === imageSrc.length - 1) {
//     nextSlideButtonEl.disabled = true;
//   }
// }
//setInterval(nextSlideClick, 1500);
// console.log(building.color);
// building.changeColor();
// console.log(building.color);
