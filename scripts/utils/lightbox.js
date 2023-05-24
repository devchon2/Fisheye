class LightBox {
  constructor(mediaArray, photographer) {
    this.photographer = photographer;
    this.mediaArray = mediaArray;
    this.lightboxBG = document.querySelector(".lightbox-Bg");
    this.lightbox = document.querySelector(".lightbox");
    this.lightboxMediaContainer = document.querySelector(".lightbox_media-Container");
    this.lightboxCloseBtn = document.querySelector(".lightbox_Close-btn");
    this.nextMedia = document.createElement("img");
    this.nextMedia.classList.add("next");
    this.nextMedia.setAttribute("src", "assets/icons/LightboxArrow.svg");
    this.prevMedia = document.createElement("img");
    this.prevMedia.classList.add("prev");
    this.prevMedia.setAttribute("src", "assets/icons/LightboxArrow.svg");
    this.lightbox.appendChild(this.prevMedia);
    this.lightbox.appendChild(this.nextMedia);
    this.currentMediaIndex = this.getCurrentMediaPosition()
  }

  getCurrentMediaId() {
    const currentMedia = document.querySelector(".media-link.currentMedia");
    return currentMedia ? currentMedia.id : null;
  }

  getCurrentMediaPosition() {
    const currentMediaId = this.getCurrentMediaId();
    return this.mediaArray.findIndex((media) => media.id == currentMediaId);
  }

  getMedia(index) {
    const position = index;
    this.lightboxMediaContainer.innerHTML = "";

    if (position >= 0 && position < this.mediaArray.length) {
      const mediaTitle = this.mediaArray[position].title;
      const titleBlock = document.createElement("figcaption");
      titleBlock.classList.add("LightboxInTitle");
      titleBlock.innerHTML = mediaTitle;

      const mediaSrc = this.getMediaSrc(position);
      const mediaElement = this.getMediaType(position);
      mediaElement.classList.add("LightboxIn");
      mediaElement.setAttribute("src", `./assets/images/${this.photographer}/${mediaSrc}`);
      mediaElement.setAttribute("alt", mediaTitle);

      this.lightboxMediaContainer.appendChild(mediaElement);
      this.lightboxMediaContainer.appendChild(titleBlock);
    }
  }

  getMediaSrc(index) {
    const position = index;
    if (this.mediaArray[position].image) {
      return this.mediaArray[position].image;
    } else if (this.mediaArray[position].video) {
      return this.mediaArray[position].video;
    }
    return "";
  }

  getMediaType(index) {
    const position = index;
    if (this.getMediaSrc(position) === this.mediaArray[position].image) {
      return document.createElement("img");
    } else {
      const videoElement = document.createElement("video");
      videoElement.setAttribute("controls", "true");
      return videoElement;
    }
  }

  getMediaUpdate(index) {
    this.lightboxMediaContainer.innerHTML = ""
    this.getMedia(index)
  }

  open() {
    if (this.lightboxBG) {
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
    }

    const body = document.getElementById("main-photographer");
    body.setAttribute("aria-hidden", "true");
    this.lightboxBG.classList.remove("hidden");
    this.lightboxBG.classList.add("visible");
    this.lightboxBG.setAttribute("aria-hidden", "false");
    this.getMedia(this.currentMediaIndex);

  }

  close() {

    this.currentMediaIndex = this.getCurrentMediaPosition()
    const currentMedia = document.querySelector(".media-link.currentMedia");
    if(currentMedia){
      currentMedia.classList.remove('currentMedia')
    }
    this.lightboxMediaContainer.innerHTML=""
    const body = document.getElementById("main-photographer");
    this.lightboxMediaContainer.innerHTML = "";
    this.lightboxBG.classList.remove("visible");
    this.lightboxBG.classList.add("hidden");
    this.lightboxBG.setAttribute("aria-hidden", "true");
    body.setAttribute("aria-hidden", "false");
  }

  switchToNextMedia() {
    const currentMediaPosition = this.currentMediaIndex
    const Nextposition = currentMediaPosition + 1;
    
    if (Nextposition < this.mediaArray.length) {
      this.prevMedia.classList.remove('hidden')
      this.currentMediaIndex = Nextposition
      this.getMediaUpdate(this.currentMediaIndex)
  
      if (this.currentMediaIndex == this.mediaArray.length - 1) {
        this.nextMedia.classList.add('hidden')
      }
    }
  }
  

  switchToPreviousMedia() {
    const currentMediaPosition = this.currentMediaIndex
    const Prevposition = currentMediaPosition - 1;
  
    if (Prevposition >= 0) {
      this.nextMedia.classList.remove('hidden')
      this.currentMediaIndex = Prevposition
      this.getMediaUpdate(this.currentMediaIndex)
  
      if (this.currentMediaIndex == 0) {
        this.prevMedia.classList.add('hidden') 
      }
    }
  }
}


    export { LightBox };
