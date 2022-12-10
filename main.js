"use strict";

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
const playGame = function () {
  const userChoice = getUserChoice("paper");
  const computerChoice = getComputerChoice();
  console.log("You threw: " + userChoice);
  console.log("The computer threw: " + computerChoice);
  console.log(determineWinner(userChoice, computerChoice));
};

playGame();

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

game();
