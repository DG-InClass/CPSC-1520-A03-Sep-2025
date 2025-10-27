// node --watch about-fetch-api.js
console.log('Learning to fetch JSON data...');

// This URL will give us a JSON string as a resonse
let apiEndPoint = 'https://randomuser.me/api';

// The fetch() function is an Asynchronous Function, meaning that it runs "in the background", freeing up your other code to continue executing.
fetch(apiEndPoint).then(x => console.log('done!'));
//\___ Promise __/
//        |       .then()
//        |result \_____/
//                  | Also returns a Promise
// Fetch is a non-blocking API

fetch(apiEndPoint)
    .then(x => x.json()) // Parses the response as JSON
    //    x (above) is a Response object; we're expecting JSON
    //    x (below) is a JavaScript object (because we parsed)
    .then(x => {
        console.log(x);
    });


console.log('\n-- The End --\n');
