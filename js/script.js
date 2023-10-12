//MAIL
    //creare il form per la email nell'html
    //creare array con le email certificate
    //creare condizione se la mail è certificato o meno (far apparire messaggio adeguato)

//DADI
    //



//mail
  //variabili e constanti
    //inseriamo le email già registrate nel sistema
const emailVerified = ["ciao@gmail.com", "mekki@gmail.com", "boolean@outlook.it"];
    //prendiamo il bottone invio
const button = document.getElementById('btn-submit');
    //aggiungiamo una variabile di controllo
let founded = false;
    //aggiungiamo eventListener
button.addEventListener('click',
        function(){
            //prendiamo la mail che viene inserita nell'input
        emailUser = document.getElementById('user-email').value;
                console.log(emailUser);
            //aggiungiamo ciclo For per constare se la mail è nella lista
        for (let i = 0; i < emailVerified.lenght; i++); {
                let emailToVerified = emailVerified[i];
                if (emailToVerified === emailUser){
                founded = true
                console.log(emailToVerified);
                }
        }  //verifichiamo che la mail sia registrata nel sistema
        if(founded){
            const boxAnswer = document.querySelector('.answer');
            boxAnswer.innerHTML = `Login effettuato`
        }   else{
            const boxAnswer = document.querySelector('.answer');
            boxAnswer.innerHTML = `Email non registrata`;
        }

        }
)

//consoleLOG
console.log(button);
console.log(emailVerified);
