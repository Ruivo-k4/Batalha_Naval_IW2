console.log("campBattle.js está ativo!"); //Só pra verficar se fuinciona

//#region Importações
import { sizeCamp, elementsCamp, life, configurate, totShips, totBomb } from './globalsVariables.js';
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

function comboSequence(r, c) {
    let scoreDisplay = document.querySelector("#scoreText");
    let celIndex = r * sizeCamp + c;
    let itemCel = cCel[celIndex];
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
    }

    scoreDisplay.innerHTML = "Pontos: " + score;
    return (score, combo)
}

//#region bonus de combo

function comboBonus(r, c) {
    let offSet = [
        [r - 1, c], // Cima
        [r + 1, c], // Baixo
        [r, c - 1], // Esquerda
        [r, c + 1]  // Direita
    ];

    offSet.forEach(([vRow, vCol]) => { //vamos entrar dentro da mascara
        if (combo >= totShips * 0.37) {
            if (vRow >= 0 && vRow < sizeCamp && vCol >= 0 && vCol < sizeCamp) { //não deixa ele sair fora da matriz
                let offsIndex = vRow * sizeCamp + vCol;
                let nCel = cCel[offsIndex]; //neighbor (vizinho) celula -> cCel[item achado]

                if (!nCel.classList.contains('revealed')) {//somente os que não foram revelados
                    let nValue = itensCamp[vRow][vCol]; //pega qual é o elemento da matriz

                    nCel.style.transform = "rotateY(-360deg) rotateX(-35deg)";

                    // Revela a imagem do vizinho após o mesmo tempo de animação
                    setTimeout(() => {
                        nCel.style.backgroundImage = `url(imgs/${imgsShip[nValue]})`;//coloca a imagem correta
                    }, 200);

                    setTimeout(() => {
                        let alet = Math.floor(Math.random() * 3);

                        nCel.style.transform = "none";
                        nCel.style.backgroundImage = imgsInit[alet];
                    }, 800);
                }
            }
        }
    });
}
//#endregion

//#endregion

//#region menu-bar exibições
let cBbData = document.querySelector("#bombsData");//onde vai mostrar o núnero de bombas
let bombsQnt = totBomb;

function bombDisplay() {
    bombsQnt -= 1;
    cBbData.innerHTML = "Bombas: " + bombsQnt;
}

cBbData.innerHTML = "Bombas: " + bombsQnt;

let cShipData = document.querySelector("#shipsData");
let shipQnt = totShips;

function shipDisplay() {
    shipQnt -= 1;
    cShipData.innerHTML = "Barcos: " + shipQnt;
}

cShipData.innerHTML = "Barcos: " + shipQnt;

//#endregion

//#region sons
let sound = document.querySelector("#soundsGame")

function sounds() {
    /*essa parte é somente para o play, 
    troque o sound.src na parte de "evento de clicar"*/

    sound.currentTime = 0;//volta o som pro começo, evita repetir
    sound.play();
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

            if (cel.classList.contains('revealed')) {//se o elemento ja foi revelado, nem deixa o resto funcionar
                return;
            }

            cel.classList.add("revealed");

            setTimeout(() => {
                switch (Element) {
                    case 0: cel.style.backgroundImage = `url(imgs/${imgsShip[0]})`; winner(); comboBonus(rowIndex, colIndex); comboSequence(rowIndex, colIndex); sound.src = "../audios/som_barco1.mp3"; sounds(); break;
                    case 1: cel.style.backgroundImage = `url(imgs/${imgsShip[1]})`; winner(); comboBonus(rowIndex, colIndex); comboSequence(rowIndex, colIndex); sound.src = "../audios/som_barco1.mp3"; sounds(); break;
                    case 2: cel.style.backgroundImage = `url(imgs/${imgsShip[2]})`; winner(); comboBonus(rowIndex, colIndex); comboSequence(rowIndex, colIndex); sound.src = "../audios/som_barco1.mp3"; sounds(); shipDisplay(shipQnt); break;
                    //0 - 1 - 2 é tudo barco
                    case 3: cel.style.backgroundImage = `url(imgs/${imgsShip[3]})`; stateHearts(); combo = 0; comboImg.src = "imgs/ponto1x.png"; bombDisplay(); sound.src = "../audios/explosão.mp3"; sounds(); break;
                    //bomba
                    case 4: cel.style.backgroundImage = `url(imgs/${imgsShip[4]})`; combo = 0; comboImg.src = "imgs/ponto1x.png"; break;
                    //água
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

//#endregion

//#region "responsividade" campo
if (sizeCamp >= 3 && sizeCamp <= 5) {
    cCel.forEach(element => {
        element.style.height = "60px";
        element.style.width = "60px"
    });
} else if (sizeCamp > 5 && sizeCamp <= 8) {
    cCel.forEach(element => {
        element.style.height = "50px";
        element.style.width = "50px"
    });
} else {
    cCel.forEach(element => {
        element.style.height = "35px";
        element.style.width = "35px"
    });
}
//#endregion