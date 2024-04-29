function getComputerChoice() {
  function getRandomThree(max) {
    return Math.floor(Math.random() * max);
  }
  let randomThree = getRandomThree(3);

  if (randomThree === 0) {
    return "rock";
  } else if (randomThree === 1) {
    return "scissors";
  } else {
    return "paper";
  }
}
console.log(getComputerChoice());

let paragraph = document.querySelector("h1");

// get humanChoice and play Round
let humanSelection = "";
let buttons = document.querySelectorAll("button");
//so we now have an array of buttons

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    humanSelection = button.id;
    const computerSelection = getComputerChoice();
    playRound(humanSelection, computerSelection);
  });
});
let humanScore = 0;
let computerScore = 0;

function playGame() {
  if (humanScore >= 5 || computerScore >= 5) {
    paragraph.append(`game over humanScore ${humanScore}`);
    paragraph.append(`computer ${computerScore}`);
  }
}

//fn play round\

function playRound(humanSelection, computerSelection) {
  if (humanSelection === "rock" && computerSelection === "scissors") {
    paragraph.append("Rock beats scissors");
    humanScore = humanScore + 1;
    return humanScore;
    playGame();
  } else if (humanSelection === "rock" && computerSelection === "paper") {
    paragraph.append("Rock loses to paper");
    computerScore = computerScore + 1;
    return computerScore;
    playGame();
  } else if (humanSelection === "rock" && computerSelection === "rock") {
    paragraph.append("rock meets rock");
  } else if (humanSelection === "scissors" && computerSelection === "rock") {
    paragraph.append("Scissors beats rock");
    humanScore = humanScore + 1;
    playGame();
    return humanScore;
  } else if (
    humanSelection === "scissors" &&
    computerSelection === "scissors"
  ) {
    paragraph.append("scissor sisters");
  } else if (humanSelection === "scissors" && computerSelection === "paper") {
    paragraph.append("Scissors beats paper");
    humanScore = humanScore + 1;
    return humanScore;
    playGame();
  } else if (humanSelection === "paper" && computerSelection === "scissors") {
    paragraph.append("Paper beats scissors");
    computerScore = computerScore + 1;
    return computerScore;
    playGame();
  } else if (humanSelection === "paper" && computerSelection === "rock") {
    paragraph.append("Paper loses to rock");
    humanScore = humanScore + 1;
    playGame();
    return humanScore;
  } else if (humanSelection === "paper" && computerSelection === "paper") {
    paragraph.append("paper meets paper its a book");
  }
}

//playRound(humanSelection, computerSelection);
