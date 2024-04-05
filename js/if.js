var playGame = 0,
  playerScore = 0,
  computerScore = 0;

function eleccion() {
  let elegir = prompt("Escoja entre 'piedra', 'papel', 'tijeras' ");
  let playerSelection = elegir.toLocaleLowerCase();

  while (playerSelection !== "piedra" && playerSelection !== "papel" && playerSelection !== "tijeras") {
    console.log("Elección inválida, vuelva a escoger.");
    elegir = prompt("Escoja entre 'piedra', 'papel', 'tijeras' ");
    playerSelection = elegir.toLowerCase();
  }
  return playerSelection;
}

function getComputerChoice() {
  const usar = ["piedra", "papel", "tijeras"];
  const eleccionAleatoria = Math.floor(usar.length * Math.random());
  const getComputerSelection = usar[eleccionAleatoria];
  return getComputerSelection;
}

function playRound(playerSelection, computerSelection) {
  if (playerSelection == computerSelection) {
    return "Empate!";
  } else if (playerSelection === "piedra" && computerSelection === "tijeras") {
    playerScore++;
    return "Ganas! piedra vence a tijeras";
  } else if (playerSelection === "pepel" && computerSelection === "piedra") {
    playerScore++;
    return "Ganas! papel vence a piedra";
  } else if (playerSelection === "tijeras" && computerSelection === "papel") {
    playerScore++;
    return "Ganas! tijeras vence a papel";
  } else {
    computerScore++;
    return "pierdes... " + computerSelection + " vence a tu " + playerSelection;
  }
}

while (playGame < 5) {
  let playerSelection = eleccion();
  console.log("Eleccion del juador " + playerSelection);

  let computerSelection = getComputerChoice();
  console.log("Eleccion de la maquina " + computerSelection);

  let resultado = playRound(playerSelection, computerSelection);
  console.log(resultado);

  console.log("Rondas ganadas por el jugador: " + playerScore + " Rondas ganadas por la consola: " + computerScore);

  while (resultado === "Empate!") {
    console.log("¡Es un empate! Reiniciando ronda...");
    playerSelection = eleccion();
    console.log("Elección del jugador: " + playerSelection);

    computerSelection = getComputerChoice();
    console.log("Elección de la máquina: " + computerSelection);

    resultado = playRound(playerSelection, computerSelection);
    console.log(resultado);

    console.log("Rondas ganadas por el jugador: " + playerScore + " Rondas ganadas por la consola: " + computerScore);
  }

  playGame++;
}
