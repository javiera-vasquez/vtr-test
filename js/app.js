// Init foundation
$(document).foundation();
// Search toggle
$( window ).ready(function() {
    $( ".search" ).on( "click", function() {
      $( "#search" ).toggle();
    });
});
