const values = ["rock", "paper", "scissors"];

// create a function to get computer choice
function getComputerChoice() {
  const randomIndex = Math.floor(Math.random() * values.length);
  return values[randomIndex];
}

// get user choice using buttons and event listeners
let userChoice;
document.getElementById("rock").addEventListener("click", function () {
  userChoice = "rock";
});
document.getElementById("paper").addEventListener("click", function () {
  userChoice = "paper";
});
document.getElementById("scissors").addEventListener("click", function () {
  userChoice = "scissors";
});

// create a function to determine the winner of the game

function gameWinner(userChoice, computerChoice) {
  if (userChoice === computerChoice) {
    return "It's a tie!";
  } else if (
    (userChoice === "rock" && computerChoice === "scissors") ||
    (userChoice === "paper" && computerChoice === "rock") ||
    (userChoice === "scissors" && computerChoice === "paper")
  ) {
    return "You win!";
  } else {
    return "Computer wins!";
  }
}
// add event listener to submit button to play the game
// document.getElementById("submit").addEventListener("click", function () {
//   const computerChoice = getComputerChoice();
//   const result = gameWinner(userChoice, computerChoice);

// add event listener to submit button to play the game
document.getElementById("submit").addEventListener("click", function () {
  const UserChoice = userChoice;
  const computerChoice = getComputerChoice();
  const result = gameWinner(userChoice, computerChoice);

  console.log("User's choice:", userChoice);
  console.log("Computer's choice:", computerChoice);

  document.getElementById("computer-choice").textContent = computerChoice;
  document.getElementById("result").textContent = result;
});
