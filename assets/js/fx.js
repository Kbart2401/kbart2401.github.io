document.addEventListener('DOMContentLoaded', () => {
  const checkPosition = () => {
    const pic = document.querySelector('.kid-pic-container')
    const widowHeight = window.innerHeight
    const positionFromTop = pic.getBoundingClientRect().top
    if (positionFromTop <= widowHeight) {
      pic.classList.add('fade-in')
    }
  }
  window.addEventListener('scroll', checkPosition)

})
