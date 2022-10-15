// Chiedi all’utente la sua email,
// controlla che sia nella lista di chi può accedere,
// stampa un messaggio appropriato sull’esito del controllo.

// 1 - Chiedi all’utente la sua email,
 const emailInserita = prompt('Scrivi qui la tua mail');

// 2 - controlla che sia nella lista di chi può accedere,
// 2.a
const listaEmails = ['gianni@me.com', 'giulio@gmail.com', 'carmelo@gmail.com', 'marco@hotmail.com', 'lucafabbozzo@gmail.com']; 

let isAccountRegistrato = false;

// 2.b
 // Controllo

 for(let i = 0; i < listaEmails.length; i++) {
  
   if (listaEmails[i] === emailInserita) {  
     isAccountRegistrato = true;
    }
 }

//  messaggio

 if(isAccountRegistrato) {
  console.log('ciao bentornato')
 } else {
  console.log('la tua mail non esiste, iscriviti in questo account')
 }

   
    










