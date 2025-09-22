# A Soft Intro to Event Handling

- [ ] Listening for 'click' and 'dblclick' events
  - Set the value of a counter to 1.
  - Add an event listener to the `<button>` element so that we can respond to `'click'` events. When the user clicks, we will increment the counter and display the information. We'll use a **function name** when adding the listener.
- [ ] Event handler - function name vs. anonymous inline function
  - Add another event listener on the button for `'dblclick'` events. We'll use an **anonymous inline function**, and we'll re-set the counter to zero.
- [ ] Event bubbling and `.stopPropagation()`

    ```js
    document.body.addEventListener('click', function() {
        let output = document.querySelector('#feedback');
        output.innerHTML += '<br />I heard that!';
    });
    ```

- [ ] `.preventDefault()` vs. `.stopPropagation()`
    - Add some HTML to the page via JavaScript. We'll add the following to the end of the body.

        ```html
        <a href="https://dgilleland.github.io/CPSC-1520/tutorials/0070/" target="_blank">Event Listeners</a>
        ```

    - What happens if you add a `'click'` event handler to the link and do a call to `.stopPropagation()`?