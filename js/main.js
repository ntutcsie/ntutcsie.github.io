(function($) {
    $('a[title]').tooltip();

    $('#countdown_dashboard').countDown({
        targetDate: {
            'day': 6,
            'month': 7,
            'year': 2018,
            'hour': 9,
            'min': 0,
            'sec': 0
        },
        omitWeeks: true
    });

    $('img').lazyload();

    $('input[name="signup_checkbox"]').click(function() {
        if ($(this).prop('checked')) {
            $('#signupNow').removeAttr('disabled');
        } else {
            $('#signupNow').attr('disabled', true);
        }
    });

})(jQuery);

wow = new WOW({
    animateClass: 'animated',
    offset: 100,
    mobile: true
});
wow.init();
