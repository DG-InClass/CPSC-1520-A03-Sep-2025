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
    console.log('Since `success` is a booleand, there is no need to compare it to `true`.\n');
}
