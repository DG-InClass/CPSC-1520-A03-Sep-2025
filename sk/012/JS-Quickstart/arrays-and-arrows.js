// node --watch arrays-and-arrows.js
console.log('loaded script...');

let names = ['Stewart Dent', 'Anna Lyst', 'Phobe Nomiminal', 'Phil Smith'];

names.forEach((name, position) => {
    // I don't care about what this array function returns
    console.log(`${position}) Has the name ${name}`);
});

// .find and .findLast
let result; // I'll re-use this for several examples
let searchName = 'Anna';
result = names.find(name => name.includes(searchName));
//                          \_______ boolean _______/
console.log(`\nI found ${result}`);

searchName = 'Ph';
result = names.find(x => x.includes(searchName));
console.log(`\nNow I found ${result}`);
result = names.findLast(x => x.includes(searchName));
console.log(`\nThe last matching item is ${result}`);

// Mapping - transform data in an array
result = names.map(x => {
    let parts = x.split(' ');
    return { firstName: parts[0], lastName: parts[1] };
});
console.log('\nI transformed the data:');
console.table(result);

let alias = 'Guido Andropov Drozdowski';
result = alias.split(' ');
//            \_________/
//             string[]
console.table(result);

// Filtering the results
result = names.filter(x => x.startsWith('Ph'));
console.log(`\nI found ${result.length} names that start with 'Ph':`);
console.log(result);
