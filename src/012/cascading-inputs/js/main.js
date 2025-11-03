// <throwaway>
import { fetchCountryNamesAsync } from './data/fetchCountries';
// try out the function and dump the data in the console
// The following is an example of a "Top-Level Await"
const data = await fetchCountryNamesAsync();
console.log(data);
// </throwaway>


// Supplied code: Do not edit below this line...
import { setupCascadingUserInputs } from './ui/countryInput';
import { setupFormProcessing } from './ui/formProcessing';

// A) The selection of the country kicks off the other possible
//    options that the user has for input.
// The <datalist> element used for the country <option>s
const countries = document.getElementById('countries');

// The hidden element for the country code
const countryCode = document.getElementById('country-code');
// The text input for the user's entry of the country name
const countryName = document.getElementById('country-name');

// The <datalist> element used for the known cities in the country
const knownCities = document.getElementById('known-cities');

// The container for the state label + selection
const stateLabel = document.getElementById('state-label');
const stateSelection = document.getElementById('state-selection');

setupCascadingUserInputs({
    countryDataList: countries,
    countryInput: countryName,
    hiddenInput: countryCode,
    cityDataList: knownCities,
    stateContainer: stateLabel,
    stateSelect: stateSelection
});

// B) Handling user input requires that
// The <form> where user input is submitted
const form = document.getElementById('cascading-inputs');
// The element to hold the results of user input
const results = document.getElementById('results');

setupFormProcessing({
    form,
    output: results
});

