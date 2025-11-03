// Exposes the functions that allow fetching of country information
// API Endpoints
const cachedCountries = './cached/countries.json';
const allStatesEndpoint = 'https://countriesnow.space/api/v0.1/countries/states';
const allCountriesEndpoint = 'https://countriesnow.space/api/v0.1/countries';


// Two approaches will be shown here:

// A) TODO: Get the cached data
//  - Async/Await - A "blocking" approach (leaves you waiting...)

// B) TODO: Get the remote data
//  - Promise/Then - An "eventually..." approach (.then())


// Utility functions - Not Exported
function handleResponse(resp) {
    console.log(resp);
    // TODO: A proper handling of a response would validate for
    //          - an "ok" status (status code 200)
    //          - the expected mime type (in this case, "application/json")
    return resp.json();
}

function logData(data) {
    console.log(data);
    return data; // send it back out, unchanged, for future promises
}

function handleErr(err) {
    console.log(err);
}
