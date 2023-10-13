//MAIL
    //creare il form per la email nell'html
    //creare array con le email certificate
    //creare condizione se la mail è certificato o meno 

//utility
function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
}

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
//reset per la frase di risposta della verificazione
let resetTextEmail = document.getElementById('user-email');

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
        boxAnswer.classList ='bg-success p-0 mt-1 text-white';
        boxAnswer.innerHTML = `Login effettuato`;
        resetTextEmail.value= '';
    }   else    {
        boxAnswer.classList ='bg-danger p-0 mt-1 text-white';
        boxAnswer.innerHTML = `Inserisci una email valida`;
        //creiamo un 'p' e gli diamo le classsi
        const tryWith = document.createElement('p');
        tryWith.classList= 'bg-primary';
        //appendiamo il 'p' dentro il 'div' e ci scriviamo dentro
        boxAnswer.append(tryWith);
        tryWith.innerHTML = `prova con <em>"boolean@outlook.it"</em>`;
    }
});

//aggiungiamo funzione per il reset button
buttonRst.addEventListener('click', function(){
    resetTextEmail.value= '';
    boxAnswer.innerHTML = '';
});


//DICE
    //creare sull'html i 2 giocatori e il bottone
    //dichiarare le variabili e const su js
    //aggiungere funzione del tasto per giocare

//dichiariamo le costanti
const playerUser = document.getElementById('player-one');
const playerBot = document.getElementById('player-two');
const buttonGame = document.getElementById('playgame');
const finalResult = document.getElementById('result');
//creiamo la funzione eventlistener
buttonGame.addEventListener ('click', function(){
    //assegniamo un numero casuale ai player
    const diceUser = getRndInteger(1,6);
    const diceBot = getRndInteger(1,6);
    //scriviamo il numero dentro ai rispettivi box
    playerUser.innerHTML = diceUser;
    playerBot.innerHTML = diceBot;
    
    if (diceUser > diceBot) {
    finalResult.innerHTML = `Grande! Ho vinto!`;
    finalResult.classList.add ('text-right', 'bg-success', 'px-5', 'text-white');
    finalResult.classList.remove ('bg-info','text-left','bg-danger','text-center');
    }   else if (diceUser < diceBot) {
        finalResult.innerHTML = `Mi spiace ma ha vinto il computer :('`;
        finalResult.classList.add ('text-left', 'bg-danger', 'px-5', 'text-white');
        finalResult.classList.remove ('bg-success','text-right','bg-info','text-center');
    }   else    {
        finalResult.innerHTML = `Mhmmm un pareggio! Credi nel destino?`;
        finalResult.classList.add ('px-5', 'text-white', 'text-center','bg-info');
        finalResult.classList.remove ('bg-success','text-right','bg-danger','text-left');
    }   
});

