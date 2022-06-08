

var text_input1 = document.getElementById("textInput1").value;
var text_input2 = document.getElementById("textInput2").value;
var functionChosen = document.getElementById("function");
var buttonPressed = document.getElementById("calculate");
function init()
{	
	buttonPressed.onclick = handleButtonClick;
}

function handleButtonClick()
{
	text_input1 = parseInt(document.getElementById("textInput1").value);
	text_input2 = parseInt(document.getElementById("textInput2").value);
	if(isNaN(text_input1) || isNaN(text_input2))
		return;
	let ul = document.getElementById("playlist");

	let add = document.createElement("li");
	let num = 0;
	let stringAdded = "";
	if(functionChosen.value == "ADD")
	{
		num = text_input1+text_input2;
		stringAdded = " + "
	}
	else if(functionChosen.value == "SUBTRACT")
		{
		num = text_input1-text_input2;
		stringAdded = " - "
		}
	else if(functionChosen.value == "MULTIPLY")
		{
		num = text_input1*text_input2;
		stringAdded = " * "
		}
	else if(functionChosen.value == "DIVIDE")
		{
		num = text_input1/text_input2;
		stringAdded = " / "
		}
	else if(functionChosen.value == "EXPONENT")
		{
		num = text_input1**text_input2;
		stringAdded = " ^ "
		}
		add.textContent = text_input1 + stringAdded + text_input2 + " = " + num;
		ul.appendChild(add);
}

window.onload = init;
/*
text_input.addEventListener("keypress", function(event) {
	if(event.code != "Enter")
		return;

	let less = document.createElement("li");
	less.textContent = "Choose a lesser number";

	let great = document.createElement("li");
	great.textContent = "Choose a greater number";

	let correct = document.createElement("li");
	correct.textContent = "You guessed correctly";

	var ul = document.getElementById("playlist");

	if(parseInt(text_input.value) == num)
		ul.appendChild(correct);
	else if(parseInt(text_input.value) < num)
		ul.appendChild(great);
	else if(parseInt(text_input.value) > num)
		ul.appendChild(less);
	text_input.value = "";
	

});
*/
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