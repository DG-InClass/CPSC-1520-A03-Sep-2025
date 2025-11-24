// TODO: Add code here
const buttons = document.querySelectorAll('input[type=button]');
buttons.forEach(btn => {
    const ms = parseInt(btn.dataset.ms);
    const timerRef = setTimeout(() => {
        btn.disabled = true; // disable the button after the delay
    }, ms); // Don't forget to put in the # of milliseconds of delay
    btn.dataset.timer = timerRef; // Knowing which timeout is associated with which button
});


const output = document.getElementById('total');

document.querySelector('main > section').addEventListener('click', (evt) => {
    if(isInputButton(evt.target)) {
        /** @type {HTMLInputElement} */
        const btn = evt.target;
        console.log('clicked');
        if(!btn.dataset.clicked) {
            btn.dataset.clicked = true; // Give the prize once
            clearTimeout(btn.dataset.timer);

            btn.classList.add('text-green-700');
            const amount = parseInt(btn.value);
            const total = parseInt(output.innerText) + amount;
            console.log(btn, output, amount, total)
            output.innerText = total;
        }
    }
});

const isInputButton = (el) => (el.tagName === 'INPUT' && el.type === 'button');
