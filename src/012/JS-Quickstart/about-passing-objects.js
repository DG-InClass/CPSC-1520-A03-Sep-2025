// node --watch about-passing-objects.js

const primitiveGradeReporting = function(studentName, age, mark) {
    console.log(`${studentName} is ${age} years old and earned a ${mark}%`);
}
// Try calling the function above
primitiveGradeReporting('Alice', 21, 86);
// Whoops! I think I did something wrong here...
primitiveGradeReporting('Mark', 85, 22);
// Without looking into the function declaration,
// my use of the function is subject to 
// "transpositional errors" where I put in
// the arguments in the wrong order (i.e., an
// order other than that declared by the parameter
// list).

console.log('\n-------\n');

const objectGradeReporting = function({studentName, age, mark}) {
    console.log(`${studentName} is ${age} years old and earned a ${mark}%`);
}
// Try calling the function above
objectGradeReporting({ studentName: 'Alice', age: 21, mark: 86 });
objectGradeReporting({ studentName: 'Mark', mark: 85, age: 22});

let student = { studentName: 'Stew', age: 20, mark: 92 };
objectGradeReporting(student);
