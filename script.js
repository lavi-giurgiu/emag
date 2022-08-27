const secondHeader = document.querySelector('.second-header')
secondHeader.style.display = 'block'

let isVisible = false;

document.addEventListener('scroll', function(event) {
  const el = event.target.documentElement

  if (el.scrollTop > 700 && isVisible === false) {
    secondHeader.classList.add('visible')
    isVisible = true
  }

  if (el.scrollTop <= 700 && isVisible === true) {
    secondHeader.classList.remove('visible')
    isVisible = false
  }
})

const sliderImages = document.querySelector('.slider-images')
const sliderControls = document.querySelector('.slider-controls')
console.log(sliderImages.clientWidth)

for (let i = 0; i < sliderImages.childElementCount; i++) {
  const span = document.createElement('span')
  span.classList.add('control-item')

  if (i===0) {
    span.classList.add('active')
  }

  span.onclick = function () {
    const activeSpan = document.querySelector('.control-item.active')

    if (activeSpan) {
      activeSpan.classList.remove('active')
    }
    this.classList.add('active')
    
    const width = sliderImages.clientWidth
    sliderImages.style.marginLeft = `-${i * width}px`
  }

  sliderControls.appendChild(span)
}