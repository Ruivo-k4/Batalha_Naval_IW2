console.log("scoreDisplay.js está funcionando!!");

//#region importações
import { nameUser } from "./globalsVariables.js";
//#endregion

let table = document.querySelector("#content_data");

if (table) {
    let body = document.querySelector("#table_body");
    let data = [nameUser, nameUser, 10]
    
    for (let i = 0; i < 10; i++) {
        let row = document.createElement('tr');
        row.classList.add = "table_row";

        for(let j = 0; j < 3; j++){
            let col = document.createElement('th');
            col.classList.add = "table_cow";

            col.innerHTML = data[j];
            row.append(col);
        }
        body.append(row);
    }
}