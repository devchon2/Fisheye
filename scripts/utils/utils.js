/* eslint-disable max-len */
/* eslint-disable no-shadow */
/* eslint-disable eqeqeq */
/* eslint-disable semi */

/**
 * Récupération des données brutes.
 * @returns {Promise} Une promesse résolue avec les données brutes.
 */
async function getDatas() {
  const response = await fetch('./data/photographers.json');
  // et bien retourner le tableau photographers seulement une fois récupéré
  const Datas = await response.json();
  return Datas;
}

/**
 * Récupération de l'ID du photographe depuis l'URL.
 * @returns {string} L'ID du photographe extrait de l'URL.
 */
function getIdFromUrl() {
  const url = window.location.search; // Récupère l'URL
  const urlParams = new URLSearchParams(url); // Récupère les paramètres de l'URL
  const urlId = urlParams.get('id'); // Récupère l'ID de l'URL
  return urlId;
}

/**
 * Fonction pour récupérer le prénom du photographe par son ID.
 * @returns {string} Le prénom du photographe.
 */
function getNameByID() {
  const photographer = photographers.find((photographer) => photographer.id == id); // Récupère les données du photographe
  const fullname = photographer.name; // Récupère le nom du photographe
  const Pname = fullname.split(' ')[0]; // Récupère le prénom du photographe
  return Pname;
}

/**
 * Fonction de tri des médias par popularité.
 * @param {Array} mediaToSort - Le tableau des médias à trier.
 * @returns {Array} Le tableau des médias triés par popularité.
 */
function sortbyPops(mediaToSort) {
  const medias = mediaToSort;
  medias.sort((a, b) => b.likes - a.likes);
  return medias;
}

/**
 * Fonction de tri des médias par date.
 * @param {Array} mediaToSort - Le tableau des médias à trier.
 * @returns {Array} Le tableau des médias triés par date.
 */
function sortbyDate(mediaToSort) {
  const medias = mediaToSort;
  medias.sort((a, b) => new Date(b.date) - new Date(a.date));
  return medias;
}

/**
 * Fonction de tri des médias par titre.
 * @param {Array} mediaToSort - Le tableau des médias à trier.
 * @returns {Array} Le tableau des médias triés par titre.
 */
function sortbyTitle(mediaToSort) {
  const medias = mediaToSort;
  medias.sort((a, b) => a.title.localeCompare(b.title));
  return medias;
}

/**
 * Fonction de tri des médias en fonction de l'option sélectionnée.
 * @param {string} sortBy - L'option de tri sélectionnée.
 * @param {Array} medias - Le tableau des médias à trier.
 * @returns {Array} Le tableau des médias triés en fonction de l'option sélectionnée.
 */
function sortMedia(sortBy, medias) {
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
  getDatas,
  getIdFromUrl,
  getNameByID,
  sortMedia
};
