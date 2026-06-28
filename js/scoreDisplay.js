console.log("scoreDisplay.js está funcionando!!");

//#region importações
import { nameUser, scoreUser, positionUser, game } from "./globalsVariables.js";
//#endregion

//#region tabela
let table = document.querySelector("#content_data");

if (table) {
    let body = document.querySelector("#table_body");
    let data = [nameUser, scoreUser, positionUser];
    let pos = positionUser;

    let row = document.createElement('tr');
    row.classList.add = "table_row";

    for (let j = 0; j < 3; j++) {
        let col = document.createElement('th');
        col.classList.add = "table_cow";

        col.innerHTML = data[j];
        row.append(col);
    }
    body.append(row);

    if (game === "play") {
        localStorage.setItem("gameState", "end");
        pos += 1;
    }

    localStorage.setItem("positionUser", pos);
}
//#endregion

//#region resetar
let reset = document.querySelector("#reset_footer");

if (reset) {
    reset.addEventListener('click', () => {

    })
}
//#endregion