// node --watch backlog.js
/*
 * This is a "backlog" of programming items that you should know
 * from the homework and readings, but that may have only been
 * briefly mentioned in class.
 */

// 0. "Alias" the console.log function + utilities
const log = console.log;
log('Welcome!');

// 1. Simple Object Literals
topic('Simple Object Literals');
let instructor = {
    name: "Dan Gilleland",
    githubProfile: "https://github.com/dgilleland",
    // The help function below has a default value for
    // the display parameter
    help: function(display = false) {
        const result = `If you have questions, you can contact me via MS Teams.
- ${this.name}
  - ${this.githubProfile}\n`;
        if(display) log(result);
        return result;
    }
}
log(instructor);
instructor.help(true);

// 2. Date Object in JavaScript
topic('Date Object in JavaScript');
let currentDate = new Date();
log("Current Date and Time:", currentDate);
log("Short Date:", currentDate.toDateString());
log("Short Time:", currentDate.toTimeString());
log("ISO Date:", currentDate.toISOString());
log("UTC Date:", currentDate.toUTCString())

// 3. Math Object in JavaScript
topic('Math Object in JavaScript');
let randomNum = Math.random(); // random number between 0 and 1
log("Random number:", randomNum);
let mark = randomNum.toFixed(1);
let pass = randomNum < 0.5 
         ? `${mark}% - Tough luck - too low`
         : `${mark}% - Hooray! Now you can try harder stuff....`;
log(pass);


// 4. Functions as Parameters (Callbacks)
topic('Functions as Parameters (Callbacks)');
const runSomeCallback = function(callback, data) {
    callback(data);
}
const reverse = function(text) {
    text = text?.toString();
    let reverse = "";
    for(let index = text.length - 1; index >= 0; index--) {
        reverse += text[index];
    }
    log(`${text} <to> ${reverse}`);
}
const limitText = function(text) {
    text = text.toString();
    let output = text.substring(0, 10);
    log(`${output}...`);    
}

runSomeCallback(log, 'Running console.log() as a callback');
runSomeCallback(reverse, 'Dan Gilleland');
runSomeCallback(limitText, 'The answer is 42');


// 5. Functions as Return Values
topic('Functions as Return Values');
log('Functions that return functions are central to Functional programming.');
log('(also see Closures below for an example of returning functions)');

// 6. Arrow Functions
topic('Arrow Functions');

// The key thing to note is the GRAMMAR of the arrow function
const greenArrow = (target, distance) => {
    let hunter = `\n=> I will shoot my arrow at ${target} from a distance of ${distance} meters.\n`;
    log(hunter);
}

greenArrow('the rabbit', 40);

log("Let's look at some functions:")
log("- A regular function:\n", topic.toString());
log("- A const function:\n", runSomeCallback.toString());
log("- An arrow function:\n", greenArrow.toString());

// 7. Default Parameters
topic('Default Parameters');
function greet(name = "Guest") {
    return `Hello, ${name}!`;
}
log(greet()); // Hello, Guest!
log(greet("Alice")); // Hello, Alice!

// 8. Closures
//     The secret to understanding closures in JavaScript
//     is to understand SCOPE in JavaScript.
topic('Closures');
function makeCounter() {
    let count = 0;  // is "closed" in terms of "visibility"
    return function() {
        count++;
        return count;
    };
}
let counter = makeCounter();
log("counter() result:", counter()); // 1
log("counter() result:", counter()); // 2
let alternateCounter = makeCounter();
log("alternateCounter() result:", alternateCounter()); // 1
log("counter() result:", counter()); // 3

// 9) Function Hoisting
topic('Function Hoisting');
log('Notice how the function declaration appears after these lines. Yet we can call/use it before it is declared. That is "hoisting" in JavaScript');

/**
 * Displays the supplied title with a double-underline.
 * @param {string} title Text to display as a title.
 */
function topic(title) {
    log();
    log(title);
    log("==========");
}

