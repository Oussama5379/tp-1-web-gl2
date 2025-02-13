let level = levelPrompt();
play(level);
function play(level) {
	let numberOfAttemps;
	let intervalle;
	let randomNumber;
	if (level == "facile") {
		numberOfAttemps = 10;
		intervalle = 50;
	} else if (level == "intermediaire") {
		numberOfAttemps = 7;
		intervalle = 100;
	} else {
		numberOfAttemps = 5;
		intervalle = 200;
	}
	randomNumber = Math.floor(Math.random() * intervalle);

	let choice;
	for (let i = 0; i < numberOfAttemps; i++) {
		choice = Number(prompt(`donner un numero entre 1 et ${intervalle}`));
		if (choice == randomNumber) {
			alert("vous avez gagner");
			break;
		} else if (choice < randomNumber) {
			alert("donner un numero plus grand");
		} else {
			alert("donner un numero plus petit");
		}
	}
	if (choice != randomNumber) {
		alert(`vous avez perdu ,le numero est ${randomNumber}`);
	}
	let replay = prompt("Voulez vous rejouer(O/N)");
	while (replay.toLocaleLowerCase() != "o" && replay.toLocaleLowerCase() != "n") {
		replay = prompt("Voulez vous rejouer(O/N)");
	}
	if (replay.toLocaleLowerCase() == "o") {
		location.reload();
	}
}

function levelPrompt() {
	let level = prompt("donner un niveau de difficulté;('Facile','intermediaire','difficile') ");
	while (!["facile", "intermediaire", "difficile"].includes(level.toLocaleLowerCase())) {
		level = prompt("donner un niveau de difficulté;('Facile','intermédiaire','difficile') ");
	}
	return level.toLocaleLowerCase();
}
