// Listen for and process form submissions

/**
 * 
 * @param {{ form: HTMLFormElement, outputContainer: HTMLElement }} param0 
 */
export function setupFormProcessing({form, outputContainer}) {
    form.addEventListener('submit', function(evt) {
        evt.preventDefault();
        const theForm = evt.target;
        // TODO: more to come....
    });
}