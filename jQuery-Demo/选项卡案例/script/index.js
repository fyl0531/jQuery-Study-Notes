$(document).ready(function(){
  $(".option-list li").click(function(){
    $(this).addClass("current").siblings("li").removeClass("current");
    $(".card-list li").removeClass("current").eq($(this).index()).addClass("current");
  })
})
