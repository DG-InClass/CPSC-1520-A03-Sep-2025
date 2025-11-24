// A class is a blueprint for creating objects. This blueprint tells the computer
// what an object should "look like" (its INFORMATION) and how it should "behave"
// (its SET OF INSTRUCTIONS).
const Rectangle = class {
    // Properties
    #created;   // Private property - #
    height;     // Public properties
    width;      // Public properties

    // Constructor
    constructor(height, width) {
        // The purpose of the constructor is to ensure that the properties/fields
        // have meaningful values.
        // I'm preserving the information passed into the constructor.
        this.height = height;
        this.width = width;
        this.#created = new Date(); // Make note of when this object was created
        Rectangle.#count++; // Make note that I have created a new object
    }

    // Functions
    report() {
        console.log(`This box has an area of ${this.area} and a perimeter of ${this.perimeter}`);
        console.log(`This box was created on ${this.#created.toLocaleTimeString()}`);
    }

    // Getters to calculate information
    get area() {
        return this.width * this.height;
    }

    get perimeter() {
        return (this.width + this.height) * 2;
    }

    // Static members of the class that are shared amongst all the instances of the class
    static #count = 0; // This is a static private property
    // A "getter" function has no parameters
    static get count() {
        return Rectangle.#count; // that shared value
    }
}

const shapes = [];

document.querySelector('button').addEventListener('click', (evt) => {
    evt.preventDefault();
    const w = 10;
    const h = 5;
    
    // Create the Rectangle object.
    const box = new Rectangle(h, w);
    
    shapes.push(box);
    console.log('box created:', box);
    console.log(`I have created ${Rectangle.count} rectangles (boxes)`);

    box.report(); // call my method/function of my Rectangle instance
    console.log(`There are ${Rectangle.count} boxes so far.`);
});
