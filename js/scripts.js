$(document).ready(function() {
  $(".flashcards").click(function() {
    $(this).children("p").toggle();
  });
});