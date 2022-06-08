


 	let username;

function updateClicked(){
	$.ajax({
		url: "/update",
		type:"PUT",
		data: {grade:$("#grade").val(), 'username':username},     
            dataType: "json"
        });
	return false;             
}

function readClicked(){
	$.ajax({
		url: "/read",
		type:"GET",
		success: function(data){
                console.log(data.grade)
                $('#grade').val(data.grade);
              },
		data: {},     
            dataType: "json"
        });

	return false;             
}

function logoutClicked(){
console.log("session logoutClicked")
	$.get("/logout",function(data){
console.log("session logout function callback");		
		window.location = data.redirect;
	});
	return false;             
}


$(document).ready(function(){ 
console.log("session doc ready")
	$.get("/userInfo",function(data){
console.log("session get userInfo function callback");		

		if (data.username)
		{
			username = data.username;
			$("#session").html("Session " + data.username);
			$('#grade').val(data.grade);
		}
	});

	$("#updateB").click(updateClicked);
	$("#read").click(readClicked);
	$("#logout").click(logoutClicked);

});  		
    


