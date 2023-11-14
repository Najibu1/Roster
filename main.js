var button = document.getElementById('buttonOne');
var remove = document.getElementById("remT");
var ol = document.querySelector("ol");
var input = document.getElementById("textbox");

button.addEventListener("click", function() {
   if (input.value.length > 0) {
      var li = document.createElement("li");
      li.appendChild(document.createTextNode(input.value));
      ol.appendChild(li);
      input.value= "" 
   }
});