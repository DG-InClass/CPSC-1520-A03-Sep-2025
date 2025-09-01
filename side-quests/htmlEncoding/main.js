import he from 'he'

const btn = document.querySelector('button');
const txt = document.querySelector('textarea');
const out = document.querySelector('output');
txt.focus();
btn.addEventListener('click', (ev) => {
    ev.preventDefault();
    out.innerText = he.encode(txt.value, {
        'encodeEverything': true
    });
    txt.focus();
});
