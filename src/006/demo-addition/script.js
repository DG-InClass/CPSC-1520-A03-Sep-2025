// Add in the code from the walk-through and observe the page behaviour.
let firstInput = prompt('Enter a number');
let secondInput = prompt('Enter another number');

let firstValue = parseFloat(firstInput);
//                          \ string /
//               \   number         /
let secondValue = parseFloat(secondInput);

let answer = firstValue + secondValue;

let answerOutput = document.querySelector('#answer');
answerOutput.innerText = answer;
