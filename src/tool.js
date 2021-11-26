function clearTools() {
	document.querySelectorAll(".tools").forEach(z=> {
		z.remove();
	});
}
document.querySelector(".CreateBtns").onclick = () => {
	document.querySelector(".createMenu").style.display = "flex";
}
document.querySelectorAll(".menuBtnCont button")[1].onclick = () => {
	document.querySelector(".createMenu").style.display = "none";
}
