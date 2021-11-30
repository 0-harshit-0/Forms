function clearTools() {
	document.querySelectorAll(".tools").forEach(z=> {
		z.remove();
	});
}


function menuDis(dis="none") {
	document.querySelector(".createMenu").style.display = dis;
}
document.querySelector(".CreateBtns").onclick = () => {
	menuDis("flex");
}
document.querySelectorAll(".menuBtnCont button")[0].onclick = () => {
	menuDis();
}
document.querySelectorAll(".menuBtnCont button")[1].onclick = () => {
	menuDis();
}

function toolChange() {
	let heightInput = document.querySelector(".heightInpCont input");
	heightInput.addEventListener("keyup", (e) => {
		//console.log(heightInput.value)
		create(heightInput.value);
	});
}
create = (() => {
	let pw = document.querySelector(".previewWindow");
	let sec = document.createElement("section");
	let h3 = document.createElement("h3");
	let inp = document.createElement("input");

	return function (h=150, mycallback) {
		//console.log(h)
		sec.setAttribute("class", "section");
		h3.setAttribute("class", "sheading");
		h3.setAttribute("contenteditable", "true");
		h3.innerText = "Full Name";
		inp.setAttribute("class", "text");
		inp.setAttribute("required", "true");
		inp.setAttribute("placeholder", "answer");
		inp.type = "text";
		inp.name = "fn";

		sec.appendChild(h3);
		sec.appendChild(inp);
		sec.style.height = `${h}px`;
		pw.appendChild(sec);

		if(mycallback) mycallback();
	}
})();
create(h=150, toolChange);