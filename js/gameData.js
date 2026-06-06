console.log("gameData.js está ativo!"); //Só pra verficar se fuinciona

//#region Importações
import { life, elementsCamp, configurate } from "./globalsVariables.js";
//#endregion

//#region Vidas
let cLifes = document.querySelector(".heartsLife")//captura a div dos corações

if (cLifes) {
    for (let i = 0; i < life; i++) {
        let heart = document.createElement('i');
        heart.className = 'bi bi-heart-fill';
        heart.id = "iconHeart"

        cLifes.append(heart);
    }
}

let cHearts = document.querySelectorAll("#iconHeart");

cHearts.forEach(element => console.log(element));
//#endregion

//#region Barcos
let totShips = 0;

for(let i = 0; i < 3; i++) {
    
}
//#endregion