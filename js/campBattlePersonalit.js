console.log("campBattlePersonalit.js está funcionando!");

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
                element.disabled = false;
                element.value = Math.floor(itens / 5);
            });
        } else {
            aray.forEach(element => element.disabled = true);//faz todos os elementos serem destravados
        }

        soma();
    });

    aray.forEach(element => { //verifica se teve alguma mudança nos inputs
        element.addEventListener("input", () => {
            soma();
        });
    });

    function soma() { //atualiza a quantidade de elementos
        itensInput = 0;//evita somar com o resultado anterior

        aray.forEach(element => {
            itensInput += Number(element.value) || 0;
        });

        display()
    }
}

function display() {
    let btnForm = document.querySelector("#configurate_btn");
    let displayItn = document.querySelector("#itensDisp");

    displayItn.innerHTML = itens - itensInput;

    if ((itens - itensInput) < 0) {
        displayItn.style.color = "red";
    }
}

let btnForm = document.querySelector("#configurate_btn");

btnForm.addEventListener("click", () => {
    let link = document.querySelector("#link_btn");

    if (link) {
        localStorage.setItem("sizeCamp", "4");
        localStorage.setItem("life", "1");
        localStorage.setItem("elementsCamp", `[${numBotes}, ${numBarcos}, ${numNavios}, ${numBombs}, ${numWave}]`);

        link.href = "../index.html";
    }
});
