/* eslint-disable linebreak-style, no-console, import/prefer-default-export, max-len, no-plusplus */

/**
 * @fileOverview Ce fichier contient le code pour la gestion d'une modale de contact avec validation de formulaire.
 */

// Récupération des éléments du DOM
const modal = document.querySelector(".contact_modal");
const Body = document.getElementById("main-photographer");
const closeModalBtn = document.querySelector(".close");

// Récupération des valeurs des éléments du formulaire
const inputFirstName = document.forms.reserve.first;
const inputLastName = document.forms.reserve.last;
const inputEmail = document.forms.reserve.email;
const inputText = document.forms.reserve.txtMsg;

// Régex pour la validation des champs texte
const regexpEmail = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
const regexpFirstName = /^[a-zA-Z\s]+$/;
const regexpLastName = /^[a-zA-Z\s]+$/;

// Liste des objets à vérifier + conditions + messages de retour en cas d'erreur
const formfieldsObjects = [
  {
    formfield: inputFirstName,
    condition: () => !validateFirstName(),
    message: "",
  },
  {
    formfield: inputLastName,
    condition: () => !validateLastname(),
    message: "",
  },
  {
    formfield: inputEmail,
    condition: () => !validateEmail(),
    message: "Veuillez entrer une adresse e-mail valide.",
  },
  {
    formfield: inputText,
    condition: () => !validateText(),
    message: "Veuillez entrer une adresse e-mail valide.",
  },
];

// État de soumission du formulaire
let alreadyValidate = false;

/**
 * Affiche la modale.
 */
function displayModal() {
  modal.setAttribute("aria-hidden", "false");
  Body.setAttribute("aria-hidden", "true");

  if (alreadyValidate) {
    modal.classList.add("visible");
  } else {
    modal.classList.remove("hidden");
    modal.setAttribute("aria-hidden", "false");
    Body.setAttribute("aria-hidden", "true");
    closeModalBtn.focus();
    modal.classList.add("visible");
  }
}

/**
 * Ferme la modale.
 */
function closeForm() {
  setTimeout(() => {
    modal.classList.remove("visible");
    modal.classList.add("hidden");
  }, 100);
}

// Événements de fermeture de la modale
closeModalBtn.addEventListener("click", closeForm);
modal.addEventListener("keydown", (e) => {
  if (e.key === "Escape" || e.key === 27) {
    closeForm();
  }

  if (e.key === "Enter" || e.key === 13) {
    confirmValidation();
  }
});
document.addEventListener("click", (e) => {
  if (e.target === modal) closeForm();
});

// Événements de validation du formulaire
document.forms.reserve.addEventListener("submit", confirmValidation);
document.forms.reserve.addEventListener("submit", (e) => {
  e.preventDefault();
  validate();
});

/**
 * Confirme la validation du formulaire.
 */
function confirmValidation() {
  if (validate()) {
    console.log(inputFirstName.value);
    console.log(inputLastName.value);
    console.log(inputEmail.value);
    console.log(inputText.value);
    alreadyValidate = true;
  }
}

/**
 * Valide le prénom.
 * @return {boolean} - Retourne vrai si le prénom est valide, faux sinon.
 */
function validateFirstName() {
  if (inputFirstName.value.trim().length < 2) {
    formfieldsObjects[0].message =
      "Veuillez entrer 2 lettres ou plus pour le prénom.";
    return false;
  }
  if (!regexpFirstName.test(inputFirstName.value.trim())) {
    formfieldsObjects[0].message =
      "Veuillez entrer uniquement des lettres pour le prénom.";
    return false;
  }
  return true;
}

/**
 * Valide le nom.
 * @return {boolean} - Retourne vrai si le nom est valide, faux sinon.
 */
function validateLastname() {
  if (
    inputLastName.value.trim().length < 2 ||
    inputLastName.value.trim() === ""
  ) {
    formfieldsObjects[1].message =
      "Veuillez entrer au minimum 2 lettres ou plus pour le nom.";
    return false;
  }
  if (!regexpLastName.test(inputLastName.value.trim())) {
    formfieldsObjects[1].message =
      "Veuillez entrer uniquement des lettres pour le nom.";
    return false;
  }
  return true;
}

/**
 * Valide l'email.
 * @return {boolean} - Retourne vrai si l'email est valide, faux sinon.
 */
function validateEmail() {
  if (!regexpEmail.test(inputEmail.value.trim())) {
    formfieldsObjects[2].message = "Veuillez entrer une adresse mail valide.";
    return false;
  }
  return true;
}

/**
 * Valide le texte.
 * @return {boolean} - Retourne vrai si le texte est valide, faux sinon.
 */
function validateText() {
  if (inputText.value.trim().length < 10) {
    formfieldsObjects[3].message = "Veuillez entrer au minimum 50 caractères.";
    return false;
  }
  return true;
}

/**
 * Valide globalement les données des champs input.
 * @return {boolean} - Retourne vrai si toutes les données sont valides, faux sinon.
 */
function validate() {
  let formIsTrue = true;
  for (let i = 0; i < formfieldsObjects.length; i++) {
    const condition = formfieldsObjects[i].condition();
    const { message } = formfieldsObjects[i];
    if (condition) {
      formfieldsObjects[i].formfield.parentElement.setAttribute(
        "data-error",
        message
      );
      formfieldsObjects[i].formfield.parentElement.setAttribute(
        "data-error-visible",
        "true"
      );
      formfieldsObjects[i].formfield.parentElement.classList.add("error");
      formfieldsObjects[i].formfield.focus();
      formIsTrue = false;
    } else {
      formfieldsObjects[i].formfield.parentElement.removeAttribute(
        "data-error"
      );
      formfieldsObjects[i].formfield.parentElement.setAttribute(
        "data-error-visible",
        "false"
      );
      formfieldsObjects[i].formfield.parentElement.classList.remove("error");
    }
  }
  return formIsTrue;
}

export { displayModal };