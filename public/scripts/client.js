/*
* Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */

const renderTweets = tweets => {
  for (const item of tweets) {
    $('#tweets').prepend(createTweetElement(item));
  }
};

const loadTweets = function() {
  $.get('/tweets', res => {
    renderTweets(res);
  });
};

const createTweetElement = data => {
  const tweetElement = $(`
  <article class="tweet">
    <header>
      <div class="header-left">
        <img src=${data.user.avatars}>
        ${data.user.name}
      </div>
      <div class="header-right">
        ${data.user.handle}
      </div>
    </header>
    <p class="tweet-msg">
      
    </p>
    <footer>
      <div class="timestamp">
        ${timeago.format(data.created_at)}
      </div>
      <div class="tweet-actions">
        <i class="fas fa-flag"></i>
        <i class="fas fa-retweet"></i>
        <i class="fas fa-heart"></i>
      </div>
    </footer>
  </article>
  `);
  tweetElement.find('.tweet-msg').text(data.content.text);
  return tweetElement;
};

$(document).ready(() => {
  loadTweets();

  $('.new-tweet').find('form').submit(function(evt) {
    evt.preventDefault();
    const errorElement = $(this).next('.error');
    errorElement.slideUp('fast', function() {
      $(this).empty();
    });

    const textAreaElement = $(this).find('#tweet-text');
    const tweetLength = textAreaElement.val().length;
    if (!tweetLength) {
      textAreaElement.addClass('invalid');
      errorElement.slideDown('fast', function() {
        $(this).html('<i class="fas fa-exclamation-triangle"></i> Please enter a message');
      });
    } else if (tweetLength > 140) {
      textAreaElement.addClass('invalid');
      errorElement.slideDown('fast', function() {
        $(this).html('<i class="fas fa-exclamation-triangle"></i> Message too long');
      });
    } else {
      textAreaElement.removeClass('invalid');
      $.post('/tweets', $(this).serialize()).then(() => {
        $(this).find('#tweet-text').val('');
        $(this).find('output').val(140);
        $('#tweets').empty();
        loadTweets();
      });
    }
  });
});