$(function(){
    $("#on-pay").click(function(){
        $(".online-pay-body .zhifubao").hide();
        $(".online-pay-body .wechat").hide();
        $(this).addClass('current');
        $(".online-pay-body .blank").show();
        $("#zhifubao-pay-ma").removeClass('current')
        $("#wechat-ma").removeClass('current')
    })

    $("#zhifubao-pay-ma").click(function(){
           $("#on-pay").removeClass('current')
        $("#wechat-ma").removeClass('current')
     $(this).addClass('current');
      $(".online-pay-body .zhifubao").show();
     $(".online-pay-body .blank").hide();
        $(".online-pay-body .wechat").hide();
    })

    $("#wechat-ma").click(function(){
           $("#zhifubao-pay-ma").removeClass('current')
        $("#on-pay").removeClass('current')
          $(this).addClass('current');
             $(".online-pay-body .zhifubao").hide();
     $(".online-pay-body .blank").hide();
        $(".online-pay-body .wechat").show();
    })
})