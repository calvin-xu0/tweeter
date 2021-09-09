/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */

const renderTweets = tweets =>  {
  for (const item of tweets) {
    $('#tweets').append($(createTweetElement(item)));
  }
}

const createTweetElement = data => {
  return `
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
    ${data.content.text}
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
`
}

$(document).ready( function () {

  const loadTweets = function() {
    $.get('/tweets', res => {
      // console.log(res)
      renderTweets(res);
    })
  }
  loadTweets();
  
  $('.new-tweet').find('form').submit( function(evt) {
    $.post('/tweets', $(this).serialize(), function() {
    })
    evt.preventDefault();
  })
})