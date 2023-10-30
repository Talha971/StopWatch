var minutes = 0;
var seconds = 0;
var miliseconds = 0;

var getMin = document.getElementById("min");
var getSec = document.getElementById("sec");
var getMSec = document.getElementById("msec");

var a = document.getElementById("str");
var b = document.getElementById("stp");
var c = document.getElementById("rst");

var interval;

a.addEventListener("click", function () {
  interval = setInterval(function () {
    miliseconds++;
    getMSec.innerHTML = miliseconds;
    if (miliseconds == 100) {
      seconds++;
      getSec.innerHTML = seconds;
      miliseconds = 0;
    } else if (seconds == 60) {
      seconds = 0;
      minutes++;
      getMin.innerHTML = minutes;
    }
  }, 10);
  document.getElementById("str").disabled = true;
});

b.addEventListener("click", function () {
  clearInterval(interval);
  document.getElementById("str").disabled = false;
});

c.addEventListener("click", () => {
  minutes = 0;
  seconds = 0;
  miliseconds = 0;
  getMSec.innerHTML = 0;
  getMin.innerHTML = 0;
  getSec.innerHTML = 0;
});
