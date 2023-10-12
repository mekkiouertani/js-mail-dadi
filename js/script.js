//MAIL
    //creare il form per la email nell'html
    //creare array con le email certificate
    //creare condizione se la mail è certificato o meno (far apparire messaggio adeguato)

//inseriamo le email già registrate nel sistema
const emailVerified = [
    "ciao@gmail.com", 
    "mekki@gmail.com", 
    "boolean@outlook.it"
];

//prendiamo il bottone invio e reset
const button = document.getElementById('btn-submit');
const buttonRst = document.getElementById('btn-reset');
//aggiungiamo una variabile di controllo
let founded = false;
//prendiamo il div dove inseriremo la risposta della verificazione
const boxAnswer = document.querySelector('.answer');

//aggiungiamo eventListener
button.addEventListener('click',function(){
    //prendiamo la mail che viene inserita nell'input
    emailUser = document.getElementById('user-email').value;
    console.log(emailUser);

    //aggiungiamo ciclo For per constare se la mail è nella lista
    for (let i = 0; i < emailVerified.length; i++) {
        let emailToVerified = emailVerified[i];
        if (emailToVerified === emailUser){
            founded = true;
            console.log(emailToVerified);
        }
    } 

    //verifichiamo che la mail sia registrata nel sistema e stampiamo il messaggio
    if(founded) {
        boxAnswer.innerHTML = `Login effettuato`;
    }   else    {
        boxAnswer.innerHTML = `Inserisci una email valida <br> prova con <em>"boolean@outlook.com"</em>`;
    }
})

//aggiungiamo funzione per il reset button
buttonRst.addEventListener('click', function(){
    let resetTextEmail = document.getElementById('user-email').value= '';
})

//consoleLOG
console.log(button);
console.log(buttonRst);
console.log(emailVerified);

