const randommine = require('./randomMine');
let computerNum = 10;
let numTries;
let obj;

exports.storeNum = function(minValue,maxValue) {
    obj = new randommine(minValue,maxValue);
    obj.setRange(minValue,maxValue);
    numTries = 0;
    computerNum = obj.getValue();
    console.log(computerNum);
    console.log("choose a number from " + minValue + " to " + maxValue)
}

exports.guessNum = function(guess) {
    numTries++;
    if (guess > computerNum)   //choose smaller
    {
        console.log("choose smaller")
        return (1);
    }
    else if (guess < computerNum)   //choose bigger
    {
        console.log("choose bigger")
        return (-1);
    }
    else   //number is correct
    {
        console.log("you got it")
        return (0);
    }
}
exports.getNumTries = function() {
    return numTries;
}