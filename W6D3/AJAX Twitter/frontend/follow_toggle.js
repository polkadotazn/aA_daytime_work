class FollowToggle {
  constructor(el) {
    this.$el = $(el);
    this.userId = this.$el.data('user-id');
    this.followState = this.$el.data('initial-follow-state');

    this.render();
  }

  render () {
    if (this.followState === "unfollowed") {
      this.$el.html('Follow!');
    } else {
      this.$el.html('Unfollow!');
    }
  }

  handleClick (event) {
    const followToggle = this;


  event.preventDefault();

  if (this.followState === "unfollowed"){
    this.followState = 'following';
    this.render();

    $.ajax({
    url: `/users/${followToggle.userId}/follow`,
    dataType: 'json',
    method: 'POST'
    }).then(() => {
        followToggle.followState = 'followed';
        followToggle.render();
      });
  }

  else {
      this.followState = 'unfollowing';
      this.render();

    $.ajax({
    url: `/users/${followToggle.userid}/follow`,
    dataType: 'json',
    method: 'DELETE'
    }).then(() => {
        followToggle.followState = 'unfollowed';
        followToggle.render();
      });
    }
  }
}


module.exports = FollowToggle;
