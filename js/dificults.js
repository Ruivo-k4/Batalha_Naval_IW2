//#region exportações
import { configurate, life, elementsCamp, sizeCamp } from "./globalsVariables.js";
//#endregion

//region Captura dificuldade e definir dados
let btnInit = document.querySelector("#submitDificult");

if (btnInit) {
    btnInit.addEventListener('click', () => {
        let option = document.querySelector("#c-dificult")
        let val = option.value

        switch (val) {
            case "1":
                localStorage.setItem("sizeCamp", "4");
                localStorage.setItem("life", "3")
                localStorage.setItem("elementsCamp", "[4, 4, 3, 3, 2]");//setando os valores de elementCamp, sizeCamp, Life
                break;
            case "2":
                localStorage.setItem("sizeCamp", "8");
                localStorage.setItem("life", "4")
                localStorage.setItem("elementsCamp", "[12, 12, 12, 12, 16]");//setando os valores de elementCamp, sizeCamp, Life
                break;
            case "3":
                localStorage.setItem("sizeCamp", "12");
                localStorage.setItem("life", "9")
                localStorage.setItem("elementsCamp", "[28, 29, 29, 29, 29]");//setando os valores de elementCamp, sizeCamp, Life
                break;
        }
    });
}
//#endregion