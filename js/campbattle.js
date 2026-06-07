console.log("campBattle.js está ativo!"); //Só pra verficar se fuinciona

//#region Importações
import { sizeCamp, elementsCamp, life, configurate } from './globalsVariables.js';
//#endregion

//#region Gerando o campo
let camp = document.querySelector(".campBattle"); // captura o campBattle do index.html
camp.style.gridTemplateRows = `repeat(${sizeCamp}, 1fr)`;
camp.style.gridTemplateColumns = `repeat(${sizeCamp}, 1fr)`;

let imgsInit = ['url(imgs/wood2.png)', 'url(imgs/wood1.png', 'url(imgs/wood3.png)'];

for (let i = 0; i < sizeCamp; i++) {
    for (let j = 0; j < sizeCamp; j++) {
        let alet = Math.floor(Math.random() * 3);
        let cel = document.createElement('div');
        cel.classList.add('celCamp');
        cel.style.backgroundImage = imgsInit[alet];

        camp.append(cel);
    }
}
//#endregion

//#region criando Matriz
let itensCamp = []; //local que terá todos os indices

for (let i = 0; i < sizeCamp; i++) { //manupula as linhas da matriz
    let lin = []; //guardar os elementos de cada linha
    let j = 0;

    while (j < sizeCamp) {
        let randNum = Math.floor(Math.random() * elementsCamp.length); //cria um número aleatório dependendo da quantidade de elementos nesse caso 0 a 4

        if (elementsCamp[randNum] > 0) {//se o indece sorteado ainda tiver 'elementos' adiciona ele e move pra proxima coluna
            lin.push(randNum);
            elementsCamp[randNum]--;
            j++;
        }
    }
    itensCamp.push(lin);//adiciona a linha completa na matriz
}

console.log(itensCamp)
//#endregion

//#region evento de clicar
let cCel = document.querySelectorAll('.celCamp');
let imgsShip = ['ship1.png', 'ship2.png', 'ship3.png', 'explode.png', 'sea.png'];

itensCamp.forEach((row, rowIndex) => {
    row.forEach((Element, colIndex) => {
        let cel = cCel[rowIndex * sizeCamp + colIndex];
        cel.addEventListener('click', () => {
            cel.style.transform = "rotateY(-360deg) rotateX(-35deg)";

            setTimeout(() => {
                switch (Element) {
                    case 0: cel.style.backgroundImage = `url(imgs/${imgsShip[0]})`; break;
                    case 1: cel.style.backgroundImage = `url(imgs/${imgsShip[1]})`; break;
                    case 2: cel.style.backgroundImage = `url(imgs/${imgsShip[2]})`; break;
                    case 3: cel.style.backgroundImage = `url(imgs/${imgsShip[3]})`; stateHearts(); break;
                    case 4: cel.style.backgroundImage = `url(imgs/${imgsShip[4]})`; break;
                }
            }, 200);
        });
    });
});

//region Vidas do jogo

//#region criando corações
let cLifes = document.querySelector(".heartsLife")//captura a div dos corações
let heartList = []

if (cLifes) {
    for (let i = 0; i < life; i++) {
        let heart = document.createElement('i');
        heart.className = 'iconHeart bi bi-heart-fill';

        cLifes.append(heart);
        heartList.push(3);
    }

    console.log("Lista: " + heartList)
}
//#endregion

//#region perdendo vida
let indiceHeart = 0;
function stateHearts() {
    if (indiceHeart < heartList.length) {
        heartList[indiceHeart]--;

        if (heartList[indiceHeart] <= 0) {
            indiceHeart++;
        }

        StateFrame();
    }
    console.log(heartList)
}
function StateFrame() {
    let cIconsHeart = document.querySelectorAll(".iconHeart")

    cIconsHeart.forEach((element, index) => {
        if (heartList[index] === 2) {
            element.className = 'iconHeart bi bi-heart-half';
        } else if (heartList[index] === 1) {
            element.className = 'iconHeart bi bi bi-heart';
        } else if (heartList[index] <= 0) {
            element.className = 'iconHeart bi bi-heartbreak';
            
            setTimeout( ()=> {
                alert("PERDEU BOBÃO")
            }, 200)
        }
    });
}
//#endregion

//#endregion