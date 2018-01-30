/**
 * Created by yiling on 06/05/2017.
 */


$(document).ready(function () {
    $(window).on("scroll", function () {
        var $scTop = $(this).scrollTop();
        if ($scTop > 300) {
            $('.content-left').addClass('animated bounceInLeft');
            // $('.content-right').addClass('animated bounceInRight');
        }
    });
})
$(document).ready(function () {
    $('.content-level-4').mouseover(function () {
        $('.content-level-4 .item').css('visibility','visible')
        $('.content-level-4 .item').addClass('animated zoomIn')
    })
})
$(document).ready(function () {
    $('.footer').mouseover(function () {
        $('.top-btn').css('visibility','visible')
        $('.top-btn').addClass('animated zoomIn')
    })
    smoothScroll.init();
})

