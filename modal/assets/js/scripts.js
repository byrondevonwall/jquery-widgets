
$(function () {
  'use strict';

  $('.btn').on('click', function () {
    $(this).text('Click me');
    $('.modal-container').addClass('showing');
  });

  $('.modal-close, .modal-container').on('click', function () {
    $('.modal-container').removeClass('showing');
  });

  $('.modal').click(function (e) {
    e.stopPropagation();
  });

});
