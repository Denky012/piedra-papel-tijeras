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
  const elegir = ["piedra", "papel", "tijeras"];
  const eleccionAleatoria = Math.floor(elegir.length * Math.random());
  const computerSelection = elegir[eleccionAleatoria];
  return computerSelection;
}

function playRound(playerSelection, computerSelection) {
  switch (true) {
    case playerSelection === "piedra" && computerSelection === "tijeras":
    case playerSelection === "papel" && computerSelection === "piedra":
    case playerSelection === "tijeras" && computerSelection === "papel":
      playerScore++;
      return "Ganaste!";

    case playerSelection === "tijeras" && computerSelection === "piedra":
    case playerSelection === "piedra" && computerSelection === "papel":
    case playerSelection === "papel" && computerSelection === "tijeras":
      computerScore++;
      return "Perdiste...";

    case playerSelection === computerSelection:
      return "Empate?!";
  }
}

while (playGame < 3) {
  let playerSelection = eleccion();

  let computerSelection = getComputerChoice();

  let rondas = playRound(playerSelection, computerSelection);
  console.log(rondas);

  console.log("Rondas ganadas: " + playerScore + " rondas perdidas: " + computerScore);

  while (rondas === "empate") {
    let playerSelection = eleccion();
    console.log(playerSelection);

    let computerSelection = getComputerChoice();
    console.log(computerSelection);

    let rondas = playRound(playerSelection, computerSelection);
    console.log(rondas);

    console.log("Rondas ganadas: " + playerScore + " rondas perdidas: " + computerScore);
  }

  playGame++;
}
