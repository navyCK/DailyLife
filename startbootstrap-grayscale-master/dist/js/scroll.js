$(window).on("mousewheel", function (o) {
  o.originalEvent.wheelDelta > 0 ? ($("#mainNav").fadeIn(), $(".btn_gotop").fadeOut()) : ($("#mainNav").fadeOut(), $(this).scrollTop() > 1e3 && $(".btn_gotop").fadeIn());
}),
  $(window).scroll(function () {
      $(this).scrollTop() < 10 && $(".btn_gotop").fadeOut();
  }),
  $(".btn_gotop").click(function () {
      return $("html, body").animate({ scrollTop: 0 }, 400), !1;
  });
