/* eslint-disable linebreak-style */
/* eslint-disable import/extensions */
/* eslint-disable camelcase */
/* eslint-disable linebreak-style */
// eslint-disable-next-line import/no-useless-path-segments, import/extensions
import photographerFactory from './../factories/photographerFactory.js'
import { getDatas } from '../utils/utils.js'

// Affichage des éléments de la page
function displayData (datas) {
  const photographersSection = document.querySelector('.photographer_section')

  datas.forEach((photographer) => {
    const photographerModel = photographerFactory(photographer)
    const userCardDOM = photographerModel.getUserCardDOM()
    photographersSection.appendChild(userCardDOM)
  })
}

async function init () {
  const { photographers } = await getDatas() // Récupère les photographes

  // Si vous êtes sur la page index.html, affichez les photographes
  if (document.querySelector('.photographer_section')) {
    displayData(photographers)
  }
}

init()
