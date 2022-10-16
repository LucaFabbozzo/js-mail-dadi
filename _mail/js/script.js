// Chiedi all’utente la sua email,
// controlla che sia nella lista di chi può accedere,
// stampa un messaggio appropriato sull’esito del controllo.
const input = document.querySelector('[name="email"]');
const btnInvia = document.querySelector('.btn');
const output = document.getElementById('output');
const reset = document.querySelector('.reset');


const listaEmails = ['gianni@me.com', 'giulio@gmail.com', 'carmelo@gmail.com', 'marco@hotmail.com', 'lucafabbozzo@gmail.com']; 

let isAccountRegistrato = false;


  btnInvia.addEventListener('click', function(){
    const emailInserita = input.value;
    input.value = '';
    for(let i = 0; i < listaEmails.length; i++) {
    if (listaEmails[i] === emailInserita) {  
      isAccountRegistrato = true;
      }
    }

    if(isAccountRegistrato) {
      output.innerText = 'Ciao bentornato! Iniziamo?';
    } else {
      output.innerText = 'La tua mail non è presente nel nostro database, crea il tuo account personale.';
    }
  })

  reset.addEventListener('click', function() {
    output.innerText = '';
  })


   
    










