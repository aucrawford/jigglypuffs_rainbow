$(document).ready( function() {
  var $rainbow = $('#theRainbow');

  $('body header hgroup h2').click( function(e) {
    $('body').addClass('on');
    e.stopPropagation();
  });

  $('body').click( function() {
    if ( $('body').hasClass('off') ) {
      console.log('Zoinks!');
      $('body').removeClass('off');
    } else if ( $('body').hasClass('on') ) {
      console.log('jinkies!');
      $('body').removeClass('on').addClass('off');
    }
  });

  $('.jigglypuff').click( function(e) {
    if ( $('body').hasClass('on') ) {
      $('body').removeClass('on').addClass('off');
    } else {
      $('body').addClass('off');
    }
    e.stopPropagation();
  });
});
