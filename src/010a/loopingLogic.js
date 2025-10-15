// node loopingLogic.js <prob> <number>
console.clear();
console.log('Looping Logic');
console.log('=============');

// Switch Statements
let prob = process.argv[2];   // <prob>
let number = process.argv[3]; // <number>

switch(prob?.toLowerCase()) {
    case 'fib':
        console.log('TBD');
        break;    
    case 'factorial':
        let answer = calculateFactorial(parseInt(number));
        console.log(answer);
        break;    
    case 'avg':
        console.log('TBD');
        break;    
    case 'skip':
        console.log('TBD');
        break; 
    default:
        showHelp('Unknown Input');   
}

function showHelp(err) {
    let help = `Call this program with the following arguments:
    <prob> - Either 'fib', 'factorial', 'avg' or 'skip'
    <number> - Some number
Example:
    node loopingLogic.js avg 12`;
    console.log(help);
    if(err) console.log(`\nError: ${err}\n`);
}

// Problem-Solving Algorithms
function calculateFactorial(number) {
    let fact = 1;
    for(let count = 1; count <= number; count++) {
        fact = fact * count;
    }
    let result = `${number}! is ${fact}`;
    return result;
}