const nameInput = document.querySelector("#name");
const contentInput = document.querySelector("#content");
const button = document.querySelector("button");
const list = document.querySelector(".list");
let option;
button.addEventListener("click", () => {
	option = document.createElement("li");
	option.textContent = nameInput.value + " : " + contentInput.value;
	list.appendChild(option);
});
