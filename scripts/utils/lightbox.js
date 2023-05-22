

/**
 * @param {number} - Id du media courant
 * @param {Array} - Tableaux des médias
 */

class lightBox {
  constructor(mediaArray,photographer) {

    this.photographer = photographer
    this.mediaArray = mediaArray
    this.lightboxBG = document.querySelector('.lightbox-Bg')
    this.lightbox = document.querySelector('.lightbox')
    this.lightboxMediaContainer = document.querySelector('.lightbox_media-Container')
    this.lightboxCloseBtn = document.querySelector('.lightbox_Close-btn')
    this.nextMedia = document.createElement('img')
    this.nextMedia.classList.add('next')
    this.nextMedia.setAttribute("src", "/assets/icons/LightboxArrow.svg")
    this.prevMedia = document.createElement('img')
    this.prevMedia.classList.add('prev')
    this.prevMedia.setAttribute("src", "/assets/icons/LightboxArrow.svg")
    this.lightbox.appendChild(this.prevMedia)
    this.lightbox.appendChild(this.nextMedia)
  }




  open() {

    /// ////////////////////Event listener///////////////////////////
    if (this.lightboxBG) {
      // Écouteur d'événement pour fermer la lightbox
      this.lightboxCloseBtn.addEventListener('click', this.close.bind(this))
      this.lightboxCloseBtn.setAttribute('tabindex', '0')
      this.lightboxCloseBtn.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' || e.key === 13) {
          this.close.bind(this)
        }
      })
      document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' || e.key === 27) {
          this.close()
        }
      }, { passive: true })

      document.addEventListener('click', (e) => {
        if (e.target === this.lightboxBG && e.target !== this.lightbox) {
          this.close()
        }
      })

      //Écouteurs d'événements pour les flèches gauche et droite
      this.prevMedia.addEventListener('click', this.switchToPreviousMedia.bind(this))
      this.nextMedia.addEventListener('click', this.switchToNextMedia.bind(this))


      document.addEventListener('keydown', (e) => {
        if (e.key === 'ArrowLeft' || e.key === 37) {
          this.switchToNextMedia()
        }
        if (e.key === 'ArrowRight' || e.key === 39) {
          this.switchToPreviousMedia()
        }
      })
    }
    function getMediaID() {

      const currentMedia = document.querySelector('.media-link.currentMedia')
      const mediaId = currentMedia.id
      console.log("test mediaID", mediaId)
      return mediaId
    }


    //Index du media
    const currentMediaId = getMediaID()
    
    const MediaIndex = this.mediaArray.findIndex(media => media.id == currentMediaId)
    const MediaSrc = this.mediaArray[MediaIndex].image || this.mediaArray[MediaIndex].video
    const MediaTitle = this.mediaArray[MediaIndex].title
    const MediaLikes = this.mediaArray[MediaIndex].likes
   




   
    const body = document.getElementById('main-photographer')

    const TitleBlock=document.createElement('figcaption')
    TitleBlock.classList.add('LightboxInTitle')
    TitleBlock.innerHTML = MediaTitle
    
   

    
    







    if (MediaSrc === this.mediaArray[MediaIndex].image){
      const balise = document.createElement('img')
      balise.classList.add('LightboxIn')
      balise.setAttribute('src', `./assets/images/${this.photographer}/${MediaSrc}`)
      balise.setAttribute('alt', `${MediaTitle}`)
      this.lightboxMediaContainer.appendChild(balise)
      this.lightboxMediaContainer.appendChild(TitleBlock)
      
    } else{
      
        const balise = document.createElement('video')
        balise.classList.add('LightboxIn')
        balise.setAttribute('src', `./assets/images/${this.photographer}/${MediaSrc}`)
        balise.setAttribute('alt', `${MediaTitle}`)
        balise.setAttribute('controls', 'true')
        this.lightboxMediaContainer.appendChild(balise)
        this.lightboxMediaContainer.appendChild(TitleBlock)

    }


    body.setAttribute('aria-hidden', 'true') // Cache le body
    this.lightboxBG.classList.remove('hidden') // Affiche la lightbox
    this.lightboxBG.classList.add('visible')
    this.lightboxBG.setAttribute('aria-hidden', 'false')
    
    
  }

  close() {
    const body = document.getElementById('main-photographer')
    const currentMedia = document.querySelector('.media-link.currentMedia')


    this.lightboxMediaContainer.innerHTML =""
    this.lightboxBG.classList.remove('visible') // Affiche la lightbox
    this.lightboxBG.classList.add('hidden')
    this.lightboxBG.setAttribute('aria-hidden', 'true')
    body.setAttribute('aria-hidden', 'false') // Cache le body
    currentMedia.classList.remove('currentMedia')

  }

  switchToNextMedia() {
    console.log('next')
  }

  switchToPreviousMedia() {
    console.log('previous')
  }





}

export { lightBox }