/* Snack 1
Creare un array di oggetti:
Ogni oggetto descriverà una bici da corsa con le seguenti proprietà: nome e peso.
Stampare a schermo la bici con peso minore.
 */

const biciDaCorsa = [
  {
    name: "Bianchi",
    peso: 6,
  },
  {
    name: "Conlnago",
    peso: 7,
  },
  {
    name: "Pinnarello",
    peso: 2,
  },
  {
    name: "Wilier",
    peso: 1.5,
  },
];

for (let key in biciDaCorsa) {
  console.log(biciDaCorsa[key]);
}

let biciLeggera = biciDaCorsa[0];
for (let i = 0; i < biciDaCorsa.length; i++) {
  const peso = biciDaCorsa[i];
  if (biciDaCorsa[i].peso < biciLeggera.peso) {
    biciLeggera = biciDaCorsa[i];
  }
}
console.log(
  `La bici più leggera è ${biciLeggera.name} con un peso di ${biciLeggera.peso} kg.`
);

document.writeln(
  `La bici più leggera è ${biciLeggera.name} con un peso di ${biciLeggera.peso} kg.`
);

/* Snack2
Creare un array di oggetti di squadre di calcio.
Ogni squadra avrà diverse proprietà: nome, punti fatti, falli subiti.
Nome sarà l’unica proprietà da compilare, le altre saranno tutte settate a 0.
Generare numeri random al posto degli 0 nelle proprietà “punti” fatti e “falli subiti”.
Infine, creiamo un nuovo array i cui elementi contengono solo nomi e falli subiti e stampiamo tutto in console.*/

const squadreCalcio = [
  {
    name: "Inter",
    puntiFatti: "",
    falliSubiti: "",
  },

  {
    name: "Napoli",
    puntiFatti: "",
    falliSubiti: "",
  },
  {
    name: "Atalanta",
    puntiFatti: "",
    falliSubiti: "",
  },
  {
    name: "Juventus",
    puntiFatti: "",
    falliSubiti: "",
  },
  {
    name: "Lazio",
    puntiFatti: "",
    falliSubiti: "",
  },
];

/*for (let key in squadreCalcio) {
  console.log(squadreCalcio[key]);
}*/

//uso una variabile di appoggio let
let newArraySquad = [];
//creo un ul (nodo genitore) con la dot notation .creatElement in modo dinamico in js
const ul = document.createElement("ul");
//all'HTML nel body vado a inserire con appendChild la mia ul in modo tale da poterla vedere in pagina
document.body.appendChild(ul);

for (let i = 0; i < squadreCalcio.length; i++) {
  squadreCalcio[i].puntiFatti = getRandomNumber(0, 500);
  squadreCalcio[i].falliSubiti = getRandomNumber(0, 500);
}
//vado con il ciclo for a leggere ciò che c'è all'interno dell'oggetto squadreCalcio partendo da 0 ed andando ad incrementare di 1 alla volta
for (let i = 0; i < squadreCalcio.length; i++) {
  const squadra = squadreCalcio[i];
  // Creo un nuovo oggetto che deve contenere solo la squadra e i falliSubiti e lo aggiungo all'array tramite la dot notation .push
  const newSquadra = {
    name: squadra.name,
    falliSubiti: squadra.falliSubiti,
  };
  newArraySquad.push(newSquadra);

  // Creo un elemento li (figlio del nodo genitore ul) per ogni squadra
  const li = document.createElement("li");
  //creo un testo per ogni elemento della li con le chiavi/valori che voglio vedere in pagina
  li.textContent = `La squadra ${squadra.name} ha subito ${squadra.falliSubiti} falli`;
  //nell'ul(genitore) vado a mettere gli li (figli) all'interno della lista creata all'inizio newArraySquad
  ul.appendChild(li);
}

function getRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
