// node --watch cards.js
// Get these arrays from:
// https://dgilleland.github.io/CPSC-1520/demos/playing-cards/#possible-values
const cardSuits = [ 'Spades', 'Hearts', 'Diamonds', 'Clubs' ];
const cardValues = [ 'Ace', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'Jack', 'Queen', 'King' ];

/** @typedef {{ suit: string, value: string }} Card */
// Ad-Hoc Demo
const deck = [];
// TODO: 1) Create a deck of cards

console.log(deck);

// TODO: 2) Deal some cards...
/** @type {Card[]} */
const hand = []; // A hand of cards

// PLAY: 3) Search a deck of cards...
/**
 * Search the hand for a
 * @param {string} card 
 */
function searchByValue(value) {
    let found = null;
    for(let index = 0; index < hand.length; index++) {
        let card = hand[index];
        if(card.value === value) {
            found = card;
        }
    }
    return found;
}