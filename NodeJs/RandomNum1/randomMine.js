
const seedrandom = require('seedrandom');

let minValue = 10;
let maxValue = 20;

exports.getValue = function (){
	let rng = seedrandom();
	let myRandomNumber = Math.floor(rng()* this.getRange()+ this.getMin());
	return(myRandomNumber);
	//return(Math.random()* (maxValue - minValue) + minValue);
	//return(parseInt(Math.random()* (maxValue - minValue) + minValue));
}
exports.setRange = function(minVal,maxVal){
minValue = minVal;
maxValue = maxVal;
}

exports.getMin = function (){
return(minValue);
}
exports.getMax = function (){
return(maxValue);
}

exports.getRange = function(){
return(maxValue - minValue + 1);
}