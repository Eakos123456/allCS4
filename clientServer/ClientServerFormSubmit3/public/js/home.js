
function onCreateClick()
{
        $.ajax({
          url: "/create",
          type: "POST",
          data: {identifier:$("#identifier").val(),name:$("#name").val(), grade:$("#grade").val() ,drives:$("#drive").prop("checked")},
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
                $("#grade").val(data.grade);
                if(data.drives == 'true')
                  $("#drive").prop("checked", true);
                else
                  $("#drive").prop("checked", false);
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
          data: {identifier:$("#identifier").val(),name:$("#name").val(),grade:$("#grade").val() ,drives:$("#drive").prop("checked")},
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

