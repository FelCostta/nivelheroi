const NomeDoHeroi = "Pimpolho A Espada da Justiça";
let XpDoHeroi = -7000;
let EloDoHeroi;

switch (true) {
    case  XpDoHeroi >= 0 && XpDoHeroi <= 1000:
        EloDoHeroi = "Ferro";
        break;
    case XpDoHeroi >= 1001 && XpDoHeroi <= 2000:
        EloDoHeroi = "Bronze";
        break;
    case XpDoHeroi >= 2001 && XpDoHeroi <= 5000:
        EloDoHeroi = "Prata";
        break;
    case XpDoHeroi >= 5001 && XpDoHeroi <= 7000:
        EloDoHeroi = "Ouro";
        break;
    case XpDoHeroi >= 7001 && XpDoHeroi <= 8000:
        EloDoHeroi = "Platina";
        break;
    case XpDoHeroi >= 8001 && XpDoHeroi <= 9000:
        EloDoHeroi = "Ascendente";
        break;
    case XpDoHeroi >= 9001 && XpDoHeroi <= 10000:
        EloDoHeroi = "Imortal";
        break;
    case XpDoHeroi > 10001:
        EloDoHeroi = "Radiante";
        break;
    default:
        EloDoHeroi = "Null";
}

console.log(`O Herói ${NomeDoHeroi} está no nível ${EloDoHeroi}!`);