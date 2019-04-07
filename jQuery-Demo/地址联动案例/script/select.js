$(document).ready(function(){
  /*citylist: [{p:安徽 
                c:[
                    n:{合肥:
                        a:[
                          s:瑶海区，
                          s:蜀山区
                        ]
                      },
                    n:{芜湖},
                    ……
                  ]
                }……
              ]*/
  //得到city.js里所有的对象
  var allCity = city.citylist;
  console.log(allCity);
  //添加所有 省
  $.each(allCity,function(index,item){
    $("#province").append("<option value="+item.p+">"+item.p+"</option>");
  });

  //添加 市
  $("#province").change(function(){
    //省选择后，先将市、区清空，再让市获得焦点，显示出来；
    $("#city").empty().append("<option>请选择——市——</option>").focus().show();
    $("#area").empty().hide();
    //添加 市的option
    $.each(allCity,function(index,item){
      if(item.p==$("#province").val()){
        //console.log(item);
        $.each(item.c,function(index,item){
          $("#city").append("<option value="+item.n+">"+item.n+"</option>");
        });
      }

    });
  });

  //添加 县/区
  $("#city").change(function(){
    $.each(allCity,function(index,item){
      //判断省
      if(item.p == $("#province").val()){
        $.each(item.c,function(index,item){
          //判断市
          if(item.n == $("#city").val()){
            //判断区/县
            if(item.a){
              //先将区清空，再让区获得焦点
              $("#area").empty().append("<option>请选择——区——</option>").show().focus(); 
              $.each(item.a,function(index,item){
                $("#area").append("<option value="+item.s+">"+item.s+"</option>");
              });
            }
            
          }
        });
      }
    });
  });

})