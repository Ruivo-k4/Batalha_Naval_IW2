export let sizeCamp = Number(localStorage.getItem("sizeCamp")) || 4;
export let life = Number(localStorage.getItem("life")) || 3;
export let elementsCamp = JSON.parse(localStorage.getItem("elementsCamp")) || [4,4,3,3,2] //barco1, barco2, barco3, bomba, agua

export function configurate(newElements, newSize, newLife) {
    elementsCamp.length = 0;
    elementsCamp.push(...newElements);

    sizeCamp = newSize;
    life = newLife;

    localStorage.setItem("elementsCamp", JSON.stringify(elementsCamp));
    localStorage.setItem("sizeCamp", sizeCamp);
    localStorage.setItem("life", life);
}