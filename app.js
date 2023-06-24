const leftButton = document.querySelector('.slider__left-button');
const rightButton = document.querySelector('.slider__right-button');
const slider = document.querySelector('.slider');
const caption = document.querySelector('.slider__caption');

const img1 = "img/img1.jpg"
const img2 = "img/img2.jpg"
const img3 = "img/img3.jpg"
const img4 = "img/img4.jpg"
const img5 = "img/img5.jpg"

const images = [img1, img2, img3, img4, img5]
let index = 0;
caption.innerText = `${index + 1}/${images.length}`
leftButton.style.opacity = '0.5'
leftButton.style.pointerEvents = 'none'

const buttonBlock = () => {
    if (index === 0) {
        leftButton.style.opacity = '0.5'
        leftButton.style.pointerEvents = 'none'
    } else if (index === images.length - 1) {
        rightButton.style.opacity = '0.5'
        rightButton.style.pointerEvents = 'none'
    } else {
        leftButton.style.opacity = '1'
        leftButton.style.pointerEvents = 'auto'
        rightButton.style.opacity = '1'
        rightButton.style.pointerEvents = 'auto'
    }
}

const nextSlide = () => {
    index++;
    if (index > images.length - 1) {
        index = images.length - 1
    }

    slider.style.backgroundImage = `url(${images[index]})`
    caption.innerText = `${index + 1}/${images.length}`
    buttonBlock()
}

const prevSlide = () => {
    index--
    if (index < 0) {
        index = 0;
    }
    slider.style.backgroundImage = `url(${images[index]})`
    caption.innerText = `${index + 1}/${images.length}`
    buttonBlock()
}

rightButton.addEventListener('click', nextSlide)
leftButton.addEventListener('click', prevSlide)
document.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowRight') {
        nextSlide()
    } else if (e.key === 'ArrowLeft') {
        prevSlide()
    }
})