console.log("campBattlePersonalit.js está funcionando!");

import { configurate, life, elementsCamp, sizeCamp } from "./globalsVariables.js";

let campSize = document.querySelector("#size_camp");

let itens = 0;
let itensInput = 0;

if (campSize) {
    let botes = document.querySelector("#qnt-botes");
    let barcos = document.querySelector("#qnt-barcos");
    let navios = document.querySelector("#qnt-navios");
    let bombs = document.querySelector("#qnt-bomb");
    let wave = document.querySelector("#qnt-wave");

    let aray = [botes, barcos, navios, bombs, wave];

    campSize.addEventListener("input", () => { //toda vez que tiver mudança no campo
        let valueCs = campSize.value;
        itens = valueCs * valueCs;

        if (valueCs !== "") {
            aray.forEach(element => { //faz todos os elementos serem destravados
                if (element) { // Verificação se o elemento existe
                    element.disabled = false;
                    element.value = Math.floor(itens / 5);
                }
            });
        } else {
            aray.forEach(element => {
                if (element) element.disabled = true; // Verificação se o elemento existe
            });
        }

        soma();
    });

    aray.forEach(element => { //verifica se teve alguma mudança nos inputs
        if (element) { // Verificação se o elemento existe
            element.addEventListener("input", () => {
                soma();
            });
        }
    });

    function soma() { //atualiza a quantidade de elementos
        itensInput = 0;//evita somar com o resultado anterior

        aray.forEach(element => {
            if (element) { // Verificação se o elemento existe
                itensInput += Number(element.value) || 0;
            }
        });

        display()
    }

    function display() {
        let btnForm = document.querySelector("#configurate_btn");
        let displayItn = document.querySelector("#itensDisp");

        if (displayItn) { // Verificação se o display existe
            displayItn.innerHTML = itens - itensInput;

            if ((itens - itensInput) < 0) {
                displayItn.style.color = "red";
            } else {
                if (btnForm) { // Verificação se o botão existe
                    btnForm.addEventListener("click", () => {
                        submitBtn();
                    });
                }
            }
        }

    }

    function submitBtn() {
        let link = document.querySelector("#link_btn");

        if (link) {
            // Buscando os elementos direto aqui para criar a string baseada no seu formato necessário
            let elements = [
                Number(document.querySelector("#qnt-botes").value) || 0,
                Number(document.querySelector("#qnt-barcos").value) || 0,
                Number(document.querySelector("#qnt-navios").value) || 0,
                Number(document.querySelector("#qnt-bomb").value) || 0,
                Number(document.querySelector("#qnt-wave").value) || 0
            ];

            localStorage.setItem("sizeCamp", "4");
            localStorage.setItem("life", "1");
            localStorage.setItem("elementsCamp", JSON.stringify(elements));

            link.href = "../index.html";
        }
    }
}

