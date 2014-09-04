var field = document.getElementById('field')
  , scoreBoard = document.getElementById('score')
  , body = document.body
  , startBtn = document.getElementById('start')
  , jugglypuff = document.getElementById('jigglypuff')
  , fWidth = field.clientWidth
  , fHeight = field.clientHeight
  , score = 0
  , balls = 0
  , outs = 0
  ;

function hasClass(element, className) {
  return element.className && new RegExp("(^|\\s)" + className + "(\\s|$)").test(element.className);
}

function failText(fText) {
  var fail = document.createElement('p');
  failText = document.createTextNode(fText);
  fail.appendChild(failText);
  field.appendChild(fail);
}

function pokeballs() {
  balls = balls + 1;
  scoreBoard.innerHTML = score;
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
  if ( hasClass(body, 'on') && balls == 4 ){
    setTimeout( function() {
      body.className = 'off';
      failText("Uh oh! Jigglypuff isn't happy. You let four pokeballs get past you. Maybe if you say sorry if you want to to try again.");
    }, 5000);
  } else if ( balls < 4 ) {
    setTimeout( function() {
      pokeballs();
    }, Math.floor(Math.random() * (1000-4000) + 4000 + 1));
  }
}

document.addEventListener('click', function() {
  if ( hasClass(body, 'on') ) {
    body.className = 'off';
    balls = 5;
    failText("Uh oh! Jigglypuff isn't happy. You missed that one. I bet Jigglypuff will let you try again. If you are extra apologetic.");
  }
});

startBtn.addEventListener('click', function(e) {
  body.className = 'on';
  e.stopPropagation();
  pokeballs();
});

jigglypuff.addEventListener('click', function(e) {
  if ( hasClass(body, 'on') ) {
    body.className = 'off';
    failText("Uh oh! I don't think Jigglypuff likes being poked. You should probably apologize.");
  } else if ( hasClass(body, 'off') ) {
    window.location.reload();
  } else {
    body.className = 'off';
  }
  e.stopPropagation();
});
