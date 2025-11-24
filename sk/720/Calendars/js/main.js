function buildDaySlot(date) {
    let div = document.createElement('div');
    let span = document.createElement('span');
    let textNode = document.createTextNode(date.getDate());
    div.appendChild(span);
    span.appendChild(textNode);
    return div;
}

document.getElementById('selectedMonth')
.addEventListener('change', (evt) => {
    let calendarContainer = document.getElementById('calendar');
    calendarContainer.innerHTML = ''; // clear
    
    let selectedMonth = evt.target.value;
    // destructuring an array of values
    let [year, month] = selectedMonth.split('-')
    //                  \__ string__/\_string[]_/
        .map(text => parseInt(text));
    //  \___ number[] _____________/


    let today = new Date(year, month - 1);
    let endOfMonth = new Date(year, month, 0);
    let maxDays = endOfMonth.getDate() + today.getDay() < 35 ? 35 : 42;
    
    // Reset the date to the first day of the week
    // (Sunday)
    today.setDate(today.getDate() - today.getDay());

    for(let count = 0; count < maxDays; count++) {
        calendarContainer.appendChild(buildDaySlot(today));    
        today.setDate(today.getDate() + 1);
    }

})

