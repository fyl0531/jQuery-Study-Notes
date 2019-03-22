$(document).ready(function(){
  $("#box").mousedown(function(eve){
    $(this).css("opacity","0.5");//修改透明度
    //获取鼠标在box中的偏移位置
    var offsetX = eve.pageX - $(this).offset().left;
    var offsetY = eve.pageY - $(this).offset().top;
    $(this).mousemove(function(event){
      //获取鼠标的位置
      var x = event.pageX - offsetX;
      var y = event.pageY - offsetY;
      //改变元素的位置
      $(this).offset({
        top:y,
        left:x
      })
    })
  }).mouseup(function(){
    $(this).css("opacity","1");//恢复透明度
    $(this).off("mousemove");//解除绑定
  })
})