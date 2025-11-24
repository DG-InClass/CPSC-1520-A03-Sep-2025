# JavaScript Classes

[Classes](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes) are yet another way to generate objects in JavaScript. The `class` keyword is used to declare a "template" for objects.

> *"In JavaScript, classes are mainly an abstraction over the existing prototypical inheritance mechanism — all patterns are convertible to prototype-based inheritance."* - [*Using Classes* on MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Using_classes)

There are two ways to declare a class in JavaScript: Using a [*Class **Expression***](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/class) or using a [*Class **Declaration***](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/class). They are effectively the same, just semantically different.

Here's an example taken from the [MDN reference guide](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes). This example represents one of the simplest kinds of classes, having only a *`constructor()`* function.

```js
// Declaration
class Rectangle {
  constructor(height, width) {
    this.height = height;
    this.width = width;
  }
}

// Expression; the class is anonymous but assigned to a variable
const Rectangle = class {
  constructor(height, width) {
    this.height = height;
    this.width = width;
  }
};

// Expression; the class has its own name
const Rectangle = class Rectangle2 {
  constructor(height, width) {
    this.height = height;
    this.width = width;
  }
};
```

Classes are used as the basis for creating (or *instantiating*) **objects**. They effectively act as a "template" for what the object *looks like* (the data it holds) and *how it behaves* (the methods it exposes). Once you have defined your class, the process of instantiating an object is to use the [**`new`** operator](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/new). The beauty of this process is that with a single class you can create as many instances as you want or need.

```js
const blueBox = new Rectangle(25, 40);
const greenBox = new Rectangle(15, 20);
```

## Class Members

Classes can have fields, methods, getters, setters, and a constructor. You can have as many fields, methods, getters, and setters that you want, but JavaScript allows at most a *single* constructor. There are additional variations you can have regarding the fields/methods/getters/setters:

- They can be *static* or *instance* based.
- They can be *public* or *private*.

You will usually see class members as being *instance based* and *public*. Instance based members are directly associated with the *object* that is created. If you want the member to be *private*, then you would need to use the [hash (`#`) prefix](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes/Private_properties). If you want the member to *only* be associated with the *class definition*, you can use the [`static` keyword](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes/static).

Here's an example illustrating public, private based on the prior `Rectangle` class.

```js
const Rectangle = class {
  #created;
  height;
  width;

  constructor(height, width) {
    this.height = height;
    this.width = width;
    this.#created = new Date();
    Rectangle.#count++;
  }

  static #count = 0;
  
  static get count() {
    return Rectangle.#count;
  }
}
```

## Documenting Our Class

By using JSDoc, we can make our class easier to use/consume in other areas of our program.

Add the following JSDoc above the class declaration.

```js
/**
 * Rectangle is a class representing a simple shape.
 * @param {number} height The height of the rectangle
 * @param {number} width The width of the rectangle
 */
const Rectangle = class {
    // remaining code is un-touched
}
```

This documentation is applied to the constructor as well.

## Giving Each Object Behaviour

Let's add a few things to complete this Rectangle class and make it usable in our page. First of all, we'll throw in a `report()` function on the class so that each object can note its dimensions in the browser's console.

```js
/**
 * Outputs the time at which this rectangle was created.
 */
report() {
    console.log(`This box was made on ${this.#created.toLocaleTimeString()}`);
}
```

Next, let's add in some properties to calculate the perimeter and the area. Note that these are **calculations**. If we later added the ability to *change* the height or width of the rectangle, the area and perimeter values would give the proper results.

```js
/**
 * Calculates the area of the rectangle
 */
get area() {
    return this.width * this.height;
}

/**
 * Calculates the permiter of the rectangle
 */
get perimeter() {
    return (this.width + this.height) * 2;
}
```

## Complete Rectangle

```js
/**
 * Rectangle is a class representing a simple shape.
 * @param {number} height The height of the rectangle
 * @param {number} width The width of the rectangle
 */
const Rectangle = class {
    // Properties of the instance of Rectangle
    #created;   // Private property - #
    height;     // Public property
    width;      // Public property

    // You can only have one constructor()
    constructor(height, width) {
        // The job of the constructor is to make sure
        // all the properties have "meaningful" values
        this.height = height;
        this.width = width;
        this.#created = new Date();
        Rectangle.#count++; // Keeping track of how many rectangles I've created
    }

    // We can use the static keyword for properties
    // and functions that we want to be "shared"
    // among all instances
    static #count = 0;  // Static private property

    // Static public getter
    static get count() {
        return Rectangle.#count;
    }

    /**
     * Outputs the time at which this rectangle was created.
     */
    report() {
        console.log(`This box was made on ${this.#created.toLocaleTimeString()}`);
    }

    /**
     * Calculates the area of the rectangle
     */
    get area() {
        return this.width * this.height;
    }

    /**
     * Calculates the permiter of the rectangle
     */
    get perimeter() {
        return (this.width + this.height) * 2;
    }
}
```

## Practice

Expand on the demo by making the following enhancements.

- Create a `<div>` on the page and set its dimensions to the box you create.
  - The `<div>`s are inline-block with margin of 1em to 2em and have a border of 1px rounded
  - Choose a color for the background color of the box
- Make additional shape classes for
  - `Circle`
  - `Triangle`
  - And, if you are interested in really crazy math, consider what might be needed to create a `Star` class.
