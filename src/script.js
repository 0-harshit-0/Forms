/*window.onload = () => {
	document.querySelectorAll(".wrap *").forEach(z=> {
		z.setAttribute("contenteditable", "true");
	});
}*/

let bts = document.querySelectorAll(".btns");
bts[1].onclick = () => {
	document.querySelectorAll("input").forEach(z=> z.value="");
}