$(window).scroll(function() {
    if ($('body').scrollTop() == 0) {
        $('.brand').addClass('brand-head');
    } else {
        $('.brand').removeClass('brand-head');
    }
});
