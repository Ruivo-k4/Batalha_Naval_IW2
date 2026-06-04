//#region Importações
import { life, elementsCamp } from "./globalsVariables.js";
//#endregion

//#region Vidas
let cLifes = document.querySelector(".heartsLife")//captura a div dos corações

if (cLifes) {
    for (let i = 0; i < life; i++) {
        let heart = document.createElement('i');
        heart.className = 'bi bi-heart-fill';

        cLifes.append(heart);
    }
}
//#endregion

//#region Barcos

//#endregion