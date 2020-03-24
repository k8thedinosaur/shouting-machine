$(document).ready(function() {
 $("#shoutForm").submit(function() {
   var shout = $("input#shout").val().toUpperCase();

   $(".shout").text(shout);

   $("#shouted").show();

   event.preventDefault();
 });
});
