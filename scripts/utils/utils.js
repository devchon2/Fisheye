/* eslint-disable max-len */
/* eslint-disable no-shadow */
/* eslint-disable eqeqeq */
/* eslint-disable semi */
// Récupération des données brutes
const datas = await getDatas();

// Récupération de l'id du photographe dans l'url
const id = getIdFromUrl();

// Récupération des photographes
const { photographers } = datas;

// Récupération des données du photographe selon l'id de la page
const photographer = photographers.find((photographer) => photographer.id == id);

/**
 * Fonction pour récupérer les données depuis le fichier JSON
 */
async function getDatas () {
  const response = await fetch('./data/photographers.json');
  // et bien retourner le tableau photographers seulement une fois récupéré
  const Datas = await response.json();
  return Datas;
}

/**
 * Fonction pour récupérer l'id du photographe depuis l'URL
 */
function getIdFromUrl () {
  const url = window.location.search; // Récupère l'url
  const urlParams = new URLSearchParams(url); // Récupère les paramètres de l'url
  const urlId = urlParams.get('id'); // Récupère l'id de l'url
  return urlId;
}

/**
 * Fonction pour récupérer le prénom du photographe par son id
 */
function getNameByID () {
  const photographer = photographers.find((photographer) => photographer.id == id); // Récupère les données du photographe
  const fullname = photographer.name; // Récupère le nom du photographe
  const Pname = fullname.split(' ')[0]; // Récupère le prénom du photographe
  return Pname;
}

/**
 * Fonction de tri des médias par popularité
 */
function sortbyPops (mediaToSort) {
  const medias = mediaToSort;
  medias.sort((a, b) => b.likes - a.likes);
  return medias;
}

/**
 * Fonction de tri des médias par date
 */
function sortbyDate (mediaToSort) {
  const medias = mediaToSort;
  medias.sort((a, b) => new Date(b.date) - new Date(a.date));
  return medias;
}

/**
 * Fonction de tri des médias par titre
 */
function sortbyTitle (mediaToSort) {
  const medias = mediaToSort;
  medias.sort((a, b) => a.title.localeCompare(b.title));
  return medias;
}

/**
 * Fonction de tri des médias en fonction de l'option sélectionnée
 */
function sortMedia (sortBy, medias) {
  let SortedUsermedias;
  switch (sortBy) {
    case 'pop':
      SortedUsermedias = sortbyPops(medias);
      break;
    case 'date':
      SortedUsermedias = sortbyDate(medias);
      break;
    case 'titre':
      SortedUsermedias = sortbyTitle(medias);
      break;
    default:
      SortedUsermedias = sortbyPops(medias);
  }
  return SortedUsermedias;
}

export {
  datas,
  id,
  photographer,
  photographers,
  getDatas,
  getIdFromUrl,
  getNameByID,
  sortMedia
};
