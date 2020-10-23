$(function () {

    $('.sidebar__content .sidebar__tab, .mobile__slider .mobile__tab').on('click', function (event) {
        var id = $(this).attr('data-id');
        $('.category__content').find('.category__items').removeClass('active-tab').hide();
        $('.sidebar__content .sidebar__tabs, .mobile__slider .mobile__tabs').find('.sidebar__tab, .mobile__tab').removeClass('active');
        $(this).addClass('active');
        $('#' + id).addClass('active-tab').fadeIn();
        return false;
    });

    $('.owl-carousel').owlCarousel({
        loop: true,
        // center: true,
        // startPosition: 0,
        smartSpeed: 1000,
        autoWidth: true,
        items: 1,
        // touchDrag: true,
        responsiveClass: true,
        responsive: {
            0: {
                items: 1,
                nav: false
            },
            600: {
                items: 3,
                nav: false
            },
            1000: {
                items: 5,
                nav: true,
                loop: false
            }
        }
    })

});