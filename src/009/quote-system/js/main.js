
document.querySelector('form')
    .addEventListener('submit', function(evt) {
        evt.preventDefault(); // Stop the form from sending data to the web server (this course)
        const form = evt.target; // is always the <form>
        const formControls = form.elements; // the collction of form controls inside <form></form>

        console.log(formControls);

        // Output is being displayed as "plain text" in the browser
        const outputControl = formControls.breakdown; // <output name="breakdown" />
        let message = 'Contract Parameters Received...\n';
        outputControl.value = message;

        /* Validation Expectations:
         *  - job duration must be greater than zero
         *  - interval selection must be made (hours vs. weeks)
         *  - base rate must be $1000 or greater
         *  - digital assets must be greater than or equal to zero
         *  - if there are digital assets, then the per-asset price must be greater than $10
         *  - if content authoring is to be included, then the per-word-rate must be between 25¢ and $1.25 inclusive
         *  - Start date must be in the future (cannot be on the same day as the quote)
         *  - Start date must not be too far in the future (max is 3 months from today)
         * 
         * Stylistically, add/remove the attribute `aria-invalid="true"` appropriately
         */
        let isValidInput = true; // Optimistic approach
        let errorSummary = ""; // No problems to report (yet)


        // Core website development work
        const inputJobDuration = formControls.duration; // <input name="duration" id="job-duration" />
        // const inputJobDuration = formControls['job-duration']; // <input name="duration" id="job-duration" />
        // Notice how, in order to get the individual radio buttons from the radio-button-group,
        // that I used the id attribute of the <input>. Also notice that the id name was in
        // kebab-case. That means I have to use an Array Indexer to reference that <input>
        // in the formControls.
        const inputRadioHours = formControls['interval-hours']; // <input type="radio" name="interval" id="interval-hours" />
        const inputRadioWeeks = formControls['interval-weeks']; // <input type="radio" name="interval" id="interval-weeks" />
        // const inputContractPeriod = formControls.interval; // RadioNodeList: <input name="interval" />
        const inputBaseRate = formControls['base-rate']; // <input name="base-rate" />

        /* This code was just a quick demo
        let jobDuration = parseFloat(inputJobDuration.value);
        message = `Job duration: ${jobDuration}`;
        let inHours = inputRadioHours.checked;
        let inWeeks = inputRadioWeeks.checked;
        message = `\tinHours:${inHours} | inWeeks:${inWeeks}\n` + message;
        outputControl.value += message;
        */

        // Digital Assets (extra charges)
        const inputImageCount = formControls.digitalAssetCount; // <input name="" />
        const inputPricePerImage = formControls.digitalAssetRate; // <input name="digitalAssetRate" />

        // Content Authoring (extra charges)
        const inputIncludeContent = formControls.includeContent; // <input type="checkbox" name="includeContent" />
        const inputPerWordRate = formControls['per-word-rate']; // <input name="per-word-rate" />
        const inputStartDate = formControls['start-date']; // <input type="date" name="start-date" />

        // Step 0) Validate the user input
        //  ✅  - job duration must be greater than zero
        let jobDuration = parseFloat(inputJobDuration.value); // Get the input & convert to num
        if(isNaN(jobDuration)) { // isNaN() --- is Not a Number
            isValidInput = false;
            errorSummary += "Job duration is required.\n";
        } else {
            // Yes, it's a number, BUT
            if(jobDuration <= 0) {
                isValidInput = false;
                errorSummary += "Job duration must be greater than zero.\n";
            }
        }

        //  ✅  - interval selection must be made (hours vs. weeks)
        let missingHoursInput = !inputRadioHours.checked;
        let missingWeeksInput = !inputRadioWeeks.checked;
        if(missingHoursInput && missingWeeksInput) {
            isValidInput = false;
            errorSummary += "You must choose either Hours or Weeks for the duration.\n";
        }

        //  *  - base rate must be $1000 or greater
        let baseRate = parseFloat(inputBaseRate.value);
        if(isNaN(baseRate) || baseRate < 1000) {
            isValidInput = false;
            errorSummary += "A base rate is required and must be $100 or higher.\n";
        }

        //  *  - digital assets must be greater than or equal to zero
        //  *  - if there are digital assets, then the per-asset price must be greater than $10
        //  *  - if content authoring is to be included, then the per-word-rate must be between 25¢ and $1.25 inclusive
        //  *  - Start date must be in the future (cannot be on the same day as the quote)
        //  *  - Start date must not be too far in the future (max is 3 months from today)


        // Step 1) Decide if I process the inputs or report erros
        if(isValidInput) {
            // Step 2) Do all the processing to procuce the quote for the web contract
            // TODO: Create the estimate...
        } else {
            // Step 3) Report that the user needs to try again
            outputControl.value = errorSummary;
            inputJobDuration.focus(); // re-set the focus to the first input
        }
    });
