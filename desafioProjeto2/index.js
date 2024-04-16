let nomeHeroi = "Lancelot"

// função que define o calculo para rankear o herói
function ranked (victory, defeat){
   return victory - defeat
}
let points = ranked(10, 2)

// classificação do herói

if ( points <= 10){
  console.log("Meus parabéns, grande Herói "+ nomeHeroi+ ", sua classificação é: Ferro!" )
  console.log("(O herói adquiriu classificação Ferro))");
} else if (10 && points <= 20){
  console.log("Meus parabéns, Grande Herói "+ nomeHeroi + "! Você agora recebeu classificação 'Bronze'")
  console.log("(O herói aquiriu classificação Bronze)")
} else if (20 && points <= 50){
  console.log("Meus parabéns, Grande Herói "+ nomeHeroi + "! Você agora recebeu classificação 'Prata'")
  console.log("(O herói adquiriu classificação Prata)")
} else if (50 && points <= 80){
  console.log("Meus parabéns, Grande Herói "+ nomeHeroi + "! Você agora recebeu classificação 'Ouro'")
  console.log("(O herói adquiriu classificação Ouro)")
} else if (80 && points <= 90){
  console.log("Meus parabéns, Grande Herói "+ nomeHeroi + "! Você agora recebeu classificação 'Diamante'")
  console.log("(O herói adquiriu classificação Diamante)")
} else if (90 && points <= 100){
  console.log("Meus parabéns, Grande Herói "+ nomeHeroi + "! Você agora recebeu classificação 'Lendário'")
  console.log("(O herói adquiriu classificação Lendário)")
} else if (points > 100){
  console.log("Meus parabéns, Grande Herói "+ nomeHeroi + "! Você agora recebeu a classificação 'Imortal'")
  console.log("(O herói adquiriu classificação Imortal)")
}