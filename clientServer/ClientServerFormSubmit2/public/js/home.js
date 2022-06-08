/*    
$(document).ready(function(){ 
  $("#createButton").click(onCreateClick;
}
*/

  //$("form").submit(function(event)
function onCreateClick()
{
/*        if ($("#identifier").val() == "") {
          alert("NO ID");
          return false;
        }
        if ($("#name").val() == "") {
          alert("NO NAME");
          return false;
        }
*/
        $.ajax({
          url: "/create",
          type: "POST",
          data: {identifier:$("#identifier").val(),name:$("#name").val()},
          success: function(data){
              if (data.error)
                alert("bad");
              else
                alert("good");
            } ,     
          dataType: "json"
        });
  return false;
}
function onReadClick() 
{
$.ajax({
          url: "/read",
          type: "GET",
          data: {identifier:$("#identifier").val()},
          success: function(data){
            if (data.error)
                alert("bad");
              else
              {
                alert("good");
                $("#name").val(data.name);
              }

            } ,
          dataType: "json"
        });
  return false;
}
function onUpdateClick() 
{
$.ajax({
          url: "/update",
          type: "PUT",
          data: {identifier:$("#identifier").val(),name:$("#name").val()},
          success: function(data){
            if (data.error)
                alert("bad");
              else
              {
                alert("good");
              }
            } ,
          dataType: "json"
        });
  return false;
}
/*
function onDeleteClick() 
{
$.ajax({
          url: "/delete",
          type: "DELETE",
          data: {identifier:$("#identifier").val()},
          success: function(data){
            if (data.error)
                alert("bad");
              else
              {
                alert("good");
              }
            } ,
          dataType: "json"
        });
  return false;
}
*/

function onDeleteClick() 
{
$.ajax({
          url: "/delete/" + $("#identifier").val(),
          type: "DELETE",
          success: function(data){
            if (data.error)
                alert("bad");
              else
              {
                alert("good");
              }
            } ,
          dataType: "json"
        });
  return false;
}

