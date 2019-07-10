var fon = [
    "img/standart.jpg",
    "img/customer.jpg",
    "img/server.jpg",
    "img/designer.jpg",
    "img/call.png",
    "img/optimase.jpg",
];
var block = [
    `<p class="title text-center mb-1">Стандарты</p>
    <p class="text text-center">Все наши сайты производятся по современным стандартам HTML5, CSS3 и JavaScript. Нам не важно какая стоимость была у вашего сайта, мы сделаем его так же качествено как и дорогой.</p>`,

    `<p class="title text-center mb-1">Желания клиентов</p>
    <p class="text text-center">У вас есть самые креативные и экстравагантные идеи для своего сайта, но думайте, что такое нельзя воплотить? Мы готовы разрушить ваше сомнение! Скажите нам свои требования и наши разработчики его выполят.</p>`,

    `<p class="title text-center mb-1">Качество серверов</p>
    <p class="text text-center">Надоели медленные сайты, которые открываются спустя минуты и ломаются, когда вы что-то нажмёте? Забудьте это от сайтов, созданных MID7! Все наши сайты находятся на одних из лучших серверов, поэтому их скорость максимальна.</p>`,

    `<p class="title text-center mb-1">Дизайнерские идеи</p>
    <p class="text text-center">Наши дизайнеры одни из самых креативных людей, которых вы могли встретить. Если у вас нет никаких идей по поводу вашего сайта, то доверьте эту работу им и вы получите красивый и в то же время удобный сайт.</p>`,

    `<p class="title text-center mb-1">Постоянная связь</p>
    <p class="text text-center">Каждый клиент MID7 для нас важен. Мы всегда отвечаем на проблемы и просьбы своих заказчиков даже после сделанной работы. Таким образом мы получаем хорошие отзывы и репутацию.</p>`,

    `<p class="title text-center mb-1">Оптимизация кода</p>
    <p class="text text-center">Любой сайт, это код, а плохой код, это плохой сайт. Из-за этого каждый наш проект после создания проходит самые жёсткие проверки по оптимизации, чтобы ваш сайт быстро загружался и не ломался у клиентов.</p>`
];

// var i = 0;
// setInterval(function(){

//     $(".block").fadeOut(500).delay(300);
//     setTimeout(() => {
//         $(".fon111").css({"width":"100%",
//     "height":"100%",
//     "background": `url(${fon[i]})`,
//     "background-size": "cover",
//     "min-height": "350px",
//     "border-radius": "20px"
// });
//     $("#text").html(block[i]);
//     }, 500);
//     if (i < 5) {
//         i++;
//     }
//     else{
//         i = 0;
//     }
//     $(".block").fadeIn(500);

// }, 3000);
    i = 0;
    $(".left").click(function () { 
        $(".block").fadeOut(500).delay(300);
        setTimeout(() => {
            $(".fon111").css({"width":"100%",
        "height":"100%",
        "background": `url(${fon[i]})`,
        "background-size": "cover",
        "min-height": "350px",
        "border-radius": "20px"
    });
        $("#text").html(block[i]);
        }, 500);
        if (i < 5) {
            i--;
            if(i == -1){
                i = 4;
            }
        }
        else{
            i=0;
        }
        $(".block").fadeIn(500);
    });

    $(".right").click(function () { 
        if (i < 5) {
            i++;
        }
        else{
            i=0;
        }
        $(".block").fadeOut(500).delay(300);
        setTimeout(() => {
            $(".fon111").css({"width":"100%",
        "height":"100%",
        "background": `url(${fon[i]})`,
        "background-size": "cover",
        "min-height": "350px",
        "border-radius": "20px"
    });
        $("#text").html(block[i]);
        }, 500);
        $(".block").fadeIn(500);
    });

    if($(window).innerWidth() < 758){
        $("#block1").removeClass("px-5");
        $("#block2").removeClass("px-5");
        $("#block3").removeClass("p-5").addClass("py-4 text-center");
        $("#small").addClass("px-2");
        $("ol").addClass("pl-3");
        $(".float-right").attr("width", "100%");
    }  
    else{
        $("#small").hide();
    }
