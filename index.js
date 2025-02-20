let nomeHeroi = "Goku";
let xpHeroi = "9500";

if (xpHeroi <1000) {
    console.log(nomeHeroi + " esta no vivel de ferro.");

} else if (xpHeroi >=1001 && xpHeroi <= 2000){
    console.log(nomeHeroi + " esta no vivel de bronze.");

} else if (xpHeroi >=2001 && xpHeroi <= 5000){
    console.log(nomeHeroi + " esta no vivel de prata.");

} else if (xpHeroi >=5001 && xpHeroi <= 7000){
    console.log(nomeHeroi + " esta no vivel de ouro.");

} else if (xpHeroi >=7001 && xpHeroi <= 8000){
    console.log(nomeHeroi + " esta no vivel de platina.");

} else if (xpHeroi >=8001 && xpHeroi <= 9000){
    console.log(nomeHeroi + " esta no vivel de ascendente.");

} else if (xpHeroi >=9001 && xpHeroi <= 10000){
    console.log(nomeHeroi + " esta no vivel de imortal.");

} else if (xpHeroi>= 10001) {
    console.log(nomeHeroi + " esta no vivel de radiante.");
}