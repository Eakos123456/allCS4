



function logoutClicked(){
console.log("session logoutClicked")
	$.get("/logout",function(data){
console.log("session logout function callback");		
		window.location = '/';
	});
	return false;             
}


$(document).ready(function(){ 
console.log("session doc ready")
	$.get("/adminInfo",function(data){	
	$("#session").html('Admin session');
	});

	var ul = document. getElementById("userlist");
	$.get("/userlist",function(data){
	console.log("get userlist");
	for (var i = 0; i < data.length; i++) {
		var li = document. createElement("li");
		li.innerHTML = "name:" +data[i].name + " Grade:" + data[i].grade
		ul.appendChild(li);
	}
	});

	$("#logout").click(logoutClicked);

});  		
    


