// node arg-parser.js --demo factorial
// node arg-parser.js --demo factorial --one-line
console.clear();
const log = console.log;

log('Parsing args like a CLI...');
log(`There are ${process.argv.length} values passed into NodeJS:`);
// The process.argv array is an array of
// strings. When calling node in the 
// terminal, you are passing in a
// space-delimited (spaces to separate)
// set of strings

// The following for..of loop goes through each item
// in the array. (The for..of statement is like the
// foreach statement in C#.)
for(let arg of process.argv) {
    log('  - ', arg); // just listing an item
}
/* The line above can be thought of as the equivalent of
   the following:
for(let index = 0; index < process.argv.length; index++) {
    let arg = process.argv[index];
    log('  - ', arg);
}

 */

// In Node, because knowing WHERE node is installed is so
// important, there's an additional property on the process
// object called `argv0`, which is the same as 
// process.argv[0]   <==  "process dot argv at position zero"
if(process.argv[0] === process.argv0) {
    log('\nThe special .argv0 property is the path to Node on your computer.\n')
}


// Now, let's pretend we are a CLI...
let selectedDemo = "";
let onOneLine = false;

// Processing the arguments for my command-line app
// I am skipping the first two strings because those
// were "special-purpose" values used by Node itself.
//      --demo factorial --one-line
// The loop below is my "discovering" what flags + values
// are being sent into this program.
for(let index = 2; index < process.argv.length; index++) {
    let arg = process.argv[index];
    // Check to see what demo they want to run
    if(arg === "--demo" && index + 1 < process.argv.length) {
        selectedDemo = process.argv[index + 1];
        index++; // skip one
    }
    if(arg === "--one-line") {
        onOneLine = true;
    }
}

// After parsing the input, run whatever demo they asked for
if(selectedDemo === "factorial") {
    let factorials = [];
    for(let count = 1; count < 10; count++) {
        let value = calculateFactorial(count);
        factorials.push(value);
    }

    if(onOneLine) {
        let output;
        output = factorials.join(', and ');
        log(output);
    } else {
        for(let index = 0; index < factorials.length; index++) {
            log(factorials[index]);
        }
    }
}

// The actual demo functions....
function calculateFactorial(number) {
    let fact = 1;
    for(let count = 1; count <= number; count++) {
        fact = fact * count;
    }
    let result = `${number}! is ${fact}`;
    return result;
}
// ... and I can add others (like calcFibonnacci)
