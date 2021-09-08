$(document).ready(function() {
  $('#tweet-text').on('input', function() {
    const counter = $(this).next().find('.counter').val(140 - $(this).val().length);

    if (counter.val() >= 0) {
      counter.css('color', 'black');
    } else {
      counter.css('color', 'red');
    }
  })
});
