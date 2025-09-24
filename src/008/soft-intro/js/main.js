/* Soft Intro to Events
    Consider that the HTML elements are structured/nested as follows:
    - <body>
        - <h1>
            - <button>
            - <small>
                - <a>
        - <pre>
            - <output>
*/
console.log('JavaScript file loaded!');

const handleClick = function(event) {
    // TODO: Use for exploration purposes
    const target = event.target;
    document.getElementById('feedback').innerText = `Clicked from ${target.tagName}`;
}

let heading = document.querySelector('h1');
heading.addEventListener('click', handleClick);

// TODO: Add an event listener for the button with id "register".
//       Listen for the 'dblclick' event.
//       Prompt the user for their name, then for their email,
//       then output the information to the #feedback element.

// TODO: Add another event listener for the heading, this time for
//       the 'dblclick' event.
//       Try changing the theme by assigning either 'light' or 'dark'
//       to the following element's property:
//          document.querySelector('html').dataset.theme
//       Try it out, then inspect the elements in the Dev Tools.