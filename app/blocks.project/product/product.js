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

});
