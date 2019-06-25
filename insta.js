$('.vk').click(function () { 
    window.open("https://vk.com/mid7_vk");
});
$('.viber').click(function () { 
    window.open("viber://chat?number=79159766838");
});
$('.phone').click(function () { 
    window.open("tel:+79159766838");
});
$('.site').click(function () { 
    window.open("http://mid7.ru/");
});
$('.whats').click(function () { 
    window.open("https://wa.me/79159766838");
});

$(document).ready(function() {
    var block = $(window).height() - $('.left-right').height();
    $('.block').height(block);
});