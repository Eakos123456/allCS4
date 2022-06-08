	// mongoose is what will let us connect to our database
	var mongoose = require('mongoose');
	// our Student Object, check out Student.js
	var Student = require('./Student');
	// Use mongoose to connect to our database
	mongoose.connect('mongodb://localhost/tempPrac');
	
	/*
	var aaroh = Student.create({
	name: 'Aaroh',
	gradeLevel: 12,
	drives: true
	});

	var Jojo = Student.create({
	name: 'Jojo',
	gradeLevel: 11,
	drives: false
	});

	Student.findOne({'name': "Aaroh"}, function(err, student) {
    if (err) {
      console.log(err);
    }
    console.log('Student with name `Aaroh`:', student);
  });
  */
	
	Student.remove({"name":"Aaroh"},function(error,student) {
    if (error)
      console.log("error");
    else
      console.log(student);
  	});
  	
	Student.findOneAndUpdate({"name":"Jojo"},{"gradeLevel":69,"drives":true},function(error,student) {
    if (error)
      console.log(error);
    else
      console.log(student);
  });




	//console.log(aaroh);
