var minutes = 0;
var seconds = 0;
var miliseconds = 0;

var getMin = document.getElementById("min");
var getSec = document.getElementById("sec");
var getMSec = document.getElementById("msec");

setInterval(function () {
  miliseconds++;
  getMSec.innerHTML = miliseconds;
  if (miliseconds == 100) {
    seconds++;
    getSec.innerHTML = seconds;
    miliseconds = 0;
    if (seconds == 60) {
      seconds = 0;
      minutes++;
      getMin.innerHTML = minutes;
    }
  }
}, 10);
