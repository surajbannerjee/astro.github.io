// navbarFix

if ($(window).width() < 991) {
     navbarFix()
}

$(".menu-item-has-children a").on("click", function () {
     var element = $(this).parent("li");
     if (element.hasClass("show")) {
          element.removeClass("show");
          element.children("ul").slideUp(500);
     } else {
          element.siblings("li").removeClass('show');
          element.addClass("show");
          element.siblings("li").find("ul").slideUp(500);
          element.children('ul').slideDown(500);
     }
});


function navbarFix() {
     $(document).on('click', '.navbar-area .navbar-nav li.menu-item-has-children>a, .navbar-area .navbar-nav li.appside-megamenu>a', function (e) {
          e.preventDefault();
     })
}


$(window).on('scroll', function () {
     if ($(window).scrollTop() > 100) {
          $(".main_header").addClass('sagar');
     } else {
          $(".main_header").removeClass('sagar');
     }
})


// navbarFix

var $button = $(".as_cart")

$($button).on("click", function () {
     if ($(this).hasClass("cart_open")) {
          $(this).removeClass("cart_open")
     } else {
          $(this).addClass("cart_open")
     }
})


// search popup
$('.as_search').on('click', function () {
     $(this).parent().find('.as_search_boxpopup').addClass('popup_open');
})
$('.as_cancel').on('click', function () {
     $(this).parent().removeClass('popup_open');
})


// login popup
$('.as_signup').on('click', function () {
     $(this).closest('.modal-body').find('.as_login_box').removeClass('active');
     $(this).closest('.modal-body').find('.as_signup_box').addClass('active');
     $(this).closest('.modal-content').find('.modal-title').text('Sign Up');
})
$('.as_login').on('click', function () {
     $(this).closest('.modal-body').find('.as_login_box').addClass('active');
     $(this).closest('.modal-body').find('.as_signup_box').removeClass('active');
     $(this).closest('.modal-content').find('.modal-title').text('Login');
})


// menu toggle
$('.as_toggle').on('click', function () {
     $(this).parent().toggleClass('menu_open');
     $(this).parent().find('.as_menu ul  li .as_submenu').parent().addClass('as_submenu_li')
})
$('.as_body_overlay').on('click', function () {
     $('.as_menu_wrapper').removeClass('menu_open');
})
$('.as_toggle_cut').on('click', function () {
     $('.as_menu_wrapper').removeClass('menu_open');
})



$(window).on('scroll', function () {
     if ($(window).scrollTop() > 100) {
          $(".navbar-area").addClass('sagar');
     } else {
          $(".navbar-area").removeClass('sagar');
     }
})

// banner area 

// banner slider
$('.as_banner_slider').slick({
     dots: true,
     autoplay: true,
     autoplaySpeed: 3000,
     speed: 800,
     slidesToShow: 1,
     slidesToScroll: 1,
     prevArrow: '<button type="button" class="slick-prev"><span><svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" preserveAspectRatio="xMidYMid" width="30" height="30" viewBox="0 0 12 16"> <path d="M12.003,15.996 L-0.000,7.997 L12.002,-0.001 L10.062,7.997 L12.003,15.996 ZM10.102,2.762 L2.246,7.997 L10.102,13.233 L8.832,7.997 L10.102,2.762 ZM3.824,7.997 L8.256,5.043 L7.539,7.997 L8.256,10.951 L3.824,7.997 Z" class="cls-1"/> </svg></span> </button>',
     nextArrow: '<button type="button" class="slick-next"><span><svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" preserveAspectRatio="xMidYMid" width="30" height="30" viewBox="0 0 8 12"><path d="M8.000,5.998 L-0.002,11.997 L1.292,5.998 L-0.002,-0.001 L8.000,5.998 ZM1.265,9.924 L6.502,5.998 L1.265,2.071 L2.112,5.998 L1.265,9.924 ZM5.451,5.998 L2.496,8.213 L2.974,5.998 L2.496,3.783 L5.451,5.998 Z" class="cls-1"/> </svg></span></button>'
});

// overview slider
$('.as_about_slider').slick({
     infinite: true,
     speed: 800,
     dots: true,
     arrows: false,
     slidesToShow: 1,
     slidesToScroll: 1,
     autoplay: false,
     autoplaySpeed: 4000
});

// counter-section
//-------------------------------------------------------
$(document).ready(function () {
     $('.counter').counterUp({
          delay: 20,
          time: 4000
     });
})

