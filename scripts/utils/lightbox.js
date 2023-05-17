/* eslint-disable linebreak-style */
/* eslint-disable no-console */
/* eslint-disable linebreak-style */
const Body = document.querySelector('#main-photographer')
const lightboxBG = document.querySelector('.lightbox-Bg')

const lightbox = document.querySelector('.lightbox') // ;
const lightboxMediaContainer = document.querySelector('.lightbox_media-Container')
const lightboxMediaSlider = document.querySelector('.lightbox_media-slider')
const lightboxCloseBtn = document.querySelector('.lightbox_Close-btn')
const lightboxArrowLeft = document.querySelector('.next-Btn')
const lightboxArrowRight = document.querySelector('.prev-Btn')

function switchToNextMedia () {
  console.log('next')
}

function switchToPreviousMedia () {
  console.log('previous')
}

// Fonction pour ouvrir la lightbox
function openLightBox () {
  Body.setAttribute('aria-hidden', 'true') // Cache le body
  lightboxBG.classList.remove('hidden') // Affiche la lightbox
  lightboxBG.classList.add('visible')
  lightboxBG.setAttribute('aria-hidden', 'false')

  /// ////////////////////Event listener///////////////////////////

  // Écouteur d'événement pour fermer la lightbox
  lightboxCloseBtn.addEventListener('click', closeLightBox)
  lightboxCloseBtn.setAttribute('tabindex', '0')
  lightboxCloseBtn.addEventListener('keydown', (e) => {
    if (e.key === 'Enter' || e.key === 13) {
      closeLightBox()
    }
  })
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' || e.key === 27) {
      closeLightBox()
    }
  }, { passive: true })

  document.addEventListener('click', (e) => {
    if (e.target === lightboxBG && e.target !== lightbox) {
      closeLightBox()
    }
  })

  // Écouteurs d'événements pour les flèches gauche et droite
  lightboxArrowLeft.addEventListener('click', () => {
    switchToPreviousMedia()
  }, { passive: true })

  lightboxArrowRight.addEventListener('click', () => {
    switchToNextMedia()
  }, { passive: true })

  document.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowLeft' || e.key === 37) {
      switchToPreviousMedia()
    }
    if (e.key === 'ArrowRight' || e.key === 39) {
      switchToNextMedia()
    }
  })
}

// Fonction clos lightbox
function closeLightBox () {
  Body.setAttribute('aria-hidden', 'false') // Cache le body
  lightboxBG.classList.remove('visible') // Affiche la lightbox
  lightboxBG.classList.add('hidden')
  lightboxBG.setAttribute('aria-hidden', 'true')
}

export {
  openLightBox,
  closeLightBox,
  lightboxCloseBtn,
  lightboxBG,
  lightbox,
  lightboxMediaContainer,
  lightboxMediaSlider
}
