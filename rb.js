$(document).ready( function() {
  var $rainbow = $('#theRainbow');
  $rainbow.clone();

  $('body header hgroup h2').click( function() {
    $('body').addClass('on');
    moveTheRainbow();
  });

  $('body').click( function() {
    if ( $(this).hasClass('off') ) {
      $(this).removeClass('off');
    } else if ( $(this).hasClass('on') ) {
      console.log(Raou?);
      $(this).removeClass('on').addClass('off');
    }
  });

  $('.jigglypuff').click( function(e) {
    e.stopPropagation();
    console.log('jinkies');
    if ( $('body').hasClass('on') ) {
      console.log('zoinks');
      $('body').removeClass('on').addClass('off');
    } else {
      $('body').addClass('off');
    }
  });
});

function moveTheRainbow() {
  console.log('loop');
  $('#theRainbow').stop(true,false).animate({
    top: "-100%"
  }, 3000, "linear", function() {
    $('#theRainbow').css('top', 0);
    moveTheRainbow();
  });
};
