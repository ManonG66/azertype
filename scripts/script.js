function afficherResultat(score, nbMotsProposes) {
    let spanScore = document.querySelector(".zoneScore span")

    let affichageScore = `${score} / ${nbMotsProposes}`

    spanScore.innerText = affichageScore

    console.log("Votre score est de " + score + " sur " + nbMotsProposes)
}

function afficherProposition(proposition) {
    let zoneProposition = document.querySelector(".zoneProposition")
    zoneProposition.innerText = proposition
}


function lancerJeu() {

    let score = 0;
    let nbMotsProposes = 0;
    let i = 0;

    let btnValiderMot = document.getElementById("btnValiderMot")
    let inputEcriture = document.getElementById("inputEcriture")
    
   

    afficherProposition(listeMots[i])
    btnValiderMot.addEventListener("click", () => {
        inputEcriture.value = "";
        console.log(inputEcriture.value)

        if (listeMots[i]=== input)
        
        if (listeMots[i] === undefined) {
            afficherProposition("le jeu est terminé");
            btnValiderMot.disabled = true

        } else {
            afficherProposition(listeMots[i]);
        
        }
        
        i++
    })

    afficherResultat(score, nbMotsProposes)

}