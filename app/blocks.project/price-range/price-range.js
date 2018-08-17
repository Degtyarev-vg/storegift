'use strict';

$(function() {

  //- RANGE SLIDER START
  let $range = $('.price-range__slider'),
    $inputFrom = $('.price-range__input_from'),
    $inputTo = $('.price-range__input_to'),
    instance,
    min = 1,
    max = 30000,
    from = 0,
    to = 0;

  $range.ionRangeSlider({
    type: 'double',
    min: min,
    max: max,
    from: 2271,
    to: 7300,
    hide_from_to: true,
    hide_min_max: true,
    onStart: updateInputs,
    onChange: updateInputs
  });
  instance = $range.data('ionRangeSlider');

  function updateInputs (data) {
    from = data.from;
    to = data.to;

    $inputFrom.prop('value', from);
    $inputTo.prop('value', to);
  }

  $inputFrom.on('input', function () {
    let val = $(this).prop('value');

    // validate
    if (val < min) {
      val = min;
    } else if (val > to) {
      val = to;
    }

    instance.update({
      from: val
    });
  });

  $inputTo.on('input', function () {
    let val = $(this).prop('value');

    // validate
    if (val < from) {
      val = from;
    } else if (val > max) {
      val = max;
    }

    instance.update({
      to: val
    });
  });
  //- RANGE SLIDER END

  $('input[name=only_digits]').bind('change keyup input click', function() {
    if (this.value.match(/[^0-9]/g)) {
      this.value = this.value.replace(/[^0-9]/g, '');
    }
  });

  $('input[name=only_digits]').bind('focusout', function() {
    let length = this.value.length;

    if (length < 1 || this.value == 0) {
      this.value = 1;
    }
  });

});
