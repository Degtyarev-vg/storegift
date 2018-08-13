'use strict';

$(function() {

  $('.hamburger').click(function() {
    $(this)
      .find('.hamburger__btn')
      .toggleClass('hamburger__btn_on');

    $('.top-menu ul').slideToggle();

    return false;
  });

});
