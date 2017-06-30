$(function() {
    $(".item-control .item-esc-order").click(function() {
         $that= $(this);
        $(".mask").show();
        $(".esc-order").show();
        $(".esc-close .fa-close").click(function() {
            $(".mask").hide();
            $(".esc-order").hide();
        })
        $(".esc-btn .quxiao").click(function() {
            $(".esc-close .fa-close").trigger('click')
        })

        $(".esc-btn .queding").click(function() {
            $(".esc-close .fa-close").trigger('click')
            $that.parent().parent().parent().remove();
        })
    })

})