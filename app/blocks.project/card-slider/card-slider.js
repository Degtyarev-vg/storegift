'use strict';

$(function() {

  $('.card-slider__item').each(function() {
    let img = $(this).find('img').attr('src');

    $(this).css({
      'background' : 'url(' + img + ') center no-repeat',
      'background-size' : 'cover'
    });
  });

  $('.card-slider__item-preview').each(function() {
    let img = $(this).find('img').attr('src');

    $(this).css({
      'background' : 'url(' + img + ') center no-repeat',
      'background-size' : 'cover'
    });
  });


  $('.card-slider__slider').slick({
    infinite: true,
    fade: false,
    autoplay: false,
    autoplaySpeed: 5000,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    swipeToSlide: true,
    dots: false,
    adaptiveHeight: false,
    arrows: true,
    asNavFor: '.card-slider__slider-previews',
    appendArrows: $('.card-slider__navigation'),
    prevArrow: '<span class=\'card-slider__prev\'></span>',
    nextArrow: '<span class=\'card-slider__next\'></span>'
  });

  $('.card-slider__slider-previews').slick({
    slidesToShow: 5,
    slidesToScroll: 1,
    swipeToSlide: true,
    arrows: false,
    dots: false,
    focusOnSelect: true,
    asNavFor: '.card-slider__slider',
    responsive: [
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 4,
        }
      }
    ]
  });

});
