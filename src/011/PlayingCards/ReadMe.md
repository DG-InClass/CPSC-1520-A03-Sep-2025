# Playing Cards

## Creating Players

```js
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
```

## Dealing Cards

```js
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
```
