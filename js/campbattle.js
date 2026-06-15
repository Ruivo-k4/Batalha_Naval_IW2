console.log("campBattle.js está ativo!"); //Só pra verficar se fuinciona

//#region Importações
import { sizeCamp, elementsCamp, life, configurate, totShips } from './globalsVariables.js';
//#endregion

let shipsTot = 0;//dita quando o jogo acaba
console.log(totShips);

function winner() {
    shipsTot += 1;
    console.log(totShips)

    if (shipsTot == totShips) {
        setTimeout(() => {
            alert("Você venceu!!");
            location.reload();
        }, 1000);
    }
}

let chances = life; //só pra poder alterar a vida diretamente por aqui
function loose() {
    chances -= 1
    console.log("Vidas: " + chances);
    if (chances <= 0) {
        setTimeout(() => {
            alert("Você Perdeu Bobão!!");
            location.reload();
        }, 600);
    }
}

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

//#region combos
let score = 0
let combo = 0
let comboImg = document.querySelector("#comboImage")

function comboSequence() {
    let scoreDisplay = document.querySelector("#scoreText");
    combo += 1;

    //ajuste dos multiplicadores de comapo (CM)
    if (combo >= 0 && combo < totShips * 0.25) {
        score += 100;
    } else if (combo >= totShips * 0.25 && combo < totShips * 0.37) {
        score += 100 * 2;
    } else if (combo >= totShips * 0.37 && combo < totShips * 0.5) {
        score += 100 * 4;
    } else if (combo >= totShips * 0.5 && combo < totShips * 0.90) {
        score += 100 * 8;
    } else {
        score += 100 * 10;
    }

    console.log(combo)

    if (comboImg) {
        comboImg.style.display = "flex";
        comboImg.style.opacity = "1";

        //sistema de troca de imagens dinâmico
        if (combo == Math.round(totShips * 0.25)) {
            comboImg.src = "imgs/combo.png";
        } else if (combo == Math.round(totShips * 0.37)) {
            comboImg.src = "imgs/superCombo.png";
        } else if (combo == Math.round(totShips * 0.5)) {
            comboImg.src = "imgs/hiperCombo.png";
        } else if (combo == Math.round(totShips * 0.90)) {
            comboImg.src = "imgs/comboSea.png";
        }
        else {
            comboImg.style.display = "none"
        }

        setTimeout(() => { // dá um tempo antes de sumir
            comboImg.style.opacity = "0";
            setTimeout(() => {
                comboImg.style.display = "none";
            }, 1000);
        }, 1500);
    }

    scoreDisplay.innerHTML = "Pontos: " + score;
    return (score, combo)
}
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
                    case 0: cel.style.backgroundImage = `url(imgs/${imgsShip[0]})`; winner(); comboSequence(); break;
                    case 1: cel.style.backgroundImage = `url(imgs/${imgsShip[1]})`; winner(); comboSequence(); break;
                    case 2: cel.style.backgroundImage = `url(imgs/${imgsShip[2]})`; winner(); comboSequence(); break;
                    case 3: cel.style.backgroundImage = `url(imgs/${imgsShip[3]})`; stateHearts(); combo = 0; break;
                    case 4: cel.style.backgroundImage = `url(imgs/${imgsShip[4]})`; combo = 0; break;
                }
            }, 200);
        });
    });
});
//#endregion

//#region Vidas do jogo

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
}

function StateFrame() {
    let cIconsHeart = document.querySelectorAll(".iconHeart")

    cIconsHeart.forEach((element, index) => {
        if (heartList[index] === 2) {
            element.className = 'iconHeart bi bi-heart-half';
        } else if (heartList[index] === 1) {
            element.className = 'iconHeart bi bi bi-heart';
        } else if (heartList[index] <= 0) {
            if (!element.classList.contains('bi-heartbreak')) { //se o coração ainda não tem essa classe (não está quebrado)
                element.className = 'iconHeart bi bi-heartbreak';
                loose();
            }
        }
    });
}
//#endregion

//#region "responsividade" campo
if (life == 1) {
    cCel.forEach(element => {
        element.style.height = "60px";
        element.style.width = "60px"
    });
} else if (life == 4) {
    cCel.forEach(element => {
        element.style.height = "50px";
        element.style.width = "50px"
    });
} else {
    cCel.forEach(element => {
        element.style.height = "40px";
        element.style.width = "40px"
    });
}
//#endregion