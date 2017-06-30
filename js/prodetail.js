$(function() {

      /* 小图控制大图*/
      $(".detail-box .preview-items li").on('click', function() {
        var index = $(this).index() + 1;
        /*  console.log(index);*/
        var src = $(".detail-box .preview-box a img").attr("src");
        var subsrc = src.substring(0, src.length - 5);
        subsrc += index + '.jpg'
          /*  console.log(subsrc)*/
        $(".detail-box .preview-box a img").attr("src", subsrc)
      })

      /*颜色分类*/


      $(".color-kind dl dd .color-sell").on('click', function() {
          $(this).addClass('current').siblings().removeClass('current');
        })
        /*数量*/

      $(".control .minus").on('click', function() {
          if (parseInt($(".input input").val()) != 1)
              $(".input input").val(parseInt($(".input input").val()) - 1)


          }); $(".control .plus").on("click", function() {

          $(".input input").val(parseInt($(".input input").val()) + 1)
        });

        /* 商品详情 规格参数 评论 切换*/
        $(".product-desc .product-hd a").on('click', function() {
          $(this).addClass('current').siblings().removeClass('current');
          var index = $(this).index();
          if (index != 0) {
            $(".item1").eq(0).removeClass('xianshi')
          }
          $(".item1").eq(index).addClass('xianshi').siblings().removeClass("xianshi");
        });


        /*购物车*/
        $(".pro-buy .addcart").on('click', function() {
          var snum = parseInt($(".input input").val());
          var num = parseInt($(".product-cart .pro-num").html());
          console.log(snum)
          num += snum;
          console.log()
          $(".product-cart .pro-num").html(num);
        })

        /*评价去*/

        $(".user-desc .user-pic").on('click', function() {
          // alert("点到我了")
          $(".user-desc .bigbox").toggleClass('xianshi');
        })

      });