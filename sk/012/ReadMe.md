# JSON and Fetch

## JS-Quickstart

- [`about-fetch-api.js`](./JS-Quickstart/about-fetch-api.js)
- [`about-fetch-then-map.js`](./JS-Quickstart/about-fetch-then-map.js)
- [`about-objects.js`](./JS-Quickstart/about-objects.js)
- [`arrays-and-arrows.js`](./JS-Quickstart/arrays-and-arrows.js)

## JavaScript Objects

We can create JavaScript objects in a few ways:

- [x] Object Literal syntax
- [x] Constructor Functions
- [ ] Classes

## JSON - JavaScript Object Notation

Two functions on the global `JSON` object:

- `JSON.stringify()` - Converts an object into a JSON string
- `JSON.parse()` - Convert a JSON string into a JavaScript object

JSON files have the following characteristics:

- use the file extension `.json`
- has either a **single** object or a **single** array as the "root" item
- data-only (no functions)
- all the property names are in double-quotes
- all the property values are either
  - strings (in double-quotes)
  - numbers
  - boolean (`true` or `false`)
  - arrays (`[]`)

### Task

- Create a new file in your workbook: `~/src/012/data/my-courses.json` to hold all the evaluation details for all *your* current courses.
  - Use the same format as in the sample [`data/web-courses.json`](./data/web-courses.json)