/**
 * Factory function for creating photographer objects.
 * @param {object} data - The photographer data.
 * @returns {object} - The photographer object.
 */
function photographerFactory(data) {
  // Retrieve photographer data
  const { name, id, city, country, tagline, price, portrait } = data;
  let picture = `./assets/photographers/${portrait}`;

  /**
   * Get the user card DOM element.
   * @returns {HTMLElement} - The user card DOM element.
   */
  function getUserCardDOM() {
    // Create the card
    const article = document.createElement('article');
    article.classList.add('photographersCard');

    // Create the figure container
    const figureContainer = document.createElement('figure');
    figureContainer.classList.add('figureContainer');

    // Create the image container
    const imgContainer = document.createElement('div');
    imgContainer.classList.add('imgContainer');

    // Create the image
    const img = document.createElement('img');
    img.classList.add('PortraitImg');
    img.setAttribute('src', picture);
    img.setAttribute('alt', name);

    // Create the info container
    const infosContainer = document.createElement('figcaption');
    infosContainer.classList.add('MoreInfos');

    // Create the artist name
    const artisteName = document.createElement('h2');
    artisteName.classList.add('artisteName');
    artisteName.textContent = name;

    // Create the link to the photographer page for the image
    const imgPageLink = document.createElement('a');
    imgPageLink.classList.add('imgPageLink');
    imgPageLink.setAttribute('aria-label', `${name}`);
    imgPageLink.href = `photographer.html?id=${id}`;
    imgContainer.appendChild(img);
    imgPageLink.appendChild(imgContainer);

    imgPageLink.appendChild(artisteName);
    figureContainer.appendChild(imgPageLink);

    // Create the artist city
    const cityLocation = document.createElement('address');
    cityLocation.classList.add('artisteLocation');
    cityLocation.textContent = `${city}, ${country}`;

    // Create the artist tagline
    const citation = document.createElement('blockquote');
    citation.classList.add('artistePunchline');
    citation.textContent = tagline;

    // Create the artist price
    const pricing = document.createElement('p');
    pricing.classList.add('artistePricing');
    pricing.textContent = `${price}€/jour`;

    // Construct the final module of the card
    article.appendChild(figureContainer); // Add custom container

    figureContainer.appendChild(infosContainer); // Add additional information block
    infosContainer.appendChild(cityLocation); // Display artist location
    infosContainer.appendChild(citation); // Display artist tagline
    infosContainer.appendChild(pricing); // Display artist pricing

    return article;
  }

  /**
   * Get the user page DOM element.
   * @returns {HTMLElement} - The user page DOM element.
   */
  function getUserPageDOM() {
    // Create the photographer page

    picture = `./assets/photographers/${portrait}`;
    // Create the photographer container
    const UserInfosContainer = document.createElement('figure');
    UserInfosContainer.classList.add('photographContainer');

    // Create the resume div
    const resumeContainer = document.createElement('section');
    resumeContainer.classList.add('resumeContainer');

    // Create the photographer info container
    const UserInfosText = document.createElement('figcaption');
    UserInfosText.classList.add('UserInfosText');

    // Create the artist name
    const artisteName = document.createElement('h2');
    artisteName.classList.add('artisteName');
    artisteName.textContent = name;

    // Create the artist city
    const cityLocation = document.createElement('address');
    cityLocation.classList.add('artisteLocation');
    cityLocation.textContent = `${city}, ${country}`;

    // Create the artist tagline
    const citation = document.createElement('blockquote');
    citation.classList.add('artistePunchline');
    citation.textContent = tagline;

    // Set the name in the modal
    const Pname = document.getElementById('photographerName');
    Pname.textContent = name;

    // Create the artist price
    const priceDOM = document.createElement('div');
    priceDOM.classList.add('artistePricing');
    priceDOM.textContent = `${price}€/jour`;

    // Create the portrait container
    const portraitContainer = document.createElement('span');
    portraitContainer.classList.add('portraitContainer');

    // Create the portrait
    const photo = document.createElement('img');
    photo.classList.add('portrait');
    photo.setAttribute('src', picture);
    photo.setAttribute('alt', name);

    // Retrieve the Contact button
    const contactButton = document.createElement('button');
    contactButton.classList.add('contact_button');
    contactButton.textContent = 'Contactez-moi';
    contactButton.setAttribute('aria-label', 'Contactez-moi');
    UserInfosContainer.appendChild(UserInfosText);
    UserInfosContainer.appendChild(portraitContainer);
    UserInfosContainer.appendChild(contactButton);
    UserInfosText.appendChild(artisteName);
    UserInfosText.appendChild(cityLocation);
    UserInfosText.appendChild(citation);
    portraitContainer.appendChild(photo);
    const main = document.getElementById('main-photographer');
    resumeContainer.appendChild(priceDOM);
    main.appendChild(resumeContainer);
    return UserInfosContainer;
  }

  return {
    getUserCardDOM,
    getUserPageDOM
  };
}

export { photographerFactory };
