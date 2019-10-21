$(document).ready(function() {
    $('.slider__inner').slick({
      prevArrow: '<button type="button" class="slick-prev slick-arrow"></button>',
      nextArrow: '<button type="button" class="slick-next slick-arrow"></button>',
      infinite: false,
      responsive: [
        {
            breakpoint: 860,
            settings: {
                dots: true,
                arrows: false
            }
        }
      ]
    });

    $('.news__slider-inner').slick({
      prevArrow: '<button type="button" class="slick-prev slick-arrow"></button>',
      nextArrow: '<button type="button" class="slick-next slick-arrow"></button>',
      infinite: false,
      responsive: [
        {
            breakpoint: 1150,
            settings: {
                dots: true,
                arrows: false
            }
        }
      ]
    });

    $('select').styler();

    $('.header__menu-burger').on('click', function() {
      $('.header__menu ul').slideToggle();
    });
});