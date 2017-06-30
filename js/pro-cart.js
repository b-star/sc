$(function() {
  function cart() {}
  cart.prototype = {
    init: function() {
      cart.cartNum($(".cart-item"));
      cart.total($(".cart-pro-num .wrapper .plus"));
      cart.cartSelect($(".cart-select i"));
      cart.checkedSelectAll();
    },
    /*判断是否是全选*/
    checkedSelectAll: function() {
       var cartNum = cart.cartNum($(".cart-item"));
      var selectNum = cart.cartSelect($(".cart-select i"));
      if (selectNum == cartNum && cartNum != 0) {
        $('.cart-slect-all i').removeClass().addClass('fa-check-circle-o');
      } else {
        $('.cart-slect-all i').removeClass().addClass('fa-circle-thin');
      }
    },

    /*自动切换选中按钮*/
    toggleSelected: function(a) {
      var isSelected = a.hasClass('fa-check-circle-o');
      var isSelectAll = a.parent().hasClass('cart-slect-all');
      if (isSelected) {
        a.removeClass().addClass('fa-circle-thin');
        if (isSelectAll) {
          a.parent().parent().parent().children('.cart-item').children('.cart-select').children('i').removeClass().addClass('fa-circle-thin');
        }
      } else {
        a.removeClass().addClass('fa-check-circle-o');
        if (isSelectAll) {
          a.parent().parent().parent().children('.cart-item').children('.cart-select').children('i').removeClass().addClass('fa-check-circle-o');
        }
      }
    },
    /*是否被选中*/
    isSelected: function(a) {
      var isSelected = a.hasClass('fa-check-circle-o');
      if (isSelected) {
        return true;
      } else {
        return false;
      }
    },
    /*加*/
    plus: function(a) {
      var num = parseInt(a.parent().children('input').val());
      num++;
      a.parent().children('input').val(num);
    },
    /*减*/
    minus: function(a) {
      var num = parseInt(a.parent().children('input').val());
      if (num > 0) {
        num--;
      }
      a.parent().children('input').val(num);
    },
    /*小计*/
    subtotal: function(a) {
      var price = parseInt(a.parent().parent().parent().children('.cart-pro-price').html());
      var num = parseInt(a.parent().children('input').val());
      var subtotal = price * num + '元';
      a.parent().parent().parent().children('.subtotal').html(subtotal);
      return subtotal;
    },

    /*统计*/
    total: function(a) {
      var total = 0;
      var cartNum = cart.cartNum($(".cart-item"));
      for (var i = 0; i < cartNum; i++) {
        var isSelect = a.parent().parent().parent().children('.cart-select').children('i').eq(i);
        var s = a.eq(i);
        var subtotal = parseInt(cart.subtotal(s));
        var state = cart.isSelected(isSelect);
        if (state) {
          total = total + subtotal;

        }
      }
      $('.all-total').html(total);
    },
    /*统计购物车中数量*/
    cartNum: function(a) {
      var cartNum = a.length;
      $(".cart-bottom-gopay .cart-pro-total .total").html(cartNum);
      return cartNum;
    },
    /*统计购物车中选中*/
    cartSelect: function(a) {
      var cartNum = cart.cartNum($(".cart-item"));
      var cartSelect = 0;
      for (var i = 0; i < cartNum; i++) {
        var s = a.eq(i);
        var state = cart.isSelected(s);
        if (state) {
          cartSelect++;
        }
      }
     $(".cart-bottom-gopay .cart-pro-total .select").html(cartSelect);
      return cartSelect;

    },

  }


  /*初始化状态*/
  var cart = new cart();
  cart.init();
  /*全选*/
  /*1.点击换选中状态*/
  $('.cart-slect-all i').on('click', function() {
    cart.toggleSelected($(this));
    cart.total($(".cart-pro-num .wrapper .plus"));
    cart.cartSelect($(".cart-select i"));
    cart.checkedSelectAll();
  });
  /*单选按钮*/
  $(".cart-select i").on('click', function() {
      cart.toggleSelected($(this));
      cart.total($(".cart-pro-num .wrapper .plus"));
      cart.cartSelect($(".cart-select i"));
      cart.checkedSelectAll();
    });
    /*加*/
  $(".cart-pro-num .wrapper .plus").on('click', function() {
      cart.plus($(this))
      cart.subtotal($(this));
      cart.total($(".cart-pro-num .wrapper .plus"));
    });
    /*减*/
  $(".cart-pro-num .wrapper .subb").on('click', function() {
      cart.minus($(this));
      cart.subtotal($(this));
      cart.total($(".cart-pro-num .wrapper .plus"));
    });
    /*input 框发生改变的时候出发*/
  $(".cart-item .cart-pro-num .wrapper input").bind('input propertychange', function() {
      cart.subtotal($(".cart-pro-num .wrapper .subb"));
      cart.total($(".cart-pro-num .wrapper .plus"));
    });
    /*购物车上的删除*/
    var $that = '';
  $('.cart-item .cart-pro-control .close').on('click', function() {
    $that = $(this);
    $('.mask').show();
    $('.isdele-pro').show();

    /* 弹出框上的错号关闭*/
    $('.isdele-pro .close').on('click', function() {
      $('.mask').hide();
      $('.isdele-pro').hide();
    });
    /*弹出框上的取消按钮*/
    $('.isdele-pro .isdele-btn .quxiao').on('click', function() {
      $('.isdele-pro .close').trigger('click');
    });
    /*弹出框上的确定按钮*/
    $('.isdele-pro .isdele-btn .queding').on('click', function() {
      var delpro = $that.parent().parent().remove();
      $('.isdele-pro .close').trigger('click');
      cart.cartSelect($(".cart-select i"));
       cart.cartNum($(".cart-item"));
       cart.checkedSelectAll()
      cart.total($(".cart-pro-num .wrapper .plus"));
    });


  });
 console.log($that)
});