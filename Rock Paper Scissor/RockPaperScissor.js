const computer = document.querySelector(".computer-img");
const player = document.querySelector(".player-img");
const computerPoints = document.getElementById("c");
const playerPoints = document.getElementById("p");
const options = document.querySelectorAll(".options button");
const result = document.querySelector(".win");

let cScore = 0;
let pScore = 0;

options.forEach((option) => {
  option.addEventListener("click", () => {
    // Start animations
    computer.classList.add("shake-computer");
    player.classList.add("shake-player");

    setTimeout(() => {
      // Stop animations
      computer.classList.remove("shake-computer");
      player.classList.remove("shake-player");

      // Player choice
      let playerChoice = option.className;
      player.src = `images/${playerChoice}Player.png`;

      // Computer choice
      const choices = ["stone", "paper", "scissors"];
      const randomIndex = Math.floor(Math.random() * 3);
      const computerChoice = choices[randomIndex];
      computer.src = `images/${computerChoice}Computer.png`;

      // Determine winner
      const winner = getWinner(playerChoice, computerChoice);

      // Update result and scores
      if (winner === "draw") {
        result.textContent = "It's a Draw!";
        result.style.color = "#f1c40f";
      } else if (winner === "player") {
        result.textContent = "You Won!";
        result.style.color = "#2ecc71";
        pScore++;
      } else {
        result.textContent = "You Lost!";
        result.style.color = "#e74c3c";
        cScore++;
      }

      result.style.display = "block";
      playerPoints.textContent = pScore;
      computerPoints.textContent = cScore;
    }, 900);
  });
});

// Helper function to determine winner
function getWinner(player, computer) {
  if (player === computer) return "draw";

  if (
    (player === "stone" && computer === "scissors") ||
    (player === "paper" && computer === "stone") ||
    (player === "scissors" && computer === "paper")
  ) {
    return "player";
  }

  return "computer";
}
