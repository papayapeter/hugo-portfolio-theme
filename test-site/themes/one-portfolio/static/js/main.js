$(document).ready(function() {
  // to animate gif when you hover over it
  $('.hover-gif').hover(
    function() {
      $('img', this).attr('src', $('img', this).attr('src').replace('.jpg', '_animated.gif'));
    },
    function() {
      $('img', this).attr('src', $('img', this).attr('src').replace('_animated.gif', '.jpg'));
    }
  );
  
  // to open nav menu on small screen
  $('.navbar-toggler').click(function() {
    $('.menu-modal').toggleClass('active');
    $('span', this).toggleClass('fa-bars');
    $('span', this).toggleClass('fa-times');
    $('body').toggleClass('menu-active')
  });
});