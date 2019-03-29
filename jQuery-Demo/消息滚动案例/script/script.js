$(document).ready(function(){
 /*    //效果1
    setInterval(function(){
        //slideDown()对hide()的对象才有作用；
        $("#scrollBox.item")
        .last()
        .fadeTo(0,0)//渐变
        .hide()
        .prependTo(".box1")
        .slideDown(500)
        .fadeTo(1000,1);//渐变效果
    },3000); 
 */
    //效果二
    //保持只显示4个项目
    $(".item:gt(3)").hide();
    //定时
    setInterval(function(){
        console.log("OK");
        $(".item").eq(3).fadeOut(600,function(){
            $(".item").last().prependTo("#scrollBox").slideDown(600);
        })
    },3000);
    
})