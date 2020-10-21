$(function () {

    $('.sidebar__content .sidebar__tab').on('click', function (event) {
        var id = $(this).attr('data-id');
        $('.category__content').find('.category__items').removeClass('active-tab').hide();
        $('.sidebar__content .sidebar__tabs').find('.sidebar__tab').removeClass('active');
        $(this).addClass('active');
        $('#' + id).addClass('active-tab').fadeIn();
        return false;
    });
});