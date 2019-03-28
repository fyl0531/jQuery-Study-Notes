$(document).ready(function(){
  //smallBox位置
  var smallX = $("#smallBox").offset().left;
  var smallY = $("#smallBox").offset().top;
  
  //bigBox位置
  $("#bigBox").offset({
    left:smallX + 400 + 20,
    top:smallY
  })
  
  //为smallBox绑定鼠标进入/移出事件
  $("#smallBox").mouseenter(function(event){
    //显示放大镜
    $("#zoom").show();
    //大图显示
    $("#bigBox").show();
    $(this).mousemove(function(event){
      //获取鼠标在smallBox中的相对位置
      var mouseX = event.pageX - smallX;
      var mouseY = event.pageY - smallY;
      //放大镜的位置
      var zoomX = Math.min(Math.max((mouseX - 100),0),200);
      var zoomY = Math.min(Math.max((mouseY - 100),0),400);
      //放大镜移动
      $("#zoom").css("left",zoomX+"px").css("top",zoomY+"px");
      //大图移动
      $("#bigBox").scrollLeft(zoomX*2).scrollTop(zoomY*2);
    })
  })
  $("#smallBox").mouseleave(function(){
    //大图隐藏
    $("#bigBox").hide();
    //放大镜隐藏
    $("#zoom").hide();
  })
})