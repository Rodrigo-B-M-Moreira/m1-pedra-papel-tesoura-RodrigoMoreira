/* Desenvolva seu código abaixo */
/*O objetivo do projeto é implementar uma função chamada playRockPaperScissor que recebe dois parâmetros: player1 e player2., ambos são strings entre as possibilidades "Pedra", "Papel" e "Tesoura" (atenção para a letra maiúscula). Essa função deverá simular o jogo clássico "Pedra, Papel, Tesoura" entre dois jogadores.*/

function playRockPaperScissor(player1, player2) {
   if (player1 === "Pedra" && player2 === "Tesoura" ||
       player1 === "Tesoura" && player2 === "Papel" ||
       player1 === "Papel" && player2 === "Pedra") {
       return "Jogador 1 venceu!";
   } else if (player2 === "Pedra" && player1 === "Tesoura" ||
              player2 === "Tesoura" && player1 === "Papel" ||
              player2 === "Papel" && player1 === "Pedra") {
       return "Jogador 2 venceu!";
   } else if (player1 === player2) {
       return "Empate!";
   } else {
       return "Entrada inválida!";
   }
}

