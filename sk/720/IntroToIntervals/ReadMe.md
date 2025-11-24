# Intro to Intervals

The anatomy of a timeout in JavaScript is pretty simple. The [`setInterval()`](https://developer.mozilla.org/en-US/docs/Web/API/Window/setInterval) function has two parameters. The first is the *callback function* to run after each interval expires. The second is the *number of milliseconds* to use for the interval. `setInterval()` is asynchronous, so it is non-blocking.

## Using this Demo

In this demo, we will use an interval to place dots on the screen. Immediately after the `addDots()` function, place the following code.

```js
// Start an interval
let cancellationRef = setInterval(addDots, 1250);
```

This will call `addDots()` every 1.25 seconds.

As it currently stands, this will run as long as the browser is open. Let's add some functionality in the page by allowing the button to stop the interval.

```js
if(cancellationRef) {
    clearInterval(cancellationRef);
    cancellationRef = 0;
}
```

The use of the `if` statement in the code above is so that we don't try to clear an interval that has already been stopped.

If we want to use the button to **toggle** the interval, that would require creating a new interval once the `cancellationRef` is set to zero. Here's the complete code for toggling the adding of dots to the screen.

```js
    if(cancellationRef) {
        clearInterval(cancellationRef);
        cancellationRef = 0;
        evt.target.innerText = "Continue Interval";
    } else {
        cancellationRef = setInterval(addDots, 1250);
        evt.target.innerText = "Stop Interval";
    }
```
