
var file="";
$(document).ready(function() {
    $("form").submit(function(event) {
      if ($("#fileStuff").val() == "")
        return false;
    });
});
function createClicked(){
          let Nval = String($("#fileStuff").val()).replace("C:\\fakepath\\", "");
          file = Nval;
          $.ajax({
            url: "/create",
            type: "POST",
            data: {identifier:$("#identifier").val(),
                    name:$("#name").val(),
                    type:$("input[name='type']:checked").val(),
                    rating:$("#rating").val(),
                    'file':file
                  },
            success: function(data){
                if (data.error)
                  alert("bad");
                else
                {
                  console.log(file);
                  alert("good");
                  image1.src = 'im/'+ file;
                  console.log(image1.src);
                }
              } ,     
            dataType: "json"
          });   
  return false;
}
function readClicked(){
          $.ajax({
            url: "/read",
            type: "GET",
            data: {identifier:$("#identifier").val()},
            success: function(data){
                if (data.error)
                  alert("bad");
                else {
                  $("#name").val(data.name);
                  $("#" + data.type).prop("checked", true);
                  $("#rating").val(Number(data.rating));
                  image1.src = 'im/' + data.file;
                }
              } ,     
            dataType: "json"
          });   
  return false;
}
function updateClicked(){
          let Nval = String($("#fileStuff").val()).replace("C:\\fakepath\\", "");
          file = Nval;
          image1.src = 'im/'+ file;
          $.ajax({
            url: "/update",
            type: "PUT",
            data: {identifier:$("#identifier").val(),
            name:$("#name").val(), 
            type:$("input[name='type']:checked").val(),
            rating:$("#rating").val(),
            'file':file
            },
            success: function(data){
                if (data.error)
                  alert("bad");
                else
                {
                  alert("good");
                  image1.src = 'im/' + file;
                }
              } ,     
            dataType: "json"
          });   
  return false;
}
function deleteClicked(){

    let trimIdentifier = $("#identifier").val().trim();
    if (trimIdentifier == "") {
      alert("bad");
      return false; 
    }

    $.ajax({
      url: "/delete/" + $("#identifier").val(),
      type: "DELETE",
      success: function(data) { 
        if (data.error)
          alert("bad");
        else
          alert("good");
      } ,   
      dataType: "json"
    });  
    return false;             
}      
        
$(document).ready(function(){ 

  $("#createButton").click(createClicked);
  $("#readButton").click(readClicked);
  $("#updateButton").click(updateClicked);
  $("#deleteButton").click(deleteClicked);


/*
var radioValue = $("input[name='eating']:checked").val();
alert(radioValue);
$("#omnivore").prop("checked", true);


let rangeIn = $("#rating").val();
alert(rangeIn);
$("#rating").val(5);
*/
});     