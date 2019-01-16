$(document).ready(function() {
    var whatToSay = "Hello!";
  $("div#click-one").click(function(event) {
    //var whatToSay = "Hello!";
    alert(whatToSay);
  });

  $("div#click-two").click(function(event) {
    alert(whatToSay);
  });
});
//variable defined in the function event makes it a local variable that is onlt read while its processing the function but once the function is complete the variable is no longer defined.
