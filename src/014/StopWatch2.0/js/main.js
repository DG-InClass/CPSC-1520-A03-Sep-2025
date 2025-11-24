// Create a stopwatch object
let log = console.log;

let stopwatchInterval;
let elapsedTime = 0;

const formatTime = function(timeInMilliseconds) {
  const totalSeconds = Math.floor(timeInMilliseconds / 1000);
  const hours = Math.floor(totalSeconds / (60 * 60));
  const minutes = Math.floor(totalSeconds / 60);
  const seconds = totalSeconds %60;
  const milliseconds = timeInMilliseconds %1000;

  return `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}:${milliseconds.toString().padStart(3, '0')}`;
}

document.getElementById('main-button').addEventListener('click', function() {
  const mainButton = document.getElementById('main-button');
  const stopwatch = document.querySelector('.stopwatch');

  if (mainButton.textContent === 'Start') {
    const startTime = Date.now() - elapsedTime;
    // A) Start the interval
    stopwatchInterval = setInterval(function() {
        // Date.now() gives the current date/time as milliseconds since the Epoch time.
        elapsedTime = Date.now() - startTime;
        stopwatch.textContent = formatTime(elapsedTime);
    }, 10); // Just 10 milliseconds between "refresh" renderings of my stopwatch

    mainButton.textContent = 'Stop';
  } else {
    // B) Stop the interval
    clearInterval(stopwatchInterval); // Stop the timer by clearing the interval

    mainButton.textContent = 'Start';
  }
});

document.getElementById('clear-button').addEventListener('click', function() {
  // C) Stop the interval before clearing the display
  clearInterval(stopwatchInterval);

  document.getElementById('main-button').textContent = 'Start';
  document.querySelector('.stopwatch').textContent = '00:00:00:000';
  elapsedTime = 0;
});
