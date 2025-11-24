// TODO: Add code here


const output = document.getElementById('total');

document.querySelector('main > section').addEventListener('click', (evt) => {
    if(isInputButton(evt.target)) {
        /** @type {HTMLInputElement} */
        const btn = evt.target;
        console.log('clicked');
        if(!btn.dataset.clicked) {
            btn.dataset.clicked = true; // Give the prize once

            btn.classList.add('text-green-700');
            const amount = parseInt(btn.value);
            const total = parseInt(output.innerText) + amount;
            console.log(btn, output, amount, total)
            output.innerText = total;
        }
    }
});

const isInputButton = (el) => (el.tagName === 'INPUT' && el.type === 'button');
