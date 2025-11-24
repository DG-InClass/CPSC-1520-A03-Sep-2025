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

    mainButton.textContent = 'Stop';
  } else {
    // B) Stop the interval

    mainButton.textContent = 'Start';
  }
});

document.getElementById('clear-button').addEventListener('click', function() {
  // C) Stop the interval before clearing the display

  document.getElementById('main-button').textContent = 'Start';
  document.querySelector('.stopwatch').textContent = '00:00:00:000';
  elapsedTime = 0;
});
