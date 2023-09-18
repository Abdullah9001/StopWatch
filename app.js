var seconds = 00;
var tens = 00;
var outputSecond = document.getElementById("seconds");
var outputTens = document.getElementById("tens");

var startButton = document.getElementById("start");
var stopButton = document.getElementById("stop");
var resetButton = document.getElementById("restart");
var Interval;

startButton.addEventListener("click", () => {
  clearInterval(Interval);
  Interval = setInterval(startTime, 10);
});

stopButton.addEventListener("click", () => {
  clearInterval(Interval);
});

resetButton.addEventListener("click", () => {
  clearInterval(Interval);
  seconds = "00";
  tens = "00";
  outputSecond.innerHTML = seconds;
  outputTens.innerHTML = tens;
});

function startTime() {
  tens++;
  if (tens <= 9) {
    outputTens.innerHTML = "0" + tens;
  }

  if (tens > 9) {
    outputTens.innerHTML = tens;
  }

  if (tens > 99) {
    seconds++;
    outputSecond.innerHTML = "0" + seconds;
    tens = 00;
    outputTens.innerHTML = "0" + tens;
  }

  if (seconds > 9) {
    outputSecond.innerHTML = seconds;
  }
}
