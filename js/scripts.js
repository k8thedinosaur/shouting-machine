$(document).ready(function() {
 $("#shoutForm").submit(function() {
   var shout = $("input#shout").val().toUpperCase();
  //  return shout.toUpperCase();

   $(".shout").text(shout);

   event.preventDefault();
 });
});
