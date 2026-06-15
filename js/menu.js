console.log("menu.js está ativo!");

let levelImg = document.querySelector(".menu_levels-img");//imagem dos levels
let restartImg = document.querySelector("#restartGame");//imagem de restart, ele vai setar
let clicks = 1;

if (levelImg) { //confere se o elemento existe
    levelImg.addEventListener('click', () => { //caso a imagem for clicada
        clicks += 1;

        if (clicks === 1) {
            levelImg.src = "./imgs/nivel1.png";
        } else if (clicks === 2) {
            levelImg.src = "./imgs/nivel2.png";
        } else if (clicks === 3) {
            levelImg.src = "./imgs/nivel3.png";
            clicks = 0; // Reseta para o próximo clique voltar a ser o nível 1
        }
    });
}

if (restartImg) {
    restartImg.addEventListener('click', () => { //caso a imagem for clicada

        if (clicks === 1) {
            localStorage.setItem("sizeCamp", "4");
            localStorage.setItem("life", "1");
            localStorage.setItem("elementsCamp", "[3, 3, 2, 3, 5]");
            location.reload();
        } else if (clicks === 2) {
            localStorage.setItem("sizeCamp", "6");
            localStorage.setItem("life", "2");
            localStorage.setItem("elementsCamp", "[7, 7, 8, 7, 9]");
            location.reload();
        } else if (clicks === 0) {
            localStorage.setItem("sizeCamp", "10");
            localStorage.setItem("life", "6");
            localStorage.setItem("elementsCamp", "[15, 17, 19, 21, 29]");
            location.reload();
        }
    });
}