$(function () {
  $("[data-vbg]").youtube_background();

  $(".popup").magnificPopup({
    type: "iframe",
    gallery: {
      enabled: true,
    },
  });

  $("a[href^='#']").on("click", function (e) {
    e.preventDefault();
    var target = $($(this).attr("href"));
    if (target.length)
      $("html, body").animate(
        {
          scrollTop: target.offset().top,
        },
        500
      );
  });

  var prev = 0;
  var $window = $(window);
  var header = $(".header");

  $window.on("scroll", function () {
    var scrollTop = $window.scrollTop();
    header.toggleClass("hidden", scrollTop < 100 ? false : scrollTop > prev);
    prev = scrollTop;
  });

  /* Animate on scroll */

  $(".content-inner").each(function () {
    var count = 0;
    $(this)
      .children()
      .each(function (el) {
        $(this).attr("data-aos", "fade-up");
        $(this).attr("data-aos-delay", (count * 50).toString());
        count++;
      });
  });

  var count = 0;
  $(".quote").each(function () {
    $("blockquote, p", this).each(function (el) {
      $(this).attr("data-aos", "fade-up");
      $(this).attr("data-aos-delay", (count * 100).toString());
    });
    count++;
  });

  setTimeout(function () {
    AOS.init({
      disable: "mobile",
    });
  });
});
