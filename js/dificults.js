console.log("dificults.js está ativo!"); //Só pra verficar se fuinciona

//#region exportações
import { configurate, life, elementsCamp, sizeCamp } from "./globalsVariables.js";
//#endregion

//region Captura dificuldade e definir dados
let btnInit = document.querySelector("#submitDificult");

if (btnInit) { //esse daqui é da página de inicio
    btnInit.addEventListener('click', () => {
        let option = document.querySelector("#c-dificult")
        let val = option.value

        switch (val) {
            case "1":
                localStorage.setItem("sizeCamp", "4");
                localStorage.setItem("life", "1");
                localStorage.setItem("elementsCamp", "[3, 3, 2, 3, 5]");//setando os valores de elementCamp, sizeCamp, Life
                break;
            case "2":
                localStorage.setItem("sizeCamp", "6");
                localStorage.setItem("life", "2");
                localStorage.setItem("elementsCamp", "[7, 7, 8, 7, 9]");
                break;
            case "3":
                localStorage.setItem("sizeCamp", "10");
                localStorage.setItem("life", "6");
                localStorage.setItem("elementsCamp", "[15, 17, 19, 21, 29]");
                break;
        }
    });
}
//#endregion