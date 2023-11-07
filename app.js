const scoreGame = {
  wins: 0,
  loses: 0,
  ties: 0,
};
const computerMove = pickComputerMove();

//Decide a jogada da IA randomicamente
function pickComputerMove() {
  const randomNumber = Math.random();
  let computerMove = "";

  if (randomNumber >= 0 && randomNumber < 1 / 3) {
    computerMove = "Pedra";
  } else if (randomNumber >= 1 / 3 && randomNumber < 2 / 3) {
    computerMove = "Tesoura";
  } else if (randomNumber < 1) {
    computerMove = "Papel";
  }
  return computerMove;
}

//Compara a jogada do jogador com a jogada da IA e retorna o resultado
function playGame(playerMove) {
  let resultado = "";
  if (playerMove === "Pedra") {
    if (computerMove === "Pedra") {
      resultado = "Empate";
    } else if (computerMove === "Papel") {
      resultado = "Voce perdeu";
    } else if (computerMove === "Tesoura") {
      resultado = "Voce ganhou";
    }
  }

  if (playerMove === "Papel" && computerMove === "Pedra") {
    resultado = "Voce ganhou";
  } else if (playerMove === "Papel" && computerMove === "Papel") {
    resultado = "Empate";
  } else if (playerMove === "Papel" && computerMove === "Tesoura") {
    resultado = "Voce perdeu";
  }

  if (playerMove === "Tesoura" && computerMove === "Pedra") {
    resultado = "Voce perdeu";
  } else if (playerMove === "Tesoura" && computerMove === "Papel") {
    resultado = "Voce ganhou";
  } else if (playerMove === "Tesoura" && computerMove === "Tesoura") {
    resultado = "Empate";
  }

  if (resultado === "Voce ganhou") {
    scoreGame.wins++;
  } else if (resultado === "Voce perdeu") {
    scoreGame.loses++;
  } else {
    scoreGame.ties++;
  }

  return alert(
    `Voce pegou ${playerMove}. Computador pegou ${computerMove}. ${resultado}.
    Vitorias: ${scoreGame.wins}, Derrotas: ${scoreGame.loses}, Empates:${scoreGame.ties} `
  );
}

//reseta o placar da partida
function resetGame() {
  scoreGame.loses = 0;
  scoreGame.wins = 0;
  scoreGame.ties = 0;
}
