'use strict';

$(function() {

  $('.product').each(function() {
    $(this).find('.product__img-container').each(function() {
      let img = $(this).find('img').attr('src');

      $(this).css({
        'background' : 'url(' + img + ') center no-repeat',
        'background-size' : 'cover'
      })
    });
  });

  $('.product__img-container, .product__name').mouseenter(function() {
    $(this).parents('.product').addClass('product_hover');
  });
  $('.product').mouseleave(function() {
    $(this).removeClass('product_hover');
  });

});
