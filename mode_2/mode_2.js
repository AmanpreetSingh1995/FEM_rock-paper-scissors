// ### CONST ###

const rules = document.getElementById("rules");
const goBack = document.getElementById("go_back");
const close = document.getElementById("close");

const rulesModal = document.querySelector(".rules_modal");
const mainContainer = document.querySelector(".main_container");

const stage2 = document.querySelector(".start");
const game = document.getElementById("game");

const scoreEL = document.getElementById("score");

let scores2 = sessionStorage.getItem("scores2")
	? sessionStorage.getItem("scores2")
	: 0;
scoreEL.textContent = scores2;

const rock = document.getElementById("rock");
const paper = document.getElementById("paper");
const scissors = document.getElementById("scissors");
const lizard = document.getElementById("lizard");
const spock = document.getElementById("spock");

const userRock = document.getElementById("user_rock");
const userPaper = document.getElementById("user_paper");
const userScissors = document.getElementById("user_scissors");
const userLizard = document.getElementById("user_lizard");
const userSpock = document.getElementById("user_spock");

const computerRock = document.getElementById("computer_rock");
const computerPaper = document.getElementById("computer_paper");
const computerScissors = document.getElementById("computer_scissors");
const computerLizard = document.getElementById("computer_lizard");
const computerSpock = document.getElementById("computer_spock");

const winOrLose = document.getElementById("win_lose");
const win = document.getElementById("win");
const tie = document.getElementById("tie");
const lose = document.getElementById("lose");

const playAgain = document.getElementById("playAgain");

const myArray = ["rock", "paper", "scissors", "lizard", "spock"];

// ### FUNCTIONS ###

const value = myArray[(Math.random() * myArray.length) | 0];

function computerValue(value) {
	if (value === "rock") {
		computerPaper.classList.add("computerSelectionHide");
		computerScissors.classList.add("computerSelectionHide");
		computerLizard.classList.add("computerSelectionHide");
		computerSpock.classList.add("computerSelectionHide");
	} else if (value === "paper") {
		computerRock.classList.add("computerSelectionHide");
		computerScissors.classList.add("computerSelectionHide");
		computerLizard.classList.add("computerSelectionHide");
		computerSpock.classList.add("computerSelectionHide");
	} else if (value === "scissors") {
		computerRock.classList.add("computerSelectionHide");
		computerPaper.classList.add("computerSelectionHide");
		computerLizard.classList.add("computerSelectionHide");
		computerSpock.classList.add("computerSelectionHide");
	} else if (value === "lizard") {
		computerRock.classList.add("computerSelectionHide");
		computerPaper.classList.add("computerSelectionHide");
		computerScissors.classList.add("computerSelectionHide");
		computerSpock.classList.add("computerSelectionHide");
	} else {
		computerRock.classList.add("computerSelectionHide");
		computerPaper.classList.add("computerSelectionHide");
		computerScissors.classList.add("computerSelectionHide");
		computerLizard.classList.add("computerSelectionHide");
	}
}

computerValue(value);

function gameResult(user, value) {
	if (
		(user === "rock" && value === "scissors") ||
		(user === "rock" && value === "lizard") ||
		(user === "paper" && value === "rock") ||
		(user === "paper" && value === "spock") ||
		(user === "scissors" && value === "paper") ||
		(user === "scissors" && value === "lizard") ||
		(user === "lizard" && value === "spock") ||
		(user === "lizard" && value === "paper") ||
		(user === "spock" && value === "scissors") ||
		(user === "spock" && value === "rock")
	) {
		scores2++;
		scoreEL.textContent = scores2;
		sessionStorage.setItem("scores2", scores2);

		winOrLose.classList.remove("playerWinOrLose");
		win.classList.remove("playerWinOrLose");
	} else if (
		(user === "rock" && value === "rock") ||
		(user === "paper" && value === "paper") ||
		(user === "scissors" && value === "scissors") ||
		(user === "lizard" && value === "lizard") ||
		(user === "spock" && value === "spock")
	) {
		winOrLose.classList.remove("playerWinOrLose");
		tie.classList.remove("playerWinOrLose");
	} else {
		winOrLose.classList.remove("playerWinOrLose");
		lose.classList.remove("playerWinOrLose");
	}
}

// ### CSS RULES ##
goBack.addEventListener("click", function () {
	history.back();
});

rules.addEventListener("click", function () {
	rulesModal.classList.remove("rules_hide");
	mainContainer.classList.add("overlay");
	game.classList.add("no_click");
});

close.addEventListener("click", function () {
	rulesModal.classList.add("rules_hide");
	mainContainer.classList.remove("overlay");
	game.classList.remove("no_click");
});

// $$$ GAME $$$

rock.addEventListener("click", function () {
	stage2.classList.remove("hide");
	game.classList.add("hide");

	userPaper.classList.add("userSelectionHide");
	userScissors.classList.add("userSelectionHide");
	userLizard.classList.add("userSelectionHide");
	userSpock.classList.add("userSelectionHide");

	gameResult("rock", value);
});

paper.addEventListener("click", function () {
	stage2.classList.remove("hide");
	game.classList.add("hide");

	userRock.classList.add("userSelectionHide");
	userScissors.classList.add("userSelectionHide");
	userLizard.classList.add("userSelectionHide");
	userSpock.classList.add("userSelectionHide");

	gameResult("paper", value);
});

scissors.addEventListener("click", function () {
	stage2.classList.remove("hide");
	game.classList.add("hide");

	userRock.classList.add("userSelectionHide");
	userPaper.classList.add("userSelectionHide");
	userLizard.classList.add("userSelectionHide");
	userSpock.classList.add("userSelectionHide");

	gameResult("scissors", value);
});

lizard.addEventListener("click", function () {
	stage2.classList.remove("hide");
	game.classList.add("hide");

	userRock.classList.add("userSelectionHide");
	userPaper.classList.add("userSelectionHide");
	userScissors.classList.add("userSelectionHide");
	userSpock.classList.add("userSelectionHide");

	gameResult("lizard", value);
});

spock.addEventListener("click", function () {
	stage2.classList.remove("hide");
	game.classList.add("hide");

	userRock.classList.add("userSelectionHide");
	userPaper.classList.add("userSelectionHide");
	userScissors.classList.add("userSelectionHide");
	userLizard.classList.add("userSelectionHide");

	gameResult("spock", value);
});

playAgain.addEventListener("click", function () {
	window.location.reload();
});
