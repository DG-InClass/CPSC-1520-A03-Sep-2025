const appendFeedback = function(line) {
    document.querySelector('#feedback').innerText += `\n${line}`;
    // This uses a template string with placeholder  \_________/
}

const clearFeedback = function(text) {
    document.querySelector('#feedback').innerText = `${text || ''}`;
}

// Process the 'subscribe' form's inputs
document
    .getElementById('subscribe') // Get the <form id="subscribe"> element
    .addEventListener('submit', function(ev) { // an anonymous function responding to submit
        ev.preventDefault(); // This will stop the browser from submitting the form to the server
        // console.log(ev);
        let theForm = ev.target;
        clearFeedback('The subscribe form was submitted.');
        let firstNameInput = theForm.elements.firstname;
        appendFeedback("The first name is: '" + firstNameInput.value + "'");
        let emailInput = theForm.elements.email;
        appendFeedback(`Their email is: '${emailInput.value}'`);

        appendFeedback(`Agreed to terms? '${theForm.elements.terms.checked}'`);
        console.log(theForm.elements.term); // see the <input type="checkbox" in the console
    });


let otherForm = document.querySelector('#assorted');
const exploreForm = function(ev) {
    ev.preventDefault();
    clearFeedback('This is the data from the assorted form:');
    let target = ev.target;
    let theInputs = target.elements;
    console.log('theInputs: ', theInputs);

    // If your input control has a name with a dash in it,
    // use the name's value as an "index" for the object.
    let theBackgroundColorInput = theInputs['bg-color'];
    // for <input type="radio" name="bg-color" value="#ff0000" />

    // Here's an interesting (but wonky) use of indexers to call
    // the .log() function of the console object.
    console['log']("Isn't that cool?!");
};
otherForm.addEventListener('submit', exploreForm);
