// the .log method is how you write info to the browser's console
console.log('Waiting a little bit....');
/* Multi-line comment
    The Promise is an object that we can create. The await is used because all of our JavaScript code is running asynchronously by default.
    (seach of JavaScript asynchronous vs. synchronous code)
 */
await new Promise(resolve => setTimeout(resolve, 3000));
console.log('I am done waiting.');
// Pop up a dialog for the user
alert('The rest of the page should have loaded and rendered by the time this alert popped up.');
