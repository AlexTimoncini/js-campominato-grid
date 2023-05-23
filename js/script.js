// Consegna
// L'utente clicca su un bottone che genererà una griglia di gioco quadrata. 
// Ogni cella ha un numero progressivo, da 1 a 100. 
// Ci saranno quindi 10 caselle per ognuna delle 10 righe. 
// Quando l'utente clicca su ogni cella, la cella cliccata si colora di azzurro ed emetto un messaggio in console con il numero della cella cliccata.

let gridParent = document.getElementById('grid');
let gridGeneratorDom = document.getElementById('gridGenerator');

gridGeneratorDom.addEventListener('click', function(){
    gridParent.innerHTML = '';
    gridGenerator(100, gridParent);
});






function gridGenerator(cellNumber, gridContainer){
    for (let i = 0; i < cellNumber; i++){
        let cell = document.createElement('div');
        cell.innerHTML = '<p>' + i + '</p>';
        cell.classList.add('cell');
        gridContainer.append(cell);
    }
};