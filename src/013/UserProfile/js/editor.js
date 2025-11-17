/**
 * Set up an editor for the User Profile.
 * 
 * The HTML form is expected to have two inputs: `displayName` and `bio`.
 * 
 * @param {Object} context - Context for the editor form
 * @param {HTMLFormElement} context.editorForm - The form for editing the user profile
 * @param {HTMLElement} context.editorContainer - The element containing the HTML form
 * @param {HTMLElement} context.profileContainer - The location to display the user profile
 */
export function setupEditor({editorForm, editorContainer, profileContainer}) {
    editorForm.addEventListener('submit', function(ev) {
        ev.preventDefault();
        const elements = ev.target.elements;
        const inputDisplayName = elements.displayName;
        const inputBio = elements.bio;
        // TODO: You can supply validation later....
        displayProfile({
            bio: inputBio.value,
            container: profileContainer,
            displayName: inputDisplayName.value
        });
    })
}

/**
 * Render the user profile in the supplied container.
 * 
 * @param {Object} options - Options for displaying the user profile
 * @param {HTMLElement} options.container - The container in which to display the user profile
 * @param {string} options.displayName - The user's display name
 * @param {string} options.bio - The user's biographical details
 */
const displayProfile = function({container, displayName, bio}) {
    const paragraphs = bio.split('\n');

    // Here's how we build HTML elements programmatically with the DOM API
    // These next 3 lines are creating "detached" elements - elements that
    // are not part of the active document object (yet).
    const h2Element = document.createElement('h2');
    const textNode = document.createTextNode(displayName);
    h2Element.appendChild(textNode); // puts the textNode inside of h2Element

    // Let's build each paragraph and append them to the blockquote
    const blockquote = document.createElement('blockquote');
    paragraphs.forEach(line => {
        const paraElement = document.createElement('p');
        const text = document.createTextNode(line);
        paraElement.appendChild(text);
        blockquote.appendChild(paraElement);
    });

    // The h2element only becomes part of the document tree when I add it
    // to an already existing part of my document.
    container.appendChild(h2Element);
    container.appendChild(blockquote);

    // // An overly-trusting way to display the content...
    // let html = `<h2>${displayName}</h2>`;
    // html += '<blockquote>';
    // paragraphs.forEach(para => {
    //     html += `<p>${para}</p>`;
    // })
    // html += '</blockquote>';
    
    // container.innerHTML = html;
}