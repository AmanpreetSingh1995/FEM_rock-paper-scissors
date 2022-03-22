// ### CONST ###

const rules = document.getElementById("rules");
const close = document.getElementById("close");

const rulesModal = document.querySelector(".rules_modal");
const mainContainer = document.querySelector(".main_container");

const stage2 = document.querySelector(".start");
const game = document.getElementById("game");
const scoreEl = document.getElementById("score");
let scores = 0;

const rock = document.getElementById("rock");
const paper = document.getElementById("paper");
const scissors = document.getElementById("scissors");

const userRock = document.getElementById("user_rock");
const userPaper = document.getElementById("user_paper");
const userScissors = document.getElementById("user_scissors");

const computerRock = document.getElementById("computer_rock");
const computerPaper = document.getElementById("computer_paper");
const computerScissors = document.getElementById("computer_scissors");

const winOrLose = document.getElementById("win_lose");
const win = document.getElementById("win");
const tie = document.getElementById("tie");
const lose = document.getElementById("lose");

const playAgain = document.getElementById("playAgain");

const myArray = ["rock", "paper", "scissors"];

// ### FUNCTIONS ###

const value = myArray[(Math.random() * myArray.length) | 0];

function computerValue(value) {
	if (value === "rock") {
		computerPaper.classList.add("computerSelectionHide");
		computerScissors.classList.add("computerSelectionHide");
	} else if (value === "paper") {
		computerRock.classList.add("computerSelectionHide");
		computerScissors.classList.add("computerSelectionHide");
	} else {
		computerRock.classList.add("computerSelectionHide");
		computerPaper.classList.add("computerSelectionHide");
	}
}

computerValue(value);

function gameResult(user, value) {
	if (
		(user === "rock" && value === "scissors") ||
		(user === "paper" && value === "rock") ||
		(user === "scissors" && value === "paper")
	) {
		scores++;
		scoreEl.textContent = scores;
		localStorage.setItem(scoreEl, scores);

		winOrLose.classList.remove("playerWinOrLose");
		win.classList.remove("playerWinOrLose");
	} else if (
		(user === "rock" && value === "rock") ||
		(user === "paper" && value === "paper") ||
		(user === "scissors" && value === "scissors")
	) {
		winOrLose.classList.remove("playerWinOrLose");
		tie.classList.remove("playerWinOrLose");
	} else {
		winOrLose.classList.remove("playerWinOrLose");
		lose.classList.remove("playerWinOrLose");
	}
}

// ### CSS RULES ##

rules.addEventListener("click", function () {
	rulesModal.classList.remove("rules_hide");
	mainContainer.classList.add("overlay");
});

close.addEventListener("click", function () {
	rulesModal.classList.add("rules_hide");
	mainContainer.classList.remove("overlay");
});

// $$$ GAME $$$

rock.addEventListener("click", function () {
	stage2.classList.remove("hide");
	game.classList.add("hide");

	userPaper.classList.add("userSelectionHide");
	userScissors.classList.add("userSelectionHide");

	gameResult("rock", value);
});

paper.addEventListener("click", function () {
	stage2.classList.remove("hide");
	game.classList.add("hide");

	userRock.classList.add("userSelectionHide");
	userScissors.classList.add("userSelectionHide");

	gameResult("paper", value);
});

scissors.addEventListener("click", function () {
	stage2.classList.remove("hide");
	game.classList.add("hide");

	userRock.classList.add("userSelectionHide");
	userPaper.classList.add("userSelectionHide");

	gameResult("scissors", value);
});

playAgain.addEventListener("click", function () {
	window.location.reload();
});
