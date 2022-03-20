const rules = document.getElementById("rules");
const close = document.getElementById("close");
const rulesModal = document.querySelector(".rules_modal");
const mainContainer = document.querySelector(".main_container");
const stage2 = document.querySelector(".start");
const game = document.getElementById("game");
const rock = document.getElementById("rock");
const paper = document.getElementById("paper");
const scissors = document.getElementById("scissors");

rules.addEventListener("click", function () {
	rulesModal.classList.remove("rules_hide");
	mainContainer.classList.add("overlay");
});

close.addEventListener("click", function () {
	rulesModal.classList.add("rules_hide");
	mainContainer.classList.remove("overlay");
});

rock.addEventListener("click", function () {
	stage2.classList.remove("hide");
	game.classList.add("hide");
});

paper.addEventListener("click", function () {
	stage2.classList.remove("hide");
	game.classList.add("hide");
});

scissors.addEventListener("click", function () {
	stage2.classList.remove("hide");
	game.classList.add("hide");
});
