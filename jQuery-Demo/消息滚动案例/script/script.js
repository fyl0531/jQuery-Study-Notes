$(document).ready(function(){
    setInterval(function(){
        //slideDown()对hide()的对象才有作用；
        $(".item").last().hide().prependTo("#scrollBox").slideDown();
    },3000);
})