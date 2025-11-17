import { configureTodoActions } from "./user-interactions";

const form = document.getElementById('reminders');
const unsortedList = document.getElementById('unsorted');
const sortedList = document.getElementById('sorted');

// TODO: Configure the todo actions
let context = {
    todoForm: form,
    unsortedList: unsortedList,
    sortedList
}

configureTodoActions(context);
