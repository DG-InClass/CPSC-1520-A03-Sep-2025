# Tutorial

## Overview

- [x] Node-based project (with `package.json`)
- [ ] Third-Party Libraries
  - [x] Vite
  - [x] Vitest
  - [x] @picocss/pico
  - [x] markdown-it
  - [ ] json-server *(TBD)*
- [x] HTML [`<template>` elements](https://developer.mozilla.org/en-US/docs/Web/API/Web_components/Using_templates_and_slots#a_more_involved_example)
- [x] DOM API (e.g.: `document.createElement()`)
- [x] Fetch API + JSON
- [x] Constructor Functions
- [ ] Classes *(TBD)*
- [x] JavaScript Modules

## Setup

Download/setup the following files

- `index.html`
- `favicon.webp`
- `css/styles.css`
- `data/courses.json` (or provide your own)
- `img/android-chrome-192x192.png`

### Understanding the Page Design

```html title="index.html" {20, 26, 27-37, 38-40}
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Student Marks</title>
    <link rel="icon" type="image/png" href="./favicon.webp" />
    <link rel="stylesheet" href="./css/styles.css" />
  </head>
  <body class="container">
    <header>
      <nav>
        <ul>
          <li>
            <img src="./img/android-chrome-192x192.png" alt="Logo" width="32" />
            <strong>Mark Manager</strong>
          </li>
        </ul>
        <ul>
          <li><button type="button" class="secondary" id="about">About</button></li>
        </ul>
      </nav>
    </header>
    <main>
      <h1>My Courses</h1>
      <section id="courses"></section>
      <template id="course-shell">
        <details>
          <summary>
            <span class="course-code"></span>
            <span class="course-name"></span> &mdash;
            <span class="summary-marks"></span>
          </summary>
          <section class="grid grid-col-4"></section>
          <hr />
        </details>
      </template>
      <dialog id="about-dialog">
        <article id="about-contents"></article>
      </dialog>
    </main>
    <footer></footer>
  </body>
</html>
```

### Application Mockups

- Accordion Listing
- Evaluation Details
- Editing/Saving Marks

## Configuring Node Project

- `pnpm init`
    - Generates a `package.json` configuration file
        - Edit the name, version, and description

            ```json
              "name": "student-marks",
              "version": "0.1.0",
              "description": "An application to store/retrieve/edit student marks in JSON format.",
            ```
        
        - Remove the ???? : "main.js"
- `pnpm add -D vite`
    - Add Script: `"dev": "vite"`
- `pnpm add -D vitest`
    - Add Script: `"test": "vitest"`
- `pnpm add markdown-it`
- `pnpm add json-server`

## JavaScript Modules

- Create a JavaScript file `js/main.js`
- Add in the script tag
    `<script type="module" src="./js/main.js"></script>`

```js title="main.js
console.log('Loaded main.js');
```

### Fetching Markdown



```js title="main.js
console.log('Loaded main.js');

fetch("./ReadMe.md")
    .then(response => response.text())
    .then(text => {
        console.log(text)};
    );
```

> As an aside, it can be helpful to understand the Response object that comes back from the `fetch()` function.
> 
> ```js
> /**
>  * 
>  * @param {Response} response 
>  */
> const handleResponse = function(response) {
>     console.log(response.status, response.statusText);
>     return response.text();
> }
> 
> fetch("./ReadMe.md")
>     .then(handleResponse)
>     .then(text => {
>         console.log(text)};
>     );
> ```


### Setting Up the Dialog

- Create `js/about-ui.js`

```js title="about-ui.js"
/* UI Notes:
    - Making some presumptions about styling being based on PicoCSS
    - Expecting a ReadMe.md on the root of the project
        - Note: When using `vite build`, extra configuration is required to include the ReadMe.md as a static resource
    - Expecting a button and a dialog
      <button type="button" class="secondary" id="about">About</button>

      <dialog id="about-dialog">
        <article id="about-contents">
        </article>
      </dialog>        
*/
import markdownit from 'markdown-it';


/**
 * Parses markdown content to display in a dialog.
 * @param {string} markdown A string containing Markdown content
 */
const populateAbout = function(markdown) {
  // Convert Markdown to HTML
  const md = markdownit();
  const result = md.render(markdown);

  document.getElementById('about-contents').innerHTML += result;
}

// Set up a handler for the button to show the dialog.
document.getElementById('about').addEventListener('click', (evt) => {
    let dialog = document.getElementById('about-dialog');
    dialog.showModal();
})

export { populateAbout }
```

### Importing the Module

Now we can import the `populateAbout()` function and use it in our `main.js` to fill the dialog's content.

```js title="main.js
import { populateAbout } from "./about-ui";

console.log('Loaded main.js');

fetch("./ReadMe.md")
    .then(response => response.text())
    .then(populateAbout);
```

### Adding Styles via JavaScript

```js title="main.js
import { populateAbout } from "./about-ui";
import import "@picocss/pico/css/pico.css";

console.log('Loaded main.js');

fetch("./ReadMe.md")
    .then(response => response.text())
    .then(populateAbout);
```

## Test-Driven Development

Test-Driven Development (TDD) focuses around creating **specifications** that describe (in code) the requirements of the parts of the application.

### Happy-Path vs. Edge Cases

When it comes to setting up the expectations

### Evaluation Item Requirements

The core functionality of the site centers around handling the details about courses and the evaluation items in those courses. Every course has a different set of evaluation items, but the key parts of each evaluation item includes the following.

- **Name** - What is the item called? (e.g.: "Lab 1")
- **Weight** - How much of the final mark is awarded for the item?
- **Possible** - The total possible points available for a given item.
- **Earned** - The number of points awarded/earned on the item once it has been marked.

```js
/*
  Happy-Path Requirements:
    preserve name
    preserve weight
    preserve earned points
    preserve total points

    calculate percent
    calculate weighted percent

  Edge-Case Requirements:
    treat undefined as null for earned points
    treat undefined as null for possible points
    reject invalid name
    reject invalid weight
    reject invalid earned points
    reject invalid total points
*/
```

> As a side-note, these two edge-cases will be important when it comes to getting consistency between Node unit tests and the Browser for the running app.
>
> - treat undefined as null for earned points
> - treat undefined as null for possible points
>
> The solution is to consolidate any non-numeric value for earned/possible as a `null`
>
> ```js
> /** @type {number | null} */
> this.earned = typeof earned === 'number' ? earned : null;
> /** @type {number | null} */
> this.possible = typeof possible === "number" ? possible : null;
> ```


### Course Requirements

A Course is identified by the course code. A course will also have a name. When creating a new course, the specific evaluation items do not need to be known; these can be individually added later. What is key, however, is that summary information can be calculated once the evaluation items have been added.

- What is the total weight of the evaluation items?
- What is the current earned mark for the course?
- How much of the course marks have yet to be recorded?

```js
/*
    preserve course code
    preserve course name

    be incomplete (no evaluations) when constructed
    add evaluation item
    calculate total course weight of evaluations
    be complete when course weight is 100%
    
    reject empty course code
    reject empty course name
    reconstruct from object
*/
```

## Populating Page Content

```js title="course-marks-ui.js"
/* UI Notes:
    - Making some presumptions about styling being based on PicoCSS
    - <section id="courses">
        - The container to be populated with information on each course
    - <template id="course-shell">
        - A template for each course. This is "bare-bones" in that it contains a <details> element with placeholders for the course name and code. Individual evaluation items would need to be dynamically appended to this HTML.
        - For information on using this, see [A more involved example](https://developer.mozilla.org/en-US/docs/Web/API/Web_components/Using_templates_and_slots#a_more_involved_example)

    Here's an advanced example of the template, but with slots.
        <template id="course-shell">
            <details>
                <summary><span class="course-code"></span> <span class="course-name"></span> &mdash; <span class="summary-marks"></span></summary>
                <section class="grid grid-col-4"></section>
                <hr />
            </details>
        </template>
*/
import { Course, EvaluationItem } from "./course-marks";

// ....

export { populateContent };
```

For the individual evaluation items that go in the `<section class="grid"></section>` (the only `<section>`), it's a matter of generating some kind of `<div>` to hold the content.

```js title="course-marks-ui.js"
// ... inside populateContent() ...
    let grid = element.querySelector(".grid");
    course.evaluations.forEach((item) => {
      grid.appendChild(createEvaluationItemElement(item));
    });
// ... remainder of populateContent()


/**
 * Builds a HTMLDivElement with information from an evaluation item.
 * @param {EvaluationItem} evalItem Some evaluation item associated with a course
 * @returns {HTMLDivElement}
 */
const createEvaluationItemElement = function (evalItem) {
  let { name, weight, earned, possible } = evalItem;
  let earnedWeight = evalItem.getWeightedPercent();

  let text = `${
    earnedWeight === null ? "TBD" : `${earnedWeight} %`
  } - ${name} (${weight} %)`;
  let div = document.createElement("div");
  let textNode = document.createTextNode(text);
  div.appendChild(textNode);

  return div;
};

```

```js title="main.js
import "@picocss/pico/css/pico.css";

import { populateContent } from "./course-marks-ui";
import { populateAbout } from "./about-ui";

// Processing begins here
fetch("./data/courses.json")
  .then((x) => x.json())
  .then(populateContent);

fetch("./ReadMe.md").then(response => response.text()).then(populateAbout);
```

## Editing Evaluation Items

### Edit Dialog

Evaluation items can be edited individually. Each evaluation item has the same structure, and we can use the same form when editing them.

### Saving Changes

The `json-server` package provides an ultra-simple way to make changes to the `courses.json` file.

## Conclusion


