// This demonstrates using a parameter
// e.g. greetUser('Jane Doe');
// e.g. greetUser(prompt('Name:'));
let originalTitle = document.querySelector('h1.intro').innerText;

// This is an example of Function Declaration
function greetUser(username) {
    // select the h1
    var mainTitle = document.querySelector('h1.intro');
    // update the h1 inner HTML
    mainTitle.innerHTML = 'Welcome ' + username + ' to ' + originalTitle;
};

// An example of calling the function
greetUser('Stewart Dent');

// We can also create our functions using Function Expressions
// I prefer this approach when used along with the const keyword
const describeImage = function(description) {
    let imgElement = document.querySelector('img');
    imgElement.alt = description;
    imgElement.title = description;
}
