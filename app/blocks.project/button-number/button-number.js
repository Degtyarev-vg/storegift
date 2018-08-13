'use strict';

$(function() {

  $('.button-number_watched').click(function() {
    $('.watched_top').slideToggle();

    return false;
  });

  $('.quick-panel__button_watched').click(function() {
    $('.watched_bottom').slideToggle();

    return false;
  });

});
