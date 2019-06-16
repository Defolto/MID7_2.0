let flagMenu = 0;
$(".spisok").hide();
$(".button").click(function () {
    if (flagMenu == 0) {
        $(".menu").css({'animation' : '.7s menu1 cubic-bezier(0.075, 0.82, 0.165, 1) forwards'});
        $(".main").css({'animation' : '.7s main1 cubic-bezier(0.075, 0.82, 0.165, 1) forwards'});
        $(".spisok").slideDown(700);
        flagMenu++;
        $(".line2").hide();
        $(".line1").css({'animation' : '.7s line1 cubic-bezier(0.075, 0.82, 0.165, 1) forwards'});
        $(".line3").css({'position' : 'absolute', 'animation' : '.7s line3 cubic-bezier(0.075, 0.82, 0.165, 1) forwards'});
    }
    else{
        $(".menu").css({'animation' : '.7s menu2 cubic-bezier(0.075, 0.82, 0.165, 1) forwards'});
        $(".main").css({'animation' : '.7s main2 cubic-bezier(0.075, 0.82, 0.165, 1) forwards'});
        $(".spisok").hide(500);
        $(".line2").slideDown();
        flagMenu--;
        $(".line1").css({'animation' : 'none'});
        $(".line3").css({'animation' : 'none'});
    }
});
$(document).ready(function () {
    if($(window).innerWidth() < 500){
        $(".col-lg-7").removeClass("px-5");
        $("a img").attr({"width": "40px",
        "height" : "40px"
        });
        $("#ico").removeClass("mx-5 px-5");
    }
    if(($(window).innerHeight() < 557) || ($(window).innerWidth()) < 992){
        $(".menu").css("height", "100%");

    }
    if ($(window).innerWidth() < 992){
        $(".col-lg-5").addClass("order-0");
        $(".col-lg-7").addClass("order-1");
    }
    $(".info").innerHeight($(".menu").innerHeight());
});
