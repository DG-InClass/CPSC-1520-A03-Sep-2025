/*

	Create variables to hold the receiving party's name, disclosing party's name, and the date

	Prompt the user for the values to be used for these variables (i.e. prompt for disclosing party's name, date, etc.)

	Update the document with the entered values in the places indicated by brackets (i.e. [the Disclosing Party] should be replaced by the disclosing party's name)

	Use the skills you have learned up to this point.
*/
let contractDate = document.querySelector('.date');
contractDate.innerText = 'Sep 15, 2025';

// I'll capture the names of the two parties of the contract
// by using the prompt() function.
let disclosingParty = prompt('Enter the name of the disclosing party:');
let receivingParty = prompt('Enter the name of the receiving party:');


// I'll use a general variable for the element I'm looking for
let element;
element = document.querySelector('.disclosing-party');
//                                \ CSS Class Name /
element.innerText = disclosingParty;

// Take a few minutes to locate and set the value for the receiving party's name.
element = document.querySelector('.receiving-party');
element.innerText = receivingParty;

element = document.querySelector('.signature .disclosing-party');
element.innerText = disclosingParty;

element = document.querySelector('.signature .receiving-party');
element.innerText = receivingParty;

