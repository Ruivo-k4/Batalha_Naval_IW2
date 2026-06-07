console.log("global,Variables.js está ativo!"); //Só pra verficar se fuinciona

export let sizeCamp = Number(localStorage.getItem("sizeCamp")) || 4;
export let life = Number(localStorage.getItem("life")) || 3;
export let elementsCamp = JSON.parse(localStorage.getItem("elementsCamp")) || [3,3,2,3,5] //barco1, barco2, barco3, bomba, agua

export function configurate(newElements, newSize, newLife, newHeart) {
    elementsCamp.length = 0;
    elementsCamp.push(...newElements);

    sizeCamp = newSize;
    life = newLife;

    localStorage.setItem("elementsCamp", JSON.stringify(elementsCamp));
    localStorage.setItem("sizeCamp", sizeCamp);
    localStorage.setItem("life", life);
}