const rules = document.getElementById("rules");
const close = document.getElementById("close");
const rulesModal = document.querySelector(".rules_modal");
const mainContainer = document.querySelector(".main_container");
const stage2 = document.querySelector(".start");
const game = document.getElementById("game");

rules.addEventListener("click", function () {
	rulesModal.classList.remove("rules_hide");
	mainContainer.classList.add("overlay");
});

close.addEventListener("click", function () {
	rulesModal.classList.add("rules_hide");
	mainContainer.classList.remove("overlay");
});

game.addEventListener("click", function () {
	stage2.classList.remove("hide");
	game.classList.add("hide");
});
