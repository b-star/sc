/*
 * @Author: Marte
 * @Date:   2017-05-14 10:56:36
 * @Last Modified by:   Marte
 * @Last Modified time: 2017-05-26 08:06:57
 */

$(function() {
  /*  图片数据 */
  var img = ["images/bananer1.jpg", "images/bananer2.jpg", "images/bananer3.jpg", "images/bananer4.jpg", "images/bananer5.jpg"];


  /*轮播项*/
  for (var i = 0; i < img.length; i++) {
    var $li = $("<li></li>");
    var $a = $("<a href=''></a>");
    $img = $("<img src=" + img[i] + ">");
    $(".banner-pic ul").append($li);
    $li.append($a);
    $a.append($img);
  }
  $(".banner-pic ul li:nth(0)").clone().appendTo('.banner-pic ul')

  var timer = null;
  var picTimer = function() {
    timer = setInterval(function() {
      $(".banner-control .control-btn .slider-right").trigger('click');
    }, 5000);
  }

  /*控制小圆圈*/
  for (var j = 0; j < img.length; j++) {
    var $li = $('<li></li>');
    $(".banner-control ol").append($li);
  }
  $(".banner-control ol li:nth(0)").addClass("active");

  var index = 0;
  $('.banner-control ol li').mouseenter(function() {
    $(this).addClass('active').siblings().removeClass('active');
    // console.log($(this).index());
    index = $(this).index();
    $(".banner-pic ul li").eq(index).fadeTo("fast", 1).siblings().fadeTo("fast", 0);
  });

/* 轮播图控制按钮*/

  $(".banner-control .control-btn .slider-left").click(function() {
    clearInterval(timer);
    index <= 0 ? index = img.length - 1 : index--;
    console.log(index)
    $('.banner-control ol li').eq(index).addClass('active').siblings().removeClass('active');
    $(".banner-pic ul li").eq(index).fadeTo("fast", 1).siblings().fadeTo("fast", 0);
     picTimer();
  });

/* 轮播图控制按钮*/

  $(".banner-control .control-btn .slider-right").click(function() {
    clearInterval(timer);
    index > img.length - 2 ? index = 0 : index++;
    // console.log(index);
    $('.banner-control ol li').eq(index).addClass('active').siblings().removeClass('active');
    $(".banner-pic ul li").eq(index).fadeTo("fast", 1).siblings().fadeTo("fast", 0);
    picTimer();
  });
  picTimer();

//*盒子顶部*/
var clength = $('.pro-box ul li').length;
var liColor = ["#000099","#006600","#00CC33","#0099FF","#00FF99","#330000","#3300CC","#333333","#3366FF","#339900","#33CCCC","#33FF00","#6600CC","#663300","#663333","#663366","#666600","#666666","#66CC99","#FF0099","#FF6666","#FFCC99"];
for(var i=0; i<clength;i++){
    var id = Math.ceil(Math.random()*liColor.length)-1;
  $('.pro-box ul li').eq(i).css('border-color',liColor[id]);
}

/*侧边向上跑的按钮*/
$(window).on('scroll',function(){
  $(this).scrollTop() > 400 ? $(".slider-back").show():$(".slider-back").hide();
})
  $(".slider-back").on('click',function(){$('html,body').animate({scrollTop: '0px'}, 800);})

});