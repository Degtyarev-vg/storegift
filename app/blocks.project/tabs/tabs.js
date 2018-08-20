'use strict';

$(function() {

  function tabs(tabLink, tabsContainer, activeClass, contentContainer) {

    $(tabLink).click(function(e) {
      e.preventDefault();

      $(tabsContainer + ' .' + activeClass).removeClass(activeClass);

      $(this)
        .parents('li')
        .addClass(activeClass);

      let tab = $(this).attr('href');

      $(contentContainer)
        .not(tab)
        .css({'display':'none'});

      $(tab).fadeIn(500);
    });

  }

  tabs('.tabs__link', '.tabs__nav', 'tabs__item_active', '.tabs__tab-content');

});
