const randommine = require('./randomMine');
let computerNum = 10;
let numTries=0;
let obj;

exports.storeNum = function(minValue,maxValue) {
computerNum = parseInt(Math.random() * (maxValue - minValue + 1) + minValue);
console.log("compter num is " + computerNum);
}

exports.guessNum = function(guess) {
	numTries++;
	if(guess > computerNum)
	{
		console.log("choose a smaller number");
		return(1);
	}
	else if(guess < computerNum)
	{
		console.log("choose a larger number");
		return(-1);
	}
	else
	{
		console.log("you guessed right");
		return(0);
	}
}

exports.getNumTries = function() {
return numTries;
}
