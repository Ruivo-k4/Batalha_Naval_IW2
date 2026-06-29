console.log("global,Variables.js está ativo!"); //Só pra verficar se fuinciona

export let sizeCamp = Number(localStorage.getItem("sizeCamp")) || 4;
export let life = Number(localStorage.getItem("life")) || 3;
export let elementsCamp = JSON.parse(localStorage.getItem("elementsCamp")) || [3, 3, 2, 3, 5] //barco1, barco2, barco3, bomba, agua

export let totShips = elementsCamp[0] + elementsCamp[1] + elementsCamp[2];
export let totBomb = elementsCamp[3];

export let nameUser = localStorage.getItem("nameUser") || "User440";
export let scoreUser = Number(localStorage.getItem("scoreUser")) || 0;
export let positionUser = Number(localStorage.getItem("positionUser")) || 1;

export let game = localStorage.getItem("gameState") || "play";

export function configurate(newElements, newSize, newLife, newHeart, newNameUser, newScore, newPosition, newGame) {
    elementsCamp.length = 0;
    elementsCamp.push(...newElements);

    sizeCamp = newSize;
    life = newLife;

    totShips = elementsCamp[0] + elementsCamp[1] + elementsCamp[2];
    totBomb = elementsCamp[3];

    nameUser = newNameUser;
    scoreUser = newScore;
    positionUser = newPosition;

    game = newGame;

    localStorage.setItem("elementsCamp", JSON.stringify(elementsCamp));
    localStorage.setItem("sizeCamp", sizeCamp);
    localStorage.setItem("life", life);
    localStorage.setItem("nameUser", newNameUser);
    localStorage.setItem("scoreUser", newScore);
    localStorage.setItem("positionUser", newPosition);
    localStorage.setItem("gameState", newGame);
}