var express = require("express");
var passport = require("passport");
var path = require("path");

var User = require("./models/user");
var router = express.Router();

//function ensureAuthenticated(req, res, next) {
//  if (req.isAuthenticated()) {
//    next();
//  } else {
//    req.flash("info", "You must be logged in to see this page.");
//    res.redirect("/login");
//  }
//}

router.use(function(req, res, next) {
  res.locals.currentUserjy = req.user;
  res.locals.errors = req.flash("error");
  res.locals.infos = req.flash("info");
  next();
});

const myDatabase = require('./myDatabase');
let db = new myDatabase();
const Data = require('./Data');

router.get('/userlist' , function (req , res) {
  return(db.getAllData(res));
});



router.get("/successroot", function(req, res) {
console.log("get successroot");
	res.json({redirect:"/"});	
});

router.get("/failroot", function(req, res) {
console.log("get failroot");
	res.json({redirect:"/login"});	
});

router.get("/successsignup", function(req, res) {
console.log("get successsignup");
if(req.user.username == 'admin')
  res.json({redirect:"/admin"});
else
	res.json({redirect:"/session"});	
});

router.get("/failsignup", function(req, res) {
console.log("get failsignup");
	res.json({redirect:"/login"});	
});

router.get("/successlogin", function(req, res) {
console.log("get successlogin");
if(req.user.username == 'admin')
  res.json({redirect:"/admin"});
else
	res.json({redirect:"/session"});	
});
router.get("/faillogin", function(req, res) {
console.log("get failsignup");
	res.json({redirect:"/login"});	

});



router.get("/", function(req, res, next) {
console.log("get root");
	let thePath = path.resolve(__dirname,"public/views/login.html");		
	res.sendFile(thePath);	
});

router.get("/signup", function(req, res) {
console.log("get signup");

	let thePath = path.resolve(__dirname,"public/views/signup.html");		
	res.sendFile(thePath);	

});

router.get("/login", function(req, res) {
console.log("get login");

	let thePath = path.resolve(__dirname,"public/views/login.html");		
	res.sendFile(thePath);	

});


router.get("/session", function(req, res) {
  console.log("get session");
  if (req.isAuthenticated()) {
    console.log("sendFile session.html")
	let thePath = path.resolve(__dirname,"public/views/session.html");		
	res.sendFile(thePath);	
  } else {
    console.log("sendFile login.html")
  	let thePath = path.resolve(__dirname,"public/views/login.html");		
	res.sendFile(thePath);	
  }
});

router.get("/admin", function(req, res) {
  console.log("get session");
  if (req.isAuthenticated()) {
    console.log("sendFile session.html")
  let thePath = path.resolve(__dirname,"public/views/admin.html");    
  res.sendFile(thePath);  
  } else {
    console.log("sendFile login.html")
    let thePath = path.resolve(__dirname,"public/views/login.html");    
  res.sendFile(thePath);  
  }
});

router.get("/userInfo",function(req,res){
  console.log("get userInfo");
     if (req.isAuthenticated()) {
  console.log("req isAuthenticated");
  console.log("valueJY = " + req.user.valueJY);    /* user defined value */
		return(db.getData(req.user.username,res));
    //res.json({username:req.user.username});
	}
	else {
  console.log("req is not Authenticated");
		res.json(null);
	}
});


router.post("/create", function(req, res) {
  if (req.isAuthenticated()) {
  let obj = new Data(req.user.username, 9);
//change code       
    return(db.postData(obj,res));
  }
  else
    res.json(null);
});

router.get("/logout", function(req, res) {
  console.log("get logout")
  if (req.isAuthenticated()) {
  console.log("req isAuthenticated");
    req.logout();
    res.redirect("/successroot");
  } else {
  console.log("req is not Authenticated");
    res.redirect("/failroot");
  }
});

router.put("/update", function(req, res) {
  if (req.isAuthenticated()) {
  //console.log(req.query.grade);
  //console.log(req.query.username);
  let obj = new Data(req.user.username, req.body.grade);
//change code
    return(db.putData(obj,res));
  }
  else
    res.json(null);
});

router.get("/read", function(req, res) {
  if (req.isAuthenticated()) {
    return(db.getData(req.user.username,res));
  }
  else
  {
    return(res.json(null));
  }
});

router.post("/signup", function(req, res, next) {
console.log("post signup");

  var username = req.body.username;
  var password = req.body.password;

  User.findOne({ username: username }, function(err, user) {
console.log("User findOne function callback")
    if (err) 
    {
      console.log("err"); 
      return next(err); 
    }
    if (user) {
      console.log("user")
      req.flash("error", "User already exists");
      return res.redirect("/failsignup");
    }
console.log("new User")
    var newUser = new User({
      username: username,
      password: password
    });

    newUser.save(next);    //goes to user.js (userSchema.pre(save))
  });


}, passport.authenticate("login", {       //goes to setuppassport.js  (passport.use("login"))
  successRedirect: "/successsignup",
  failureRedirect: "/failsignup",
  failureFlash: true
}));




router.post("/login", passport.authenticate("login", {
  successRedirect: "/successlogin",
  failureRedirect: "/faillogin",
  failureFlash: true
}));

module.exports = router;
