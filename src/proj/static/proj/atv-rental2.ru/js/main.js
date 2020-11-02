$(function () {

    $('.sidebar__content .sidebar__tab, .mobile__slider .mobile__tab').on('click', function (event) {
        var id = $(this).attr('data-id');
        $('.category__content').find('.category__items').removeClass('active-tab').hide();
        $('.sidebar__content .sidebar__tabs, .mobile__slider .mobile__tabs').find('.sidebar__tab, .mobile__tab').removeClass('active');
        $(this).addClass('active');
        $('#' + id).addClass('active-tab').fadeIn();
        return false;
    });

    $('.menu__hamburger .menu__item').on('click', function (event) {
        var id = $(this).attr('data-id');
        $('.category__content').find('.category__items').removeClass('active-tab').hide();
        $('.menu__hamburger .menu__box').find('.menu__item').removeClass('active');
        $(this).addClass('active');
        $('#' + id).addClass('active-tab').fadeIn();
        return false;
    });

    const mobileSlider = $('#mobileSlider');
    const photoSlider = $('#photoSlider');
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
        // center: true,
        smartSpeed: 1000,
        // autoWidth: true,
        // wrapAround: true,
        dots: false,
        touchDrag: true

    });
    // photoSlider.owlCarousel({
    //     // loop: true,
    //     // center: true,
    //     items: 0.9,
    //     smartSpeed: 1000,


    //     autoWidth: true,
    //     // wrapAround: true,
    //     dots: true,

    // });

    // $('.route__photo-slider').slick({
    //     //   infinite: true,
    //     dots: true,
    //     slidesToShow: 1,
    //     slidesToScroll: 1
    // });



});