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




// Chiedi all’utente la sua email,
// controlla che sia nella lista di chi può accedere,
// stampa un messaggio appropriato sull’esito del controllo.

const output = document.getElementById('output')

// 1 - Chiedi all’utente la sua email,
const emailInserita = false;

// 2 - controlla che sia nella lista di chi può accedere,

// 2.a
const listaEmails = ['gianni@me.com', 'giulio@gmail.com', 'carmelo@gmail.com', 'marco@hotmail.com'];

console.log(listaEmails)


// 2.b
 // Controllo

document.querySelector('[type="submit"]').addEventListener('click',function(){  
    let input = document.querySelector('[name="email"]').value;
    if (emailInserita) {
      listaEmails.push(input);
      
// 3 stampa un messaggio appropriato sull’esito del controllo.
    } else {
      output.innerHTML = 'Non fai parte di questa mailing list';
    }
    
 });









