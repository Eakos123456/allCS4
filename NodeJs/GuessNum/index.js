
const randommine = require('./randomMine');
const guessnum = require('./guessNum');

let minVal = 100;
let maxVal = 200;
let myGuess = 50;
let obj = new randommine(minVal,maxVal);

guessnum.storeNum(minVal,maxVal);

let keepPlaying = true;
while (keepPlaying) 
{
	myGuess = obj.getValueMiddle();
//	myGuess = obj.getValue();
	console.log("my guess is " + myGuess);
	let guessInfo = guessnum.guessNum(myGuess);
	if (guessInfo == -1) {
		minVal = myGuess+1;
		obj.setRange(minVal,maxVal);
	} else if (guessInfo == 1) {
		maxVal = myGuess-1;
		obj.setRange(minVal,maxVal);
	} else {
		keepPlaying = false;
	}
}
console.log(guessnum.getNumTries());
