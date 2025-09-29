// js/eventListeners.js
/* All HTML Elements have certain properties/functions
    .addEventListener
    .tagName
    .classList
        .add()
        .remove()
        .toggle()
*/
const showElementOnClick = function(clickElement, revealElement) {
    clickElement.addEventListener('click', function() {
        console.log(`${clickElement.tagName} was clicked...`);
        // The next line will remove the CSS class 'hidden' from the element
        revealElement.classList.remove('hidden');
    });
}

const hideElementOnDoubleClick = function(clickElement, hideElement) {
    clickElement.addEventListener('dblclick', function() {
        hideElement.classList.add("hidden");
    });
}

export { showElementOnClick, hideElementOnDoubleClick }
