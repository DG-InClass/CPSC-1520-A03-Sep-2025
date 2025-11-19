/**
 * Configure user interactions related to Todo items (reminders).
 * 
 * @param {Object} document An object referencing parts of the page related to Todo items
 * @param {HTMLFormElement} document.todoForm Form for adding Todo items
 * @param {HTMLUListElement} document.unsortedList Unordered list of Todo items
 * @param {HTMLOListElement} document.sortedList Ordered list of Todo items
 */
export function configureTodoActions({todoForm, unsortedList, sortedList}) {
    // TODO: Set up for form submissions and buton clicks
    setupFormProcessing({todoForm, unsortedList});
    setupButtonClicks({unsortedList, sortedList});
}

/**
 * Sets up the form processing to add new Todo items to the unsorted list.
 * 
 * @param {Object} document An object referencing parts of the page related to Todo items
 * @param {HTMLFormElement} document.todoForm Form for adding Todo items
 * @param {HTMLUListElement} document.unsortedList Unordered list of Todo items
 */
const setupFormProcessing = function({todoForm, unsortedList}) {
    todoForm.addEventListener('submit', (ev) => {
        ev.preventDefault();
        // I'll ignore validation for the moment
        const reminder = ev.target.elements.todo.value; // <input name="todo" />
        const li = createUnsortedListItem(reminder);
        unsortedList.appendChild(li);
    });
}

const createUnsortedListItem = function(text) {
    // <li>{text} <button>trash</button> <button>right-arrow</button></li>
    const li = document.createElement('li');
    const textNode = document.createTextNode(text);
    const trashButton = createButton(buttonType.secondary);
    const trashIcon = createFontIcon(icon.trash);
    const rightButton = createButton(buttonType.primary);
    const rightIcon = createFontIcon(icon.moveRight);

    // Assemble the parts
    li.appendChild(textNode);
    li.appendChild(createSpace());
    li.appendChild(trashButton);
    trashButton.appendChild(trashIcon);
    li.appendChild(createSpace());
    li.appendChild(rightButton);
    rightButton.appendChild(rightIcon);

    return li;
}

/**
 * Sets up the event handlers and interactions for working with individual Todo items.
 * 
 * @param {Object} document An object referencing parts of the page related to Todo items
 * @param {HTMLUListElement} document.unsortedList Unordered list of Todo items
 * @param {HTMLOListElement} document.sortedList Ordered list of Todo items
 */
const setupButtonClicks = function({unsortedList, sortedList}) {
    unsortedList.addEventListener('click', (evt) => {
        console.log(evt.target.tagName);
        const btn = getButton(evt.target);
        if(btn) {
            const child = btn.firstElementChild; // I'm expecting it to exist
            let action = "";
            child.classList.forEach(className => {
                if(className.endsWith(icon.trash)) action = icon.trash;
                else if(className.endsWith(icon.moveRight)) action = icon.moveRight;
            });
            const listItem = btn.parentElement;
            switch(action) {
                case icon.trash:
                    // remove the list item
                    listItem.remove();
                    break;
                case icon.moveRight:
                    // re-locate the list item to the sorted list
                    sortedList.appendChild(listItem); // 🎉
                    // Change it's appearance
                    // a) replace the move-right button with a move-up button
                    const moveUp = createButton(buttonType.primary);
                    const iconUp = createFontIcon(icon.moveUp);
                    moveUp.appendChild(iconUp);

                    listItem.replaceChild(moveUp, btn);
                    // b) add a move-down button
                    const moveDown = createButton(buttonType.primary);
                    const iconDown = createFontIcon(icon.moveDown);
                    moveDown.appendChild(iconDown);

                    listItem.appendChild(createSpace());
                    listItem.appendChild(moveDown);

                    break;
            }
        }
    })

    // Challenge: Can you do this with ONE event handler?!

    // Only respond to clicks on buttons
    // Use the `Node.contains()` as part of determining the context
    // Distinguish the buttons based on the child's CSS Classes (see below for NOTES)
    // Move an item from unsorted to sorted using the `.appendChild()`
    // Move an item up or down in the list with `.insertBefore()`.
}


// Utility functions
const createFontIcon = (iconName) => {
    const element = document.createElement('i');
    element.classList.add('las', iconName);
    return element;
}

const createButton = (className) => {
    const element = document.createElement('button');
    element.type = 'button';
    element.classList.add('outline', className);
    return element;
}

const createSpace = () => document.createTextNode(' ');

/**
 * Encapsulate the logic for getting the button that was clicked
 * @param {HTMLElement} element This should be the target of the event
 * @returns {HTMLButtonElement | null} The button (if that was clicked)
 */
const getButton = (element) => {
    let result = null;
    if(element.tagName === 'BUTTON') result = element;
    else if(element.parentElement.tagName === 'BUTTON') result = element.parentElement;

    return result;
}

// Utility objects - offer property names for specific
// hard-coded strings. This makes my code more maintainable.
const icon = {
    trash: 'la-trash',
    moveRight: 'la-arrow-right',
    moveDown: 'la-arrow-circle-down',
    moveUp: 'la-arrow-circle-up'
}

const buttonType = {
    primary: 'primary',
    secondary: 'secondary'
}


// NOTES:
//
// <i class="las la-arrow-circle-up"></i>
// <i class="las la-arrow-circle-down"></i>
// <i class="las la-arrow-right"></i>
// <i class="las la-trash"></i>
//
// <button type="button"></button>
//      class="outline primary"
//      class="outline secondary"
