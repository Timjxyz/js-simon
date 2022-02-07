//creo la variabile container
const containerElement=document.querySelector('.container')


//Container in cui racchiudo i numericasuali
const containerNumber=document.querySelector('.container-number');

//Inizializzato array vuoto
let randomNumbers=[];

//Ciclo una serie di 5 numeri e li pusho all'interno del container
for(let i =0; i<5;i++){
    randomNumbers.push(getRandomNumber(1,100));
}
console.log(randomNumbers)

//Scrivo all'interno del container-number una serie di 5 numeri casuali
containerNumber.innerHTML= randomNumbers


setTimeout(myFUnction,30*1000);


function myFUnction(){
    containerNumber.innerHTML='';
    setTimeout(function() {
        //Richiesta di inserimento di 5 valori da parte del giocatore
            for(let i=0;i<5;i++){
                scegliUnNumero.push(parseInt(prompt('Inserisci un numero con valore da 1-100')));
            }
            console.log(scegliUnNumero)
                 
            
           
        
            let numeriScelti;
            let numeriRaScelti;
           for(i=0;i<scegliUnNumero.length && i<randomNumbers.length;i++){

               numeriScelti=scegliUnNumero[i];
               numeriRaScelti=randomNumbers[i];

               if(numeriScelti==numeriRaScelti){
                    let stampa=[''];
                    
                    primoElemento=stampa.shift();
                   stampa.push(numeriScelti)
                   console.log(stampa)
                   
                   containerNumber.innerHTML+=stampa;
                   
                }
            }
            
        
    }, 250);
    let scegliUnNumero=[];
    
}



  
    



/**********************************************/
//Inizio parte riguardante funzioni

//Funzione per la richiesta di inserire 5 valori


/*********************/

//Funzione che genera numeri casuali
function getRandomNumber(min, max){
    return Math.floor(Math.random() * (max - min +1)) + min;
}



