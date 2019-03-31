$(document).ready(function(){
  //设置速度
  var speed = 3000;
  //计数器
  var m = 0;
  //设置定时器
  //注意！这里myVar要设置成全局变量！
  var myVar;
  myVar = setInterval(runPlay,speed);
  
  //定时器内函数
  function runPlay(){
    console.log("定时器"+m);
    controlPlay(m);
    m++;
    if(m>4){
      m = 0;
    }
  }
  //控制图片
  function controlPlay(n){
    console.log("图片"+n);
    
    $("#play-box img").removeClass("current").eq(n).addClass("current");
    $("#bottom-spot li").removeClass("current").eq(n).addClass("current");
  }
  
  //设置鼠标进入play-box事件
  $("#play-box").mouseenter(function(){
    //侧边栏显示
    $("#aside-arrow").addClass("current");
    //图片暂停
    clearInterval(myVar);
  }).mouseleave(function(){
    $("#aside-arrow").removeClass("current");
    //myVar随着setInterval()的变化而变化，所有以后set的计时器可以clear掉。
    //如果没有加myVar = setInterval(runPlay,speed);那么每次clear掉的都是第一个计时器。
    myVar = setInterval(runPlay,speed);
    console.log(myVar);
  })

  //设置鼠标点击bottom-spot事件 
  $("#bottom-spot ul li").click(function(){
    controlPlay($(this).index());
    m = $(this).index() + 1;
    if(m > 4) {
      m = 0 ;
    }
  })

  //设置鼠标点击arrow-left事件
  $(".arrow-left").click(function(){
    m -= 1;
    if(m < 0) {
      m = 4 ;
    }
    controlPlay(m);
  }) 
  //设置鼠标点击arrow-right事件
  $(".arrow-right").click(function(){
    m += 1;
    if(m > 4) {
      m = 0 ;
    }
    controlPlay(m);
  }) 
 
  
});
  