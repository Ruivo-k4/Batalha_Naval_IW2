console.log("scoreDisplay.js está funcionando!!");

//#region importações
import { nameUser, scoreUser, positionUser, game, rankUsers } from "./globalsVariables.js";
//#endregion

//#region criando os rankings
let player = JSON.parse(localStorage.getItem("rankUsers")) || [];
let gameNaw = game;

console.log("nome usuario: "+nameUser)

//#endregion

//#region tabela
let table = document.querySelector("#content_data");

if (table) {
    let body = document.querySelector("#table_body");
    body.innerHTML = ""; // Garante que a tabela comece limpa

    // 2. Renderiza o histórico na tela
    player.forEach((jogador) => {
        let row = document.createElement('tr');
        row.classList.add("table_row");

        let data = [jogador.name, jogador.score, jogador.position];

        for (let j = 0; j < 3; j++) {
            let col = document.createElement('td');
            col.classList.add("table_cow");
            col.textContent = data[j];
            row.append(col);
        }
        body.append(row);
    });
}
//#endregion

//#region resetar
let reset = document.querySelector("#reset_footer");

if (reset) {
    reset.addEventListener('click', () => {

    })
}
//#endregion