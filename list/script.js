const items = document.querySelectorAll("li");
let randomNumber1;
let randomNumber2;
let randomNumber3;

items.forEach((item) => {
	item.addEventListener("click", () => {
		randomNumber1 = Math.floor(Math.random() * 256);
		randomNumber2 = Math.floor(Math.random() * 256);
		randomNumber3 = Math.floor(Math.random() * 256);
		item.style.backgroundColor = `rgb(${randomNumber1},${randomNumber2},${randomNumber3})`;
	});
});
