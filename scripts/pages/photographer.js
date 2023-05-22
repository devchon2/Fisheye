// Importer la fonction photographerFactory() du fichier photographerFactory.js
import { photographerFactory } from '../factories/photographerFactory.js';

// Importer la fonction MediaFactory() du fichier mediaFactory.js
import { MediaFactory } from '../factories/mediaFactory.js';

// Importer les fonctions utilitaires du fichier utils.js
import { datas, id, photographer, getIdFromUrl, getNameByID, sortMedia } from '../utils/utils.js';

// Importer la fonction displayModal depuis le fichier "utils.js"
import { displayModal } from '../utils/contactForm.js';

// Import lightbox.js
import { lightBox } from '../utils/lightbox.js';

// Récupération des médias
const fullmedias = datas.media;

// Récupération des données des éléments du DOM du photographe
const photographerModel = photographerFactory(photographer);
const photographerPageDOM = photographerModel.getUserPageDOM();
const Resume = document.querySelector('.resumeContainer');
const selectButton = document.querySelector('.filterField_select');
const selectList = document.querySelector('.filterField_select-list');
const selectItems = Array.from(document.querySelectorAll('.filterField_select-list-item'));

// Création du corps pour les médias
const MediasContainer = document.createElement('section');
MediasContainer.classList.add('MediasContainer');
const selectLabel = document.getElementById('filterField_select-label');
const nameShortened = getNameByID().split(' ')[0];

// Récupération des éléments du DOM
const Pheader = document.querySelector('.photograph-header');
const Pbody = document.querySelector('.photograph-body');

// Récupération des médias du photographe
const Usermedias = fullmedias.filter((media) => media.photographerId == id);

// Afficher la liste déroulante lorsque l'utilisateur clique sur le bouton
selectButton.addEventListener('click', () => {
  selectButton.setAttribute('aria-expanded', 'true');
  selectList.classList.remove('hidden');
});

// Fermer la liste déroulante lorsque l'utilisateur clique en dehors du bouton et de la liste
document.addEventListener('click', (event) => {
  const isClickInside = selectButton.contains(event.target);
  if (!isClickInside) {
    selectButton.setAttribute('aria-expanded', 'false');
    selectList.classList.add('hidden');
  }
});

const TotalLikes = document.createElement('div');
TotalLikes.classList.add('TotalLikes');

/**
 * Affiche les données du photographe et les médias sur la page.
 * @param {object} photograph - Les données du photographe.
 * @param {array} medias - Les médias du photographe.
 */
function displayData(photograph, medias) {
  const rawMedias = MediaFactory(medias);
  const mediaModels = rawMedias.mediaElements;
  const Totalizer = rawMedias.TotalizeLikes;
  TotalLikes.innerHTML = `${Totalizer} <i aria-label="likes" class="fas fa-heart"></i>`;
  selectItems.forEach((item) => {
    item.addEventListener('click', (event) => {
      event.stopPropagation();
      const selectedID = item.id;
      const selectedOption = item.textContent;

      // Tri des médias en fonction de l'option sélectionnée
      const sortedMedias = sortMedia(selectedID, medias);
      selectLabel.textContent = selectedOption;
      selectList.classList.add('hidden');
      selectButton.setAttribute('aria-expanded', 'false');

      // Vide le container des médias et le slider de la lightbox
      MediasContainer.innerHTML = '';
      // Utiliser les médias triés pour afficher les médias
      displayData(photographer, sortedMedias);
    });
  });

  // Affichage des médias
  if (medias) {
    for (let i = 0; i < mediaModels.length; i++) {
      const mediaModel = mediaModels[i];
      const mediamodelDOM = mediaModel.get_Media_Card_DOM(nameShortened);
      MediasContainer.appendChild(mediamodelDOM);

      mediamodelDOM.onclick = () => {
        mediamodelDOM.classList.add('currentMedia');
        const lightboxDOM = new lightBox(medias, nameShortened);
        lightboxDOM.open();
      };
    }
  }

  if (photograph) {
    Pheader.appendChild(photographerPageDOM); // Affiche les données du photographe dans la page
    const contactbtn = document.querySelector('.photographContainer .contact_button');
    contactbtn.addEventListener('click', displayModal); // Affiche le formulaire de contact lors du click du bouton
    Resume.appendChild(TotalLikes);
  }
}

/**
 * Initialise l'affichage des données du photographe et des médias.
 */
function init() {
  displayData(photographer, Usermedias);
}

init();

export {
  getIdFromUrl,
  MediasContainer,
  displayData
};
