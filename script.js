// console.log("Script loaded");
// const values = ["rock", "paper", "scissors"];

// function getComputerChoice() {
// 	const randomIndex = Math.floor(Math.random() * values.length);
// 	return values[randomIndex];
// }

// console.log(values[Math.floor(Math.random() * 3)]);

const values = ["rock", "paper", "scissors"];
function getComputerChoice() {
  const randomIndex = Math.floor(Math.random() * values.length);
  return values[randomIndex];
}

// console.log(getComputerChoice());

// const computerChoice = getComputerChoice();
// console.log("Computer's choice:", computerChoice);

let userChoice;

const rockButton = document.getElementById("rock");
rockButton.addEventListener("click", function () {
  userChoice = "rock";
  //   console.log("User's choice:", userChoice);
});

const paperButton = document.getElementById("paper");
paperButton.addEventListener("click", function () {
  userChoice = "paper";
  //   console.log("User's choice;", userChoice);
});

const ScissorsButton = document.getElementById("scissors");
ScissorsButton.addEventListener("click", function () {
  userChoice = "scissors";
  //   console.log("User's choice:", userChoice);
});

const resultPTag = document.getElementById("result");
const computerChoicePTag = document.getElementById("computer-choice");

const submitButton = document.getElementById("submit");
submitButton.addEventListener("click", function () {
  console.log("User's choice:", userChoice);
  //   console.log("Computer's choice:", computerChoice);

  const computerChoice = getComputerChoice();
  console.log("Computer's choice:", computerChoice);

  const result = gameWinner(userChoice, computerChoice);

  computerChoicePTag.textContent = `${computerChoice}`;
  //   console.log(result);
  resultPTag.textContent = result;
  // compare choices and determine winner
});

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

//

// const nameTag = document.getElementsByClassName("name");
// // console.log(nameTag[0].innerText);
// nameTag[0].innerText = "Anjali";
