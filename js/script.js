//MAIL
    //creare il form per la email nell'html
    //creare array con le email certificate
    //creare condizione se la mail è certificato o meno (far apparire messaggio adeguato)

//DADI
    //



//mail
    //inseriamo le email già registrate nel sistema
const emailVerified = ["ciao@gmail.com", "boolean@outlook.it", "mekki@gmail.com"];
    //prendiamo il bottone invio
const button = document.getElementById('btn-submit');
    //aggiungiamo eventListener
button.addEventListener('click',
        function(){
            //prendiamo la mail che viene inserita nell'input
        emailUser = document.getElementById('user-email').value;
                console.log(emailUser);
        }
)







//consoleLOG
console.log(button);
