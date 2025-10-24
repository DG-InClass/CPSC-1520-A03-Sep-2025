// node --watch cards.js
// Get these arrays from:
// https://dgilleland.github.io/CPSC-1520/demos/playing-cards/#possible-values
const cardSuits = [ 'Spades', 'Hearts', 'Diamonds', 'Clubs' ];
const cardValues = [ 'Ace', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'Jack', 'Queen', 'King' ];

/** @typedef {{ suit: string, value: string }} Card */
// Ad-Hoc Demo
/** @type {Card[]} */
const deck = [];
// TODO: 1) Create a deck of cards
for (let suitIndex = 0; suitIndex < cardSuits.length; suitIndex++) {
    let suit = cardSuits[suitIndex];
    for (let valueIndex = 0; valueIndex < cardValues.length; valueIndex++) {
        let value = cardValues[valueIndex];
        // Create a card
        let card = { suit, value };
        deck.push(card);
    }
}

/**
 * Returns the short 2-character code for a
 * playing card.
 * @param {Card} card A playing card
 * @returns {string} A short code
 */
const toShortCode = function(card) {
    let code = card.value[0];
    if(card.value === '10') code = '0';
    code += card.suit[0];

    return code;
}

console.log(deck.map(toShortCode));

// Let's shuffle the deck!
// (using the Fisher-Yates Shuffle Algorithm)
/**
 * Shuffle cards by producing a new array of cards
 * with the cards in different positions.
 * 
 * This is NON-MUTATING. Uses the Fisher-Yates Shuffle
 * Algorithm.
 * @param {Cards[]} cards An array of cards
 * @returns {Cards[]} The shuffled array of cards
 */
const shuffleCards = function(cards) {
    // Making a copy of the cards
    let copy = cards.slice();
    for (let index = copy.length - 1; index > 0; index--) {
        // Generate a random index
        const rand = Math.floor(Math.random() * (index + 1));
        // Swap the current card with the randomly chosen card
        let temp = copy[rand];
        copy[rand] = copy[index];
        copy[index] = temp;
    }
    return copy;
}

let shuffled = shuffleCards(deck);
console.log('Shuffled:', shuffled.map(toShortCode));

// TODO: 2) Deal some cards...
/** @type {Card[]} */
const hand = []; // A hand of cards

// Draw a card from the shuffled deck
let aCard = shuffled.pop();
console.log(`\nI drew ${toShortCode(aCard)} from the shuffled deck, leaving ${shuffled.length} cards remaining.\n`);
console.log(`This is ${aCard}`, aCard);







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

