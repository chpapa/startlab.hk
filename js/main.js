$(window).scroll(function(){
//box one
    var $win = $(window);
    $('#side-nav').css('top', $win.scrollTop());
});

$(document).ready(function() {

    $("#menu-btn").on("click", function(e){
            $("#mobile-menu").slideToggle();
            $(this).toggleClass("active");
            e.preventDefault();
         });

});