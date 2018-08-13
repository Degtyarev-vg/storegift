'use strict';

$(function() {

  $('.catalog').stickit({
    screenMinWidth: 1201
  });


  $('.catalog__open-close').click(function() {
    $(this)
      .toggleClass('catalog__open-close_active');

    $(this)
      .parent('li')
      .toggleClass('active');

    $(this)
      .next()
      .next()
      .slideToggle();
  });


  function eventCheck(e) {
    let container = $('.catalog');

    if ( !container.is(e.target) &&
      container.has(e.target).length === 0) {

      $('.page').removeClass('page_fixed');

      $('.catalog').removeClass('content__catalog_open');
    }
  }

  function regulationsForMq(mq) {
    if (mq.matches) {
      document.addEventListener("touchstart", eventCheck, false);
      document.addEventListener("click", eventCheck, false);

      $('.catalog__close').click(function() {
        $('.page').removeClass('page_fixed');

        $('.catalog').removeClass('content__catalog_open');

        return false;
      });
    } else {
      document.removeEventListener("touchstart", eventCheck, false);
      document.removeEventListener("click", eventCheck, false);

      $('.page').removeClass('page_fixed');

      $('.catalog').removeClass('content__catalog_open');
    }
  }

  let mq = window.matchMedia("screen and (max-width: 1200.9px)");

  mq.addListener(regulationsForMq);

  regulationsForMq(mq);

});
