/*-----------------------------------------------------------------------------------

    Theme Name: Loancy - Loan & Finance Company HTML Template
    Description: Loan & Finance Company HTML Template
    Author: Chitrakoot Web
    Version: 1.0.0
        
    ---------------------------------- */

!(function (t) {
  "use strict";
  var s = t(window);
  function a() {
    var e, a;
    (e = t(".full-screen")),
      (a = s.height()),
      e.css("min-height", a),
      (e = t("header").height()),
      (a = t(".screen-height")),
      (e = s.height() - e),
      a.css("height", e);
  }
  t("#preloader").fadeOut("normall", function () {
    t(this).remove();
  }),
    s.on("scroll", function () {
      var e = s.scrollTop(),
        a = t(".navbar-brand img"),
        o = t(".navbar-brand.logodefault img");
      e <= 50
        ? (t("header").removeClass("scrollHeader").addClass("fixedHeader"),
          a.attr("src", "images/logo-removebg-preview.png"))
        : (t("header").removeClass("fixedHeader").addClass("scrollHeader"),
          a.attr("src", "images/logo.jpeg")),
        o.attr("src", "images/logo-removebg-preview.png");
    }),
    s.on("scroll", function () {
      500 < t(this).scrollTop()
        ? t(".scroll-to-top").fadeIn(400)
        : t(".scroll-to-top").fadeOut(400);
    }),
    t(".scroll-to-top").on("click", function (e) {
      e.preventDefault(), t("html, body").animate({ scrollTop: 0 }, 600);
    }),
    t(".parallax,.bg-img").each(function (e) {
      t(this).attr("data-background") &&
        t(this).css(
          "background-image",
          "url(" + t(this).data("background") + ")"
        );
    }),
    new WOW({
      boxClass: "wow",
      animateClass: "animated",
      offset: 0,
      mobile: !1,
      live: !0,
    }).init(),
    t(".story-video").magnificPopup({ delegate: ".video", type: "iframe" }),
    t(".source-modal").magnificPopup({
      type: "inline",
      mainClass: "mfp-fade",
      removalDelay: 160,
    }),
    s.resize(function (e) {
      setTimeout(function () {
        a();
      }, 500),
        e.preventDefault();
    }),
    0 !== t(".copy-clipboard").length &&
      (new ClipboardJS(".copy-clipboard"),
      t(".copy-clipboard").on("click", function () {
        var e = t(this);
        e.text();
        e.text("Copied"),
          setTimeout(function () {
            e.text("Copy");
          }, 2e3);
      })),
    a(),
    t(document).ready(function () {
      t(".testimonial-carousel3").owlCarousel({
        loop: !0,
        responsiveClass: !0,
        autoplay: !0,
        autoplayTimeout: 5e3,
        smartSpeed: 1500,
        nav: !1,
        dots: !1,
        thumbs: !1,
        thumbsPrerendered: !1,
        center: !1,
        margin: 50,
        items: 1,
      }),
        t(".testimonial-carousel4").owlCarousel({
          loop: !0,
          responsiveClass: !0,
          autoplay: !0,
          autoplayTimeout: 5e3,
          smartSpeed: 1500,
          nav: !1,
          dots: !0,
          thumbs: !1,
          thumbsPrerendered: !1,
          center: !1,
          margin: 50,
          items: 1,
          responsive: {
            0: { items: 1, dots: !1 },
            576: { items: 1, dots: !1 },
            768: { items: 1 },
          },
        }),
        t(".portfolio-carousel").owlCarousel({
          loop: !0,
          responsiveClass: !0,
          autoplay: !0,
          autoplayTimeout: 5e3,
          smartSpeed: 1500,
          nav: !1,
          dots: !1,
          center: !1,
          margin: 30,
          responsive: {
            0: { items: 1 },
            576: { items: 2 },
            768: { items: 3 },
            992: { items: 3 },
            1200: { items: 3 },
          },
        }),
        t(".service-carousel").owlCarousel({
          loop: !0,
          responsiveClass: !0,
          autoplay: !0,
          autoplayTimeout: 5e3,
          smartSpeed: 1500,
          nav: !1,
          dots: !1,
          center: !1,
          margin: 30,
          responsive: {
            0: { items: 1 },
            576: { items: 1 },
            768: { items: 2 },
            992: { items: 3 },
            1200: { items: 3 },
            1400: { items: 4 },
          },
        }),
        t(".client-carousel").owlCarousel({
          loop: !0,
          responsiveClass: !0,
          autoplay: !0,
          autoplayTimeout: 5e3,
          smartSpeed: 1500,
          nav: !1,
          dots: !1,
          center: !1,
          margin: 30,
          responsive: {
            0: { items: 1 },
            481: { items: 2 },
            768: { items: 3 },
            992: { items: 4 },
            1200: { items: 6 },
          },
        }),
        t(".slider-fade1").owlCarousel({
          items: 1,
          loop: !0,
          dots: !0,
          margin: 0,
          nav: !1,
          navText: [
            "<span class='fas fa-chevron-left'></span>",
            "<span class='fas fa-chevron-right'></span>",
          ],
          autoplay: !0,
          smartSpeed: 1500,
          mouseDrag: !1,
          animateIn: "fadeIn",
          animateOut: "fadeOut",
        }),
        t(".owl-carousel").owlCarousel({
          items: 1,
          loop: !0,
          dots: !1,
          margin: 0,
          autoplay: !0,
          smartSpeed: 500,
        }),
        t(".slider-fade1").on("changed.owl.carousel", function (e) {
          e = e.item.index - 2;
          t(".section-title").removeClass("animated fadeInUp"),
            t("h1").removeClass("animated fadeInUp"),
            t("p").removeClass("animated fadeInUp"),
            t("a").removeClass("animated fadeInUp"),
            t(".owl-item")
              .not(".cloned")
              .eq(e)
              .find(".section-title")
              .addClass("animated fadeInUp"),
            t(".owl-item")
              .not(".cloned")
              .eq(e)
              .find("h1")
              .addClass("animated fadeInUp"),
            t(".owl-item")
              .not(".cloned")
              .eq(e)
              .find("p")
              .addClass("animated fadeInUp"),
            t(".owl-item")
              .not(".cloned")
              .eq(e)
              .find("a")
              .addClass("animated fadeInUp");
        }),
        0 !== t(".horizontaltab").length &&
          t(".horizontaltab").easyResponsiveTabs({
            type: "default",
            width: "auto",
            fit: !0,
            tabidentify: "hor_1",
            activate: function (e) {
              var a = t(this),
                o = t("#nested-tabInfo");
              t("span", o).text(a.text()), o.show();
            },
          }),
        t(".countup").counterUp({ delay: 25, time: 2e3 }),
        t(".countdown").countdown({
          date: "26 Dec 2026 00:01:00",
          format: "on",
        }),
        t(".current-year").text(new Date().getFullYear()),
        t(".calculator-loan").accrue();
      const a = document.querySelectorAll(".portfolio-item");
      a.forEach((e) => {
        e.addEventListener("mouseenter", () => {
          a.forEach((e) => {
            e.classList.remove("active");
          }),
            e.classList.add("active");
        });
      });
    }),
    s.on("load", function () {
      t(".portfolio-gallery").lightGallery(),
        t(".portfolio-link").on("click", (e) => {
          e.stopPropagation();
        });
    });
})(jQuery);
