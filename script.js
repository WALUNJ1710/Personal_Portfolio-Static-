$(document).ready(function() {
    $(window).scroll(function() {
        if ($(this).scrollTop() > 50) {
            $('.navbar').addClass('sticky');
        } else {
            $('.navbar').removeClass('sticky');
        }
    });

    $('.edu-card').hover(function() {
        $(this).css('transform', 'scale(1.1)');
    }, function() {
        $(this).css('transform', 'scale(1)');
    });

    $('.bar').each(function() {
        let width = $(this).attr('data-width');
        $(this).css('width', width);
    });

    setTimeout(function() {
        $('.bar.python').attr('data-width', '90%').css('width', '90%');
        $('.bar.javascript').attr('data-width', '80%').css('width', '80%');
    }, 500);
});
