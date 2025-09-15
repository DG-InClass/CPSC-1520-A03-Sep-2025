// Some global variables that we will re-use frequently
const userInput = document.getElementById('userInput');
const output = document.getElementById('transformedText');
// Show the user input in the output
output.innerText = userInput.value;
// A little prep....
const presetPaddingLength = function() {
    let input = document.getElementById('minLength');
    input.value = userInput.value.length + 5;
}
presetPaddingLength();

// And now for the lesson....
// Demo: 0) Completed demo to transform the user's input to upper case and display it
document.getElementById('transformToUpperCase').addEventListener('click', function() {
    let newValue = userInput.value.toUpperCase();
    //             \  string     /
    output.innerText = newValue;
});

// TODO: 1) Write the code to transform the user's input to lower case and display it
//       STUDENT_CODE_HERE

// Demo: 2) Write the code to pad the end of input text with the supplied character(s).
// TODO:    Modify the code below to use the appropriate user input for padding.
document.querySelector('#transformPadEnd').addEventListener('click', function() {
    let currentValue = 'bob';// userInput.value;
    let newValue = currentValue.padEnd(10, '^');
    output.innerText = newValue;
});

// TODO: 3) Write the code to output the input text with spaces trimmed from the left-hand side.

// TODO: 4) Write the code to output the input text with spaces trimmed from the right-hand side.

// TODO: 5) Write the code to output the input text with spaces trimmed from the both sides.

// TODO: 6) Write the code to pad the start of input text with the supplied character(s).

// TODO: 7) Write the code to replace text in the user's input.

// TODO: 8) Write the code to repeat the text the specified number of times on separate lines.

