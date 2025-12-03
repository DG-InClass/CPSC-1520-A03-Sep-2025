/**
 * Generates a BINGO card from the set of card values and other options.
 * 
 * @param {object} options Options for creating a bingo card.
 * @param {boolean} options.freeSpace Whether a free space item should be used in the middle cell.
 * @param {{letter: string, values: number[]}[]} options.numbers The numbers for the BINGO columns.
 * @returns {HTMLTableElement} A `<table>` element with all the contents of the bingo card.
 */
export const createBingoCard = function(options) {
    // It's helpful to have a variable referencing a property of an object because
    // it makes my writing of code cleaner. ie: Instead of typing options.numbers, it
    // would cleaner if I just had a variable called `numbers`
    // const numbers = options.numbers
    // const freeSpace = options.freeSpace;
    // Alternatively, I could just use Object Destructuring syntax when creating my
    // variabled.
    const { numbers, freeSpace } = options;

    const card = document.createElement('table');
    // debugger
    
    // TODO: Create the bingo card based on the options supplied.
    // 1) Make a <thead>
    const header = document.createElement('thead');
    // 2) Make a <tr>
    const headerRow = document.createElement('tr');
    // 3) Make all the <th> for the column headings
    numbers.forEach(column => {
        const colHeader = document.createElement('th');
        const colText = document.createTextNode(column.letter);
        colHeader.appendChild(colText);
        headerRow.appendChild(colHeader);
    })
    // 4) Assembling of my elements
    header.appendChild(headerRow);
    card.appendChild(header);

    // debugger

    // 5) Add <tbody>
    const body = document.createElement('tbody');
    card.appendChild(body);
    // 6) Add a <tr> for each of the number value sets
    //      and a <td> for each individual cll or value
    /*
    numbers: [
        { letter: "B", values: [14, 4, 10, 8, 12] },
        { letter: "I", values: [30, 28, 23, 16, 27] },
        { letter: "N", values: [41, 35, 43, 39] },
        { letter: "G", values: [53, 57, 46, 48, 56] },
        { letter: "O", values: [74, 68, 75, 70, 64] },
    ]
    */
    for(let colIndex = 0; colIndex < 5; colIndex++ ){
        const trTag = document.createElement('tr');
        for(let rowIndex = 0; rowIndex < numbers.length; rowIndex++) {
            const rowData = numbers[rowIndex];
            // Use a copy of the column values so that I can modify it
            let allColumns = rowData.values.slice(); // copy the array
            if(freeSpace && rowIndex === 2) {
                allColumns = [...allColumns.slice(0,2), 'FREE', ...allColumns.slice(2)];
            }
            const cellData = allColumns[colIndex];
            const cell = document.createElement('td');
            let textNode = document.createTextNode(cellData);
            cell.appendChild(textNode);
            trTag.appendChild(cell);
        }
        body.appendChild(trTag);
    }
    card.appendChild(body);

    return card;
}
