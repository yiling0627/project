/**
 * Created by yiling on 09/05/2017.
 */
$(document).ready(function () {
    $('#signup,.sign-up').click(function () {
        $('.modal-content .title-sign').css('display','block');
        $('.modal-content .signup').css('display','block');
        $('.modal-content .sign-up').css('color','white');
        $('.modal-content .title-log').css('display','none');
        $('.modal-content .login').css('display','none');
        $('.modal-content .log-in').css('color','#948158');
    })
    $('#login,.log-in').click(function () {
        $('.modal-content .title-log').css('display','block');
        $('.modal-content .login').css('display','block');
        $('.modal-content .log-in').css('color','white');
        $('.modal-content .title-sign').css('display','none');
        $('.modal-content .signup').css('display','none');
        $('.modal-content .sign-up').css('color','#948158');
    })
    var s = skrollr.init()
})