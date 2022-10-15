// Chiedi all’utente la sua email,
// controlla che sia nella lista di chi può accedere,
// stampa un messaggio appropriato sull’esito del controllo.

// 1 - Chiedi all’utente la sua email,
const emailInserita = prompt('Inserisci la tua mail');

// 2 - controlla che sia nella lista di chi può accedere,

// 2.a
const listaEmails = ['gianni@me.com', 'giulio@gmail.com', 'carmelo@gmail.com', 'marco@hotmail.com'];


let isAccountRegistrato = false;

  listaEmails.push(emailInserita);
// 2.b
 // Controllo

 for(let i = 0; i < listaEmails.length; i++) {
   
   if (emailInserita === (i + 1)) {
     isAccountRegistrato = true;
    }

    console.log(isAccountRegistrato);
    
 }
 
//  messaggio

 if(isAccountRegistrato) {
  console.log('ciao bentornato')
 } else if (isAccountRegistrato) {
  console.log('la tua mail non esiste')
 }

   
    










