# Stop Watch (2.0)

Most of the code is already in place for this stop watch demo. We just need to manage the use of the interval that makes the on-screen display work.

> ***Note:** Timers and intervals in JavaScript are not absolutely precise. Their use in cases where you want precise times will require you to design you code to make use of an actual clock (i.e.: the `Date()` object).*

There are two event listeners - one for each button. Our first task is to get the stopwatch to begin its countdown. Add the following code to start the interval.

```js
// A) Start the interval
stopwatchInterval = setInterval(function() {
    elapsedTime = Date.now() - startTime;
    stopwatch.textContent = formatTime(elapsedTime);
}, 10);
```

Overall, that is pretty simple. But it's not really enough! There are two problems:

1. While the button is toggling its text, it's also creating a **new interval** every time it's text has been set to `"Start"`.
2. The prior intervals are never being cleared. As a result, **the other intervals are still running**, but we've "lost" the reference to the previous intervald each time we create a new interval.

The fix is pretty simple. We need to clear the interval when the button's text is `"Stop"` (i.e.: no longer set to `"Start"`). Add in the following code in the `else` block.


```js
    // B) Stop the interval
    clearInterval(stopwatchInterval);
```

Resetting the stopwatch is pretty simple as well. But a "reset" should also *stop* the interval. Add this code to the other event handler.

```js
  // C) Stop the interval before clearing the display
  clearInterval(stopwatchInterval);
```
