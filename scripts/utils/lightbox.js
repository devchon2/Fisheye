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
    this.currentMediaIndex = this.getCurrentMediaindex()
    this.prevMediaIndex = this.currentMediaIndex - 1
    this.nextMediaIndex = this.currentMediaIndex + 1
    
  }

  getCurrentMediaId() {
    const currentMedia = document.querySelector(".media-link.currentMedia");
    return currentMedia ? currentMedia.id : null;
  }

  setCurrentMediaIndex(id) {
    if (this.getCurrentMediaId()) {
      const currentMedia = document.querySelector(".currentMedia");
      currentMedia.classList.remove("currentMedia");
    }
    const currentMedia = document.getElementById(id);
    if (currentMedia) {
      currentMedia.classList.add("currentMedia");
    }
    return currentMedia;
  }


  getCurrentMediaindex() {
    const currentMediaId = this.getCurrentMediaId();
    return this.mediaArray.findIndex((media) => media.id == currentMediaId);
  }

  getMedia(index) {
    this.lightboxMediaContainer.innerHTML = "";

    if (index >= 0 && index < this.mediaArray.length) {
      const mediaTitle = this.mediaArray[index].title;
      const titleBlock = document.createElement("figcaption");
      titleBlock.classList.add("LightboxInTitle");
      titleBlock.innerHTML = mediaTitle;

      const mediaSrc = this.getMediaSrc(index);
      const mediaElement = this.getMediaType(index);
      mediaElement.classList.add("LightboxIn");
      mediaElement.setAttribute("src", `./assets/images/${this.photographer}/${mediaSrc}`);
      mediaElement.setAttribute("alt", mediaTitle);
      
      this.lightboxMediaContainer.appendChild(mediaElement);
      this.lightboxMediaContainer.appendChild(titleBlock);
    }
    this.setCurrentMediaIndex(this.mediaArray[index].id);
    if (this.currentMediaIndex == 0){
      this.prevMedia.style.display = "none"
    } else {
      this.prevMedia.style.display = "flex"
    }
    if (this.currentMediaIndex == this.mediaArray.length -1 ){
      this.nextMedia.style.display ="none"
    } else{
      this.nextMedia.style.display = "flex"
    }
  }

  getMediaSrc(index) {
    if (this.mediaArray[index].image) {
      return this.mediaArray[index].image;
    } else if (this.mediaArray[index].video) {
      return this.mediaArray[index].video;
    }
    return "";
  }

  getMediaType(index) {
    if (this.getMediaSrc(index) === this.mediaArray[index].image) {
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
    
    if (this.currentMediaIndex == 0 && this.prevMedia.style.display == "flex"){
      this.prevMedia.style.display =="none"
    }

    if (this.currentMediaIndex === this.mediaArray.length -1 && this.nextMedia.style.display == "flex"){
      this.nextMedia.style.display = "none"
    }
    console.log(this.currentMediaIndex)
    
    const body = document.getElementById("main-photographer");
    body.setAttribute("aria-hidden", "true");
    this.lightboxBG.classList.remove("hidden");
    this.lightboxBG.classList.add("visible");
    this.lightboxBG.setAttribute("aria-hidden", "false");
    this.getMedia(this.currentMediaIndex);


  }

  close() {
    const currentMedia = document.querySelector(".currentMedia");
    
    if (this.lightboxBG) {
      this.lightboxCloseBtn.removeEventListener("click", this.close.bind(this));
      
      this.lightboxCloseBtn.removeEventListener("keydown", (e) => {
        if (e.key === "Enter" || e.key === 13) {
          this.close.bind(this);
        }
      });
      document.removeEventListener(
        "keydown",
        (e) => {
          if (e.key === "Escape" || e.key === 27) {
            this.close();
          }
        },
        { passive: true }
      );

      document.removeEventListener("click", (e) => {
        if (e.target === this.lightboxBG && e.target !== this.lightbox) {
          this.close();
        }
      });

      this.prevMedia.removeEventListener("click", this.switchToPreviousMedia.bind(this));
      this.nextMedia.removeEventListener("click", this.switchToNextMedia.bind(this));

      document.removeEventListener("keydown", (e) => {
        if (e.key === "ArrowLeft" || e.key === 37) {
          this.switchToPreviousMedia();
        }
        if (e.key === "ArrowRight" || e.key === 39) {
          this.switchToNextMedia();
        }
      });
    }

    currentMedia.classList.remove('currentMedia')

    
    
    
    
    const body = document.getElementById("main-photographer");
    this.lightboxMediaContainer.innerHTML = "";
    this.lightboxBG.classList.remove("visible");
    this.lightboxBG.classList.add("hidden");
    this.lightboxBG.setAttribute("aria-hidden", "true");
    body.setAttribute("aria-hidden", "false");
    this.currentMediaIndex = this.getCurrentMediaindex(this.getCurrentMediaId());

  }

  switchToNextMedia() {
    const currentMediaindex = this.currentMediaIndex
    const Nextindex = currentMediaindex + 1;
    
    this.currentMediaIndex = Nextindex
    this.getMediaUpdate(this.currentMediaIndex)
    
  }


  switchToPreviousMedia() {
    const currentMediaindex = this.currentMediaIndex
    const Previndex = currentMediaindex - 1;
    
    this.currentMediaIndex = Previndex;

    this.getMediaUpdate(this.currentMediaIndex)
    
  }


}

export { LightBox };
