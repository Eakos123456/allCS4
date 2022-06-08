
console.log("hello world");



let num = 5;
num = 4;
console.log(num);
const newVal = 4;
console.log(newVal);

let word = "4";
let isItTrue = false; 
let val = 3.25;
console.log(typeof word);
console.log(typeof isItTrue);
console.log(typeof num);
console.log(typeof val);

stuff();
function stuff() {
	{
		let value = 7;
		//console.log(value);
	}
	//console.log(value);
}


if(typeof word == "string")
	console.log("word is a string");
if(word == num)
	console.log("word is the same as num");
if(word === num) // checks the value and the type
	console.log("word is really the same as num");

let stringNum = "23";
let num3 = parseInt(stringNum) + 3;
console.log(num3);

let num4 = Number(stringNum);
console.log(typeof num4);