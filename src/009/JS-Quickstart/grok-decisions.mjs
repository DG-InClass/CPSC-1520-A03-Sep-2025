/* 
node --watch grok-decisions.mjs
*/
import { describeDataType, getDataType, ify } from './about.mjs';

let nothing, something = 42;
let message;
message = `"nothing" is '${ify(nothing)}' and "something" is '${ify(something)}'\n`;
console.log(message);
message = `"true" is ${ify(true)}\n`;
//                         \__/  Boolean
console.log(message);
// Try calling describeDataType() and getDataType() to see what they return.
console.log(describeDataType('Stewart Dent'));
console.log(getDataType('Stewart Dent'));
// Create an object using Object Literal syntax
let person = {
    name: 'Stewart',
    age: 23
};
console.log(describeDataType(person));
console.log(getDataType(person));

console.clear();
console.log('Step 1)');
// Variables may be re-used in subsequent examples
let success = true;
let isEmployed = false; // Don't worry, you'll get there...

/* The If-Else statement follows this grammar:

if(conditionalExpression)
    statementOrStatementBlock
else
    statementOrStatementBlock

where the "conditionalExpression" is some expression that will result in a true or false value, and the "statementOrStatementBlock" is either a single instruction/statement or a set of statements inside curly braces (statement block).
*/

// Step 1) A Simple if Statement
//          At the heart of our if statement is the conditional expression
if(success == true) {
    console.log('Success! The code inside this "block" will run.');
    console.log('Read on for more discoveries.\n');
}

if(success) {
    // The conditional expression in an `if` statement just needs to work out as a boolean VALUE.
    console.log('Since `success` is a boolean, there is no need to compare it to `true`.\n');
}

// Step 2) The else Block
console.log('\nStep 2)\n');
if(isEmployed) {
    console.log('I happen to know this will not run...');
} else {
    console.log('Do not fear! Perseverance is alwyas needed when job hunting!\n');
    console.log('By reviewing the fundamentals, you will improve everything that builds on them!\n');
}

// Step 3) Strict Equal vs. Equal
let count = 5, five = '5';
if(count == five) {
    // The two values match (kinda)
    message = `Loosely speaking, ${count} equals ${five}`;
    console.log(message);
}

if(count === five) {
    // The two values don't STRICTLY match, because they are
    // different data types
    console.log('This should NOT DISPLAY!!');
} else {
    message = `BUT, count (${count}) is a ${getDataType(count)} and five (${five}) is a ${getDataType(five)}.\n`;
    console.log(message);
}