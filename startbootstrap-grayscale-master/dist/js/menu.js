$(document).ready(function () {
    $(".menu").hover(
        function () {
            $(this).find(".sub").stop().slideDown(500), $(this).find(".main").addClass("on");
        },
        function () {
            $(this).find(".sub").stop().slideUp(500), $(this).find(".main").removeClass("on");
        }
    );
}),
    jQuery(document).ready(function () {
        jQuery(window).scroll(function () {
            jQuery(this).scrollTop() > 220 ? jQuery(".back_to_top").fadeIn(500) : jQuery(".back_to_top").fadeOut(500);
        }),
            jQuery(".back_to_top").click(function (n) {
                return n.preventDefault(), jQuery("html, body").animate({ scrollTop: 0 }, 500), !1;
            });
    });
