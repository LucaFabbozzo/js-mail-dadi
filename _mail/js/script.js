

// Chiedi all’utente la sua email,
// controlla che sia nella lista di chi può accedere,
// stampa un messaggio appropriato sull’esito del controllo.

// 1 - Chiedi all’utente la sua email,
const emailInserita = prompt('Inserisci la tua mail');

// 2 - controlla che sia nella lista di chi può accedere,

// 2.a
const listaEmails = ['gianni@me.com', 'giulio@gmail.com', 'carmelo@gmail.com', 'marco@hotmail.com'];

let accountRegistrato = false;

listaEmails.push(emailInserita);
// 2.b
 // Controllo

// document.querySelector('[type="submit"]').addEventListener('click',function(){  
//     let input = document.querySelector('[name="email"]').value;

 for(let i = 0; i < listaEmails.length; i++) {
  // listaEmails.push(emailInserita);
   if (emailInserita === listaEmails[i]) {
     accountRegistrato = true;
    }

    console.log(listaEmails[i]);
 }

 if(accountRegistrato) {
  console.log('ciao bentornato')
 } else {
  console.log('la tua mail non esiste')
 }

   
    










