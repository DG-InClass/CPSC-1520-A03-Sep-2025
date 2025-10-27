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
