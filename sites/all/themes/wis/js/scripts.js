jQuery(document).ready(function($) {
  
  $('#feature-carousel').jcarousel({
    scroll:1,
    animation:'slow',
    auto:5,
    wrap:'circular',
  });

  $('#wis-sponsor-carousel').jcarousel({
    scroll:1,
    animation:'slow',
    auto:5,
    wrap:'circular',
    center: true,
  });

  $('#wis-participants-carousel').jcarousel({
    scroll:1,
    animation:'slow',
    auto:5,
    wrap:'circular',
    center: false,
  });

  
  $('a.menu-minipanel').click(function(e) {
    e.preventDefault();
  });
    
});
