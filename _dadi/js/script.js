// **Gioco dei dadi**
// Generare un numero random da 1 a 6, sia per il giocatore sia per il computer.
// Stabilire il vincitore, in base a chi fa il punteggio più alto.
const start = document.querySelector('.start')
const input = document.querySelector('.btn');
const output = document.getElementById('output');
const reset = document.querySelector('.reset');
const box = document.querySelector('.lf-container');
const risultatoGiocatore = document.querySelector('.giocatore');
const risultatoComputer = document.querySelector('.computer');

// Generare un numero random da 1 a 6, sia per il giocatore sia per il computer.


input.addEventListener('click', function() {
  
  const giocatore = Math.floor(Math.random() * 6) + 1;
  const computer = Math.floor(Math.random() * 6) + 1;

  risultatoGiocatore.innerText = giocatore;
  risultatoComputer.innerText = computer;

  // Stabilire il vincitore, in base a chi fa il punteggio più alto.

  if(giocatore > computer) {
    output.innerText = 'Hai vinto!😃'
  } else if(giocatore === computer) {
    output.innerText = 'Pareggio 😐'
  } else {
    output.innerText = 'Hai perso 😣'
  } 
}) 

reset.addEventListener('click', function(){
  risultatoGiocatore.innerText = '';
  risultatoComputer.innerText = '';
  output.innerText = '';
})




