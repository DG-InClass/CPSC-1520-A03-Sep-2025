console.log("script file loaded");

/**
 * Displays HTML in the `<code id="output">` element.
 * @param {string} htmlMarkup A string value that can include HTML markup
 * @param {boolean} replace False if you wish to append the HTML, true if you wish to replace it
 */
const outputLine = function (htmlMarkup, replace) {
  const out = document.getElementById("output");
  htmlMarkup += "<br />";
  if (replace) {
    out.innerHTML = htmlMarkup;
  } else {
    out.innerHTML += htmlMarkup;
  }
};

/**
 * Builds the HTML for a form that will allow editing evaluation items and marks.
 * @param {string} evalName Name of evaluation item
 * @returns {string} HTML markup of a form
 */
const buildFormHtml = function (evalName) {
  return `
  <form>
    <fieldset class="grid">
        <label>Name
            <input type="text" name="evalName" placeholder="Evaluation Name" value="${evalName}">
        </label>
        <label>Weight (%)
            <input type="number" name="weight" step="1" min="1" max="100" />
        </label>
        <label>Total Points
            <input type="number" name="totalPoints" step="0.5" min="1" />
        </label>
        <label>Earned Points
            <input type="number" name="earnedPoints" step="0.5" min="0" />
        </label>
        <label>
            &nbsp;
            <button type="submit">Update</button>
        </label>
    </fieldset>
</form>
`;
}


const dataType = function (value) {
  let result;
  if(value == undefined || value == null) {
      result = `The value is ${value}`;
  } else {
      result = `The data type is ${value.constructor.name}`;
  }
  return result;
}

/**
 * Generates additional forms for individual evaluation items in the course
 * @param {SubmitEvent} evt The event generated when the form is submitted
 */
const createForms = function (evt) {
  // TODO: Part 1 - Build forms and append to the <section id="evaluations">
  evt.preventDefault();
  const elements = evt.target.elements;
  const inputCategory = elements.category;
  const inputQuantity = elements.quantity;
  outputLine(`Create ${inputQuantity.value} forms for '${inputCategory.value}' items`, true);

  // debugger; // Pause execution
  // Loop to create the new HTML to add to the page
  let container = document.getElementById('evaluations');
  let quantity = parseInt(inputQuantity.value);
  let evalName = inputCategory.value;
  for(let count = 1; count <= quantity; count++) {
    let html = buildFormHtml(`${evalName} ${count}`);
    container.innerHTML = container.innerHTML + html;
  }

  // Clear inputs and re-set focus
  inputCategory.value = '';
  inputQuantity.value = '';
  inputCategory.focus(); // keyboard
}

/**
 * Modifies evaluation items and displays the results in the output using @see `outputLine()`
 * @param {SubmitEvent} evt The event generated when the form is submitted
 */
const editEvalItem = function (evt) {
  evt.preventDefault();
  // TODO: Part 2 - Update information on the current evaluation item
  outputLine("User feedback on editing the evaluation item", true);

  // 0) Getting the form & input controls
  const form = evt.target;
  // console.log(form.elements);
  let inputName = form.elements.evalName;
  let inputWeight = form.elements.weight;
  let inputTotal = form.elements.totalPoints;
  let inputEarned = form.elements.earnedPoints;


  // 1) Validate the inputs
  let isValid = true;

  // 2) If Valid
  if(isValid) {
    // 2a) Update/Add eval item
    let found = null; // haven't search yet
    for(let index = 0; index < evalItems.length; index++) {
      let item = evalItems[index];
      if(item.name === inputName.value) {
        found = item;
      }
    }

    if(!found) {
      // new item needs to be added
      // I am using an object literal.
      // It's a comma-separated set of
      // name/value pairs
      let item = {
        name: inputName.value,
        weight: parseInt(inputWeight.value),
        possible: null,
        earned: null
      }
      if(!isNaN(inputTotal.value)) {
        // yes, there is a number entered
        item.possible = parseInt(inputTotal.value);
      }
      if(!isNaN(inputEarned.value)) {
        item.earned = parseInt(inputEarned.value);
      }
      // Now I can add to my array
      evalItems.push(item);
    } else {
      // found item needs to be updated
      found.weight = parseInt(inputWeight.value);
      if(isNaN(inputTotal.value)) {
        found.possible = null;
      } else {
        found.possible = parseInt(inputTotal.value);
      }

      if(isNaN(inputEarned.value)) {
        found.earned = null;
      } else {
        found.earned = parseInt(inputEarned.value);
      }
    }
  } else {
    // 2b) Display errors and focus
  }
};

// Global array to store eval object
/**
 * Store items as objects in this structure:
 * `{ name: string, weight: number, possible: number | null, earned: number | null }`
 */
let evalItems = []; // empty array

/**
 * Reviews all the recorded weights/marks in the `<section id='evaluations'>`
 * forms and outputs recalculated summaries of marks
 * @param {SubmitEvent} evt The event generated when the form is submitted
 */
const calculateGradeStatus = function (evt) {
  evt.preventDefault();
  // TODO: Part 3 - Explore all the marks recorded and update grade status
}

// Register the form event handlers
const form = document.querySelector('form#addInputs');
form.addEventListener('submit', createForms);

const evaluations = document.getElementById('evaluations');
evaluations.addEventListener('submit', editEvalItem);

const gradeStatus = document.querySelector('form#status');
gradeStatus.addEventListener('submit', calculateGradeStatus);
