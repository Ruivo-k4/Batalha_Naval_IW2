export let sizeCamp = Number(localStorage.getItem("sizeCamp")) || 4;
export let life = Number(localStorage.getItem("life")) || 3;
export let elementsCamp = JSON.parse(localStorage.getItem("elementsCamp")) || [4,4,3,3,2] //barco1, barco2, barco3, bomba, agua

export function configurate(newElwments, newSize, newLife) {
    elementsCamp.length = 0;
    elementsCamp.push(newElwments);

    sizeCamp = newSize;
    life = newLife;
}