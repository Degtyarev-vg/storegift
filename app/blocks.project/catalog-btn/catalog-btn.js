'use strict';

$(function() {

  $('.catalog-btn').click(function() {

    $('.content__catalog').toggleClass('content__catalog_open');

    $('.page').toggleClass('page_fixed');

    return false;
  });

});
