# Fetching JSON Data

In this demo, we will be using the browser's [`fetch()`](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch) method to get JSON data to support our Address Input form.

## Cascading Inputs/Dropdowns

> Country/State/City Selections

In this example, we will support cascading user inputs for where they live. We will also process the form data and learn about hidden inputs.

1. It all begins with selecting the country. To ensure that an actual country is selected, we will simplify their input with suggested matches for their country name. Along the way, we will see [Inputs and DataLists](#inputs-and-datalists)
1. Once the country is selected, we can pre-populate the options for known cities in that country.
1. After that, we will add a drop-down with the states/provinces within that country. (We don't have known data about which state contains the user's town/city; that's just too much world information we would have to track down.)
1. Finally, we will handle the form's events and related processing.
1. As time allows, we'll also explore various styling approaches

### Starter Files

```
- cached
  - countries.json To illustrate fetching from the same domain
- css Extra demo on Tailwind Styling
  - main.css
- js
  - data Modules focused on getting data
    - fetchCountries.js
  - ui Modules focused on user interactions
    - countryInput.js
    - formProcessing.js
  - main.js Driver of the whole app
- .gitignore Use https://gitignore.io for details
- index.html
- package.json
- ReadMe.md
- vite.config.js Related to the Tailwind Styling
```

----

## Inputs and DataLists

One of the cool items about the `<input>` element is that we can pair it with a `<datalist>` tag that contains `<option>` entries as potential pre-defined input that the user can select from.

> ***TODO:** Read this post on [A Comprehensive Guide to Using the HTML `<datalist>` Element](https://juniordev4life.com/posts/comprehensive-guide-to-using-the-html-datalist-element/)

One of the downsides, however, is that if your `<option>` entries have `value` attributes, it is that *value* which is put into the `<input>` rather than the display text of the `<option>` tag.

The way to get around that involves a combination of JavaScript, events (particularly the [`'input'` event](https://developer.mozilla.org/en-US/docs/Web/API/Element/input_event)), and the use of `<input type="hidden">` elements.

## Source Data

The sources of JSON data will include

- [Cached data](./cached/ReadMe.md) within the domain of this website, as taken from [Countries API](https://www.apicountries.com/docs/api/countries)  - `https://www.apicountries.com/docs/api/countries` via a `fetch('https://www.apicountries.com/')`
- [https://countriesnow.space/](https://countriesnow.space/) - Various APIs for countries, their states and cities
