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

let paragraph = document.querySelector("#log");
const line = (txt) => {
  const p = document.createElement("p");
  p.innerText = txt;
  paragraph.append(p);
};

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
    line(`GAME OVER humanScore ${humanScore} computer ${computerScore} `);
  }
}

//fn play round\

function playRound(humanSelection, computerSelection) {
  if (humanSelection === "rock" && computerSelection === "scissors") {
    line("Rock beats scissors");
    humanScore = humanScore + 1;
    return humanScore;
    playGame();
  } else if (humanSelection === "rock" && computerSelection === "paper") {
    line("Rock loses to paper");
    computerScore = computerScore + 1;
    return computerScore;
    playGame();
  } else if (humanSelection === "rock" && computerSelection === "rock") {
    line("rock meets rock");
  } else if (humanSelection === "scissors" && computerSelection === "rock") {
    line("Scissors beats rock");
    humanScore = humanScore + 1;
    playGame();
    return humanScore;
  } else if (
    humanSelection === "scissors" &&
    computerSelection === "scissors"
  ) {
    line("scissor sisters");
  } else if (humanSelection === "scissors" && computerSelection === "paper") {
    line("Scissors beats paper");
    humanScore = humanScore + 1;
    return humanScore;
    playGame();
  } else if (humanSelection === "paper" && computerSelection === "scissors") {
    line("Paper beats scissors");
    computerScore = computerScore + 1;
    return computerScore;
    playGame();
  } else if (humanSelection === "paper" && computerSelection === "rock") {
    line("Paper loses to rock");
    humanScore = humanScore + 1;
    playGame();
    return humanScore;
  } else if (humanSelection === "paper" && computerSelection === "paper") {
    line("paper meets paper its a book");
  }
}

//playRound(humanSelection, computerSelection);
