// **Gioco dei dadi**
// Generare un numero random da 1 a 6, sia per il giocatore sia per il computer.
// Stabilire il vincitore, in base a chi fa il punteggio più alto.


// Generare un numero random da 1 a 6, sia per il giocatore sia per il computer.

const giocatore = Math.floor(Math.random() * 6) + 1;
const computer = Math.floor(Math.random() * 6) + 1;

// Stabilire il vincitore, in base a chi fa il punteggio più alto.

if(giocatore > computer) {
  console.log('hai vinto tu');
} else {
  console.log('mi spiace non hai vinto');
}

console.log(giocatore);
console.log(computer);