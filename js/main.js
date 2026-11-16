'use strict';

/*************************************************************************************************/
/* ****************************************** DONNEES ****************************************** */
/*************************************************************************************************/

let photos = document.querySelectorAll("#photo-list li");   // tous les éléments de la liste
let total = document.querySelector("#total em");             // le chiffre du message


/*************************************************************************************************/
/* ***************************************** FONCTIONS ***************************************** */
/*************************************************************************************************/

// Met à jour le message avec le nombre de photos sélectionnées
function updateTotal() {
  let selectedPhotos = document.querySelectorAll("#photo-list li.selected");
  total.textContent = selectedPhotos.length;
}

// Au clic : ajoute la classe "selected", ou l'enlève si elle y est déjà
function onClickPhoto() {
  this.classList.toggle("selected");
  updateTotal();
}


/*************************************************************************************************/
/* ************************************** CODE PRINCIPAL *************************************** */
/*************************************************************************************************/

for (let i = 0; i < photos.length; i++) {
  photos[i].addEventListener("click", onClickPhoto);
}
