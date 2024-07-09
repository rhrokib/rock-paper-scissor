let win = 0;
let lose = 0;
let tie = 0;

// Function to determine the computer's move
function getComputerMove() {
  const randomNumber = Math.random();
  if (randomNumber >= 0 && randomNumber < 1 / 3) {
    return "rock";
  } else if (randomNumber >= 1 / 3 && randomNumber < 2 / 3) {
    return "paper";
  } else {
    return "scissor";
  }
}

// Function to handle button clicks and game logic
function playRound(playerMove) {
  const computerMove = getComputerMove();
  let result = "";

  if (playerMove === computerMove) {
    result = "Tie.";
    tie++;
  } else if (
    (playerMove === "rock" && computerMove === "paper") ||
    (playerMove === "paper" && computerMove === "scissor") ||
    (playerMove === "scissor" && computerMove === "rock")
  ) {
    result = "You lose.";
    lose++;
  } else {
    result = "You win.";
    win++;
  }

  const resultElement = document.querySelector(".result");
  resultElement.innerHTML = `You picked ${playerMove}. Computer picked ${computerMove}. ${result}`;
  console.log(`Win: ${win} Lose: ${lose} Tie: ${tie}`);
}

// Function to reset the game
function resetGame() {
  win = 0;
  lose = 0;
  tie = 0;
  console.log("cleared....");
  console.log(`Win: ${win} Lose: ${lose} Tie: ${tie}`);
  const resultElement = document.querySelector(".result");
  resultElement.innerHTML = "";
}
