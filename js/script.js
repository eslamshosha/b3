$(document).ready(function () {
  ///////// ** main** /////////
  var mainSlider = new Swiper(".main-slider .swiper-container", {
    loop: false,
    autoplay: true,
    pagination: {
      el: ".main-slider .swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".main-slider .swiper-btn-next",
      prevEl: ".main-slider .swiper-btn-prev",
    },
    breakpoints: {
      0: {
        slidesPerView: 1,
      },
      767: {
        slidesPerView: 1,
      },
      992: {
        slidesPerView: 1,
      },
      1199: {
        slidesPerView: 1,
      },
    },
  });
  ///////// **brands-section** /////////
  var categorySlider = new Swiper(".category-section .swiper-container", {
    autoplay: true,
    pagination: {
      el: ".category-slider .swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".category-slider .swiper-btn-next",
      prevEl: ".category-slider .swiper-btn-prev",
    },
    breakpoints: {
      0: {
        slidesPerView: 2,
        spaceBetween: 10,
      },
      767: {
        slidesPerView: 3,
        spaceBetween: 13,
      },
      1199: {
        slidesPerView: 5,
        spaceBetween: 13,
      },
    },
  });
  ///////// **brands-section** /////////
  var screen = new Swiper(".brands-section .swiper-container", {
    autoplay: true,
    pagination: {
      el: ".brands-slider .swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".brands-slider .swiper-btn-next",
      prevEl: ".brands-slider .swiper-btn-prev",
    },
    breakpoints: {
      0: {
        slidesPerView: 3,
        spaceBetween: 15,
      },
      767: {
        slidesPerView: 3,
        spaceBetween: 15,
      },
      992: {
        slidesPerView: 5,
        spaceBetween: 15,
      },
      1199: {
        slidesPerView: 7,
        spaceBetween: 15,
      },
    },
  });
  ///////// ** gallery thumbs ** /////////
  var productThumbs = new Swiper(".product-thumbs", {
    slidesPerView: 4,
    // loop: true,
    navigation: {
      nextEl: ".product-thumbs .swiper-btn-next",
      prevEl: ".product-thumbs .swiper-btn-prev",
    },
    watchSlidesVisibility: true,
    watchSlidesProgress: true,
    breakpoints: {
      0: {
        spaceBetween: 10,
      },
      767: {
        spaceBetween: 15,
      },
      1199: {
        spaceBetween: 15,
      },
    },
  });
  //jump to slide
  $(".button").click(function () {
    setTimeout(function () {
      productImgs.slideTo(4, 10, false);
    }, 175);
  });
  var productImgs = new Swiper(".product-imgs", {
    spaceBetween: 1,
    // loop: true,
    thumbs: {
      swiper: productThumbs,
    },
  });
  //////////** fixed arrow to top**//////////
  $(".arrow-top").click(function () {
    $("html").css("scroll-behavior", "unset");

    $("html,body").animate(
      {
        scrollTop: 0,
      },
      1000,
      "swing"
    );
    setTimeout(() => {
      $("html").css("scroll-behavior", "smooth");
    }, 1000);
  });
  $(this).scrollTop() >= 500
    ? $(".arrow-top").fadeIn(300)
    : $(".arrow-top").fadeOut(300);

  $(window).scroll(function () {
    $(this).scrollTop() >= 500
      ? $(".arrow-top").fadeIn(300)
      : $(".arrow-top").fadeOut(300);
  });
  ////////////** footer transfer into accordion **//////////

  if ($(window).width() <= 767) {
    $(".nav-foot-header").addClass("footer-accordion");
    $(".nav-foot").addClass("footer-panel");
  }
  $(".footer-accordion").click(function () {
    var x = $(this).siblings().prop("scrollHeight") + 15 + "px";
    $(".footer-accordion").not(this).removeClass("active");
    $(this).toggleClass("active");
    if ($(this).siblings().css("max-height") == "0px") {
      $(this).siblings().css("max-height", x);
      $(this).siblings(".nav-foot").css("padding-top", "15px");
    } else {
      $(this).siblings().css("max-height", "0");
      $(this).siblings(".nav-foot").css("padding-top", "0");
    }

    $(".footer-accordion").not(this).siblings().css("max-height", "0");
    $(".footer-accordion")
      .not(this)
      .siblings(".nav-foot")
      .css("padding-top", "0");
  });

  ///////// **product-qty** /////////
  $(".qty-plus").on("click", function () {
    var $parentElm = $(this).parents(".item-qty");
    var maxVal = parseInt($parentElm.find(".qty-input").attr("data-max"));
    var value = $parentElm.find(".qty-input").val();
    if (value < maxVal) {
      value++;
    }
    $parentElm.find(".qty-input").val(value);
  });
  $(".qty-minus").on("click", function () {
    var $parentElm = $(this).parents(".item-qty");
    var minVal = parseInt($parentElm.find(".qty-input").attr("data-min"));
    var value = $parentElm.find(".qty-input").val();
    if (value > minVal) {
      value--;
    }
    $parentElm.find(".qty-input").val(value);
  });
});
