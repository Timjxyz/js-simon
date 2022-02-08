//creo la variabile container
const messaggio=document.getElementById('messaggio')


//Container in cui racchiudo i numericasuali
const containerNumber=document.querySelector('.container-number');

//Inizializzato array vuoto
let randomNumbers=[];

//Ciclo una serie di 5 numeri e li pusho all'interno del container
while(randomNumbers.length<5){
    const numeroGenerato=getRandomNumber(1,100);
    if(!randomNumbers.includes(numeroGenerato)){
        randomNumbers.push(numeroGenerato)
    }
}

console.log(randomNumbers)

//Scrivo all'interno del container-number una serie di 5 numeri casuali
containerNumber.innerHTML= randomNumbers;


setTimeout(resetNumber,1*1000);


function resetNumber(){
    containerNumber.innerHTML='';
    setTimeout(function() {
             //chiedo all'utente di inserire 5 numeri che ricorda
            const numeriInseriti= getNumeriUtente()
            console.log(numeriInseriti)
            
            //verifico se ci sono numeri uguali tra quelli inseriti e quelli random
            const numeriIndovinati= verificaNumeriIndovinati(randomNumbers,numeriInseriti);
            console.log(numeriIndovinati)

            containerNumber.innerHTML=numeriIndovinati
            stampaNumeriIndovinati(numeriIndovinati);
            
           
        
    }, 250);
    
    
}

   



/**********************************************/
//Inizio parte riguardante funzioni

//Funzione per la richiesta di inserire 5 valori


/*********************/

//Funzione che genera numeri casuali
function getRandomNumber(min, max){
    return Math.floor(Math.random() * (max - min +1)) + min;
}


/*********************/
//Funzione  che richiede numeri utente
function getNumeriUtente(){
    const numeriUtente=[];

    while(numeriUtente.length<5){
        numero=parseInt(prompt('Inserisci un numero con valore da 1-100'));
        if(!numeriUtente.includes(numero) &&! isNaN(numero) && numero<=100 && numero>0){
            numeriUtente.push(numero);
        }
    }

    return numeriUtente;
}


/*********************/
//Verifico che i numeri inseriti siano uguali a quelli random
function verificaNumeriIndovinati(arrayNumeriGenerati, arrayNumeriInseriti) {

    const indovinati = [];

    for (let i = 0; i < arrayNumeriInseriti.length; i++) {
        if (arrayNumeriGenerati.includes(arrayNumeriInseriti[i])) {
            indovinati.push(arrayNumeriInseriti[i]);
        }
    }

    return indovinati;

}


function stampaNumeriIndovinati(arrayNumeriIndovinati) {

    const qtaNumeriIndovinati = arrayNumeriIndovinati.length;
    let text =  qtaNumeriIndovinati == 1? ' numero':'numeri';
    messaggio.innerHTML = 'Hai indovinato ' + qtaNumeriIndovinati + ' ' + text + ' [' + arrayNumeriIndovinati + ']';
   
}
