const APIUtil = require('./api_util');

class TweetCompose {
  constructor(el) {
    this.$el = $(el);

    this.$el.on('submit', this.submit.bind(this));
  }

  submit(event) {
    event.preventDefault();
    const data = this.$el.serializeJSON();

    this.$el.find(':input').prop('disabled', true);

    APIUtil.createTweet(data).then(tweet => this.handleSuccess(tweet));
  }

  clearInput() {
    this.$input.val('');
    this.$mentionedUsersDiv.find('ul').empty();
    this.$el.find(':input').prop('disabled', false);
    this.$el.find('.char-left').empty();
  }

  handleSuccess(data) {
    const $tweetsUl = $(this.$el.data('tweets-ul'));
    $tweetsUl.trigger('insert-tweet', data);

    this.clearInput();
  }


}
