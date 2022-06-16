
function pickFlag(){
	let background = document.getElementById("flag");

	switch(this.value){
		case "other":
			background.style.backgroundImage = "url('images/enby.jpg')";
			break;
		case "all":
			background.style.backgroundImage = "url('images/pangender.png')";
			break;
		case "none":
			background.style.backgroundImage = "url('images/genderqueer.png')";
			break;
		case "what":
			background.style.backgroundImage = "url('images/genderfluid.png')";
			break;
		case "na":
			background.style.backgroundImage = "url('images/agender.png')";
			break;
		default:
			background.style.backgroundImage = "url('images/trans.png')";
	}
}

document.getElementById("other_dropdown").addEventListener("change", pickFlag);