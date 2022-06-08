





function Library() {
	this.books = [];
	this.index = 0;
	this.addBook = function(book) {
		this.books[this.index] = book;
		this.index++;
	}
	this.printBooks = function() {
		for(let i of this.books)
			console.log(i);
	}
	/*
	this.ratedAbove = function(rating) {
		for(let i in this.books)
			if(this.books[i].rating > rating)
				console.log(this.books[i].title);
	}
	*/
	this.ratedAbove = function(rating) {
		for(let i of this.books)
			if(i.rating > rating)
				console.log(i.title);
		}
	
	this.highestRatedBook = function() {
		let book = this.books[0];
		for(let i in this.books)
			if(this.books[i].rating > book.rating)
				book = this.books[i];
		return(book);
	}
	
}
function Address(number,street,city) {
		this.number = number;
		this.street = street;
		this.city = city;
		this.getInfo = function() {
			return("Address: " + this.number + " " + this.street + " " + this.city);
		}
	}


function Person(name, age, address) {
	this.name = name;
	this.age = age;
	this.address = address;
	
	this.getInfo = function() {
			return("Person:" + this.name + " " + this.age + " " + this.address.getInfo());
		}
}

const Genre = {
	MYSTERY:0,SCIFI:1,NONFICTION:2,FANTASTY:3,TRAVEL:4
}
function Book(title, pages, rating, genre, checkedOut=null) {

	this.title = title;
	this.pages = pages;
	this.rating = rating;
	this.checkedOut = checkedOut;
	this.genre = genre;
	this.borrow = function(person) {
		this.checkedOut = person;
	}
	this.unborrow = function() {
		this.checkedOut = null;
	}
	this.getInfo = function() {
		if(this.checkedOut)
			return("Book: " + this.title + " " + this.pages + " " + this.rating + " " + this.genre + " | " + this.checkedOut.getInfo());
		else 
			return ("Book " + this.title + " " + this.pages + " " + this.rating + " " + this.genre + " not checked out");
	}
}
let library = new Library();
let address1 = new Address(920,"Lake Drive", "Oceanside")
let address2 = new Address(322,"Melrose Ave", "Vista")
let person1 = new Person("Rocky",18, address1);
let person2 = new Person("Jojo",19, address2);
let book1 = new Book("The Goblet of Fire", 400, 8.6, Genre.FANTASTY);
let book2 = new Book("Enders Game", 300, 9.0, Genre.SCIFI);
let book3 = new Book("The Hobbit", 800, 9.4, Genre.NONFICTION);
library.addBook(book1);
library.addBook(book2);
library.addBook(book3);
book1.borrow(person1);
book2.borrow(person2);

library.printBooks();
library.ratedAbove(8.9);
console.log(book3.getInfo());
//console.log(library.highestRatedBook().title + " Rating of " library.highestRatedBook().rating);

//library.highestRatedBook();
/*
let MathT = new MathFunc(3,6);
console.log(MathT.num1);
MathT.addPrint();

function MathFunc(num1, num2) {
	this.num1 = num1;
	this.num2 = num2;
	this.addReturn = function() {
		return(this.num1 + this.num2);
	}
	this.addPrint = function() {
		console.log(this.addReturn());
	}
}


*/


/*
let obj1 = new Object();

obj1.name = "Fred";
obj1.age = 34;
console.log(obj1)

obj1.isMale = true;
obj1.weight = 145.8;
console.log(obj1)

let obj2 = {name:'Annie',age:17,isMale:false,gradeLevel:12};
console.log(obj2)
console.log(obj2.name);
console.log(obj2["age"]);
console.log(obj2.age);

/////////////////////
console.log("==============");

let obj3 = {name:"Rover",address:{country:"USA",state:"CA",city:"Vista"},age:7}
let obj4 = obj3;
console.log(obj3)
console.log(obj4.address.state)

/////////////////////
console.log("==============");

function Car(make,model,year) {
	this.make = make;
	this.model = model;
	this.year = year;
}
let myCar = new Car("Mini","Cooper",2016);
console.log(myCar)
let yourCar = new Car("Tesla","Roadster",2020);
console.log(yourCar)

console.log(yourCar.model)
console.log(yourCar["model"])
console.log("==============");
let carPtr = myCar;
console.log(carPtr);
carPtr.newVal1 = 8;
carPtr.newVal2 = {val1:false,val2:"hello"};
console.log(carPtr);
console.log(carPtr.newVal2.val1);

/////////////////////
console.log("==============");
for (let i in yourCar) {
	console.log(i);
	console.log(yourCar[i]);
}
*/
