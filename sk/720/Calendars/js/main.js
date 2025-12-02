function buildDaySlot(date) {
    let div = document.createElement('div');
    let span = document.createElement('span');
    let textNode = document.createTextNode(date.getDate());
    div.appendChild(span);
    span.appendChild(textNode);
    return div;
}

document
    .getElementById('selected-month')
    .addEventListener('change', (evt) => {
        let calendarContainer = document.getElementById('calendar');
        calendarContainer.innerHTML = ''; // clear
        
        let selectedMonth = evt.target.value; // Format is yyyy-MM
        // destructuring an array of values
        let [year, month] = selectedMonth.split('-')
        //                  \__ string__/\_string[]_/
            .map(text => parseInt(text));
        //  \___ number[] _____________/


        let startOfMonth = new Date(year, month - 1);
        let endOfMonth = new Date(year, month, 0);
        let daysDiff = endOfMonth.getDate() + startOfMonth.getDay();
        // maxDays will be a multiple of 7, for a full week calendar
        let maxDays = daysDiff == 28 ? 28 : daysDiff <= 35 ? 35 : 42;
        
        // Reset the date to the first day of the week (Sunday),
        // so that we can begin noting the actual dates beginning
        // with Sunday.
        startOfMonth.setDate(startOfMonth.getDate() - startOfMonth.getDay());

        for(let count = 0; count < maxDays; count++) {
            calendarContainer.appendChild(buildDaySlot(startOfMonth));    
            startOfMonth.setDate(startOfMonth.getDate() + 1);
        }
    });

document
    .getElementById('sample-months')
    .addEventListener('click', evt => {
        const btn = getButton(evt.target);
        if(btn) {
            // Pre-selected sample month to apply to the 
            const selectedMonth = document.getElementById('selected-month');
            selectedMonth.value = toMonthInputFormat(btn.value);
            selectedMonth.dispatchEvent(new Event('change', { bubbles: true }));
        }
    });

/**
 * A utility function for an event handler to check if the event target is a input button.
 * 
 * @param {HTMLElement} el Some element to evaluate
 * @returns {HTMLInputElement | null} The element, if it is an `<input type="button" />` element
 */
const getButton = (el) => el?.tagName === 'INPUT' && el.type === 'button' ? el : null;

// The format is "yyyy-MM" where yyyy is year in four or more digits, and MM is 01-12.
const toMonthInputFormat = (dateText) => {
    const date = new Date(dateText);
    const year = date.getFullYear();
    const month = date.getMonth() + 1;
    return `${year}-${month.toString().padStart(2, '0')}`;
}