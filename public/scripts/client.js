/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */

const createTweetElement = (data) => {

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

// Test / driver code (temporary). Eventually will get this from the server.
const tweetData = {
  "user": {
    "name": "Newton",
    "avatars": "https://i.imgur.com/73hZDYK.png",
    "handle": "@SirIsaac"
  },
  "content": {
    "text": "If I have seen further it is by standing on the shoulders of giants"
  },
  "created_at": 1461116232227
}

// const $tweet = createTweetElement(tweetData);

// Test / driver code (temporary)
// console.log($tweet); // to see what it looks like
// $('#tweets').append($tweet); // to add it to the page so we can make sure it's got all the right elements, classes, etc.
