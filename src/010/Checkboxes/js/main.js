// Enter JavaScript for the exercise here...
// 1) Add an event listener for <input type="checkbox" name="toggle" />
const toggleAll = document.querySelector('[name=toggle]');
toggleAll.addEventListener('change', function (evt) {
    evt.preventDefault();
    const target = evt.target;
    console.log(`main toggle is ${target.checked ? 'on' : 'off'}`);
    //                            \_____ ternary expression __/

    // 2) get all the checkboxes - NodeList
    const allCheckboxes = document.querySelectorAll('[name=message]');
    console.log(allCheckboxes);

    // 3) make all those checkboxes match the .checked state of my target
    let index = 0;
    while(index < allCheckboxes.length) {
        allCheckboxes[index].checked = target.checked;
        index += 1;
    }
});

