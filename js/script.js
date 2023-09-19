//1. Variabili
const boxWrapper =    document.querySelector('.wrapper')
const container =    document.querySelector('.custom_container')
const playBtn =      document.querySelector('#play')
const levelSelect =  document.querySelector('#livelli')

//creo la variabile celleNumero e il livelli dei quadrati dentro l'array
let celleNumero;
const livello = [100,81,49];
const booms = [];
console.log(booms);

//2. creo l'evento del click al bottone play
playBtn.addEventListener('click', play);

//--. Volevo creare un bottone di rest totale della pagina
/* resetBtn.addEventListener('click', aZero) */


//3. creo la funzione play per avviare il gioco all'interno del container
function play(){
  // assegno al celleNumero il livello selezionato con dentro l'indice del valore assegnato tramite il valore in html
  celleNumero = livello[levelSelect.value]
  //resetto il tutto  
  reset();
  //4. applico dentro la funzione play un'altra funzione che mi genera la griglia di gioco
  generareGrigliaGioco()
  
  boom();
  
}console.log(booms);
//5. creo la mia funzione generaGrigliaGioco
function generareGrigliaGioco(){
  
  //a. eseguo un ciclo per creare le celle
for(let i = 0; i < celleNumero; i++){
  //b. assegno alla mia const Celle la funzione che mi genera i quadrati
  const celle = creazioneCelle(i);
  console.log(celle);
  //c. appendo le celle dentro al container
  container.append(celle);

  if(booms.includes(this._celleID)){
    
    booms.includes.classList('bomba')
    

  }else{}
}
  
}

//6. creo la mia funzione creazioneCelle che mi genera i quadrati
function creazioneCelle(index){
  //a. creo l'elemento in html del div
  const celle = document.createElement('div');
  //b. assegno alla variabile la classe quadrati
  celle.className = 'quadrati';
  //c. assegno alla variabile un'altra classe dimensioniquadrati e concateno il valore della mia select con indice il valore dell'array
  celle.classList.add('dimensioniquadrati' + celleNumero);
  //d. creo l'id custom per visualizzare il numero indicizzato
  celle._celleID = index;
  console.log(celle);
  //e. creo all'evento click delle mie celle il toogle utilizzando/creando la mia funzione apposita
  celle.addEventListener('click', eventiAlClick);
  return celle;
}
//7. creo la funzione al click della mia cella applicando la classe clicked
function eventiAlClick(){
  console.log(this._celleID);
  this.classList.add('clicked');
  this.removeEventListener('click', eventiAlClick)
}

//4. creo la mia funzione di reset
function reset(){
  container.innerHTML = '';
}

//8. creo la funzione per la creazione delle bombe con dentro i controlli

/**
 * 
 * @param {number} min 
 * @param {number} max 
 */

function boom(){

while(booms.length <= 16){
  bombe = randomBoom(1,celleNumero);
  booms.push(bombe);
}
console.log(booms);
}

function randomBoom(min,max){ 
  return Math.floor(Math.random() * (max - min + 1) + min);
}

/* 

*/