const FollowToggle = require ('./follow_toggle');
const UsersSearch = require ('./users_search');

$(function () {
  $('button.follow-toggle').each( (idx, btn) => new FollowToggle(btn));
  $('.users-search').each( (idx, user) => new UsersSearch(user));
});
