/**
 * Classe représentant une lightbox.
 * @param {Array} mediaArray - Tableau des médias.
 * @param {string} photographer - Nom du photographe.
 */
class lightBox {
  constructor(mediaArray, photographer) {
    /**
     * Nom du photographe.
     * @type {string}
     */
    this.photographer = photographer;

    /**
     * Tableau des médias.
     * @type {Array}
     */
    this.mediaArray = mediaArray;

    /**
     * Élément HTML représentant l'arrière-plan de la lightbox.
     * @type {HTMLElement}
     */
    this.lightboxBG = document.querySelector(".lightbox-Bg");

    /**
     * Élément HTML représentant la lightbox.
     * @type {HTMLElement}
     */
    this.lightbox = document.querySelector(".lightbox");

    /**
     * Élément HTML contenant les médias de la lightbox.
     * @type {HTMLElement}
     */
    this.lightboxMediaContainer = document.querySelector(".lightbox_media-Container");

    /**
     * Élément HTML représentant le bouton de fermeture de la lightbox.
     * @type {HTMLElement}
     */
    this.lightboxCloseBtn = document.querySelector(".lightbox_Close-btn");

    /**
     * Élément HTML représentant l'image du média suivant.
     * @type {HTMLImageElement}
     */
    this.nextMedia = document.createElement("img");
    this.nextMedia.classList.add("next");
    this.nextMedia.setAttribute("src", "assets/icons/LightboxArrow.svg");

    /**
     * Élément HTML représentant l'image du média précédent.
     * @type {HTMLImageElement}
     */
    this.prevMedia = document.createElement("img");
    this.prevMedia.classList.add("prev");
    this.prevMedia.setAttribute("src", "assets/icons/LightboxArrow.svg");

    this.lightbox.appendChild(this.prevMedia);
    this.lightbox.appendChild(this.nextMedia);

  }

  /**
   * Obtient l'indice du média courant dans le tableau des médias.
   * @returns {number} L'indice du média courant.
   */

  getMediaID() {
    const currentMedia = document.querySelector(".media-link.currentMedia");
    const mediaId = currentMedia.id;
    console.log("test mediaID", mediaId);
    return mediaId;
  }

  GetMediaIndex() {
    /**
     * Fonction interne pour obtenir l'ID du média courant.
     * @returns {string} L'ID du média courant.
     */


    const currentMediaId = this.getMediaID();
    let MediaIndex = this.mediaArray.findIndex((media) => media.id == currentMediaId);
    return MediaIndex;
  }

  /**
   * Ouvre la lightbox.
   */
  open() {
    /// ////////////////////Event listener///////////////////////////
    if (this.lightboxBG) {
      // Écouteur d'événement pour fermer la lightbox
      this.lightboxCloseBtn.addEventListener("click", this.close.bind(this));
      this.lightboxCloseBtn.setAttribute("tabindex", "0");
      this.lightboxCloseBtn.addEventListener("keydown", (e) => {
        if (e.key === "Enter" || e.key === 13) {
          this.close.bind(this);
        }
      });
      document.addEventListener(
        "keydown",
        (e) => {
          if (e.key === "Escape" || e.key === 27) {
            this.close();
          }
        },
        { passive: true }
      );

      document.addEventListener("click", (e) => {
        if (e.target === this.lightboxBG && e.target !== this.lightbox) {
          this.close();
        }
      });

      //Écouteurs d'événements pour les flèches gauche et droite
      this.prevMedia.addEventListener("click", this.switchToPreviousMedia.bind(this));
      this.nextMedia.addEventListener("click", this.switchToNextMedia.bind(this));

      document.addEventListener("keydown", (e) => {
        if (e.key === "ArrowLeft" || e.key === 37) {
          this.switchToPreviousMedia();
        }
        if (e.key === "ArrowRight" || e.key === 39) {
          this.switchToNextMedia();
        }
      });
    


    const body = document.getElementById("main-photographer");
    body.setAttribute("aria-hidden", "true"); // Cache le body
    this.lightboxBG.classList.remove("hidden"); // Affiche la lightbox
    this.lightboxBG.classList.add("visible");
    this.lightboxBG.setAttribute("aria-hidden", "false");
    this.GetMedia()



  }}

  /**
   * Ferme la lightbox.
   */
  close() {
    const body = document.getElementById("main-photographer");
    const lightboxMedia = document.getElementsByClassName('LightboxIn')
    const currentMedia = document.querySelector(".currentMedia");
    this.lightboxMediaContainer.innerHTML = "";
    this.lightboxBG.classList.remove("visible"); // Affiche la lightbox
    this.lightboxBG.classList.add("hidden");
    this.lightboxBG.setAttribute("aria-hidden", "true");
    body.setAttribute("aria-hidden", "false"); // Cache le body
    lightboxMedia.innerHTML = '';
    currentMedia.classList.remove("currentMedia");
  }


  GetMedia() {
    const MediaIndex = this.GetMediaIndex();

    const MediaTitle = this.mediaArray[MediaIndex].title;
    const TitleBlock = document.createElement("figcaption");
    TitleBlock.classList.add("LightboxInTitle");
    TitleBlock.innerHTML = MediaTitle;
   
   
    const MediaSrc = this.getMediaSrc();
    const balise = this.getMediaType()
    console.log(balise)
    balise.classList.add("LightboxIn");
    balise.setAttribute("src", `./assets/images/${this.photographer}/${MediaSrc}`);
    balise.setAttribute("alt", `${MediaTitle}`);
    this.lightboxMediaContainer.appendChild(balise)
    this.lightboxMediaContainer.appendChild(TitleBlock)
  }

  getMediaSrc() {
    const MediaIndex = this.GetMediaIndex();

    if (this.mediaArray[MediaIndex].image) {
      const MediaSrc = this.mediaArray[MediaIndex].image;
      return MediaSrc
    } 
    if (this.mediaArray[MediaIndex].video){
      const MediaSrc = this.mediaArray[MediaIndex].video;
      return MediaSrc
    }
  }


    getMediaType(){
      

      if (this.GetMediaIndex)
        if (this.getMediaSrc() === this.mediaArray[this.GetMediaIndex()].image) {
          const balise = document.createElement('img')
          
          return balise
        } else {
          const balise = document.createElement('video')
          balise.setAttribute("controls", "true")

          return balise
        }
    }

    UpdateMedia(){

    }
    /**
     * Passe au média suivant.
     */
    switchToNextMedia() {
      let position = this.GetMediaIndex();
      position += 1
      if (position >= this.mediaArray.lenght) {
        this.nextMedia.classList.add('hidden')
      } else {
        balise
        console.log("next", position);
      }
    }

    /**
     * Passe au média précédent.
     */
    switchToPreviousMedia() {
      let position = this.GetMediaIndex();
      console.log("Prev", position);
    }
  }

export { lightBox };
