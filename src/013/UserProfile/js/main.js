import { setupEditor } from "./editor";

const editorContainer = document.getElementById('editor-container');
const profileContainer = document.getElementById('profile-container');

const editor = document.getElementById('editor');

// TODO: Set up the editor
// When passing in an object literal as the argument,
// you must set the appropriate properties expected
// by the function's parameters. But, depending on
// the names of your argument's values, you can
// build the object literal in several ways.
setupEditor({
    // My local variable and the expected property share the same name
    editorContainer,    // short-hand syntax
    // My local variable has a different name than the expected property
    editorForm: editor, // I must assign the property a value
    // Even when I could use short-hand syntax, I am free to use explity
    // property value
    profileContainer: profileContainer
//  \_ param prop _/  \__ my value __/    
});
