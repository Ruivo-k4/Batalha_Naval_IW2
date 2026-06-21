console.log("dificults.js está ativo!"); //Só pra verficar se fuinciona

//#region exportações
import { configurate, life, elementsCamp, sizeCamp, nameUser } from "./globalsVariables.js";
//#endregion

//region Captura dificuldade e definir dados
let btnInit = document.querySelector("#submitDificult");
let direct = document.querySelector("#directPag");

if (btnInit) { //esse daqui é da página de inicio
    btnInit.addEventListener('click', () => {
        let option = document.querySelector("#c-dificult")
        let val = option.value

        //#region Nome usuario
        let userName = document.querySelector("#input-nome");
        let name = userName.value;

        localStorage.setItem("nameUser", name);
        //#endregion

        switch (val) {
            case "1":
                localStorage.setItem("sizeCamp", "4");
                localStorage.setItem("life", "1");
                localStorage.setItem("elementsCamp", "[3, 3, 2, 3, 5]");//setando os valores de elementCamp, sizeCamp, Life
                direct.href = "../index.html";
                break;
            case "2":
                localStorage.setItem("sizeCamp", "6");
                localStorage.setItem("life", "2");
                localStorage.setItem("elementsCamp", "[7, 7, 8, 7, 9]");
                direct.href = "../index.html";
                break;
            case "3":
                localStorage.setItem("sizeCamp", "10");
                localStorage.setItem("life", "6");
                localStorage.setItem("elementsCamp", "[15, 17, 19, 21, 29]");
                direct.href = "../index.html";
                break;
            case "4":
                direct.href = "#";
                persoDificult();
                break;
        }
    });
}

//#endregion

//#region personalização

function persoDificult() {
    //#region mudança de tela
    let cData = document.querySelector(".data");
    let cForm = document.querySelector(".forms_data")

    if (cData && cForm) {
        cData.style.display = "none";
        cForm.style.display = "flex";
    }
    //#endregion

    //#region baitolagem da seta e outros css
    let backBtn = document.querySelector('.bi-arrow-left-square');

    if (backBtn) {
        backBtn.addEventListener("mouseover", () => {
            backBtn.classList.remove('bi-arrow-left-square');
            backBtn.classList.add('bi-arrow-left-square-fill')
        });

        backBtn.addEventListener("mouseout", () => {
            backBtn.classList.remove('bi-arrow-left-square-fill')
            backBtn.classList.add('bi-arrow-left-square');
        });
    }

    let container = document.querySelector(".container");

    if (container) {
        container.style.backgroundColor = "white";
    }
    //#endregion

    //#region configuração da dificuldade
    let cInputs = document.querySelector("#configurate");

    if (configurate) {
        let camp = document.querySelector("#size_camp");
        let life = document.querySelector("#qnt-lifes");

        let boat = document.querySelector("#qnt-botes");
        let barc = document.querySelector("#qnt-barcos");
        let ship = document.querySelector("#qnt-navios");
        let bomb = document.querySelector("#qnt-bomb");
        let wave = document.querySelector("#qnt-wave");

        let itens = [boat, barc, ship, bomb, wave];

        let somaItens = 0;
        let result = 0;
        let displayItens = document.querySelector("#itensDisp");

        camp.addEventListener('input', () => {

            if (camp.value !== "" && camp.value <= 10 && camp.value >= 3) {
                itens.forEach(element => {
                    element.disabled = false;
                    element.value = Math.floor((camp.value * camp.value) / 5)
                })
                life.disabled = false;
            } else {
                itens.forEach(element => {
                    element.disabled = true;
                    element.value = "";
                })
                life.disabled = true;
                life.value = "";
            }

            display();

            itens.forEach(element => {
                element.addEventListener("input", () => {
                    display();
                })
            });
        });

        function display() {
            somaItens = 0;

            itens.forEach(element => {
                somaItens += Number(element.value) || 0;
            })

            result = (camp.value * camp.value) - somaItens;

            displayItens.innerHTML = "Itens: " + result;
        }

        let btnForm = document.querySelector("#configurate_btn");

        if (btnForm) {
            btnForm.addEventListener("click", () => {
                let vLife = life.value;

                if (result != 0 && vLife === "") {
                    alert("Quantidade de itens deve ser 0 e Vidas minimas = 1");
                } else if (result == 0 && vLife === "") {
                    alert("Vidas minimas = 1");
                } else if (result != 0 && vLife !== "") {
                    alert("Quantidade de itens deve ser 0");
                } else {
                    let valuesItens = itens.map(element => Number(element.value) || 0);

                    localStorage.setItem("sizeCamp", camp.value);
                    localStorage.setItem("life", life.value);
                    localStorage.setItem("elementsCamp", JSON.stringify(valuesItens));

                    window.location.href = "../index.html";
                }

            });
        }
    }
    //#endregion
}
//#endregion