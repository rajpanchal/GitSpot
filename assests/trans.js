
      $(document).ready(function() {
        $(".container").slideDown(1500,function(){
          $("button").on("click",function(){
            $(".container").fadeOut(500,function(){
              $(".middle").css("display","block");
                $("img").css("visibility","visible");
                
                  $("#demo-1").slideDown(1000,function(){
                   $("#demo-2").slideDown(1000,function(){
                      $("#demo-3").slideDown(1000,function(){
                        $("#demo-4").slideDown(1000,function(){
                          $(".middle").css("visibility","hidden");
                          $("img").slideDown(1000);
                          /*$(".bkbtn").css("visibility","visible");*/
                            $(".bkbtn").fadeIn();
                  });
                 });
                });
              });
            });
          });
        });
});