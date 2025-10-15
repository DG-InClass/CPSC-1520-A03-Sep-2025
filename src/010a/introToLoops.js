// node introToLoops.js
// node introToLoops.js 4
console.clear();
console.log('Intro to Loops in JavaScript');
console.log('============================');

// NodeJS has a global object called process.
// This object has a lot of information about
// the whole "context" or "environment" in
// which Node is running
console.log(process.platform); // Your OS
console.log(process.argv); // data passed in

// Doing Loops
let limit = 10;
if(process.argv.length > 1) {
    let input = parseInt(process.argv[2]);
    if(!isNaN(input)) {
        limit = input;
        console.log(`Max limit is ${limit}`);
    }
}

// 1) while loop - "univeral" looping structure
let count = 0;
while(count < limit) {
    count++; // <--- The thing that changes
             //       our loop's condition
    console.log('while loop:', count);
}

// 2) do-while loop
console.log();
count = 0;
do {
    count++;
    console.log('do-while loop:', count);
} while(count < limit);

// 3) for loop
console.log();
//   ONCE       before enter   after
// \  init   /\  condition  /\ incr  /
for(count = 0; count < limit; count++) {
    console.log('for loop:', count);
}
