//<script src = "https://ajax.googleapis.com/ajax/ibs/jquery/3.1.0/jquery.min.js"></script>
var words = [ "a sophomore at UC Berkeley", "San Franciscan", "foodie", "guitarist", "pianist", "pun-lover", "artist", "computer scientist" ];

var i = 0;
var i2 = 0;
var _INTERVAL_VAL;
var _ELEMENT = document.querySelector("#text");

// Implements typing effect
function Type() {
  var text =  words[i].substring(0, i2 + 1);
  _ELEMENT.innerHTML = text;
  i2++;

  // If full sentence has been displayed then start to delete the sentence after some time
  if(text === words[i]) {
      clearInterval(_INTERVAL_VAL);
      setTimeout(function() {
          _INTERVAL_VAL = setInterval(Delete, 50);
      }, 1000);
  }
}

// Implements deleting effect
function Delete() {
  var text =  words[i].substring(0, i2 - 1);
  _ELEMENT.innerHTML = text;
  i2--;

  // If sentence has been deleted then start to display the next sentence
  if(text === '') {
      clearInterval(_INTERVAL_VAL);

      if(i == (words.length - 1))
          i = 0;
      else
          i++;
      i2 = 0;

      setTimeout(function() {
          _INTERVAL_VAL = setInterval(Type, 100);
      }, 200);
  }
}

_INTERVAL_VAL = setInterval(Type, 100);
