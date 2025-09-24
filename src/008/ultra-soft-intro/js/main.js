let counter = 0;

// This is going to be my handler for click events
const increment = function() {
    counter++;
    document.querySelector('div').innerText = `Clicked ${counter} times.`;
}

// Get a reference to the DOM element I want to add my listeners to
const theButton = document.querySelector('button');
// Wire-up or "attach" an "event listener" or "handler" for a particular event
theButton.addEventListener('click', increment);
//                         \_____/  \_______/
//                          | string    |
//                                  A function to be called when the event occurs
//                                  A "callback"
//                                  A "delegate"

theButton.addEventListener('dblclick', function() { counter = 0; });
//                                     \_________________________/
//                                       | An inline function
