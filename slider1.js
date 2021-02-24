var sliderFactory = {
  addNewSlider: function () {
    var slider = {
      prevSlideButtonEl: null,
      nextSlideButtonEl: null,
      showSrcEl: null,
      imageSrc: [],
      indexOfPicture: 0,

      start: function (idElement) {
        var that = this;

        var elementSelector = "#" + idElement;
        var el = document.querySelector(elementSelector);
        this.prevSlideButtonEl = el.querySelector(".prevSlideButtonClass");
        this.nextSlideButtonEl = el.querySelector(".nextSlideButtonClass");
        this.showSrcEl = el.querySelector(".mainSrcWindowClass");

        this.prevSlideButtonEl.addEventListener("click", function (event) {
          that.prevSlideClick(event);
        });
        this.nextSlideButtonEl.addEventListener("click", function (event) {
          that.nextSlideClick(event);
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
  },
};
