$(document).ready(function () {
    $("#apropos").hover(function() {
        $("#rondB").animate({ opacity: "1" }, 800, "swing" );
        $("#description").delay(1000).animate({ opacity: "1" }, 800, "swing" );
    });
    // $("#langages").on('mouseenter', function () { 
    //     if (!$("#fr, #pt, #en, #sp, #ger").hasClass('animationDone')) {
    //       $("#fr, #pt").animate({
    //         width: "100%"
    //       }, 500, function() {
    //         $("#fr, #pt").addClass('animationDone');
    //       });
    //       $("#en, #sp").animate({
    //         width: "80%"
    //       }, 500, function() {
    //         $("#en, #sp").addClass('animationDone');
    //       });
    //       $("#ger").animate({
    //         width: "20%"
    //       }, 500, function() {
    //         $("#ger").addClass('animationDone');
    //       });
    //     }
    //   });
});