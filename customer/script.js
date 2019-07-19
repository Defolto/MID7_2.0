$(document).ready(function () {
    if($(window).innerWidth() < 758){
        $(".block1").removeClass("px-5");
        $("h2 + p").addClass('text-center');
        $("h2 + p + p").addClass('text-center');
        $(".block1").addClass("order-1");
        $(".block1 + div").addClass("order-0");
    }  
});