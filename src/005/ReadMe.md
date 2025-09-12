# Handling Information ![Code](https://img.shields.io/badge/Code%20Status-Walkthrough-blueviolet?logo=Visual%20Studio%20Code&labelColor=indigo)

We often learn best by play. That's why it's so nice to have a sandbox laying around. In this lesson, we're going to explore two playgrounds for experimenting with JavaScript. The first is in your browser, and the second is using the Node environment.

In this lesson, we're going to explore **variables**, **values** and **data types** in JavaScript. Along the way, we'll see how some of the *math operators* work. At the end, you'll have a chance to bring in any other websites you've played with in other courses and fill your sandbox with toys for future adventures!

## REPL in your Browser

> "The acronym **REPL** stands for read-eval-print loop and basically provides a programmer with an interactive programming environment."
>
> <cite>[source](https://techcrunch.com/2018/03/15/repl-it-lets-you-program-in-your-browser/)</cite>

The console in your browser's native developer tools is effectively a REPL for JavaScript. In this lesson, we'll explore how to use variables to aid us in handling and manipulating information.

[The data types in JavaScript](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures) can be loosely categorized as *primitive* data types and *object* data types. The primitive types include **Boolean** (with the permissible values of `true` and `false`), **String** (anything that is text) and the numeric types of **Number** and **BigInt**. There is also the **Symbol** type (similar to the notion of a GUID or a UUID) as well as the special types of **Null** (whose only value is [`null`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/null)) and **Undefined** (whose only value is [`undefined`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/undefined)).

Values for these primitive types can be expressed as **literal values** or be contained in variables that we can declare. A variable is simply a "named container" or *identifier* that we use to "store" a value. For a deeper discussion, see the section ["Variables, Values and Data Types"](https://programming-0101.github.io/TheBook/Teach/chapter1.html#variables-values-and-data-types) in the article *"What is a Computer Program"*.

The three keywords we use to declare variables are [**`let`**](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/let), [**`var`**](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/var) and [**`const`**](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/const). Variables have their data type determined by the value stored in the variable. The data type of a variable is *mutable*. In other words, you can change the data type of a variable by simply putting in a value with a different data type. Variables in JavaScript are **not** type-safe.

The only time you cannot change a variable's data type is when you can't change its value. If we want a variable to always have a specific value, we would declare it as a constant.

```js
const pi = 3.14
pi = 3.14159 // This produces an error, because pi is a constant
```

The primitive data types can be expressed as **literal values**. For strings, we simply enclose the text in a pair of either single quotes (as in `'Hello'`) or double quotes (as in `"Hello"`). For numbers, we use simple digits, as in `3.14159` or `7`. To distinguish a *BigInt* literal value, we place the character `n` at the end of the number, as in `100n`.

One of the ways we can find out what data type is in a variable is by using the [**`typeof`**](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/typeof) operator. If your data type is some kind of object (as opposed to a primitive type), then you can use the [**`instanceof`**](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/instanceof) keyword to test the specific kind of object that the variable represents.

> *Follow along with your instructor as they demonstrate working with variables and values in the browser.*

We can manipulate information in JavaScript through the use of [**Expressions and Operators**](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Expressions_and_Operators). As it states in the linked article, "An expression is any valid unit of code that resolves to a value." It's common to see operators used in expressions to perform tasks such as arithmetic or string concatenation.

JavaScript uses some internal rules for "**implicit** conversion" based on the combination of operators and data types whenever the data types are different. For example, try out the following in your browser's console.

```js
5 + '7' // should return a string value of '57'

5 * '7' // should return a number value of 35
```

Usually, we should apply some form of **explicit** conversion when mixing different data types. If you want to get the string value of a variable's content, you could use the `.toString()` function (which works for any kind of variable).

```js
let theAnswer = 42
theAnswer.toString()
```

When you have a number data type, you can use the `.toFixed()` method to get the string version with a specific number of decimal places.

```js
let unitCost = 12.50
let quantity = 10
let total = unitCost * quantity
total
total.toFixed(2)
```

If you want to convert a string to a number, you can use the `parseFloat()` or `parseInt()` functions.

```js
5 + parseInt('7') // should return a number value of 12
5 + parseFloat('7') // should return a number value of 12

5 + parseInt('7.5') // should return a number value of 12
5 + parseFloat('7.5') // should return a number value of 12.5
```

Take some time to explore the various [**assignment operators**](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Expressions_and_Operators#assignment_operators) and [**arithmetic operators**](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Expressions_and_Operators#arithmetic_operators). If you need additional mathematical operations besides what is available as arithmetic operators, you can use the built-in [**Math**](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math) object.

> There's a lot more to learn about handling information in JavaScript, and knowing how to work with the primitive types is foundational. But don't stick with just the primitives - you will get more ["bang for your buck"](https://en.wikipedia.org/wiki/Bang_for_the_buck#:~:text=Bang%20for%20the%20buck%20is,%22%20which%20means%20%22money%22.&text=Today%2C%20the%20phrase%20is%20used,worth%20for%20the%20money%20used.) if you learn to work with objects, both the ones intrinsic to JavaScript and the ones you can create for yourself.

----

## Node as a REPL Environment

You can use Node as an excellent browserless REPL environment. To do so, you will need to install Node on your computer. You can download the installer from the [Node.js website](https://nodejs.org/en/). Once you have Node installed, you can open a terminal window and type `node` to start the REPL. You can exit the REPL by typing `.exit` or by pressing `Ctrl+C` twice.

Go ahead and open a terminal window in VS Code (<kbd>ctrl</kbd> + <kbd>&#96;</kbd>) or open an external terminal from within VS Code (<kbd>ctrl</kbd> + <kbd>shift</kbd> + <kbd>c</kbd>). The type `node` and press <kbd>enter</kbd>. You should see something like this:

```bash
Welcome to Node.js v14.15.4.
Type ".help" for more information.
>
```

Try typing the demo for using the `.toFixed()` method from above, and observe the results in the REPL.

```js
let unitCost = 12.50
let quantity = 10
let total = unitCost * quantity
total
total.toFixed(2)
```

When you are done with a REPL, you can save the session to a file. To do so, type `.save` followed by the name of the file you want to save to. For example, you could type `.save mySession.js` to save the session to a file named `mySession.js`. You can then exit the REPL and open the file in VS Code to see the results.

> **Tip:** If you start `node` inside the folder of this lesson, then when you save the file it will be inside this folder. Always try to pay attention to what folder you are in when running commands in the command prompt. It can make your life *so* much easier!

To load a saved session, type `.load` followed by the name of the file you want to load. For example, you could type `.load mySession.js` to load the session from the file named `mySession.js`.

The saved session is a JavaScript file, so you can edit it in VS Code and then load it back into the REPL to continue working with it. This is a great way to experiment with code snippets without having to create an entirely new project.

----

## References

- ["Primitive Obsession - A Code Smell that Hurts People the Most"](https://medium.com/the-sixt-india-blog/primitive-obsession-code-smell-that-hurt-people-the-most-5cbdd70496e9)
- For more on `let` vs `var`, see the article ["var, let, or const?"](https://hackernoon.com/js-var-let-or-const-67e51dbb716f)
- Want to learn [HTML Character Codes](https://www.rapidtables.com/web/html/html-codes.html)? Check out this reference.

----

## Learn by Play

### Edit the Live Demo

> To see if you truly understand the concepts presented, you will need to engage in some "experimentation".

A copy of the `live-demo` from lesson `003` has been included in this lesson's starter kit. Play with this demo by loading an external JavaScript file. Give the file the name "main.js" and put it in a subfolder of `live-demo` named "scripts".

In that file, generate examples that demonstrate each of the items in the [Learning Outcome Guide](./LOGs.md) for this lesson. Additionally, go beyond this lesson to explore additional members of the `Math` object in JavaScript. For example, you could explore the use of the functions that are available for trigonometry.

#### One Step Farther

Take your live-demo one step farther by making it into a JavaScript project with Vite as the web server. If you don't remember exactly how to do that, revisit the previous lesson for the details.

### Create a Sandbox

> One of the ways we are wired to learn is by play. I encourage you to apply what we're learning in our classes to something that personally interests you!

If you don't already have one, create a folder at the root of your repository called **`sandbox`** and use it as a place to experiment. Do you have a favorite web page you made in a previous course? See what you can do to add interactions using JavaScript! Is there something you learned in class that interested you? Turn what you learned into its own web page as a summary lesson!

> **Tip:** Do you like to play a lot? It's best to have each experimental website in its own folder. When you add your favorites to the `sandbox` folder, be sure that each one of them is in their own subfolder to keep them from getting in each others way. If you have a bunch of related HTML pages (maybe even with links between them), keep them together under their own folder. It could get crowded in here, so some planning is in order!


![Playground](./images/markus-spiske-dWaRJ3WBnGs-unsplash.jpg)


----

## Credits

- Sandbox Photo by [Markus Spiske](https://unsplash.com/@markusspiske?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash) on [Unsplash](https://unsplash.com/photos/selective-focus-photo-of-toy-trailer-filled-of-brown-sands-dWaRJ3WBnGs?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash).
  