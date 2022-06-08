function success(data) { 
//      image1.src = "images/" + data.name;  // 0
      if(data.name != "")
        image1.src = data.name;    // 1
//      image1.src = 'hello/' + data.name;    // 2
  		}
  		function getImage(){
    		  $.get("/request", success);
    		  return false;
    		}
  		
  		$(document).ready(function(){        
    		  $("#imageButton").click(getImage);
  		});