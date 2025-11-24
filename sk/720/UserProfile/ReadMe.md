# Creating Elements with the DOM API

- [ ] In the `main.js`, set up the editor by calling `setupEditor()` from `editor.js`.
  - Illustrates how to pass data as an object literal.
- [ ] Explore how the [user input is vulnerable to XSS](https://developer.mozilla.org/en-US/docs/Web/Security/Attacks/XSS) because we apply it via `.innerHTML`
  - In the browser, enter the following in your Bio:

    ```html
    <a
      href="https://my-bank.example.com/welcome?user=<img src=x onerror=alert('hello!')>">
      Get a free kitten!</a
    >
    ```

> Read a [Practical Guide to Securing `.innerHTML` in JavaScript Applications](https://www.penligent.ai/hackinglabs/practical-guide-to-securing-innerhtml-in-javascript-applications/).
> Although it recommends `.textContent`, it's even better to use things like **`document.createElement()`** and **`document.createTextNode()`**. ✨

----

## Serious Issues with `.innerHTML`

While the browser stops scripts from running when added to the DOM via `.innerHTML`, there are **other serious vulnerabilities and risks**:


### ✅ 1. Cross-Site Scripting (XSS)

- If you insert **untrusted user input** into `.innerHTML`, attackers can inject malicious HTML (e.g., `<img src=x onerror=alert(1)>`).
- Even without `<script>`, event handlers (`onerror`, `onclick`) and `javascript:` URLs can execute code.



### ✅ 2. DOM Clobbering

- Attackers can inject elements with `id` or `name` attributes that overwrite global variables or form references.
- Example: `<input name="location" value="evil">` could override `window.location` in some contexts.



### ✅ 3. CSS Injection

- Malicious styles can alter UI, hide security warnings, or trick users into unsafe actions.



### ✅ 4. Attribute-Based Attacks

- Inline attributes like `onmouseover`, `onfocus` can execute JavaScript without `<script>` tags.



### ✅ 5. HTML Entity & Encoding Tricks

- Attackers can bypass naive sanitization using encoded characters (`&#x3C;script&#x3E;`).



### ✅ 6. Layout & Clickjacking

- Injected HTML can create overlays or invisible elements to capture clicks or keystrokes.



### Best Practices

- **Never trust raw input**: sanitize or escape before inserting.
- Use `textContent` or `innerText` for plain text.
- For rich content, use a **trusted templating engine** or libraries like DOMPurify.
- Avoid `eval` and dynamic script execution unless absolutely necessary.

Great question! There **is some confusion online** about `.innerHTML` and XSS, and you’re right—many examples floating around don’t work as advertised because they rely on `<script>` tags, which browsers ignore when inserted via `.innerHTML`. Here’s what’s really going on:



### ✅ **What MDN Says**

MDN is very clear and accurate on this topic:

- `.innerHTML` **parses its input as HTML** and inserts it into the DOM.
- It is considered an **"injection sink"**, meaning if the input comes from an attacker, it can lead to XSS.
- The risk is **not about `<script>` tags** (those won’t execute), but about:
    - Event handler attributes (`onerror`, `onclick`)
    - `javascript:` URLs
    - SVG or other elements that can execute code
- MDN recommends:
    - Use **TrustedHTML** or enforce **Trusted Types** via CSP.
    - Or sanitize with libraries like **DOMPurify** before using `.innerHTML`. [\[developer....ozilla.org\]](https://developer.mozilla.org/en-US/docs/Web/API/Element/innerHTML)

MDN also has a dedicated [XSS article](https://developer.mozilla.org/en-US/docs/Web/Security/Attacks/XSS) showing a real-world example where `.innerHTML` is exploited using an `<img onerror>` payload, not `<script>`. [\[developer....ozilla.org\]](https://developer.mozilla.org/en-US/docs/Web/Security/Attacks/XSS)

See also:

- [Element.innerHTML](https://developer.mozilla.org/en-US/docs/Web/API/Element/innerHTML) warns about XSS and suggests Trusted Types.
- [Cross-site scripting (XSS)](https://developer.mozilla.org/en-US/docs/Web/Security/Attacks/XSS) explains DOM-based XSS and shows `.innerHTML` examples.
- [HTML Sanitizer API](https://developer.mozilla.org/en-US/docs/Web/API/HTML_Sanitizer_API) provides safe alternatives.



### ✅ **Common Misconceptions**

- **Myth:** "`.innerHTML` is safe because `<script>` doesn’t run."\
    **Reality:** XSS doesn’t need `<script>`—it can use attributes, SVG, CSS, etc.
- **Myth:** "If I escape `<` and `>` I’m safe."\
    **Reality:** Attackers can use encoded entities or other vectors.

----

## Global Name Property

There is a potential vulnerability related to the **global `name` property** in browsers and how it interacts with the DOM and query strings.


### ✅ **What’s going on with `name`?**

- In older browsers (and still partially in modern ones for backward compatibility), if you have an element with `name="something"`, that name can **create a global variable** on `window`.
- Similarly, if your page URL has a query string like `?name=foo`, some environments historically exposed that as `window.name` or even clobbered the global `name` variable.
- This behavior is tied to the **`window.name` property**, which is a special property used for persisting data across page loads (it survives navigation within the same tab).




### ✅ **Why does VS Code strike through `name`?**

- In JavaScript, `name` is a property of `Function` and `window` objects.
- When you declare `var name = ...` or use `name` as an identifier, VS Code shows a strike-through because it’s considered **deprecated or discouraged**—it shadows a built-in property.
- ESLint and TypeScript also warn about this because it can lead to confusing bugs.




### ✅ **Security Implications**

- Historically, attackers could exploit `window.name` for **data leakage** or **DOM clobbering**.
- Example: If you rely on `window.name` for logic and an attacker sets it via a crafted link (`?name=<script>`), you could accidentally use unsafe data.
- Modern best practice: **Avoid using `name` as a variable or relying on `window.name` for application state**.




### ✅ **Teaching Demo Idea**

You can show:

```html
<script>
console.log("window.name before:", window.name);
window.name = "Hello from window.name!";
console.log("window.name after:", window.name);
</script>
```

Then explain:

- It persists across navigation.
- Why it’s risky if used for sensitive data.
- Why frameworks avoid it now.

