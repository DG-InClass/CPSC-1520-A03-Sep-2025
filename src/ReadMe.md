# `src` Folder

This **`src`** folder is where you will place practice and demo material for each class.

> :warning: **Do *NOT*** use this repository for any assignments that are worth marks. :warning:

If there is a sample in your instructor's workbook that you want to pull into your own workbook, the easiest way to do that is through a Node package called [**tiged**](https://github.com/tiged/tiged#readme). Here's an example of how to use it to [grab a subdirectory](https://github.com/tiged/tiged#specify-a-subdirectory) from your instructor's workbook:

> ***Note:** The following is based on using the `pnpm dlx` command. If you are using regular node/npm, you should use `npx` instead of `pnpm dlx`.*

```bash
$ pnpm dlx tiged --disable-cache --force DMIT-1234/Instructor-Workbook/src/008/demo-events ./src/008/demo-events
//\____________________________________/ \_______________________________________________/ \___________________/
//      |- Command to run               |- Instructor's source folder (on GitHub)        |- Your local destination folder
```

A more detailed explanation of the command would look like this:

```bash
$ pnpm dlx tiged --disable-cache --force DMIT-1234/Instructor-Workbook/src/008/demo-events ./src/008/demo-events
//\______/ \___/ \_____________/ \_____/ \_______/ \_________________/ \_________________/ \___________________/
// |    |          |          |       |             |                     |                     |- Destination folder
// |    |          |          |       |             |                     |- Instructor's sub-folder
// |    |          |          |       |             |- Name of Instructor's Repo
// |    |          |          |       |- GitHub Organization or User
// |    |          |          |- Force overwrite of existing files
// |    |          |- Disable caching of repo (so you grab the latest version)
// |    |- Command to run
// |- pnpm dlx is a Node package runner (alternative to npx)
```

----

## Starter Kits

- [MDN Curriculum - JavaScript](https://developer.mozilla.org/en-US/curriculum/core/javascript-fundamentals/)
  - [6.1 Variables](https://developer.mozilla.org/en-US/curriculum/core/javascript-fundamentals/#6.1_variables)
  - [6.2 Math](https://developer.mozilla.org/en-US/curriculum/core/javascript-fundamentals/#6.2_math)
  - [6.3 Text](https://developer.mozilla.org/en-US/curriculum/core/javascript-fundamentals/#6.3_text)
  - [6.4 Arrays](https://developer.mozilla.org/en-US/curriculum/core/javascript-fundamentals/#6.4_arrays)
  - [6.5 Conditionals](https://developer.mozilla.org/en-US/curriculum/core/javascript-fundamentals/#6.5_conditionals)
  - [6.6 Loops](https://developer.mozilla.org/en-US/curriculum/core/javascript-fundamentals/#6.6_loops)
  - [6.7 Functions](https://developer.mozilla.org/en-US/curriculum/core/javascript-fundamentals/#6.7_functions)
  - [6.8 JavaScript object basics](https://developer.mozilla.org/en-US/curriculum/core/javascript-fundamentals/#6.8_javascript_object_basics)
  - [6.9 DOM scripting](https://developer.mozilla.org/en-US/curriculum/core/javascript-fundamentals/#6.9_dom_scripting)
  - [6.10 Events](https://developer.mozilla.org/en-US/curriculum/core/javascript-fundamentals/#6.10_events)
  - [6.11 Async JavaScript basics](https://developer.mozilla.org/en-US/curriculum/core/javascript-fundamentals/#6.11_async_javascript_basics)
  - [6.12 Network requests with fetch()](https://developer.mozilla.org/en-US/curriculum/core/javascript-fundamentals/#6.12_network_requests_with_fetch)
  - [6.13 Working with JSON](https://developer.mozilla.org/en-US/curriculum/core/javascript-fundamentals/#6.13_working_with_json)
  - [6.14 Libraries and frameworks](https://developer.mozilla.org/en-US/curriculum/core/javascript-fundamentals/#6.14_libraries_and_frameworks)
  - [6.15 Debugging JavaScript](https://developer.mozilla.org/en-US/curriculum/core/javascript-fundamentals/#6.15_debugging_javascript)


1. Course Intro
   - [**000**](./000/ReadMe.md)
   - External Resources
     - :100: [JavaScript Full Course](https://youtu.be/lfmg-EJ8gm4?si=5kahh_2OkG4DZKiT) (for free) - a 12 hour video that covers the full extent of JavaScript for beginners. Well paced and appropriate level of detail. Includes sample projects (e.g.: Digital Clock, Stopwatch, Calculator, Rock-Paper-Scissors Game, Image Slider, Weather App using live APIs).
     - :100: [JavaScript Tutorial Full Course - Beginner to Pro (2024)](https://youtu.be/EerdGm-ehJQ?si=aCTAym11xZ_x1bSP) - a 22 hour video that covers the full extent of JavaScript for beginners, with over 250 exercises. Includes an overall sample project of building an Amazon-like website.
     - [JavaScript Full Course For Beginners With JavaScript Projects Tutorial And Notes 2024](https://youtu.be/Pyv0tMm5i_w?si=EMv8l_Q_wsTbmACE) - almost 8 hour video covering all the basics of JavaScript. Speaker has an East Indian accent, but their English is quite understandable. Projects in the video include an Online Notes App, Quiz App, Form Validation, Image Slide, Digital Clock, and Ecommerce Product Page
     - :100: [HTML]() from the bro's
     - :100: [HTML & CSS Full Course - Beginner to Pro](https://youtu.be/G3e-cpL7ofc?si=uZTd9lS64Ao3eaij) - a 6.5 hour video on HTML/CSS
1. CLIs, Version Control and Markdown (*Week 0*)
   - [**001 - Start Here**](./001-StartHere/ReadMe.md) - Markdown & git
   - [**002**](./002/ReadMe.md) - More Markdown
1. *Content, Content, Content!*
   - **Exercise:** Gather/Create as much [content](https://github.com/Programming-0101/Content-Is-King) as you can. Place it as *Markdown* documents and locally-saved images inside this folder.
     - [ ] 2 Articles
     - [ ] 3 Blog Posts
     - [ ] 12 Images ([Unsplash](https://unsplash.com/) | [icons8](https://icons8.com/) | [Freepik](https://www.freepik.com/)) - **Include Credits!**
     - [ ] 10 [Line-Awesome icons](https://icons8.com/line-awesome) (embed in a Markdown table as `<i class="fas fas-example"></i>` with a link to the CDN:
       - `<link rel= "stylesheet" href= "https://maxst.icons8.com/vue-static/landings/line-awesome/line-awesome/1.3.0/css/line-awesome.min.css" >`      
     - [ ] 5 Inspirational Quotes
     - [ ] 1 User Profile (based on ***you***)
   - **Side Project Ideas:** Coming up with side-project ideas that you can pursue on your own is an excellent way to deepen your skills. Here's some places to look to generate your ideas.
     - [ ] [**Gizmos**](https://gizmos.explorelearning.com/find-gizmos/free-gizmos) - Emulate the ideas yourself or just use the info inside for any math/science stuff you want to use. For example, you can use the [Trebuchet](https://gizmos.explorelearning.com/find-gizmos/launch-gizmo?resourceId=1054) example and read the [PDF](https://el-gizmos.s3.amazonaws.com/grizzly/materials/TrebuchetSE.pdf) to get formulas, etc.
1. Brief Intro to Developer Tools - A Short Tour *(15-20 min)*
   - Your Browser's **Developer Tools** (F12)
   - Inspecting HTML
   - Source Files
1. JavaScript Environments - *In each environment, declare variables and assign values.*
   - What is a REPL? *Read-Eval-Print Loop*
   - The browser Developer Tools' *Console* tab as a REPL

      ```js
      let answer = 42 // undefined
      answer // 42
      let message = "Hello World!" // undefined
      message // "Hello World!"
      message = answer // 42
      message // 42
      ```

   - Node REPL
     - `.help`
   - JavaScript as a Language: case-sensitive, loosly typed, "interpreted" vs. "compiled" (interpreted languages need an "environment" in which to run while compiled languages have their source code "compiled" into stand-alone executables or libraries)
1. HTML Review and Web Servers
   - Viewing HTML Files in the Browser
   - Why Web Servers?
   - Simple Node Projects
     - Bare-bones project with [Vite]() as a local server
     - Multi-page demo (for paths and the "web root")
   - An aside on file structure
   - An aside on Classless CSS (e.g.: picocss)
   - A note on Standards
     - File Organization
       - 📂 css
       - 📂 img
       - 📂 js
       - index.html
     - Code Style Guide - *You should take note of your instructor's patterns in writing their JavaScript/CSS/HTML code and follow that. It's typically easier to pick up the standards by reviewing your instructor's code as opposed to simply reading a standards document.*
       - For JavaScript, the preferred code style guide to use can be found [here](https://github.com/style-guides/JavaScript?tab=readme-ov-file#guide). Also consider the guidelines used by [MDN for their code samples](https://developer.mozilla.org/en-US/docs/MDN/Writing_guidelines/Writing_style_guide/Code_style_guide/JavaScript)
1. Variables, Values and Data Types
   - List & describe JavaScripts built-in data types
   - Explore `var`, `let` and `const`
   - `typeof` for primitive types
   - Literal values
   - Stranger Things *(a sneak peek)*:
     - What are Objects?
     - What are Arrays?
     - Functions as Objects
1. 🐞 Short Intro to Debugging
   - Low Fidelity Debugging
     - `conole.log` as "breadcrumbs"
   - High Fidelity Debugging
     - pausing execution with breakpoints + `debugger;` statement
     - Variables & Values
     - stepping through code
1. A Primer on Functions
   - What is a function?
     - *A set of instructions for manipulating information*
     - We *call* functions to "invoke" certain behaviours/actions/calculations
     - We can *declare* our own functions
   - Global functions (browser only): `alert()`, `prompt()`, `confirm()`
   - Method vs. Function
     - Global `console` object and `.log()`, `.error()`, `.info()` (browser and node)
     - **Dot notation**: The ever-humble, often-present **Property Accessor** - `.`
     - Members of `console`: in the node REPL, type `console.` and then hit <kbd>tab</kbd> twice.
1. 🐞 Revisit Debugging
   - Call stack
   - "scope" concepts
1. A Gentle Introduction to Math and Operators
   - Numbers and arithmetic operators
   - Global `Math` object and utility functions/properties
     - In the node REPL, type `Math.` and hit <kbd>tab</kbd> twice
   - String concatenation with `+` operator
   - Template strings and `${placeholders}`
1. Object fundamentals
   - Object Literal Syntax
   - Members: Properties and Functions
     - **Dot notation**: The ever-humble, often-present **Property Accessor** - `.`
   - Objects are so much more... *(foreshadow Classes)*
   - 🐞 Observe in the debugger
1. DOM Elements as JavaScript Objects
   - Inspecting Elements in the Developer Tools (`$0`)
   - The Complexity of DOM objects
     - *Explore the properties of simple `<h1>`, `<p>`, and `<img>` elements*
   - Searching the `document` for elements
     - `.querySelector()`
     - `.querySelectorAll()`
     - `.getElementById()`
   - Text inside Elements
     - simple DOM elements, then complex DOM elements
     - Properties: get and set the value
       - `.innerText`
       - `.innerHTML`
       - `.textContent`
1. The Complexity Behind Primitives
   - Numbers: `.toString()`, `.toFixed()`
   - String methods:
     - `.toUpperCase()`
     - `.toLowerCase()`
     - `.startsWith()`
     - `.endsWith()`
     - `.includes()`
     - `.padEnd()`
     - `.padStart()`
     - `.repeat()`
     - `.replace()`
     - `.trim()`
     - `.trimLeft()` and `.trimStart()`
     - `.trimRight()` and `.trimEnd()`
     - `.substr()` and `.substring()`
     - `.search()`
     - `.repeat()`
     - `.split()`
1. DOM Styling in JavaScript
   - The `.classList` attribute
     - Add/Remove/Toggle
   - The `.style` attribute
     - Specific classnames
   - Exploring via the Browser's Console (Dev Tools)
   - Intellisense in VS Code by using `.` after query-selecting DOM
1. DOM Events and Listeners
   - Different kinds of events:
     - User-initiated events: mouse, keyboard
     - DOM-initiated events: page is loaded, page is navigating away, browser is losing focus or gaining focus (*yes, those annoying ads when you leave/re-enter a page*)
   - Adding Event Listeners
     - You can have multiple listeners for a single event
   - Event bubbling
   - Cancelling default behaviour
     - Stopping navigation of an `<a href>`
   - Functions as variables and "callbacks"
1. Function Callbacks
   - Expecting a function as a parameter
   - Passing a function as an argument
   - Recursion
1. 🐞 More Debugging
   - Breaking in VS Code vs. Browser Dev Tools
   - Breakpoints
     - Source Code
     - On Events
1. HTML Forms and JavaScript
   - Client-Side Processing and `.preventDefault()`
   - Forms and Dialogs
   - :pushpin: *Side Quest* - [How to Create Float Input Label using HTML and CSS](https://youtu.be/QCg7-pVbid8?si=Tq-WmJvC5IZxPLcw) - Excellent for a nice visualization of an input, but also helpful later on for creating a *component* or *module* with those stylistic features.
1. Decisions: Alternate Paths of Logic
   - `if`/`else` statements as "flow-control"
     - "Truthy" and "Falsy" values
     - Simple conditional expressions
     - `&&`, `||` and `!`
   - `if` statements as "validation" (e.g.: *guard clauses* in functions)
     - `typeof` and `instanceof`
     - Other types of validations (in-range)
1. Loops: Repetition
   - Grammar of
     - `while() {}`
     - `do{}while()`
     - `for(init;compare;inc){}`
   - Algorithms:
     - Fibonacci
       - Display the sequence
       - Get a single value
     - Factorial
       - Get the value
     - IsPrime
       - internally it will loop with a counter
         - What's the most efficient way? (`Math.sqrt()` as the stopping point)
       - We can call IsPrime inside a loop to find all the prime numbers up to 500
     - Loop through numbers to find all the "perfect squares" (square root is a whole number) up to 1000
     - Find all the factors of a number
       - Accept a call-back function
         - Display to the console
         - Append to a DOM element's `.innerHTML`
     - IsPerfect - the number is the product and sum of all its factors
       - Do this **without** an array by having two callbacks to the `findFactors()` example above
     -Random Statistics
       - Loop for 100,000 times and a) guess a coin flip then b) flip a coin. Gather the highest stretch of correct guesses
     - **Loop within a loop**
       - Multiplication table as an HTML Table
       - *Prep for **In-Class-5***
1. JavaScript Arrays
   - Declare empty array - `[]` - and initialize array with values
   - `.length` and `.push()` and `.pop()`
   - Arrays of
     - strings
     - numbers
     - "mixed" types
   - `.join()`
   - Manually looping through the array
     - to aggregate (equivalent of `.reduce()`)
     - to search (equivalent of `.find()`)
     -Random Statistics
       - Loop for 100,000 times and a) guess a coin flip then b) flip a coin. Gather an array of the number of correct guesses in a row and the number of incorrect guesses in a row. e.g.: `correct = [832, 75, 16, 18, ...]` where the first index `0` is for `1` correct guess followed by an incorrect guess and index `1` is for `2` correct guesses followed by an incorrect guess, etc.
   - Arrays and indexes; e.g.:
     - direct access
     - use in a traditional `for` loop
     - *for-in* vs. *for-of*
   - Arrays as arguments/parameters to functions
   - Returning Arrays from functions
1. 🐞 Upskill Your Debugging
   - **Keep Your Code Clean** - *If you use `console.log()`, **remove them** when done!*
   - [How to Debug Code Like a Pro](https://youtu.be/uUDRh7D5Z0c?si=g6FP0yv8SGnHImJs)
   - [Chrome Debugger is BETTER than you might think](https://youtu.be/t1aEXEvYzvM?si=oMkxKOpDCcLpIgaW)
1. Node Collections vs. Arrays
   - Similarities
     - Array Indexers
   - Differences
     - Lacks the *`Array`* methods
     - `.size` vs. `.length`
1. JSON
   - JSON as Data
   - Objects to JSON
   - `JSON.stringify()` and `JSON.parse()`
   - Sample Data: [Viewport Sizes](https://slash5.viewportsizer.com/wp-content/uploads/viewportsizer-json.zip) (from [ViewPortSizer.com](https://viewportsizer.com/devices/))
     - *Side Note:* This is a nice article on [Common Screen Sizes for Responsive Design](https://www.altamira.ai/blog/common-screen-sizes-for-responsive-web-design/)
1. Fetch API
   - Promises and async/await
   - Fetch in your "domain"
   - Fetch outside your "domain"
     - Option Headers
1. DOM API
   - Creating Elements & Nodes
     - `document.createElement()`
     - `document.createTextNode()`
   - Shadow DOM vs. DOM Fragments vs. DOM
   - Moving Elements in the DOM
     - Drag'n'Drop
1. Timers
   - `setTimeout()` and `clearTimeout()`
   - `setInterval()` and `clearInterval()`
   - `setImmediate()` and `clearImmediate()`
1. Array API
   - Array functions:
   - `Array.from()`
1. --- others ---
1. Advanced Objects
   - Constructor function and `new`
   - Classes
   - Prototypes
   - Prototypical Inheritance
1. Advanced Functions
   - Returning functions from functions
   - Promises and Async functions
1. Destructuring Assignments
   - Destructuring Arrays

      ```js
      let name = "Stewart Andrew Dent"
      // When destructuring arrays, you can make your own
      // variable names for the resulting values.
      let [first, middle, last] = name.split(" ")
      // You can use the spread operator to grab a "chunk"
      // of values into their own array.
      let [...givenNames, surname] = name.split(" ")
      ```

   - Destructuring Object

      ```js
      let person = {
         fullName: "Stewart Archie Dent",
         suffix: "Jr."
         born: new Date("Feb 29, 2000")
      }
      // When destructuring objects, your variables names
      // must match the property names. If you use a name
      // that doesn't exit on the object, then you get an
      // undefined value.
      let { fullName, suffix, born, age } = person
      ```
1. Vanilla JavaScript Components
   - Have students read/implement/adapt the samples from the article ["The Vanilla JavaScript Component Pattern"](https://dev.to/megazear7/the-vanilla-javascript-component-pattern-37la)
   - 
1. Other Node Project Types
   - JavaScript Console Applications
   - Web Applications on Frameworks
1. TBD

----

1. Introduction to JavaScript (*Week 1*)
   - [**003**](./003/ReadMe.md) - JavaScript in the Browser
   - [**004**](./004/ReadMe.md) - JavaScript in your Web Page
   - [**005**](./005/ReadMe.md) - JavaScript Variables
1. Functions and Events (*Weeks 2 & 3*)
   - [**006**](./006/ReadMe.md) - Intro to Functions in JavaScript
   - [**007**](./007/ReadMe.md) - Creating JavaScript Functions
   - [**008**](./008/ReadMe.md) - Form Input and Handling Events
   - [**009**](./009/ReadMe.md) - Waiting for the DOM
   - [**010**](./010/ReadMe.md) - Debugging JavaScript
   - [**011**](./011/ReadMe.md) - Organizing Functions in JavaScript
1. Making Decisions (*Week 4*)
   - [**012**](./012/ReadMe.md)
   - [**01**](./01/ReadMe.md)
1. Loops and Arrays (*Weeks 5 & 6*)
   - [**01**](./01/ReadMe.md)
   - [**01**](./01/ReadMe.md)
1. JS Objects (*Weeks 7 & 8*)
   - [**01**](./01/ReadMe.md)
   - [**01**](./01/ReadMe.md)
1. Fetch Fundamentals (*Week 9*)
   - [**01**](./01/ReadMe.md)
   - [**01**](./01/ReadMe.md)
1. DOM API & Timers (*Week 10*)
   - [**01**](./01/ReadMe.md)
   - [**01**](./01/ReadMe.md)
1. NPM, Tools, ES Modules (*Weeks 11 & 12*)
   - [**01**](./01/ReadMe.md)
   - [**01**](./01/ReadMe.md)
1. Class, Object, Prototypes (*Weeks 13 & 14*)
   - [**01**](./01/ReadMe.md)
   - [**01**](./01/ReadMe.md)
1. Extra Topics (*Week 15*)
   - [**01**](./01/ReadMe.md)
   - [**01**](./01/ReadMe.md)
