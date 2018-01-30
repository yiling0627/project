var btn = true;
$('.bars').click(function(){
//    $('.nav').css('display','block');
    if(btn){
       $('.nav').show(500);
        btn = false;
    }else{
        $('.nav').hide(500);
        btn = true;
    } 
})