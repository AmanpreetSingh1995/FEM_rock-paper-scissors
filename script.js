const rules = document.getElementById("rules");
const close = document.getElementById("close");
const rulesModal = document.querySelector(".rules_modal");
const mainContainer = document.querySelector(".main_container");

rules.addEventListener("click", function () {
	rulesModal.classList.remove("hide");
	mainContainer.classList.add("overlay");
});

close.addEventListener("click", function () {
	rulesModal.classList.add("hide");
	mainContainer.classList.remove("overlay");
});
