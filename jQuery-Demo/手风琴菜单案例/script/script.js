$(document).ready(function(){
    //给h3元素绑定单击事件
    $(".nav-list h3").first().addClass("on").next("ul").show();
    $(".nav-list h3").click(function(){
        //H3小箭头 方法一
        /*if ($(this).hasClass("on")){
            $(this).removeClass("on");
        }
        else{
            $(this).addClass("on");
        }*/
        //H3小箭头 方法二：
        /*$(this).toggleClass("on");*/

        //ul隐藏与显示 方法一
        /*if($(this).next("ul").is(":visible")){
            $(this).next("ul").slideUp();//隐藏
        }else{
            $(this).next("ul").slideDown();
        }*/
        //ul隐藏与显示 方法二
        /*$(this).next("ul").slideToggle();*/

        //菜单收缩展开终极写法
        /*$(this).toggleClass("on").next("ul").slideToggle();*/

        //手风琴菜单写法
        $(this)             //当前点击的h3
        .toggleClass("on")     //当前的h3切换on类
        .siblings("h3")     //其他h3删除on类
        .removeClass("on")
        .end()              //返回$(this)
        .next("ul")
        .slideToggle()        //当前h3后面的ul隐藏/显示切换
        .siblings("ul")     //其他ul隐藏
        .slideUp();

    })
});
