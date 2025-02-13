const p = document.querySelector("p");
const colorInput = document.querySelector(".color");
const numberInput = document.querySelector(".number");
const select = document.querySelector("select");
const options = document.querySelectorAll("option");

colorInput.addEventListener("input", (e) => {
	p.style.color = e.target.value;
});
numberInput.addEventListener("change", (e) => {
	p.style.fontSize = e.target.value + "px";
});
select.addEventListener("change", (e) => {
	p.style.fontFamily = select.value;
	console.log(e);
});
