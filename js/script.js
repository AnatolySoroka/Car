$(function() {
    $('.slider__items').slick({
        arrows: false,
        dots: true,
        vertical: true,
        verticalSwiping: true,
        responsive: [{
            breakpoint: 1200,
            settings: {
                dots: false,
                vertical: false,
                verticalSwiping: false
            }
        }, ]
    });

    $('.reviews__list').slick({
        arrows: false,
        dots: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        responsive: [{
                breakpoint: 1156,
                settings: {
                    slidesToShow: 3,
                }
            },
            {
                breakpoint: 861,
                settings: {
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 591,
                settings: {
                    slidesToShow: 1,
                }
            },
        ]
    });

    $('.menu__btn').on('click', function() {
        $('.menu__list').toggleClass('menu__list--active');
    });

    var btn = $('#button');
    $(window).scroll(function() {
        if ($(window).scrollTop() > 300) {
            btn.addClass('show');
        } else {
            btn.removeClass('show');
        }
    });
    btn.on('click', function(e) {
        e.preventDefault();
        $('html, body').animate({ scrollTop: 0 }, '300');
    });
});