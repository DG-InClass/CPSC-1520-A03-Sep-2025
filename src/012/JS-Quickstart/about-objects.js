// Launch by running the following in this folder
// node --watch about-objects.js
console.log('Loaded about-objects.js script');

// The simplest way to create an object in JavaScript
// is to declare an "object literal" value.
// - A comma-separated list of name:value pairs within
//   curly braces
let student = {
    firstName: 'Stewart',
    middleName: 'Andrew',
    lastName: 'Dent',
    isEnrolled: true
};
console.log(student);

// In JavaScript, we can add new "properties" or "functions" to our object at any time.
student.getInitials = function() {
    // to reference this object, we use the this keyword
    // this is like an alias to itself: student object
    let first = this.firstName[0];
    let middle = this.middleName[0];
    let last = this.lastName[0];
    return `${first}.${middle}.${last}.`;
}
console.log(student.getInitials());
console.log(student);

// Another way we can create objects in JavaScript is
// by declaring a "Constructor Function".
// A common standard in naming constructor functions
// is to use TitleCase

/**
 * Person() is a constructor function for creating data about somebody
 * @param {string} firstName The given name of the person
 * @param {string} lastName The surname of the person
 * @param {Date} dateOfBirth The birthdate of the person
 */
const Person = function(firstName, lastName, dateOfBirth) {
    // Assigning (preserving) the values in this object
    this.givenName = firstName;
    this.surname = lastName;
    this.dob = dateOfBirth;
    this.greet = function () {
        console.log(`Hello, my name is ${this.givenName}!`);
    };
}
// With a constructor function, I can use it to create new
// objects as often as I want
let friends = [];
let person = new Person('Fred', 'Flintstone', new Date('Feb 23, 1995'));
friends.push(person);
person = new Person('Barney', 'Rubble', new Date('Aug 19, 1995'));
friends.push(person);
console.log();
console.log(friends);

person = new Person('Wilma', 'Slaghoople', null);
console.log(person);
friends.push(person);
// console.table(friends);

// =========== JSON ================
// JavaScript Object Notation
//
// JSON.stringify() to convert an object into a JSON string
let data = JSON.stringify(friends[0], null, 2);

console.log(data);
// To convert a JSON string back to an object, you use JSON.parse()
let objectData = JSON.parse(data);
console.log(objectData);

let fred = friends[0];
let barney = friends[1];
console.log('Fred was born on: ', fred.dob.valueOf());
