# A Soft Intro to Event Handling

> See the [`main.js`](./js/main.js) for some existing code along with some instructions for adding some more event listeners.
>
> Additional tips/concepts/experiments are outined below.

- [ ] Event handler - function name vs. anonymous inline function
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