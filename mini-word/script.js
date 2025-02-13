const p = document.querySelector("p");
const colorInput = document.querySelector(".color");
const numberInput = document.querySelector(".number");
const select = document.querySelector("#fonts");
const value = select.options[select.selectedIndex].value;

colorInput.addEventListener("input", (e) => {
	p.style.color = e.target.value;
});
