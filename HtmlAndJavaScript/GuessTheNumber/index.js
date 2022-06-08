
let num = getRandomInt(10);
console.log(num);
var text_input = document.getElementById("textInput");
text_input.addEventListener("keypress", function(event) {
	//if(event.which != 13)
	if(event.code != "Enter")
		return;
	if(isNaN(text_input.value))
		return;
	let output = "";
	var ul = document.getElementById("playlist");

	if(parseInt(text_input.value) == num)
		output = "You guessed correctly";
	else if(parseInt(text_input.value) < num)
		output = "Choose a greater number";
	else if(parseInt(text_input.value) > num)
		output = "Choose a lesser number";
	let li = document.createElement("li")
	li.textContent = output;
	ul.appendChild(li);
	text_input.value = "";
});



function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}
/*
var text_input = document.getElementById("textInput");
text_input.addEventListener("keypress",function(event) {
	if (event.code != "Enter")
		return;
// will only get here when return key is pressed.
//handle to a newly created list item.
	var list_item = document.createElement("li");
	list_item.textContent = text_input.value;

//handle to the unordered list element.
	var list = document.getElementById("playlist");
	list.appendChild(list_item);
	text_input.value = "";
});
*/