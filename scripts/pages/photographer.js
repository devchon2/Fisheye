// Importer la fonction photographerFactory() du fichier photographerFactory.js
import { photographerFactory } from "./../factories/photographerFactory.js";

// Importer la fonction MediaFactory() du fichier mediaFactory.js
import { MediaFactory } from "./../factories/mediaFactory.js";

// Importer les fonctions utilitaires du fichier utils.js
import {
  datas,
  id,
  photographer,
  get_ID_from_url,
  get_name_by_id,
  sortbyPops,
  sortbyDate,
  sortbyTitle,
} from "../utils/utils.js";

// Importer la fonction displayModal depuis le fichier "utils.js
import { displayModal } from "./../utils/contactForm.js";

//Import lightbox.js
import {
  openLightBox,
  lightboxMediaContainer,
  lightboxMediaSlider,
} from "./../utils/lightbox.js";

// Récupération des médias
const fullmedias = datas.media;

// Récupération des médias du photographe
let Usermedias = fullmedias.filter((media) => media.photographerId == id);

// Récupération des données des éléments du DOM du photographe
const photographerModel = photographerFactory(photographer);
const photographerPageDOM = photographerModel.getUserPageDOM();
const Resume = document.querySelector(".resumeContainer");

const filters = document.querySelectorAll(".filterField_select-list");

const selectLabel = document.getElementById("filterField_select-label");
const popularity = document.getElementById("pop");

const date = document.getElementById("date");

const titre = document.getElementById("titre");



// Affichage des éléments de la page
function displayData(photograph, medias) {
  const nameShortened = get_name_by_id().split(" ")[0];
  // Récupération des éléments du DOM
  const Pheader = document.querySelector(".photograph-header");
  const Pbody = document.querySelector(".photograph-body");
  const carrouselDOM = document.createElement("div");
  carrouselDOM.classList.add("MediasContainer");

  // Création du corps pour les médias
  const MediasContainer = document.createElement("section");
  MediasContainer.classList.add("MediasContainer");
  Pbody.appendChild(MediasContainer);

  // Récupération des données
  const rawMedias = MediaFactory(medias);
  const mediaModels = rawMedias.mediaElements;
  const Totalizer = rawMedias.TotalizeLikes;
  const TotalLikes = document.createElement("div");
  TotalLikes.classList.add("TotalLikes");
  TotalLikes.innerHTML = `${Totalizer} <i aria-label="likes" class="fas fa-heart"></i>`;

  const selectButton = document.querySelector('.filterField_select');
  const selectList = document.querySelector('.filterField_select-list');
  const selectItems = Array.from(document.querySelectorAll('.filterField_select-list-item'));

// Afficher la liste déroulante lorsque l'utilisateur clique sur le bouton
  selectButton.addEventListener('click', function () {
     selectButton.setAttribute('aria-expanded', 'true');
    selectList.classList.remove('hidden');
  });


  

  // Ajoutez un écouteur d'événement à chaque élément de la liste déroulante
  selectItems.forEach((item) =>{
    item.addEventListener('click', function (){
      
      const selectedOption = item.textContent;
      selectLabel.textContent = selectedOption;
      selectList.classList.add('hidden');
      
      selectButton.setAttribute('aria-expanded', 'false');
      
      
      // Effectuez l'action souhaitée en fonction de l'option sélectionnée
    });
});

  // Fermer la liste déroulante lorsque l'utilisateur clique en dehors du bouton et de la liste
  document.addEventListener('click', function (event) {
    const isClickInside = selectButton.contains(event.target);
    if (!isClickInside) {
      selectButton.setAttribute('aria-expanded', 'false');
      selectList.classList.add('hidden');
    }
  });

  // Affichage des médias
  if (medias) {
    for (let i = 0; i < mediaModels.length; i++) {
      const mediaModel = mediaModels[i];
      const mediamodelDOM = mediaModel.get_Media_Card_DOM(nameShortened);
      MediasContainer.appendChild(mediamodelDOM);
      const mediaLightdom = mediaModel.get_Media_Lightbox_DOM(nameShortened);
      // console.log(lightboxMediaContainer);
      lightboxMediaSlider.appendChild(mediaLightdom);
      mediamodelDOM.onclick = () => {
        openLightBox();
        mediaLightdom.classList.add("currentMedia");
      };
      lightboxMediaSlider.style.width = `${mediaModels.length * 100}%`;
    }
  }
  if (photograph) {
    Pheader.appendChild(photographerPageDOM); // Affiche les données du photographe dans la page
    const contactbtn = document.querySelector(
      ".photographContainer .contact_button"
    );
    contactbtn.addEventListener("click", displayModal); // Affiche le formulaire de contact
    Resume.appendChild(TotalLikes);
  }
}

function init() {
  // Fonction pour afficher les données du photographe dans la page
  if (popularity.querySelector(":active")) {
    Usermedias = sortbyPops(Usermedias);
    
  } else if (date.querySelector(":active")) {
    Usermedias = sortbyDate(Usermedias);
  } else {
    Usermedias = sortbyTitle(Usermedias);
  }
  displayData(photographer, Usermedias);
}

init();

export { get_ID_from_url };
