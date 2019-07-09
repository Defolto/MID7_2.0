var a1 = " бизнеса";
for(i=0;i<a1.length;i++)
    show(a1.substr(i,1),i*150);
function show(l,d){
    setTimeout(function(){
        $('#slovo').append(l);
    },d);
}
for(i=0;i<a1.length;i++)
    delet(i*150+1600);
function delet(d){
    setTimeout(function(){
        a1 = a1.substring(0, a1.length - 1);
        $('#slovo').text(a1);
    },d);
}
let number = 1;
setInterval(function(){
    var a = [" бизнеса", " блогера", "магазина"];
    let t = a[number];
    for(i=0;i<t.length;i++)
        show(t.substr(i,1),i*150);
    function show(l,d){
        setTimeout(function(){
            $('#slovo').append(l);
        },d);
    }
    for(i=0;i<t.length;i++)
        delet(i*150+1600);
    function delet(d){
        setTimeout(function(){
            t = t.substring(0, t.length - 1);
            $('#slovo').text(t);
        },d);
    }
    if (number != 2) {
        number++;
    }
    else{
        number = 0;
    }
}, 3000)


var summ = 200;
$('#price').val(`${summ} руб`);

function getValue(a) {
    var part = a.value;
    if(part == -20){
        return 200;
    }
    return +part;
}

function getPrice() {
    var summ = 0;
    var part = document.getElementsByClassName('custom-select');
    for (let i = 0; i < 4; i++) {
        summ += getValue(part[i]);
    }
    if(getValue(part[3]) == 200){
        $('#price').val(`от ${summ} руб`);
    }
    else{
        $('#price').val(`${summ} руб`);
    }
}
$('.custom-select').change(function (){
    getPrice();
});

if(window.innerWidth <= 767){
    $('.order-2').addClass('order-0');
    $('.order-2').removeClass('order-2');
}

var min = 5;
var sec = 0;
var timerId = setInterval(function() {
    if (sec == 0) {
        min--;
        sec = 60;
    }
    sec--;
    if (sec < 10) {
        $('#sec').text('0' + sec);
    }
    else{
        $('#sec').text(sec);
    }
    $('#min').text(min);
  }, 1000);

  setTimeout(function() {
    clearInterval(timerId);
    alert("Вы упустили свой подарок");
    $('#sec').text("");
    $('#min').text("");
  }, 300000);

//   smartphone
if ($(window).innerWidth() < 1076) {
    $("#fon .col-md-6").removeClass("p-5 mx-5");
    $("#fon .col-md-6").addClass("p-4");
    $("#fon .row").css("background-color", "rgba(255, 255, 255, 0.727)");

    $("#block2 .row div").removeClass("px-5");
    $("#block2 .row div").addClass("px-3 text-center");


    $("#block3 .row:nth-child(2)").removeClass("px-5");

    $("#fon1 .row:nth-child(2)").removeClass("px-5");
}
if ($(window).innerWidth() < 992) {
    $("#block2 .row div + div").text("");
}
if ($(window).innerWidth() < 1140) {
    $(".align-text-bottom").text("");
}

if ($(window).innerWidth() < 430) {
    $("#butto div button").addClass("mx-0");
    $("#fon2 div:nth-child(2)").removeClass("px-5");

}
if ($(window).innerWidth() < 768) {
    $("#fon3 div .col-12 p").addClass("text-center");
}
$("#block4 div:nth-child(2) p").hide();
if ($(window).innerWidth() < 590) {
    $("#block4").removeClass("px-5");
    $("#block4 div:nth-child(2) p").show();
    $("#block4 div:nth-child(2) div").removeClass("px-5");
    $("#block4 div:nth-child(3)").removeClass("px-5");
    $("#block4 div:nth-child(3)").addClass("px-3");
}
if ($(window).innerWidth() < 1200) {
    $(".align-text-bottom + div").addClass("text-center");
}
