/* eslint-disable linebreak-style */
/* eslint-disable max-classes-per-file */

/**
 * Classe représentant un média.
 */
class Media {
  /**
   * Crée une instance de la classe Media.
   * @param {number} id - L'ID du média.
   * @param {string} title - Le titre du média.
   * @param {number} likes - Le nombre de likes du média.
   * @param {string} date - La date du média.
   */
  constructor(id, title, likes, date) {
    this.id = id;
    this.title = title;
    this.likes = likes;
    this.date = date;
  }

  /**
   * Obtient l'ID du média.
   * @returns {number} L'ID du média.
   */
  getMediaId() {
    return this.id;
  }
}

/**
 * Classe représentant une image.
 */
class Image extends Media {
  /**
   * Crée une instance de la classe Image.
   * @param {number} id - L'ID de l'image.
   * @param {string} title - Le titre de l'image.
   * @param {number} likes - Le nombre de likes de l'image.
   * @param {string} date - La date de l'image.
   * @param {string} image - Le nom du fichier image.
   */
  constructor(id, title, likes, date, image) {
    super(id, title, likes, date);
    this.image = image;
  }

  /**
   * Obtient le DOM de la carte du média.
   * @param {string} name - Le nom du photographe.
   * @returns {HTMLElement} L'élément HTML représentant la carte du média.
   */
  get_Media_Card_DOM(name) {
    const path = `./assets/images/${name}/${this.image}`;

    // Création des éléments du DOM
    const mediaCard = document.createElement('article');
    mediaCard.classList.add('media-card');

    // Création du lien du container
    const mediaLink = document.createElement('a');
    mediaLink.classList.add('media-link');
    mediaLink.setAttribute('aria-label', `${this.title}, vue rapprochée`);
    mediaLink.id = this.id;

    // Création du container du media
    const imgContainer = document.createElement('div');
    imgContainer.classList.add('media-container');

    // Création de l'image
    const img = document.createElement('img');
    img.classList.add('media');
    img.setAttribute('src', path);
    img.setAttribute('alt', `${this.title}`);

    // Création des infos du media
    const MediasInfos = document.createElement('div');
    MediasInfos.classList.add('media-infos');

    // Création du titre du media
    const mediaTitle = document.createElement('h2');
    mediaTitle.classList.add('media-title');
    mediaTitle.textContent = this.title;

    // Création du nombre de likes du media
    const mediaLikes = document.createElement('p');
    mediaLikes.classList.add('media-likes');
    mediaLikes.innerHTML = `${this.likes} <i class="far fa-heart"></i>`;

    // Ajout des éléments au DOM
    mediaLink.appendChild(mediaCard);
    mediaCard.appendChild(imgContainer);
    MediasInfos.appendChild(mediaTitle);
    MediasInfos.appendChild(mediaLikes);
    mediaCard.appendChild(MediasInfos);
    imgContainer.appendChild(img);
    mediaCard.appendChild(MediasInfos);

    return mediaLink;
  }

  /**
   * Obtient le DOM du média dans la lightbox.
   * @param {string} name - Le nom du photographe.
   * @returns {HTMLElement} L'élément HTML représentant le média dans la lightbox.
   */
  get_Media_Lightbox_DOM(name) {
    const path = `./assets/images/${name}/${this.image}`;

    // Création des éléments du DOM
    const lightboxMediaCard = document.createElement('figure');
    lightboxMediaCard.classList.add('lightbox_media-card');

    const lightboxMedia = document.createElement('img');
    lightboxMedia.classList.add('media');
    lightboxMedia.setAttribute('src', path);
    lightboxMedia.setAttribute('aria-label', `${this.title}, vue rapprochée`);
    lightboxMedia.id = this.id;

    // Création du titre du media
    const h2Container = document.createElement('figcaption');
    const lightboxMediaTitle = document.createElement('h2');
    lightboxMediaTitle.classList.add('media-title');
    lightboxMediaTitle.textContent = this.title;
    h2Container.appendChild(lightboxMediaTitle);

    // Ajout des éléments au DOM
    lightboxMediaCard.appendChild(lightboxMedia);
    lightboxMediaCard.appendChild(h2Container);

    return lightboxMediaCard;
  }
}

/**
 * Classe représentant une vidéo.
 */
class Video extends Media {
  /**
   * Crée une instance de la classe Video.
   * @param {number} id - L'ID de la vidéo.
   * @param {string} title - Le titre de la vidéo.
   * @param {number} likes - Le nombre de likes de la vidéo.
   * @param {string} date - La date de la vidéo.
   * @param {string} video - Le nom du fichier vidéo.
   */
  constructor(id, title, likes, date, video) {
    super(id, title, likes, date);
    this.video = video;
  }

  /**
   * Obtient le DOM de la carte du média.
   * @param {string} name - Le nom du photographe.
   * @returns {HTMLElement} L'élément HTML représentant la carte du média.
   */
  get_Media_Card_DOM(name) {
    const path = `./assets/images/${name}/${this.video}`;

    // Création des éléments du DOM
    const mediaCard = document.createElement('article');
    mediaCard.classList.add('media-card');

    // Création du lien du container
    const mediaLink = document.createElement('a');
    mediaLink.classList.add('media-link');
    mediaLink.setAttribute('aria-label', `${this.title}, vue rapprochée`);
    mediaLink.id = this.id;

    // Création du container du media
    const imgContainer = document.createElement('div');
    imgContainer.classList.add('media-container');

    // Création de la vidéo
    const video = document.createElement('video');
    video.classList.add('media');
    video.setAttribute('src', path);
    video.setAttribute('alt', `${this.title}`);

    // Création des infos du media
    const MediasInfos = document.createElement('div');
    MediasInfos.classList.add('media-infos');

    // Création du titre du media
    const mediaTitle = document.createElement('h2');
    mediaTitle.classList.add('media-title');
    mediaTitle.textContent = this.title;

    // Création du nombre de likes du media
    const mediaLikes = document.createElement('p');
    mediaLikes.classList.add('media-likes');
    mediaLikes.innerHTML = `${this.likes} <i class="far fa-heart"></i>`;

    // Ajout des éléments au DOM
    mediaLink.appendChild(mediaCard);
    mediaCard.appendChild(imgContainer);
    MediasInfos.appendChild(mediaTitle);
    MediasInfos.appendChild(mediaLikes);
    mediaCard.appendChild(MediasInfos);
    imgContainer.appendChild(video);
    mediaCard.appendChild(MediasInfos);
    return mediaLink;
  }

  /**
   * Obtient le DOM du média dans la lightbox.
   * @param {string} name - Le nom du photographe.
   * @returns {HTMLElement} L'élément HTML représentant le média dans la lightbox.
   */
  get_Media_Lightbox_DOM(name) {
    const path = `./assets/images/${name}/${this.video}`;

    // Création des éléments du DOM
    const lightboxMediaCard = document.createElement('figure');
    lightboxMediaCard.classList.add('lightbox_media-card');

    const lightboxMedia = document.createElement('video');
    lightboxMedia.classList.add('media');
    lightboxMedia.setAttribute('src', path);
    lightboxMedia.setAttribute('aria-label', `${this.title}, vue rapprochée`);
    lightboxMedia.setAttribute('controls', 'True');
    lightboxMedia.id = this.id;

    // Création du titre du media
    const h2Container = document.createElement('figcaption');
    const lightboxMediaTitle = document.createElement('h2');
    lightboxMediaTitle.classList.add('media-title');
    lightboxMediaTitle.textContent = this.title;
    h2Container.appendChild(lightboxMediaTitle);

    // Ajout des éléments au DOM
    lightboxMediaCard.appendChild(lightboxMedia);
    lightboxMediaCard.appendChild(h2Container);

    return lightboxMediaCard;
  }
}

/**
 * Fabrique de médias.
 * @param {Array} Medias - Le tableau des médias bruts.
 * @returns {Object} Un objet contenant les médias créés et le total des likes.
 */
function MediaFactory(Medias) {
  const mediaElements = [];
  let TotalizeLikes = 0;
  Medias.forEach((element) => {
    if (element.image) {
      const filetype = element.image;
      const mediaElement = new Image(
        element.id,
        element.title,
        element.likes,
        element.date,
        filetype
      );
      TotalizeLikes += element.likes;
      mediaElements.push(mediaElement);
    } else if (element.video) {
      const filetype = element.video;
      const mediaElement = new Video(
        element.id,
        element.title,
        element.likes,
        element.date,
        filetype
      );
      TotalizeLikes += element.likes;
      mediaElements.push(mediaElement);
    }
  });

  return {
    mediaElements,
    TotalizeLikes
  };
}

export {
  MediaFactory
};
