function clearTools() {
	document.querySelectorAll(".tools").forEach(z=> {
		z.remove();
	});
}
var pw = document.querySelector(".previewWindow");
var sec = document.createElement("section");
var h3 = document.createElement("h3");
var inp = document.createElement("input");

document.querySelector(".CreateBtns").onclick = () => {
	document.querySelector(".createMenu").style.display = "flex";
}
document.querySelectorAll(".menuBtnCont button")[1].onclick = () => {
	document.querySelector(".createMenu").style.display = "none";
}

function toolChange() {
	let heightInput = document.querySelector(".heightInpCont input");
	heightInput.addEventListener("change", (e) => {
		console.log(heightInput.value)
		create(heightInput.value);
	});
}
function create(h=150) {
	console.log(h)
	sec.setAttribute("class", "section");
	h3.setAttribute("class", "sheading");
	h3.innerText = "Full Name";
	inp.setAttribute("class", "text");
	inp.setAttribute("required", "true");
	inp.setAttribute("placeholder", "anser");
	inp.type = "text";
	inp.name = "fn";

	sec.appendChild(h3);
	sec.appendChild(inp);
	sec.style.height = `${h}px`;
	pw.appendChild(sec);
}
toolChange();