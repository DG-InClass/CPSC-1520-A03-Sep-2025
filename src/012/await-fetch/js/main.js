const apiHost = 'https://deckofcardsapi.com/api/deck/';
const shuffle = `${apiHost}new/shuffle/?deck_count=1`;
const getDrawUrl = (deckId, count) => `${apiHost}${deckId}/draw/?count=${count}`;

// This function illustrates calling the fetch API using async/await
// Internally, this function is still a blocking function because it's using await.
const callApi = async function(url) {
    let response = await fetch(url);
    let data = await response.json();
    return data;
}

// TODO: Follow these steps to use the deckofcardsapi using the callApi.

// 1) Get the deck ID from a new shuffled deck (and show in element with id="deck-identifier")
let deck = await callApi(shuffle);
console.log(deck); // JSON data
let deckId = deck.deck_id;

// 2) Draw a single card (and append to the HTML of the element with `id="hand"`)
//    e.g.: let html = `<img src="${card.image}" alt="${card.value} of ${card.suit}" />`;
let drawResult = await callApi(getDrawUrl(deckId, 2));
console.log(drawResult);

const addCard = function(card) {
    let section = document.getElementById('hand');
    let imgHtml = `<img src="${card.image}" alt="${card.value} of ${card.suit}" />`;
    section.innerHTML += imgHtml;
}

addCard(drawResult.cards[0]);
addCard(drawResult.cards[1]);

document.getElementById('draw-card')
        .addEventListener('click', async function(evt) {
            let draw = await callApi(getDrawUrl(deckId, 1));
            addCard(draw.cards[0]);
        });


// // Demo blocking vs. non-blocking
// import { generatePrimes, generatePrimesAsync } from "./long-running";

// console.time();
// // generatePrimes is a regular function
// // and it runs synchronously
// let result = generatePrimes(2_000_000);
// // this next line won't execute until
// // the function call above is finished.
// console.log(result);
// console.timeEnd();

// // Demo an async function
// console.time('async');
// console.time('primes');
// generatePrimesAsync(2_000_000).then(arr => {
//     console.log(`I got ${arr.length} numbers.`);
//     console.timeEnd('primes');
// });
// console.timeEnd('async');
// console.log('End of main.js');
