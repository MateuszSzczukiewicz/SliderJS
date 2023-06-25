class Slider {
  constructor() {
    this.leftButton = document.getElementById("slider-button-left");
    this.rightButton = document.getElementById("slider-button-right");
    this.slider = document.getElementById("slider");
    this.caption = document.getElementById("slider-caption");

    this.images = [
      "img/img1.jpg",
      "img/img2.jpg",
      "img/img3.jpg",
      "img/img4.jpg",
      "img/img5.jpg",
    ];
    this.index = 0;

    this.caption.innerText = `${this.index + 1}/${this.images.length}`;
    this.leftButton.style.opacity = "0.5";
    this.leftButton.style.pointerEvents = "none";

    this.leftButton.addEventListener("click", () => this.prevSlide());
    this.rightButton.addEventListener("click", () => this.nextSlide());
    document.addEventListener("keydown", (e) => this.handleKeyDown(e));
  }

  buttonBlock() {
    const isLeftButtonDisabled = this.index === 0;
    const isRightButtonDisabled = this.index === this.images.length - 1;

    this.leftButton.style.opacity = isLeftButtonDisabled ? "0.5" : "1";
    this.leftButton.style.pointerEvents = isLeftButtonDisabled
      ? "none"
      : "auto";
    this.rightButton.style.opacity = isRightButtonDisabled ? "0.5" : "1";
    this.rightButton.style.pointerEvents = isRightButtonDisabled
      ? "none"
      : "auto";
  }

  updateSlide() {
    this.slider.style.backgroundImage = `url(${this.images[this.index]})`;
    this.caption.innerText = `${this.index + 1}/${this.images.length}`;
    this.buttonBlock();
  }

  prevSlide() {
    this.index = Math.max(this.index - 1, 0);
    this.updateSlide();
  }

  nextSlide() {
    this.index = Math.min(this.index + 1, this.images.length - 1);
    this.updateSlide();
  }

  handleKeyDown(e) {
    if (e.key === "ArrowLeft") {
      this.prevSlide();
    } else if (e.key === "ArrowRight") {
      this.nextSlide();
    }
  }
}

const slider = new Slider();
