// node arg-parser.js --demo factorial
// node arg-parser.js --demo factorial --one-line
console.clear();
const log = console.log;

log('Parsing args like a CLI...');
log(`There are ${process.argv.length} values passed into NodeJS:`);
for(let arg of process.argv) {
    log('  - ', arg);
}

if(process.argv[0] === process.argv0) {
    log('\nThe special .argv0 property is the path to Node on your computer.\n')
}


// Now, let's pretend we are a CLI...
let selectedDemo = "";
let onOneLine = false;

for(let index = 2; index < process.argv.length; index++) {
    let arg = process.argv[index];
    if(arg === "--demo" && index + 1 < process.argv.length) {
        selectedDemo = process.argv[index + 1];
        index++; // skip one
    }
    if(arg === "--one-line") {
        onOneLine = true;
    }
}

if(selectedDemo) {
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

function calculateFactorial(number) {
    let fact = 1;
    for(let count = 1; count <= number; count++) {
        fact = fact * count;
    }
    let result = `${number}! is ${fact}`;
    return result;
}