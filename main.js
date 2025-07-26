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

// inter: punti 81 - 394 falli subiti / napoli: 82 punti falli 385/ atalanta: 74 punti 414 /juventus: punti 70 453/ Lazio: punti 65 404
