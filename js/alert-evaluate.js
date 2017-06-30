$(function(){

    // 上传文件发生改变的时候触发
    $(".a-upload").on("change","input[type='file']",function(){
    var filePath=$(this).val();
    if(filePath.indexOf("jpg")!=-1 || filePath.indexOf("png")!=-1){
        var arr=filePath.split('\\');
        var fileName=arr[arr.length-1];
       createPic(fileName);
    }else{
        alert("您未上传文件，或者您上传文件类型有误！");
    }
});

    function subtotal(){
         $('.shai-pic .right span').remove();
        var picNum = $('.shai-pic .a-tu').length;
        if(picNum!=0){
        var str ='<span>'+picNum+'/6</span>'
       $('.shai-pic .right').append(str);
       }
    }

 function createPic(path){
     var picNum = $('.shai-pic .a-tu').length;

    var picPath = 'images/'+path;
     if(picNum < 6){
    var str='';
    str+=' <a href="#" class="a-tu">'
    str+='<i class="fa-times-circle-o"></i>'
    str+='<img src="'+picPath+'" alt="">'
    str+='</a>'

    $('.shai-pic .right').append(str);
     subtotal();
    $(".a-tu .fa-times-circle-o").on('click',function(){
    $(this).parent().remove();
    subtotal();
})
}else{
    alert("上传图超出限制");
 }
}


})