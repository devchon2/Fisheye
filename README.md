# FishEye — Site accessible pour une plateforme de photographes

[![CI](https://img.shields.io/badge/CI-none-lightgrey)]() [![Licence](https://img.shields.io/badge/Licence-MIT-blue)]()

> Projet réalisé dans le cadre de la formation **Développeur d'application - JavaScript React**.  
> **Objectif général :** produire un prototype accessible et modulaire d’un site pour photographes (navigation pages photographes, LightBox, likes, modal contact).

## 📚 Table des matières
- [Description](#-description)
- [Objectifs pédagogiques](#-objectifs-pédagogiques)
- [Compétences & Preuves](#-comp%C3%A9tences--preuves)
- [Stack & Versions](#-stack--versions)
- [Structure du projet](#-structure-du-projet)
- [Fonctionnalités clés](#-fonctionnalit%C3%A9s-cl%C3%A9s)
- [API & Données](#-api--donn%C3%A9es)
- [Installation & Lancement](#-installation--lancement)
- [Available Scripts](#available-scripts)
- [Tests](#-tests)
- [Démo & Captures](#-d%C3%A9mo--captures)
- [Roadmap](#-roadmap)
- [Licence](#-licence)
- [Contact](#-contact)
- [English version](#english-version)

---

## 🚀 Description
Prototype accessible d’un site pour photographes (FishEye). Le projet met l'accent sur l’accessibilité (navigation clavier, ARIA, lecture par screen readers), la modularité JavaScript (design patterns) et la gestion des médias (photos / vidéos). Le périmètre comprend une page d’accueil, une page photographe et des composants médias (LightBox, modal contact). :contentReference[oaicite:0]{index=0}

> **Résultats clés** : prototype fonctionnel • navigation accessible au clavier • pattern Factory Method pour la gestion des médias.

## 🎯 Objectifs pédagogiques
- Assurer l’accessibilité d’un site web (WCAG basics).  
- Développer une application web modulaire en JS (pattern Factory Method).  
- Écrire du JS maintenable et gérer les événements du site.  
- Implémenter une LightBox accessible et une modal de contact.

## 🧠 Compétences & Preuves
| Exigence pédagogique | Compétence recrutée | Mise en œuvre | Preuves |
|---|---|---:|---|
| Accessibilité | **WCAG / ARIA** | Navigation clavier, roles/labels, focus management | `index.html`, `src/` (JS) — démonstration navigation clavier. :contentReference[oaicite:1]{index=1} |
| Modularité JS | **Design patterns** | Factory Method pour media (photo vs vidéo) | `src/factories/*`, commits relatifs au pattern |
| UI/Media | **LightBox / Modal** | LightBox accessible, modal de contact | `src/components/lightbox.*`, `src/components/modal.*` |
| Data | **JSON / Fetch** | Chargement des données photographes depuis fichiers JSON | `data/photographers.json`, usage `fetch` |

*(les chemins sont fournis dans le repo ; fork / clone le dépôt pour voir les fichiers exacts.)* :contentReference[oaicite:2]{index=2}

## 🧰 Stack & Versions
| Tech | Rôle |
|---|---|
| HTML5 | Markup |
| CSS3 | Styling |
| JavaScript (Vanilla) | Comportement & patterns |
| JSON | Données exemples |

*(Si le repo contient un `package.json`, utiliser `npm install` — sinon le site est statique.)* :contentReference[oaicite:3]{index=3}

## 🗂️ Structure du projet
```txt
FishEye/
├─ index.html
├─ css/
├─ js/ or src/
├─ data/
│  └─ photographers.json
├─ images/
└─ README.md
```
(Consulter l’arborescence exacte dans le dépôt.) :contentReference[oaicite:4]{index=4}

## ✅ Fonctionnalités clés
* [x] Pages : home + photographe.  
* [x] LightBox accessible pour médias.  
* [x] Modal de contact accessible.  
* [x] Gestion likes et navigation clavier.  
* [x] Factory Method pour instancier media (vidéo vs photo).

## 🔌 API & Données
* **Données locales** : `data/photographers.json` (format fourni).  
* **Endpoints** : pas d’API distante requise pour le prototype (les données sont mockées).

Exemple schéma :
```json
{
  "id": 1,
  "name": "Photographer Name",
  "city": "City",
  "tagline": "Tagline",
  "price": 250,
  "portrait": "name.jpg",
  "media": [
    { "id": 1, "photographerId": 1, "title": "Photo", "image": "photo.jpg", "likes": 45 }
  ]
}
```

## ⚡ Installation & Lancement
```bash
# 1) Cloner
git clone https://github.com/devchon2/Fisheye.git
cd Fisheye

# 2) Ouvrir localement
# Option A (double-cliquer) : ouvrir index.html dans un navigateur
# Option B (serveur local recommandé) :
npx http-server -c-1 .   # ou 'python -m http.server 8080'
# Puis ouvrir http://localhost:8080
```

## 📜 Available Scripts
*(Projet statique — pas de scripts obligatoires)*

```bash
# Si package.json présent:
npm install
npm start # si défini
```

## 🧪 Tests
* Vérifier l’accessibilité : navigation clavier, contrastes, labels ARIA.  
* Valider HTML/CSS via W3C.  
* Test manuel de la LightBox (clavier + lecteur d’écran).

## 🎥 Démo & Captures
* Livrable : ZIP avec `index.html`, `css/`, `js/`, `data/`, `images/`.  
* Pendant la soutenance : démonstration navigation clavier + lecture via screen reader. :contentReference[oaicite:5]{index=5}

## 🗺️ Roadmap
* Ajouter tests automatisés d’accessibilité (axe/core).  
* Ajouter packaging (npm) du composant LightBox réutilisable.

## 📝 Licence
MIT (ajouter `LICENSE` si absent).

## 📫 Contact
Rachid Chon — `rchon@rchon-dev.fr`

---

## English version

<details>
<summary>🇬🇧 Click to expand</summary>

# FishEye — Accessible site for a photographers platform

[![CI](https://img.shields.io/badge/CI-none-lightgrey)]() [![License](https://img.shields.io/badge/License-MIT-blue)]()

> Built during the **Développeur d'application - JavaScript React** training.  
> **Goal:** deliver an accessible, modular prototype for a photographers platform (photographer pages, LightBox, likes, contact modal).

## 🚀 Description
FishEye is a prototype focused on accessibility, modular JavaScript (design patterns), and media handling (photos & videos). It includes a homepage, photographer pages, an accessible LightBox and a contact modal. :contentReference[oaicite:6]{index=6}

## 🎯 Learning objectives
- Ensure site accessibility (WCAG basics).  
- Build a modular JS application using Factory Method.  
- Write maintainable JS and robust event handling.  
- Implement an accessible LightBox and contact modal.

## 🧠 Skills & Evidence
| Requirement | Skill | Implementation | Evidence |
|---|---|---|---|
| Accessibility | **WCAG / ARIA** | Keyboard navigation, roles/labels, focus management | `index.html`, `src/` — keyboard demo. :contentReference[oaicite:7]{index=7} |
| Modularity | **Design patterns** | Factory Method for media types (photo vs video) | `src/factories/*` |
| UI/Media | **LightBox / Modal** | Accessible LightBox, contact modal | `src/components/lightbox.*` |

## 🧰 Stack & Versions
| Tech | Role |
|---|---|
| HTML5 | Markup |
| CSS3 | Styling |
| Vanilla JS | Behaviour & patterns |
| JSON | Sample data |

## ⚡ Setup & Run
```bash
git clone https://github.com/devchon2/Fisheye.git
cd Fisheye
npx http-server -c-1 .
# open http://localhost:8080
```

## 🧪 Tests
* Accessibility checks (keyboard, ARIA).  
* W3C validation.  
* Manual LightBox behavior tests with screen reader.

## 🎥 Demo
* ZIP deliverable with all assets.  
* Demo during defense: keyboard navigation + screen reader.

## 📝 License
MIT.

## 📫 Contact
Rachid Chon — `rchon@rchon-dev.fr`

</details>

