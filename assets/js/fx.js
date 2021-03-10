window.addEventListener('DOMContentLoaded', () => {

  let state = false

  document.querySelectorAll('.image').forEach((div) => {
    div.addEventListener('mouseover', (e) => {
      if (state === false) {
        let message = document.createElement('div')
        div.appendChild(message)
        message.innerHTML = 'Visit Live Site'
        state = true
      } else {
        e.target.innerHTML = ''
        state = false
      }
    })

  })
})