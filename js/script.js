// Copiamo la griglia fatta ieri nella nuova repo e aggiungiamo la logica del gioco (attenzione: non bisogna copiare tutta la cartella dell'esercizio ma solo l'index.html, e le cartelle js/ css/ con i relativi script e fogli di stile, per evitare problemi con l'inizializzazione di git). CHECK!
// Il computer deve generare 16 numeri casuali nello stesso range della difficoltà prescelta: le bombe. Attenzione: **nella stessa cella può essere posizionata al massimo una bomba, perciò nell’array delle bombe non potranno esserci due numeri uguali.
// In seguito l'utente clicca su una cella: se il numero è presente nella lista dei numeri generati - abbiamo calpestato una bomba - la cella si colora di rosso e la partita termina. Altrimenti la cella cliccata si colora di azzurro e l'utente può continuare a cliccare sulle altre celle.
// La partita termina quando il giocatore clicca su una bomba o quando raggiunge il numero massimo possibile di numeri consentiti (ovvero quando ha rivelato tutte le celle che non sono bombe).
// Al termine della partita il software deve comunicare il punteggio, cioè il numero di volte che l’utente ha cliccato su una cella che non era una bomba.
// BONUS:
// Aggiungere una select accanto al bottone di generazione, che fornisca una scelta tra tre diversi livelli di difficoltà:
// difficoltà 1 ⇒ 100 caselle, con un numero compreso tra 1 e 100, divise in 10 caselle per 10 righe;
// difficoltà 2 ⇒ 81 caselle, con un numero compreso tra 1 e 81, divise in 9 caselle per 9 righe;
// difficoltà 3 ⇒ 49 caselle, con un numero compreso tra 1 e 49, divise in 7 caselle per 7 righe;
// Consigli del giorno: :party_wizard:
// Scriviamo prima cosa vogliamo fare passo passo in italiano, dividiamo il lavoro in micro problemi.
// Ad esempio:
// Di cosa ho bisogno per generare i numeri? Proviamo sempre prima con dei console.log() per capire se stiamo ricevendo i dati giusti.
// Le validazioni e i controlli possiamo farli anche in un secondo momento.

// spesa: bottone + app + numChildren
let bottone = document.getElementById('bottone');

let app = document.getElementById('app');

const numChildren = 100;

// cliccando il bottone mi appare la griglia
// la quale ha 100 box che se cliccati diventano azzurri 
// inoltre stampano in console il numero relativo alla loro posizione
bottone.addEventListener('click', function(){
    app.classList.replace('d-n', 'd-b');
    let bombs = []; // inserisco gli elementi randomici all'interno dell'array

    for (let i = 0; i < 16; i++) {
        bombs.push(generateUniqueRandomNumber(1, 100, bombs));
    }

    for (let i = 1; i < numChildren; i++) {
        let childEl = document.createElement('div');
        childEl.classList.add('child');
        childEl.innerHTML = '';
        app.appendChild(childEl);
        childEl.addEventListener('click', function(){
            if(bombs.includes(i)){
                childEl.classList.add('bg-click-bomb');
                console.log('Ho perso!');
            } else {
                childEl.classList.add('bg-click');
                console.log(`Div ${i}`);
            }
        })
    }
});



function getRndInteger(minimum, maximum) {
    return Math.floor(Math.random() * (maximum - minimum + 1) ) + minimum;
};



function generateUniqueRandomNumber(min, max, blacklist) {
    let isFound = false;
    let randomNumber;

    while ( !isFound ){
        randomNumber = getRndInteger(min, max);

        if ( !blacklist.includes(randomNumber) ){
            isFound = true;
        }
    }

    return randomNumber;
};

// Ho provato a fare l'esercizio usando la correzione di Clelia ed ho capito che dal codice di qualcun altro mi confondo
// Sopratutto quando provo ad implementare soluzioni che non corrispondono al mio modus operandi 
// se riesco a strappare un po' di tempo nei prossimi giorni cerco di continuare l'esercizio autonomamente 
// ho lavorato un ora in cui più che risolvere problemi ne creavo di nuovi 
// per ora mi focalizzo sulle slide di domani...
