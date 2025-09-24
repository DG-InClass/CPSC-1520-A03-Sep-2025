let counter = 0;
const increment = function() {
    counter++;
    document.querySelector('div').innerText = `Clicked ${counter} times.`;
}

const theButton = document.querySelector('button');
theButton.addEventListener('click', increment);
