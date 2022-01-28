function startModal(modalID) {
  const modal = document.getElementById(modalID)
  

  if(modal) {
      modal.classList.add('modal-toggle')

      modal.addEventListener('click', (event) => {
          if(event.target.id === "modal-portfolio" || event.target.className === "close") {
              modal.classList.remove('modal-toggle')
          }
      })
  }
 
}

const portImg = document.querySelectorAll('.bg_portfolio');

portImg.forEach((img) => {
  img.addEventListener('click', () => {
    startModal('modal-portfolio')
  })
})
