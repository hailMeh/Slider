var slider2 = {
  prevSlideButtonEl: document.getElementById("prevSlideButton"),
  nextSlideButtonEl: document.getElementById("nextSlideButton"),
  showSrcEl: document.getElementById("mainSrcWindow"),
  imageSrc: [],
  indexOfPicture: 0,

  start: function () {
    var that = this;
    this.prevSlideButtonEl.addEventListener("click", function (e) {
      that.prevSlideClick(e);
    });
    this.nextSlideButtonEl.addEventListener("click", function (e) {
      that.nextSlideClick(e);
    });
    this.imageSrc.push("/img/doroga.jpg");
    this.imageSrc.push("/img/coffee.jpg");
    this.imageSrc.push("/img/papo.jpg");
    this.imageSrc.push("/img/prichal.jpg");
    this.showSrcEl.src = this.imageSrc[this.indexOfPicture];
    this.prevSlideButtonEl.disabled = true;
  },

  prevSlideClick: function (event) {
    this.indexOfPicture--;
    this.showSrcEl.src = this.imageSrc[this.indexOfPicture];
    this.nextSlideButtonEl.disabled = false;
    if (this.indexOfPicture === 0) {
      this.prevSlideButtonEl.disabled = true;
    }
  },
  nextSlideClick: function (event) {
    this.indexOfPicture++;
    this.showSrcEl.src = this.imageSrc[this.indexOfPicture];
    this.prevSlideButtonEl.disabled = false;
    if (this.indexOfPicture === this.imageSrc.length - 1) {
      this.nextSlideButtonEl.disabled = true;
    }
  },
};
