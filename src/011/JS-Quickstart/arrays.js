// node --watch arrays.js
const log = console.log;

// 1) Strings and Arrays
topic("Strings and Arrays");
let message = "Work hard and you'll get Arrays!";
let words = message.split(' ');
log("When we split a sentance into words:\n", words);

// Discover for..in
for(let index in words) {
    let aWord = words[index];
    message = `words at [${index}] is ${aWord}`;
    log(message);
}
log();
// Discover for..of
for(let aWord of words) {
    log('- ',aWord);
}



// 2) Helpful Arrays for Dates
topic("Helpful Arrays for Dates");
// Get the current date. TODO: Try Date functions.
let now = new Date();
//  now.getYear()
//  now.getFullYear()
//  now.getMonth()
//  now.getDay()
//  now.getDate()

// Build our own arrays
let monthNames = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
let weekDays = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
log(`The month names are:\n  "${monthNames.join(', ')}"`);

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
