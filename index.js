// Função que armazena qual ranking se encaixa cada quantidade de XP.
function determinarNivel(xp) {
    if (xp < 1000) {
        return "Ferro";
    } else if (xp <= 2000) {
        return "Bronze";
    } else if (xp <= 5000) {
        return "Prata";
    } else if (xp <= 7000) {
        return "Ouro";
    } else if (xp <= 8000) {
        return "Platina";
    } else if (xp <= 9000) {
        return "Ascendente";
    } else if (xp <= 10000) {
        return "Imortal";
    } else {
        return "Radiante";
    }
}

// Armazenamento de heróis com suas devidas quantidades de XP
let herois = [
    { nome: "Lume", xp: 8930 },
    { nome: "Shhax", xp: 2345 },
    { nome: "Hog Kamn", xp: 1200 },
    { nome: "Duque", xp: 7000 },
    { nome: "Luuar", xp: 2 },
    { nome: "Korte", xp: 10500 }
];

// Catalogar os heróis já com seus rankings baseados na quantidade de XP.
for (let i = 0; i < herois.length; i++) {
    let heroi = herois[i];
    let nivel = determinarNivel(heroi.xp);
    console.log("O Herói de nome ${heroi.nome} está no nível de ${nivel}");
}