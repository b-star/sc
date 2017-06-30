/*
* @Author: Marte
* @Date:   2017-05-27 21:18:23
* @Last Modified by:   Marte
* @Last Modified time: 2017-05-27 21:32:12
*/

$(function(){
    /*添加地址*/
    $(".add-location-info-bm").on('click',function(){
        $(".mask").show();
        $(".alert-address").show();
    })
    /*关闭*/
    $(".alert-address .address-hd .close").on('click',function(){
                $(".mask").hide();
        $(".alert-address").hide();
    })
    /*取消*/
    $(".address-btn .quxiao").on('click',function(){
         // alert(1)
            $(".alert-address .address-hd .close").trigger('click');
    })
})