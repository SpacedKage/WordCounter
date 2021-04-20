alert("A STRNGS Programme");

console.log(alert)

var count = document.getElementById('count');
var input = document.getElementById('input');

console.log(count)

  input.addEventListener('keyup', function(e){
    wordCounter(e.target.value);
  });

  function wordCounter(text) 
  {
    var text = input.value;
    var wordCount = 0;
    for (var i = 0; i <= text.length; i++) 
    {
      if (text.charAt(i) == ' ') 
      {
        wordCount++;
      }
    }
    count.innerText = wordCount;
  }

  