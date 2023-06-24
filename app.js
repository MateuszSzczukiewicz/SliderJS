const leftButton = document.querySelector('.slider__left-button');
const rightButton = document.querySelector('.slider__right-button');
const slider = document.querySelector('.slider');

const img1 = "img/img1.jpg"
const img2 = "img/img2.jpg"
const img3 = "img/img3.jpg"
const img4 = "img/img4.jpg"
const img5 = "img/img5.jpg"

const images = [img1, img2, img3, img4, img5]

const nextSlide = () => {
    let index = images.indexOf(slider.style.backgroundImage) + 1
    if (index > images.length - 1) {
        index = images.length - 1
    }

slider.style.backgroundImage = `url(${images[index]})`
    console.log(`url(${images[index]})`)
}

const prevSlide = () => {
    let index = images.indexOf(slider.style.backgroundImage) - 1;
    if (index < 0) {
        index = 0;
    }
    slider.style.backgroundImage = `url(${images[index]})`
    console.log(`url(${images[index]})`)
}

rightButton.addEventListener('click', nextSlide)

leftButton.addEventListener('click', prevSlide)