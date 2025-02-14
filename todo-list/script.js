const nameInput = document.querySelector("#name");
const contentInput = document.querySelector("#content");
const inputButton = document.querySelector(".input-button");
const list = document.querySelector(".list");
let option;
let deleteButton;
inputButton.addEventListener("click", () => {
	option = document.createElement("li");
	deleteButton = document.createElement("button");
	deleteButton.innerHTML = '<i class="fa fa-trash"></i>';
	option.innerHTML = nameInput.value + " : " + contentInput.value + " ";
	list.appendChild(option);
	option.appendChild(deleteButton);
	deleteButton.addEventListener("click", (e) => {
		e.target.parentNode.parentNode.remove();
	});
});
