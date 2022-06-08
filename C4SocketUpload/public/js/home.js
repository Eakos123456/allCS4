      var numText = 0;

      polling();

      function polling() {
      $.get("/request", success);
      let numMilliSeconds = 1000;   // 1000 milliseconds = 1 second
      setTimeout(polling, numMilliSeconds);
      }
      function handleAddText(name, text, num)
      {
      numText = num;
      let n = name + ": " + text;
      var li = document.createElement("li");
      li.innerHTML = n;
      var ul = document.getElementById("playlist");
      ul.appendChild(li);
      }
      function success(data) { 
      if(data.name != "" && data.text != "" && data.name != undefined && data.text != undefined 
        && numText != Number(data.num))
        handleAddText(data.name, data.text, Number(data.num));
      return false;
      }

var text_input = document.getElementById("text1");
text_input.addEventListener("keypress", function(event) {
  if(event.code != "Enter")
    return;
          $.ajax({
          url: "/uploadText",
          type: "POST",
          data: {text:$("#text1").val(),name:$("#name").val()},
          success: function(data){
            } ,
          dataType: "json"
        });
      $("#text1").val("");
      return false;
});

      function handleButtonClick() {
      $.ajax({
          url: "/uploadText",
          type: "POST",
          data: {text:$("#text1").val(),name:$("#name").val()},
          success: function(data){

            } ,
          dataType: "json"
        });
      return false;
      }