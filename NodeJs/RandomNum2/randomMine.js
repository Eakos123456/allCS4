let myRandomNum = function(minVal,maxVal) {
    this.minValue = minVal;
    this.maxValue = maxVal;
}

myRandomNum.prototype.setRange = function(minVal,maxVal) {
    this.minValue = minVal;
    this.maxValue = maxVal;
}

myRandomNum.prototype.getMin = function() {
    return this.minValue;
}
myRandomNum.prototype.getMax = function() {
    return this.maxValue;
}
myRandomNum.prototype.getRange = function() {
    return(this.maxValue - this.minValue + 1);
}

myRandomNum.prototype.getValue = function() {
    return(Math.floor(Math.random() * this.getRange() + this.getMin()));
}


module.exports = myRandomNum;
