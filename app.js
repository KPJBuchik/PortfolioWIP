

$('#controlR').click(function() {
event.preventDefault()
    $('#content').animate({
      marginLeft: "-=800px"
    }, "fast");
 });

$('#controlL').click(function() {
event.preventDefault()
    $('#content').animate({
      marginLeft: "+=800px"
    }, "fast");
});

$('#controlR').click(function(){
    event.preventDefault();
    $(".last").stop()
    })









