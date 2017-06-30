
/*修改用户名*/

$(function(){
    $(".user-info .fa-pencil").on('click',function(){
      var username = $(".user-info span").html();
/*      console.log(username)*/
        $(".pic-head .user-info").hide();
        $(".alter-user-name").show();
        $(".new-user-name input").val(username);

    });

    $(".new-user-btn .esc").on('click',function(){
         $(".alter-user-name").hide();
         $(".pic-head .user-info").show();
    });
    $(".bp-password .alter").on('click',function(){
        $(" .bp-password").hide();
        $(".alter-password").show();

    })
    $(".alter-btn .esc").on('click',function(){
          $(" .bp-password").show();
        $(".alter-password").hide();
    })

    $(".bp-email .bangding").on('click',function(){
        $(".bp-email").hide();
        $(".alter-email").show();
    })
  $(".email-bom .esc").on('click',function(){
         $(".bp-email").show();
        $(".alter-email").hide();
  })
  $(".email-bom input").on('click',function(){
    $(".verify-password-email").hide();
    $(".bind-email").show();
  })
})