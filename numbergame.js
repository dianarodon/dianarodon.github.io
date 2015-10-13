var secret = Math.floor(100 * Math.random()) + 1;
var result = document.getElementById("result");
document.getElementById("submit").addEventListener("click", function() {
      event.preventDefault();
      var number = document.getElementById("number").value;
      var i = number;
        if (i == secret) {
        alert("You won!");
      } else {
          if (i < secret) result.innerHTML = 'Try again. Too small.';
          if (i > secret) result.innerHTML = 'Try again. Too big.';
        }
})
