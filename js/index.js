/**
 * Created by yiling on 08/08/2017.
 */
$(document).ready(function () {
    $('.item').mouseenter(function () {
        $(this).addClass('animated infinite flash');
    })
    $('.item').mouseleave(function () {
        $(this).removeClass('animated infinite flash');
    })
    $('.tool').click(function () {
        $('.nav').hide();
        $('.nav-tool').show(1000);
    })
    $('.back').click(function () {
        $('.nav').show(1000);
        $('.nav-tool').hide();
    })
})
