$(function(){
    $(".address-btn .submit").on('click',function(){
       var isChecked = $(".address-btn .select").is(':checked');
       // console.log(isChecked)
     var name = $(".user-name .input .name").val()
     var tel = $(".user-name .input .tel").val()
    var address_detail = $(".address-detail .input input").val()
    })

 function checkInput(){
    // 姓名
    var name = $(".user-name .input .name").val()
    // 手机号
    var tel = $(".user-name .input .tel").val()
    // 详细地址
    var address_detail = $(".address-detail .input input").val()

    if(name==""){
        $('.tip').html('必填')
    }
 }

})