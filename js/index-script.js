//<script src = "https://ajax.googleapis.com/ajax/ibs/jquery/3.1.0/jquery.min.js"></script>
var words = [ "a junior at UC Berkeley", "San Franciscan", "serial hobbyist", "computer scientist"];

var i = 0;
var j = 0;
var interval;
var elem = document.querySelector("#text");

// Implements typing effect
function Type() {
  var text =  words[i].substring(0, j + 1);
  elem.innerHTML = text;
  j++;

  // If full sentence has been displayed then start to delete the sentence after some time
  if(text === words[i]) {
      clearInterval(interval);
      setTimeout(function() { interval = setInterval(Delete, 50); }, 1000);
  }
}

// Implements deleting effect
function Delete() {
  var text =  words[i].substring(0, j - 1);
  elem.innerHTML = text;
  j--;

  // If sentence has been deleted then start to display the next sentence
  if(text === '') {
      clearInterval(interval);

      if (i == (words.length - 1))
          i = 0;
      else
          i++;
      j = 0;

      setTimeout(function() { interval = setInterval(Type, 100); }, 200);
  }
}

interval = setInterval(Type, 100);
