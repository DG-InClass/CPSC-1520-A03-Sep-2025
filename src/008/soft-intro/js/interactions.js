const handleClick = function(event) {
    //                       \___/
    //                         | is an object with tons of information about what happened
    console.log(event);
    event.preventDefault(); // stop what normally would happen with this event
    // TODO: Use for exploration purposes
    const target = event.target;
    document.getElementById('feedback').innerText = `Clicked from ${target.tagName}`;
}

const registerUser = function(evt) {
    let userName = prompt('Enter your name');
    let email = prompt('Enter you email');
    let out = document.getElementById('feedback');
    let msg = `Thank you, ${userName}, for registering. A confirmation email has been sent to ${email}.`;
    out.innerText = msg;
}

export { handleClick, registerUser }
