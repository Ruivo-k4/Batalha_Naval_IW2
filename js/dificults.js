console.log("dificults.js está ativo!"); //Só pra verficar se fuinciona

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
                localStorage.setItem("life", "1")
                localStorage.setItem("elementsCamp", "[3, 3, 2, 3, 5]");//setando os valores de elementCamp, sizeCamp, Life
                break;
            case "2":
                localStorage.setItem("sizeCamp", "4");
                localStorage.setItem("life", "4")
                localStorage.setItem("elementsCamp", "[12, 12, 12, 12, 16]");//setando os valores de elementCamp, sizeCamp, Life
                break;
            case "3":
                localStorage.setItem("sizeCamp", "10");
                localStorage.setItem("life", "9")
                localStorage.setItem("elementsCamp", "[28, 29, 29, 30, 28]");//setando os valores de elementCamp, sizeCamp, Life
                break;
        }
    });
}
//#endregion