const log = console.log;

log('script loaded');

const form = document
            .querySelector('#shipping-calculator');
const warning = document.querySelector('p.warning');
warning.classList.add('hide');
const isNumber = function(value) {
    return !isNaN(value);
}
const calculateQuote = function(ev) {
    ev.preventDefault();
    log('form submitted');
    const form = ev.target;
    const input = form.elements.weight;
    // log(input);
    const kg = parseFloat(input.value);
    log(kg);
    log(kg != NaN);
    if(isNumber(kg)) {
        // Check the actual value, which should be over 1kg
        if(kg >= 1 && kg <= 1000) {
            // Calculate the rate = 11.75 * kg
            const amount = kg * 11.75;
            // Template string to show the info
            const rateHtml = `<b>$ ${amount.toFixed(2)}</b> ($11.75 per kg)`;
            document.querySelector('.rate').innerHTML = rateHtml;
            warning.classList.add('hide');
        } else {
            // Report incorrect weight
            warning.classList.remove('hide');
        }
    } else {
        // Report not a number
        log('not a number');
        warning.classList.remove('hide');
        input.value = '';
        input.focus();
    }
}

form.addEventListener('submit', calculateQuote);
