let nivelHeroi = 3000 // Variavel que recebe o nivel de herói
let nomeHeroi = "Lancelot"

//classificação do nivel de herói
switch(nivelHeroi){
    case nivelHeroi <=1000 :
        console.log("Meus parabéns, Grande Herói "+ nomeHeroi + "! Você não é mais um novato, agora sua classificação é 'Ferro'")
        console.log("(O herói adquiriu classificação Ferro))")
        break;

    case nivelHeroi > 1000 && nivelHeroi <= 2000:
        console.log("Meus parabéns, Grande Herói "+ nomeHeroi + "! Você agora recebeu classificação 'Bronze'")
        console.log("(O herói aquiriu classificação Bronze)")
        break;
    
    case nivelHeroi > 2000 && nivelHeroi <= 5000:
        console.log("Meus parabéns, Grande Herói "+ nomeHeroi + "! Você agora recebeu classificação 'Prata'")
        console.log("(O herói adquiriu classificação Prata)")
        break;
    
        case nivelHeroi > 5000 && nivelHeroi <= 7000:
            console.log("Meus parabéns, Grande Herói "+ nomeHeroi + "! Você agora recebeu classificação 'Ouro'")
            console.log("(O herói adquiriu classificação Ouro)")
            break;
        
        case nivelHeroi > 7000 && nivelHeroi <= 8000:
            console.log("Meus parabéns, Grande Herói "+ nomeHeroi + "! Você agora recebeu a classificação 'Platina'")
            console.log("(O herói adquiriu classificação Platina)")
            break;
        
        case nivelHeroi > 8000 && nivelHeroi <= 9000:
            console.log("Meus parabéns, Grande Herói "+ nomeHeroi + "! Você agora recebeu a classificação 'Ascendente'")
            console.log("(O herói adquiriu classificação Ascendente)")
            break;
        
        case nivelHeroi > 9000 && nivelHeroi <= 10000:
            console.log("Meus parabéns, Grande Herói "+ nomeHeroi + "! Você agora recebeu a classificação 'Imortal'")
            console.log("(O herói adquiriu classificação Imortal)")
            break;

        case nivelHeroi > 10000:
            console.log("Meus parabéns, Grande Herói "+ nomeHeroi + "! Você agora recebeu a classificação 'Radiante'")
            console.log("(O herói adquiriu classificação Radiante)")
            break;
}

console.log("O Herói de nome: "+nomeHeroi + " está no nível de" + nivelHeroi)

