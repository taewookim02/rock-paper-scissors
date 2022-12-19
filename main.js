"use strict";

const textElement = document.querySelector("#circle svg text textPath");
const textColorElement = document.querySelector("#circle svg text");
const scores = document.querySelector(".scores");
const userInputButtons = Array.from(document.querySelectorAll(".button"));
const playAgainButton = document.querySelector(".play_again_button");
const infoPTag = document.querySelector(".info");

let counter = 0;
let userCount = 0;
let computerCount = 0;

userInputButtons.forEach((element) => {
  element.addEventListener("click", function (e) {
    if (counter < 5) {
      if (e.target.dataset.type === "1") {
        playGame("rock");
      } else if (e.target.dataset.type === "2") {
        playGame("paper");
      } else if (e.target.dataset.type === "3") {
        playGame("scissors");
      } else {
        console.log("Invalid input!");
      }
      counter++;
      console.log(counter);
      if (counter === 5) {
        getFinalWinner();
      }
    } else {
      console.log("You have exceeded the number of plays");
    }
  });
});

playAgainButton.addEventListener("click", (e) => {
  counter = 0;
  userCount = 0;
  computerCount = 0;
  displayScore(userCount, computerCount);
  textElement.textContent =
    "🪨 📄 ✂️ 🪨 📄 ✂️ 🪨 📄 ✂️ 🪨 📄 ✂️ 🪨 📄 ✂️ 🪨 📄 ✂️ ";
  infoPTag.textContent = "You have 5 tries!";
});

const getFinalWinner = function () {
  if (userCount > computerCount) {
    textElement.textContent =
      "🏆 🏆 🏆 🏆 🏆 🏆 🏆 🏆 🏆 🏆 🏆 🏆 🏆 🏆 🏆 🏆 🏆 🏆";
    infoPTag.textContent = "You beat the computer!";
  } else if (computerCount > userCount) {
    textElement.textContent =
      "😭 😭 😭 😭 😭 😭 😭 😭 😭 😭 😭 😭 😭 😭 😭 😭 😭 😭";
    infoPTag.textContent = "You lost to the computer!";
  } else {
    textElement.textContent =
      "🎀 🎀 🎀 🎀 🎀 🎀 🎀 🎀 🎀 🎀 🎀 🎀 🎀 🎀 🎀 🎀 🎀 🎀";
    infoPTag.textContent = "It's a tie!";
  }
};

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

const displayScore = function (userCount, computerCount) {
  scores.textContent = `You=${userCount}    Computer=${computerCount}`;
};

/** plays a game of rock, paper, scissors */
const playGame = function (buttonClick) {
  const userChoice = getUserChoice(buttonClick);
  const computerChoice = getComputerChoice();
  const result = determineWinner(userChoice, computerChoice);

  if (result === "user") {
    textElement.textContent =
      "win win win win win win win win win win win win ";
    textColorElement.setAttribute("fill", "#00FF00");
    userCount += 1;
    displayScore(userCount, computerCount);
  }
  if (result === "computer") {
    textElement.textContent = "Lose Lose Lose Lose Lose Lose Lose Lose Lose ";
    textColorElement.setAttribute("fill", "#ff0000");
    computerCount += 1;
    displayScore(userCount, computerCount);
  }

  if (result === "tie") {
    textElement.textContent =
      "tie tie tie tie tie tie tie tie tie tie tie tie tie tie tie tie";
    textColorElement.setAttribute("fill", "#F0E68C");
  }
};

// Update text content
const userWin = function (userCount, computerCount) {
  textElement.textContent = "win win win win win win win win win win win win ";
  textColorElement.setAttribute("fill", "#00FF00");
  displayScore(userCount, computerCount);
};
const computerWin = function (userCount, computerCount) {
  textElement.textContent = "Lose Lose Lose Lose Lose Lose Lose Lose Lose ";
  textColorElement.setAttribute("fill", "#ff0000");
  displayScore(userCount, computerCount);
};
const tie = function (userCount, computerCount) {
  textElement.textContent =
    "tie tie tie tie tie tie tie tie tie tie tie tie tie tie tie tie";
  textColorElement.setAttribute("fill", "#F0E68C");
};
