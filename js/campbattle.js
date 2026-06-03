//#region Importações
import { sizeCamp } from './dificult.js';
//#endregion

console.log("campBattle.js está ativo!"); //Só pra verficar se fuinciona

let camp = document.querySelector(".campBattle"); // captura o campBattle do index.html
camp.style.gridTemplateRows = `repeat(${sizeCamp}, 1fr)`;
camp.style.gridTemplateColumns = `repeat(${sizeCamp}, 1fr)`;

for (let i = 0; i < sizeCamp; i++) {
    for (let j = 0; j < sizeCamp; j++) {
        let cel = document.createElement('div');
        cel.classList.add('celCamp');
        cel.style.backgroundImage = 'url("imgs/imgTest.png")';

        camp.append(cel);
    }
}

//#region criando Matriz
let itensCamp = []

for (let i = 0; i < sizeCamp; i++) {
    let lin = [];
    for (let j = 0; j < sizeCamp; j++) {
        lin.push(0);
    }
    itensCamp.push(lin);
}

console.log(itensCamp)
//#endregion

//#region evento de clicar
let cCel = document.querySelectorAll('.celCamp');

itensCamp.forEach((row, rowIndex) => {
    row.forEach((Element, colIndex) => {
        let cel = cCel[rowIndex * sizeCamp + colIndex];
        cel.addEventListener('click', () => {
            cel.style.transform = "rotateY(-180deg)";

            setTimeout(() => {
                switch(Element){
                    case 0: cel.style.backgroundImage = ""; break;
                }
            }, 100);
        });
    });
});

//#endregion