console.log("script file loaded");

/**
 * Displays HTML in the `<code id="output">` element.
 * @param {string} htmlMarkup A string value that can include HTML markup
 * @param {boolean} replace False if you wish to append the HTML, true if you wish to replace it
 */
const outputLine = function (htmlMarkup, replace) {
  const out = document.getElementById("output");
  htmlMarkup += "<br />";
  if (replace) { // true or "truthy"
    out.innerHTML = htmlMarkup;  // replace
  } else {
    out.innerHTML += htmlMarkup; // append
  }
};

/**
 * Adds evaluation items and displays the results in the output using @see `outputLine()`
 * @param {SubmitEvent} evt The event generated when the form is submitted
 */
const addEvalItem = function (evt) {
  evt.preventDefault();
  // TODO: Write your exploratory code here
  outputLine("Processing form input...", true);

  let elements = evt.target.elements; // the collection of form inputs
  // console.log(elements);
  let inputName = elements.evalName; // <input type="text" />
  let inputWeight = elements.weight; // <input type="number" />

  let isValid = true; // Optimistic that the data will be good

  if(isInputEmpty(inputName)) {
    outputLine('You must enter an evaluation name.');
    isValid = false;
  } else {
    outputLine(`You entered <b>${inputName.value}</b> for the name.`);
  }

  if(isInputEmpty(inputWeight)) {
    outputLine('You must supply a weight for the item.');
    isValid = false;
  } else {
    outputLine(`The weight is <u>${inputWeight.value}</u> %.`);
  }

  if(isValid) {
    // Whatever "processing" I want to do with the good data
    outputLine('<span style="font-size: 1.2em;">Adding to the list.</span>');
    // ... more code
    // Clear the input controls
    inputName.value = '';
    inputWeight.value = '';
    // Set the keyboard focus to the Evaluation Name input
    inputName.focus();
  }
};

const isInputEmpty = function (inputElement) {
  return (inputElement.value == ''); // return true or false
}

/**
 * Reports information about the last state of the form before the reset was applied to the input controls.
 * @param {Event} evt A `reset` event on the `<form>` element.
 */
const resetForm = function (evt) {
  outputLine("The form has been reset");
};

// Register the form event handlers
const form = document.querySelector("form");

form.addEventListener("submit", addEvalItem);
form.addEventListener("reset", resetForm);

// Register the calculation of final grades
const calc = document.getElementById("calc");

calc.addEventListener("click", function () {
  // TODO:
});

// Register the generation of fake data
const fake = document.getElementById("fake");

fake.addEventListener("click", function () {
  // TODO: Generate some random evaluation items with marks
});
