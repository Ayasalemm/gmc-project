$(".img1").hover(function(){
    $(".btn1").toggleClass('btnHover')
})

$(".img2").hover(function(){
    $(".btn2").toggleClass('btnHover')
})

$(".img3").hover(function(){
    $(".btn3").toggleClass('btnHover')
})
$(".img4").hover(function(){
    $(".btn4").toggleClass('btnHover')
})

$(".img5").hover(function(){
    $(".btn5").toggleClass('btnHover')
})

$(".img6").hover(function(){
    $(".btn6").toggleClass('btnHover')
})
$(".img7").hover(function(){
    $(".btn7").toggleClass('btnHover')
})

$(".img8").hover(function(){
    $(".btn8").toggleClass('btnHover')
})

$(".img9").hover(function(){
    $(".btn9").toggleClass('btnHover')
})

$(".courses > div > button").click(function(e){
    $("#ex1").modal('open')
})
$('.counter-count').each(function () {
    $(this).prop('Counter',0).animate({
        Counter: $(this).text()
    }, {
        duration: 5000,
        easing: 'swing',
        step: function (now) {
            $(this).text(Math.ceil(now));
        }
    });
});