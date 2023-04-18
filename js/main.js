function okUlyi() {
  dataLayer.push(arguments);
}

!(function (t, e, n, c, i, r, a) {
  (t[n] =
    t[n] ||
    function () {
      (t[n].q = t[n].q || []).push(arguments);
    }),
    ((r = e.createElement(c)).async = 1),
    (r.src = "https://www.clarity.ms/tag/gpiripybkc"),
    (a = e.getElementsByTagName(c)[0]).parentNode.insertBefore(r, a);

  (window.dataLayer = window.dataLayer || []),
    okUlyi("js", new Date()),
    okUlyi("config", "G-TRQ8W3PT4C");
})(window, document, "clarity", "script");

(function ($) {
  "use strict";

  var fullHeight = function () {
    $(".js-fullheight").css("height", $(window).height());
    $(window).resize(function () {
      $(".js-fullheight").css("height", $(window).height());
    });
  };
  fullHeight();

  var carousel = function () {
    $(".home-slider").owlCarousel({
      loop: true,
      autoplay: true,
      margin: 0,
      animateOut: "fadeOut",
      animateIn: "fadeIn",
      nav: true,
      dots: true,
      autoplayHoverPause: false,
      items: 1,
      navText: [
        "<span class='ion-ios-arrow-back'></span>",
        "<span class='ion-ios-arrow-forward'></span>",
      ],
      responsive: {
        0: {
          items: 1,
        },
        600: {
          items: 1,
        },
        1000: {
          items: 1,
        },
      },
    });
  };
  carousel();
})(jQuery);
