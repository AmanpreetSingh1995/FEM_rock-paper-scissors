const rules = document.getElementById("rules");
const close = document.getElementById("close");
const rulesModal = document.querySelector(".rules_modal");
const mainContainer = document.querySelector(".main_container");
const stage2 = document.querySelector(".start");
const game = document.getElementById("game");
const rock = document.getElementById("rock");
const paper = document.getElementById("paper");
const scissors = document.getElementById("scissors");
const scoreEl = document.getElementById("score"); 
const computerChoices = ["rock", "paper", "scissors"]
let scores = 0; 

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
	gameResult("rock", computerTurn()); 
});

paper.addEventListener("click", function () {
	stage2.classList.remove("hide");
	game.classList.add("hide");
	gameResult("paper", computerTurn()); 
});

scissors.addEventListener("click", function () {
	stage2.classList.remove("hide");
	game.classList.add("hide");
	gameResult("scissors", computerTurn()); 
});


function computerTurn(){
	let ind = Math.floor(Math.random() * 3); 
	return computerChoices[ind]; 
}

function gameResult(user, computer){
	if (user === "rock" && computer === "scissors" || 
		user === "paper" && computer === "rock" ||
		user === "scissors" && computer === "paper"
	) {
		scores++;
		scoreEl.textContent = scores;  
	}
	console.log(user, computer); 
}