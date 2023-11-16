/* eslint-disable no-console */
/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
function afficherResultat(score, nbMotsProposes) {
  const spanScore = document.querySelector('.zoneScore span');

  const affichageScore = `${score} / ${nbMotsProposes}`;

  spanScore.innerText = affichageScore;

  console.log(`Votre score est de ${score} sur ${nbMotsProposes}`);
}

function afficherProposition(proposition) {
  const zoneProposition = document.querySelector('.zoneProposition');
  zoneProposition.innerText = proposition;
}


function lancerJeu() {
  const score = 0;
  const nbMotsProposes = 0;
  let i = 0;

  const btnValiderMot = document.getElementById('btnValiderMot');
  const inputEcriture = document.getElementById('inputEcriture');


  afficherProposition(listeMots[i]);
  btnValiderMot.addEventListener('click', () => {
    inputEcriture.value = '';
    console.log(inputEcriture.value);

    if (listeMots[i] === input) {
      if (listeMots[i] === undefined) {
        afficherProposition('le jeu est terminé');
        btnValiderMot.disabled = true;
      } else {
        afficherProposition(listeMots[i]);
      }
    }

    i++;
  });

  afficherResultat(score, nbMotsProposes);
}
