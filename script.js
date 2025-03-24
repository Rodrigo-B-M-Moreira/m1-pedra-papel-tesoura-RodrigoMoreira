/* Desenvolva seu código abaixo */
/*O objetivo do projeto é implementar uma função chamada playRockPaperScissor que recebe dois parâmetros: player1 e player2., ambos são strings entre as possibilidades "Pedra", "Papel" e "Tesoura" (atenção para a letra maiúscula). Essa função deverá simular o jogo clássico "Pedra, Papel, Tesoura" entre dois jogadores.*/

function playRockPaperScissor(player1,player2){
   if(player1="Pedra" && player2=="Tesoura"){
    console.log("Jogador 1 venceu!");
   }else if(player1=="Pedra" && player2=="Papel"){
    console.log("Jogador 2 venceu!");
   }else if(player1=="Tesoura" && player2=="Papel"){
    console.log("Jogador 1 venceu!");
   }else if(player1=="Tesoura" && player2=="Pedra"){
    console.log("Jogador 2 venceu!");
   }else if(player1=="Papel" && player2=="Pedra"){
    console.log("Jogador 1 venceu!");
   }else if(player1=="Papel" && player2=="Tesoura"){
    console.log("Jogador 2 venceu!");
   }else if(player1==player2){
    console.log("Empate!");
   }
}
const resultado = playRockPaperScissor("Pedra", "Tesoura");
console.log(resultado); // Saída: "Jogador 1 venceu!"