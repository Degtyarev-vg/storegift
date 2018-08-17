'use strict';

$(function() {

  if(localStorage.getItem('catalogView') == 'false' || localStorage.getItem('catalogView') == null) {
    $('.view__icon_tile').addClass('view__icon_active');

    $('.content-area__products-list').removeClass('content-area__products-list_horizontal');
  } else if (localStorage.getItem('catalogView') == 'true') {
    $('.view__icon_list').addClass('view__icon_active');

    $('.content-area__products-list').addClass('content-area__products-list_horizontal');
  }

  $('.view__icon_tile').click(function() {
    $('.content-area__products-list').removeClass('content-area__products-list_horizontal');

    $('.view__icon_list').removeClass('view__icon_active');

    $(this).addClass('view__icon_active');

    localStorage.setItem('catalogView', false);

    return false;
  });

  $('.view__icon_list').click(function() {
    $('.content-area__products-list').addClass('content-area__products-list_horizontal');

    $('.view__icon_tile').removeClass('view__icon_active');

    $(this).addClass('view__icon_active');

    localStorage.setItem('catalogView', true);

    return false;
  });

});
