$(document).ready( function() {
  var field = document.getElementById('field')
    , scoreBoard = document.getElementById('score')
    , body = document.getElementsByTagName('body')
    , fWidth = field.clientWidth
    , fHeight = field.clientHeight
    , score = 0
    , balls = 0
    , outs = 0
    ;

  $('body header hgroup h2').click( function(e) {
    $('body').addClass('on');
    e.stopPropagation();
    pokeballs();
  });

  function pokeballs() {
    balls = balls + 1;
    var pokeball = document.createElement('div')
      , randPosition = Math.floor(Math.random() * fWidth) + 1
      ;
    pokeball.className = "pokeball";
    pokeball.style.left = randPosition + "px";
    pokeball.addEventListener('click', function(e) {
      score = score + 1;
      balls = balls - 1;
      scoreBoard.innerHTML = score;
      this.parentNode.removeChild(this);
      e.stopPropagation();
    });
    field.appendChild(pokeball);

      console.log("balls: " + balls);
      if ( balls < 4 ) {
        setTimeout( function() {
          pokeballs();
        }, Math.floor(Math.random() * (1000-4000) + 4000 + 1));
      } else {
        $('body').removeClass('on').addClass('off');
      }
  };

  $(document).click( function() {
    if ( $('body').hasClass('on') ) {
      $('body').removeClass('on').addClass('off');
      balls = 4;
      $('.pokeball').remove();
    }
  });

  $('#jigglypuff').click( function(e) {
    if ( $('body').hasClass('on') ) {
      $('body').removeClass('on').addClass('off');
    } else if ( $('body').hasClass('off') ) {
      $('body').removeClass('off');
    } else {
      $('body').addClass('off');
    }
    e.stopPropagation();
  });

  $('#score').text(score);
});
