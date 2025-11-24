const addDots = function() {
    let myOutput = document.getElementById('dots');
    myOutput.innerText += '.'; // append a dot to the text in that <output>
    myOutput.setAttribute('title', `There are ${myOutput.innerText.length} dots`);
}

// Start an interval
let cancellationRef = setInterval(addDots, 1250); // 1.25 second delay

// Add an event listener to the button that will stop the interval.
document.querySelector('button')
        .addEventListener('click', function(evt) {
            console.log('Button clicked:', cancellationRef);
            // The conditional expression is being tested for "truthyness"
            if(cancellationRef) {
                clearInterval(cancellationRef);
                cancellationRef = 0; // Indicate that the interval has been cancelled
                evt.target.innerText = "Continue Interval";
            } else {
                cancellationRef = setInterval(addDots, 1250);
                evt.target.innerText = "Stop Interval";
            }
        });
