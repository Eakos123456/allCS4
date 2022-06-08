
var text_input = document.getElementById("textInput");
text_input.addEventListener("keypress", function(event) {
	if(event.code != "Enter")
		return;
	var list_item = document.createElement("li");
	list_item.textContent = text_input.value;

	var ul = document.getElementById("playlist");
	ul.appendChild(list_item);
	text_input.value = "";

});

function init()
{
	var button = document.getElementById("addButton");
	button.onclick = handleButtonClick;
}
function handleButtonClick()
{
	var textRef = document.getElementById("textInput");
	var text = textRef.value;
	var li = document.createElement("li");
	li.innerHTML = text;
	var ul = document.getElementById("playlist");
	ul.appendChild(li);
	textRef.value = "";
}
window.onload = init;

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