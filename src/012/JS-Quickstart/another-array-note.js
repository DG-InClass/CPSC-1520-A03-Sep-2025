// node --watch another-array-note.js
console.clear();
console.log('Sorting Arrays');
console.log('==============');
const show = console.log;

// A) Sorting an array of numbers
let numbers = [2, 8, 4, 6, 3, 7, 12, 1];
show('The original numbers:\n', numbers);
// ✨ .sort() is a Mutating function
numbers.sort(numberCompare);
show('The sorted numbers:\n', numbers);
// The key to sorting is building a comparison function
function numberCompare(a, b) {
    return parseFloat(a) - parseFloat(b);
}

// B) Sorting an array of strings
let strings = 'sorting an array of strings'.split(' ');
strings.sort();
show('My words in alphabetical order:\n', strings);


