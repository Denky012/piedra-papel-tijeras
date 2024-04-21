let playGame = 0,
  playerScore = 0,
  computerScore = 0;
let playerSelection;

//Asignacion de eleccion "piedra" "papel" "tijeras"
document.getElementById("piedra").addEventListener("click", function () {
  if (playGame < 5) {
    playerSelection = "piedra";
    playRound();
  }
});

document.getElementById("papel").addEventListener("click", function () {
  if (playGame < 5) {
    playerSelection = "papel";
    playRound();
  }
});

document.getElementById("tijeras").addEventListener("click", function () {
  if (playGame < 5) {
    playerSelection = "tijeras";
    playRound();
  }
});

//Eleccion al azar del computador
function getComputerChoice() {
  const options = ["piedra", "papel", "tijeras"];
  const randomIndex = Math.floor(Math.random() * options.length);
  return options[randomIndex];
}

//Coomienzao del juego, y comparaciones de elecciones
function playRound() {
  const computerSelection = getComputerChoice();
  let result = "";

  if (playerSelection === computerSelection) {
    result = "Empate!";
  } else if (
    (playerSelection === "piedra" && computerSelection === "tijeras") ||
    (playerSelection === "papel" && computerSelection === "piedra") ||
    (playerSelection === "tijeras" && computerSelection === "papel")
  ) {
    result = "Ganaste!";
    playerScore++;
    playGame++;
  } else {
    result = "Perdiste...";
    computerScore++;
    playGame++;
  }

  //Datos impresos en pantalla
  const eleccionPlayer = `<span class="text">Player:</span><br>${playerSelection}<br><br>`;
  document.getElementById("eleccionPlayer").innerHTML += eleccionPlayer;

  const eleccionComputer = `<span class="text">Computer:</span><br>${computerSelection}<br><br>`;
  document.getElementById("eleccionComputer").innerHTML += eleccionComputer;

  const resultadoRonda = `<span class="text">Resultado</span><br>${result}<br><br>`;
  document.getElementById("resultadoRonda").innerHTML += resultadoRonda;

  if (playGame < 5) {
    //Conttinuacion del juego mientras las rondas validas sean menor que 5
  } else {
    //Final del juego una vez las rondas sean igual a 5
    if (playerScore > computerScore) {
      const ganador = `El ganador es el jugador! ${playerScore} puntos a ${computerScore}, ¡Muy bien hecho!`;
      document.getElementById("ganador").innerHTML += ganador;
    } else {
      const ganador = `El ganador es la máquina! ${computerScore} puntos a ${playerScore}, ¡Mejor suerte la próxima vez!`;
      document.getElementById("ganador").innerHTML += ganador;
    }

    // Desactivar eventos de clic en los botones para no continuar imprimiendo resultados
    document.getElementById("piedra").removeEventListener("click");
    document.getElementById("papel").removeEventListener("click");
    document.getElementById("tijeras").removeEventListener("click");
  }
}
