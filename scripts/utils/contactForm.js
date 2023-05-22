// Récupération de la modale
const modal = document.querySelector('.contact_modal')
const Body = document.getElementById('main-photographer') // Ajout de la lightbox au body
// Récupération  des boutons de la modale
const closeModalBtn = document.querySelector('.close') // Bouton de fermeture de la modale

/**
 * Affiche la modale de contact.
 */
function displayModal() {
  modal.setAttribute('aria-hidden', 'false') // Affichage de la modale
  Body.setAttribute('aria-hidden', 'true') // Masquage du body

  if (alreadyValidate) {
    modal.classList.add('visible') // Affichage de la modale
  } else {
    modal.classList.remove('hidden')
    modal.setAttribute('aria-hidden', 'false') // Affichage de la modale
    Body.setAttribute('aria-hidden', 'true') // Masquage du body
    closeModalBtn.focus() // Focus sur le bouton de fermeture de la modale
    modal.classList.add('visible') // Affichage de la modale
  }
}

/**
 * Ferme la modale de contact.
 */
function closeForm() {
  setTimeout(() => {
    modal.classList.remove('visible') // Disparition progressive via l'opacity
    modal.classList.add('hidden') // Disparition de la modale
  }, 100) // Fermeture de la modale au bout de 500ms
}

// Événement de fermeture de la modale
closeModalBtn.addEventListener('click', closeForm) // Fermeture de la modale au clic sur la X

modal.addEventListener('keydown', (e) => {
  if (e.key === 'Escape' || e.key === 27) {
    closeForm()
  }

  if (e.key === 'Enter' || e.key === 13) {
    confirmValidation()
  }
}) // Fermeture de la modale au clic sur la touche Echap

document.addEventListener('click', (e) => {
  if (e.target === modal) closeForm()
}) // Fermeture de la modale au clic en dehors de la modale

/**
 * Valide les données du formulaire de contact.
 */
function confirmValidation() {
  if (validate()) {
    console.log(inputFirstName.value)
    console.log(inputLastName.value)
    console.log(inputEmail.value)
    console.log(inputText.value)
    alreadyValidate = true // Le formulaire est validé
  }
}

/**
 * Valide le champ du prénom.
 * @returns {boolean} - True si le prénom est valide, sinon False.
 */
function validateFirstName() {
  if (inputFirstName.value.trim().length < 2) {
    formfieldsObjects[0].message =
      'Veuillez entrer 2 lettres ou plus pour le prénom.'
    return false
  }
  if (!regexpFirstName.test(inputFirstName.value.trim())) {
    formfieldsObjects[0].message =
      'Veuillez entrer uniquement des lettres pour le prénom.'
    return false
  }
  return true
}

/**
 * Valide le champ du nom de famille.
 * @returns {boolean} - True si le nom de famille est valide, sinon False.
 */
function validateLastname() {
  if (
    inputLastName.value.trim().length < 2 ||
    inputLastName.value.trim() === ''
  ) {
    formfieldsObjects[1].message =
      'Veuillez entrer au minimum 2 lettres ou plus pour le nom.'
    return false
  }
  if (!regexpLastName.test(inputLastName.value.trim())) {
    formfieldsObjects[1].message =
      'Veuillez entrer uniquement des lettres pour le nom.'
    return false
  }
  return true
}

/**
 * Valide le champ de l'e-mail.
 * @returns {boolean} - True si l'e-mail est valide, sinon False.
 */
function validateEmail() {
  if (!regexpEmail.test(inputEmail.value.trim())) {
    formfieldsObjects[2].message = 'Veuillez entrer une adresse mail valide.'
    return false
  }
  return true
}

/**
 * Valide le champ du texte de contact.
 * @returns {boolean} - True si le texte de contact est valide, sinon False.
 */
function validateText() {
  if (inputText.value.trim().length < 10) {
    formfieldsObjects[3].message = 'Veuillez entrer au minimum 50 caractères.'
    return false
  }
  return true
}

/**
 * Valide les données du formulaire.
 * @returns {boolean} - True si le formulaire est valide, sinon False.
 */
function validate() {
  let formIsTrue = true
  for (let i = 0; i < formfieldsObjects.length; i++) {
    const condition = formfieldsObjects[i].condition()
    const { message } = formfieldsObjects[i]
    if (condition) {
      formfieldsObjects[i].formfield.parentElement.setAttribute(
        'data-error',
        message
      )
      formfieldsObjects[i].formfield.parentElement.setAttribute(
        'data-error-visible',
        'true'
      )
      formfieldsObjects[i].formfield.parentElement.classList.add('error')
      formfieldsObjects[i].formfield.focus()
      formIsTrue = false
    } else {
      formfieldsObjects[i].formfield.parentElement.removeAttribute(
        'data-error'
      )
      formfieldsObjects[i].formfield.parentElement.setAttribute(
        'data-error-visible',
        'false'
      )
      formfieldsObjects[i].formfield.parentElement.classList.remove('error')
    }
  }
  return formIsTrue
}

export {
  displayModal
}
