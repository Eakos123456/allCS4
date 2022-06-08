//readline module link below.
//https://www.geeksforgeeks.org/node-js-readline-module/

//stdout can be redirected by doing   node index.js 1> out.log
//stderr can be redirected by doing   node index.js 2> error.log

const readline = require('readline');
const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout	
//	output: process.stderr
});
rl.question("What's your name?",(answer) => {
	console.log(`Well hello there ${answer}`); //those are tilde(`) characters.
	rl.close();
});

/*
rl.question("What's your name?",function(answer) {
	console.log("Well hello there " + answer); //those are tilde(`) characters.
	rl.close();
});
*/
