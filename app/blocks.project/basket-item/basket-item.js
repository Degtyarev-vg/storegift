'use strict';

$(function() {

  $('.basket-item .basket-item__img-link').each(function() {
    let img = $(this).find('img').attr('src');

    $(this).css({
      'background' : 'url(' + img + ') center no-repeat',
      'background-size' : 'cover'
    });
  });


  $('.only-digits').bind('change keyup input click', function() {
    if (this.value.match(/[^0-9]/g)) {
      this.value = this.value.replace(/[^0-9]/g, '');
    }
  });

  $('.only-digits').bind('focusout', function() {
    let length = this.value.length;

    if (length < 1 || this.value == 0) {
      this.value = 1;
    }
  });


  $('.basket-item__minus').click(function () {
    let $input = $(this).parent().find('input');

    let count = parseInt($input.val()) - 1;

    count = count < 1 ? 1 : count;

    $input.val(count);

    $input.change();

    return false;
  });

  $('.basket-item__plus').click(function () {
    let $input = $(this).parent().find('input');

    $input.val(parseInt($input.val()) + 1);

    $input.change();

    return false;
  });

});
