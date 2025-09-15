# A Soft Intro to Event Handling

- [ ] Listening for 'click' and 'dblclick' events
- [ ] Event handler - function name vs. anonymous inline function
- [ ] Event bubbling and `.stopPropagation()`

    ```js
    document.body.addEventListener('click', function() {
        let output = document.querySelector('#feedback');
        output.innerHTML += '<br />I heard that!';
    });
    ```

- [ ] `.preventDefault()` vs. `.stopPropagation`
