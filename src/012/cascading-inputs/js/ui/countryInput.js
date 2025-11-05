const noSelectionOption = '<option value="">[select a region]</option>';

import { fetchCountryNamesAsync } from "../data/fetchCountries";

export async function setupCascadingUserInputs({
    countryDataList,    // <datalist></datalist>
    countryInput,       // <input />
    hiddenInput,        // <input type="hidden" />
    cityDataList,       // <datalist></datalist>
    stateContainer,     // <??></??>
    stateSelect         // <select></select>
}) {
    // A) Get short info on all the countries
    const data = await fetchCountryNamesAsync();
    console.log("from inside the setup function:", data);

    // B) Populate the countryDataList with <option></option>
    data.forEach(country => {
        let option = `<option value="${country.alpha3Code}">${country.name}</option>`;
        countryDataList.innerHTML += option;
    });

    // C) Listen for the 'change' event on the countryInput
    setUpListener({countryInput, hiddenInput, cityDataList, stateContainer, stateSelect, countries: data});
}

const setUpListener = function({countryInput, hiddenInput, cityDataList, stateContainer, stateSelect, countries}) {
    // A) Listen for the 'change' event
    countryInput.addEventListener('change', function(evt) {
        evt.preventDefault();
        let text = evt.target.value; // what was put into <input />
        let matchingCountry = countries.find(country => country.alpha3Code === text);
        let found = !!matchingCountry; // force conversion to boolean from truthy/falsy
        console.log('The country was found?', found);

        if(!found) {
            // perhaps they just finished typing the country name....
            matchingCountry = countries.find(country => country.name === text);
            found = !!matchingCountry;
        }

        if(!found) {
            alert('that is not a valid country');
            // TODO: set styling to indicate bad input
            evt.target.focus(); // so they can try again....
            evt.target.select(); // 💥 EXPERIMENTAL
        } else {
            console.log('Found this match', matchingCountry);
            // 1) Move the code info to the hidden input
            hiddenInput.value = matchingCountry.alpha3Code;
            // 2) Replace the visible input with the country name
            evt.target.value = matchingCountry.name;

            // TODO: And now, the cascading data begins....
        }
    })
}
