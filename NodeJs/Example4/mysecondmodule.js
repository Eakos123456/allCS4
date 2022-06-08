

let secondModule = function (){

secondModule.prototype.sayHello = function () {
	return('Hello');
};
secondModule.prototype.sayGoodbye = function () {
	return('Goodbye');
};

}

module.exports = secondModule;