// **Mail**
// Chiedi all’utente la sua email,
// controlla che sia nella lista di chi può accedere,
// stampa un messaggio appropriato sull’esito del controllo.

// Prima di partire a scrivere codice poniamoci qualche domanda:
// Che ci sia un array da qualche parte?
// Se dobbiamo confrontare qualcosa che “cosa” ci serve?
// **Consigli del giorno:**
// 1. scriviamo sempre prima dei commenti in italiano per capire cosa vogliamo fare
// 2. javascript non fa nulla da solo, dobbiamo dirgli noi cosa vogliamo fare
// 3. si ma noi cosa vogliamo fare?
// 4. torniamo a scrivere in italiano
// 5. proviamo ad immaginare le operazioni che vogliamo far svolgere al nostro programma così come lo faremmo “a mano”




let btnSubmit = document.querySelector('[type="submit"]');

const listaUtentiAbilitati = ['ciao'];

const numeroUtenti = 10;


btnSubmit = addEventListener('click', function(){  
  for(let i = 0; i < numeroUtenti; i++) {  
    let input = document.querySelector('[name="email"]').value;
    listaUtentiAbilitati.push(input);
  }
})

console.log(listaUtentiAbilitati);






// const name = document.querySelector('.name').value;
//   document.getElementById('output-name').innerHTML = name;
//   document.querySelector('.name').value = '';