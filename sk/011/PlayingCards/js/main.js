const container = document.getElementById('players');

const form = document.querySelector('form');
form.addEventListener('submit', function (evt) {
    evt.preventDefault();
    console.log('Adding players...');
    
    // Get the names    
    const inputNames = evt.target.elements.playerNames;
    const names = inputNames.value.split(',').map(name => name.trim());

    if (names.length > 0) {
        // Add players to the container
        names.forEach((player, index) => {
            container.innerHTML += `<div id="player-${index}"><h2>${player}</h2></div>`;
        });
        console.log(container);
        
        // Disable button, hide form, show container
        evt.target.elements.createPlayers.setAttribute('disabled', 'true');
        evt.target.classList.add('hidden');
        container.classList.remove('hidden');
    }
});

const dealButton = document.getElementById('deal-me-in');
console.log(dealButton);
dealButton.addEventListener('click', function(evt) {
    console.clear();
    const players = container.querySelectorAll('div');
    players.forEach(playerHand => {
        const card = shuffledCards.pop();
        const img = `<img src="/img/${card}.svg" alt="${card}" />`;
        playerHand.innerHTML += img;
        console.log(playerHand);
    });
});


const shuffledCards = [
    "4D",
    "3D",
    "4H",
    "6S",
    "3H",
    "4S",
    "JC",
    "3C",
    "7C",
    "6C",
    "8H",
    "KD",
    "KH",
    "JH",
    "QH",
    "7H",
    "AS",
    "8S",
    "3S",
    "8C",
    "0S",
    "7S",
    "6H",
    "4C",
    "JD",
    "9S",
    "0D",
    "5S",
    "AC",
    "9H",
    "2C",
    "0H",
    "9C",
    "8D",
    "6D",
    "KS",
    "QC",
    "KC",
    "5H",
    "2S",
    "JS",
    "QD",
    "2H",
    "7D",
    "AD",
    "2D",
    "0C",
    "AH",
    "9D",
    "5C",
    "QS",
    "5D"
]
