// node --watch arrays.js
console.clear(); // clear the screen
const log = console.log;

// 1) Strings and Arrays
topic("Strings and Arrays");
let message = "Work hard and you'll get Arrays!";
// The .split() function is used to create an array of strings from a single string.
let words = message.split(' ');
log("When we split a sentance into words:\n", words);

// For loops are what we commonly use to "iterate" or "loop" through all the elements/items in an array.
// The traditional for statement
/*
for(let index = 0; index < words.length; index++) {
    let aWord = words[index];
    // whatever I want....
}
 */

// Discover for..in   <=== each index in the array
for(let index in words) {
    let aWord = words[index];
    message = `words at [${index}] is ${aWord}`;
    log(message);
}
log();

// Discover for..of   <=== each item in the array
for(let aWord of words) {
    log('- ',aWord);
}



// 2) Helpful Arrays for Dates
topic("Helpful Arrays for Dates");
// Get the current date. TODO: Try Date functions.
let now = new Date();
//  now.getYear()
//  now.getFullYear()
//  now.getMonth()      <=== zero-based month number
//  now.getDay()        <=== zero-based day-of-week
//  now.getDate()

// Build our own arrays
// With an array of month names, I can use the .getMonth()
// property of a date object in order to get the name of
// that date's month.
let monthNames = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

let weekDays = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
log(`The month names are:\n  "${monthNames.join(', ')}"`);
log();

message = `Today is ${weekDays[now.getDay()]}, ${monthNames[now.getMonth()]} ${now.getDate()}\n`;

log(message);

for(let index = 0; index < weekDays.length; index++) {
    message = `weekdays[${index}] is ${weekDays[index]}`;
    log(message);
}


// ======================
/**
 * Displays the supplied title with a double-underline.
 * @param {string} title Text to display as a title.
 */
function topic(title) {
    log();
    log(title);
    log("==========");
}
