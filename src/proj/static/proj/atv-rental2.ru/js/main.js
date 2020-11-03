$(function () {

  // Табы для сайдбара и мобильного сладер-меню

  $('.sidebar__content .sidebar__tab, .mobile__slider .mobile__tab').on('click', function (event) {
    var id = $(this).attr('data-id');
    $('.category__content').find('.category__items').removeClass('active-tab').hide();
    $('.sidebar__content .sidebar__tabs, .mobile__slider .mobile__tabs').find('.sidebar__tab, .mobile__tab').removeClass('active');
    $(this).addClass('active');
    $('#' + id).addClass('active-tab').fadeIn();
    return false;
  });

  // Табы для меню гамбургер

  $('.menu__hamburger .menu__item').on('click', function (event) {
    var id = $(this).attr('data-id');
    $('.category__content').find('.category__items').removeClass('active-tab').hide();
    $('.menu__hamburger .menu__box').find('.menu__item').removeClass('active');
    $(this).addClass('active');
    $('#' + id).addClass('active-tab').fadeIn();
    return false;
  });

  // Табы для свайпера выбора техники

  $('.swipe-slider .swipe__tab').on('click', function (event) {
    var id = $(this).attr('data-id');
    $('.route__select-cards').find('.route__select-card').removeClass('active-card-tab').hide();
    $('.swipe-slider .swipe__tabs').find('.swipe__tab').removeClass('active');
    $(this).addClass('active');
    $('#' + id).addClass('active-card-tab').fadeIn();
    return false;
  });


  const mobileSlider = $('#mobileSlider');
  const photoSlider = $('#photoSlider');
  const photoSlider1 = $('#photoSlider1');
  const swipeTabs = $('#swipeTabs');

  mobileSlider.owlCarousel({
    loop: true,
    // center: true,
    smartSpeed: 1000,
    autoWidth: true,
    wrapAround: true,
    dots: false,
    touchDrag: true,


    responsive: {
      0: {
        items: 1
      },
      600: {
        items: 3
      },
      1000: {
        items: 5
      }
    }

  });

  swipeTabs.owlCarousel({
    loop: true,
    smartSpeed: 1000,
    autoWidth: true,
    dots: false,
    autoplay: true,
    autoplayTimeout: 5000,
    touchDrag: true

  });

  photoSlider.owlCarousel({
    items: 1,
    smartSpeed: 1000,
    wrapAround: true,
    dots: true,
    nav: false,
    touchDrag: true

  });

  photoSlider1.owlCarousel({
    items: 1,
    smartSpeed: 1000,
    wrapAround: true,
    dots: true,
    nav: false,
    touchDrag: true

  });


});