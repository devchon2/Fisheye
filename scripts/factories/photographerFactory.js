/* eslint-disable linebreak-style */
// eslint-disable-next-line linebreak-style
/* eslint-disable import/prefer-default-export */
/* eslint-disable linebreak-style */
function photographerFactory (data) {
  // Récupérer les données du photographe
  const { name, id, city, country, tagline, price, portrait } = data
  let picture = `./assets/photographers/${portrait}`

  function getUserCardDOM () {
    // Création des cartes
    const article = document.createElement('article')
    article.classList.add('photographersCard')

    // Création du container de la figure
    const figureContainer = document.createElement('figure')
    figureContainer.classList.add('figureContainer')

    // Création de la Div de l'image
    const imgContainer = document.createElement('div')
    imgContainer.classList.add('imgContainer')

    // Création de l'image
    const img = document.createElement('img')
    img.classList.add('PortraitImg')
    img.setAttribute('src', picture)
    img.setAttribute('alt', name)

    // Création de la Div du Texte de Présentation
    const infosContainer = document.createElement('figcaption')
    infosContainer.classList.add('MoreInfos')

    // Création du nom de l'artiste
    const artisteName = document.createElement('h2')
    artisteName.classList.add('artisteName')
    artisteName.textContent = name

    // Création du lien vers la page du photographe pour l'image
    const imgPageLink = document.createElement('a')
    imgPageLink.classList.add('imgPageLink')
    imgPageLink.setAttribute('aria-label', `${name}`)
    imgPageLink.href = `photographer.html?id=${id}`
    imgContainer.appendChild(img)
    imgPageLink.appendChild(imgContainer)

    imgPageLink.appendChild(artisteName)
    figureContainer.appendChild(imgPageLink)

    // Création de la ville de l'artiste
    const cityLocation = document.createElement('address')
    cityLocation.classList.add('artisteLocation')
    cityLocation.textContent = `${city}, ${country}`

    // Création de la citation de l'artiste
    const citation = document.createElement('blockquote')
    citation.classList.add('artistePunchline')
    citation.textContent = tagline

    // Création du prix de l'artiste
    const pricing = document.createElement('p')
    pricing.classList.add('artistePricing')
    pricing.textContent = `${price}€/jour`

    // Construction du module Final de la carte
    article.appendChild(figureContainer) // création du container personnalisé

    figureContainer.appendChild(infosContainer) // Ajout du bloc d'informations supplémentaires
    infosContainer.appendChild(cityLocation) // Affichage de la localisation
    infosContainer.appendChild(citation) // Affichage de la citation de l'artiste
    infosContainer.appendChild(pricing) // Affichage du tarif de l'artiste

    return article
  }

  function getUserPageDOM () {
    // Création de la page du photographe

    picture = `./assets/photographers/${portrait}`
    // Création du container photographe
    const UserInfosContainer = document.createElement('figure')
    UserInfosContainer.classList.add('photographContainer')

    // Création de la div de résumé
    const resumeContainer = document.createElement('section')
    resumeContainer.classList.add('resumeContainer')

    // Création du container des infos photographe
    const UserInfosText = document.createElement('figcaption')
    UserInfosText.classList.add('UserInfosText')

    // Création du nom de l'artiste
    const artisteName = document.createElement('h2')
    artisteName.textContent = name
    artisteName.classList.add('artisteName')
    artisteName.setAttribute('aria-label', `${name}`)
    artisteName.setAttribute('tabindex', '0')

    // Création de la ville de l'artiste
    const cityLocation = document.createElement('address')
    cityLocation.textContent = `${city}, ${country}`
    cityLocation.classList.add('artisteLocation')
    cityLocation.setAttribute('aria-label', `${city}, ${country}`)
    cityLocation.setAttribute('tabindex', '0')

    // Création de la citation de l'artiste
    const citation = document.createElement('blockquote')
    citation.textContent = tagline
    citation.classList.add('artistePunchline')
    citation.setAttribute('aria-label', `${tagline}`)
    citation.setAttribute('tabindex', '0')

    // Création du nom dans la modale
    const Pname = document.getElementById('photographerName')
    Pname.textContent = name

    // Création du prix de l'artiste
    const priceDOM = document.createElement('p')
    priceDOM.classList.add('artistePricing')
    priceDOM.textContent = `${price}€/jour`
    priceDOM.setAttribute('aria-label', `${price}€/jour`)
    priceDOM.setAttribute('tabindex', '2')

    // Création du container du portrait
    const portraitContainer = document.createElement('span')
    portraitContainer.classList.add('portraitContainer')
    portraitContainer.setAttribute('aria-label', `${name}`)
    portraitContainer.setAttribute('tabindex', '0')

    // Création du portrait
    const photo = document.createElement('img')
    photo.classList.add('portrait')
    photo.setAttribute('src', picture)
    photo.setAttribute('alt', name)

    // Récupération du bouton Contact
    const contactButton = document.createElement('button')
    contactButton.classList.add('contact_button')
    contactButton.textContent = 'Contactez-moi'
    contactButton.setAttribute('aria-label', 'Contactez-moi')
    UserInfosContainer.appendChild(UserInfosText)
    UserInfosContainer.appendChild(portraitContainer)
    UserInfosContainer.appendChild(contactButton)
    UserInfosText.appendChild(artisteName)
    UserInfosText.appendChild(cityLocation)
    UserInfosText.appendChild(citation)
    portraitContainer.appendChild(photo)
    const main = document.getElementById('main-photographer')
    resumeContainer.appendChild(priceDOM)
    main.appendChild(resumeContainer)
    return UserInfosContainer
  }
  return {
    getUserCardDOM,
    getUserPageDOM
  }
}

export { photographerFactory }
