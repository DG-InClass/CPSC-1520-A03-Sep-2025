// It's common practice to import any 3rd-party libraries
// at the top of your script file.
import markdownit from 'markdown-it';
import '@picocss/pico/css/pico.css';

console.log('Loaded main.js');

// <section id="content"></section>

const handleReponse = function(resp) {
    console.log(resp);
    return resp.text(); // instead of .json(), because we loaded a Markdown file
}

const handleContent = function(markdown) {
    console.log(markdown);

    // Convert Markdown to HTML
    const md = markdownit()
    const result = md.render(markdown);
    console.log(result);

    // Add to the page
    let section = document.getElementById('content');
    section.innerHTML = result;
}

fetch('./content/ReadMe.md')    // fetch() returns a Promise<Response>
    .then(handleReponse)        // We need to handle the response from the web server
    .then(handleContent);       // Next, we process the content of the response


// Browsers supply a DOM API that allows for a more fine-grained control when manipulating
// HTML. With it, you can create HTML Elements, move elements around, or just about anything
// you want to do to the web page.

// Create a <footer><div>&copy; 2025 - Dan Gilleland</div></footer>
let foot = document.createElement('footer');
let div = document.createElement('div');
let text = document.createTextNode(' 2025 - Dan Gilleland');

div.innerHTML = '&copy; ';
div.appendChild(text);
foot.appendChild(div);

document.body.appendChild(foot);
