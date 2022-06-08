const randommine = require('./randomMine');


let obj1 = new randommine(100,150);
let obj2 = new randommine(20,40);
//Script to pick a random number from 100 to 150

//console.log("obj1 = " + obj1.getValue());
//console.log("obj2 = " + obj2.getValue());
//console.log("min = " + randommine.getMin() + " max = " + randommine.getMax() + " range " + randommine.getRange());
//console.log(randommine.getValue());
console.log("obj1 = " + obj1.getMin() + " max = " + obj1.getMax() + " range " + obj1.getRange() + " random value = " + obj1.getValue());
console.log("obj2 = " + obj2.getMin() + " max = " + obj2.getMax() + " range " + obj2.getRange() + " random value = " + obj2.getValue());
