window.onload = function () {
  var minutes = 00;
  var seconds = 00;
  var milliseconds = 00;
  var appendMilliseconds = document.getElementById("milliseconds");
  var appendSeconds = document.getElementById("seconds");
  var appendMinutes = document.getElementById("minutes");
  var buttonStart = document.getElementById("button-start");
  var buttonStop = document.getElementById("button-stop");
  var buttonReset = document.getElementById("button-reset");
  var interval;

  buttonStart.onclick = function () {
    clearInterval(interval);
    interval = setInterval(startTimer, 10);
  };

  buttonStop.onclick = function () {
    clearInterval(interval);
  };

  buttonReset.onclick = function () {
    clearInterval(interval);
    milliseconds = "00";
    seconds = "00";
    minutes = "00";
    appendMilliseconds.innerHTML = milliseconds;
    appendSeconds.innerHTML = seconds;
    appendMinutes.innerHTML = minutes;
  };

  function startTimer() {
    milliseconds++;

    if (milliseconds <= 9) {
      appendMilliseconds.innerHTML = "0" + milliseconds;
    }

    if (milliseconds > 9) {
      appendMilliseconds.innerHTML = milliseconds;
    }

    if (milliseconds > 99) {
      seconds++;
      appendSeconds.innerHTML = seconds <= 9 ? "0" + seconds : seconds;
      milliseconds = 0;
      appendMilliseconds.innerHTML = "0" + 0;
    }

    if (seconds > 59) {
      minutes++;
      appendMinutes.innerHTML = minutes <= 9 ? "0" + minutes : minutes;
      seconds = 0;
      appendSeconds.innerHTML = "0" + 0;
    }
  }
};
