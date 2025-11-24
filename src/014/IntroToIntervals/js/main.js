const addDots = function() {
    let myOutput = document.getElementById('dots');
    myOutput.innerText += '.';
    myOutput.setAttribute('title', `There are ${myOutput.innerText.length} dots`);
}

// Add an event listener to the button that will stop the interval.
document.querySelector('button')
        .addEventListener('click', function(evt) {
            console.log('Button clicked');
        });
