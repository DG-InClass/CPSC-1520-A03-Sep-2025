/**
 * Generates a BINGO card from the set of card values and other options.
 * 
 * @param {object} options Options for creating a bingo card.
 * @param {boolean} options.freeSpace Whether a free space item should be used in the middle cell.
 * @param {{letter: string, values: number[]}[]} options.numbers The numbers for the BINGO columns.
 * @returns {HTMLTableElement} A `<table>` element with all the contents of the bingo card.
 */
export const createBingoCard = function(options) {
    const card = document.createElement('table');
    debugger
    // TODO: Create the bingo card based on the options supplied.
    return card;
}
