// node --watch built-in-functions.js

// There are a number of functions that are common for all arrays:
// .forEach()
// .filter()
// .map()
// .sort()
// .join()

/** @typedef {{ name: string, days: number }} Month */
/** @type {Month[]} */
let months = [
    { name: 'January', days: 31 },
    { name: 'February', days: 28 },
    { name: 'March', days: 31 },
    { name: 'April', days: 30 },
    { name: 'May', days: 31 },
    { name: 'June', days: 30 },
    { name: 'July', days: 31 },
    { name: 'August', days: 31 },
    { name: 'September', days: 30 },
    { name: 'October', days: 31 },
    { name: 'November', days: 30 },
    { name: 'December', days: 31 }
];

/** @type {string[]} */
let weekDays = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

// TODO: A live demonstration...
//  Manipulating arrays to achieve:
let result;

//  - Short week-day names
result = weekDays.map( (item) => item.substring(0, 3) );
console.log('Short week-day names:', result);
/*
    (item) => {
        return item.substring(0, 3);
    }

*/

//  - Short month names
result = months.map( (item) => item.name.substring(0, 3) );
console.log('Short month names', result);

//` - All the months with only 30 days
// The term "predicate" simply refers to a function that 
// must return a boolean value
result = months.filter( (aMonth) => aMonth.days === 30 );
// this is a relational expression  \________________/
//                                      boolean
console.log('Months with only 30 days', result);

//  - The month with only 28 days
result = months.find( (month) => month.days === 28 );
console.log('The month with only 28 days', result);

//  - The first month with 30 days
result = months.find( month => month.days === 30 );
console.log('The first month with 30 days', result);

//  - The last month with 30 days
result = months.findLast( month => month.days === 30 );
console.log('The last month with 30 days', result);

//  - The week-day name of the last day of this month

