"use strict";

const textElement = document.querySelector("#circle svg text textPath");
const textColorElement = document.querySelector("#circle svg text");

const userInputButtons = Array.from(document.querySelectorAll(".button"));
userInputButtons.forEach((element) => {
  element.addEventListener("click", function (e) {
    if (e.target.dataset.type === "1") {
      playGame("rock");
    } else if (e.target.dataset.type === "2") {
      playGame("paper");
    } else if (e.target.dataset.type === "3") {
      playGame("scissors");
    } else {
      console.log("Invalid input!");
    }
  });
});

/** returns a string, rock, paper, scissors randomly */
const getComputerChoice = function () {
  const choices = ["rock", "paper", "scissors"];
  const randomChoice = Math.floor(Math.random() * 3);
  return choices[randomChoice];
};

/** returns a string, rock, paper, scissors based on user input */
const getUserChoice = function (userInput) {
  if (
    userInput === "rock" ||
    userInput === "paper" ||
    userInput === "scissors"
  ) {
    return userInput;
  } else {
    console.log("Invalid input");
  }
};

/** returns a string, winner, loser, tie based on user and computer choices */
const determineWinner = function (userChoice, computerChoice) {
  if (userChoice === computerChoice) {
    return "tie";
  } else if (userChoice === "rock") {
    if (computerChoice === "paper") {
      return "computer";
    } else {
      return "user";
    }
  } else if (userChoice === "paper") {
    if (computerChoice === "scissors") {
      return "computer";
    } else {
      return "user";
    }
  } else if (userChoice === "scissors") {
    if (computerChoice === "rock") {
      return "computer";
    } else {
      return "user";
    }
  }
};

/** plays a game of rock, paper, scissors */
const playGame = function (buttonClick) {
  const userChoice = getUserChoice(buttonClick);
  const computerChoice = getComputerChoice();
  console.log("You threw: " + userChoice);
  console.log("The computer threw: " + computerChoice);
  const result = determineWinner(userChoice, computerChoice);
  console.log(result);
  if (result === "user") {
    textElement.textContent =
      "win win win win win win win win win win win win ";
    textColorElement.setAttribute("fill", "#00FF00");
  }
  if (result === "computer") {
    textElement.textContent = "Lose Lose Lose Lose Lose Lose Lose Lose Lose ";
    textColorElement.setAttribute("fill", "#ff0000");
  }

  if (result === "tie") {
    textElement.textContent =
      "tie tie tie tie tie tie tie tie tie tie tie tie tie tie tie tie";
    textColorElement.setAttribute("fill", "#F0E68C");
  }
};

// playGame();

/** new function called game() which calls playGame function inside to play a 5 round game that keeps score and reports a winner or loser at the end, and get user input from prompt() */
const game = function () {
  let userScore = 0;
  let computerScore = 0;
  for (let i = 0; i < 5; i++) {
    const userChoice = getUserChoice(prompt("rock, paper, or scissors?"));
    const computerChoice = getComputerChoice();
    console.log("You threw: " + userChoice);
    console.log("The computer threw: " + computerChoice);
    const winner = determineWinner(userChoice, computerChoice);
    if (winner === "user") {
      userScore++;
    } else if (winner === "computer") {
      computerScore++;
    }
  }
  if (userScore > computerScore) {
    console.log("You won!");
  } else if (userScore < computerScore) {
    console.log("You lost!");
  } else {
    console.log("It's a tie!");
  }
};

// game();
