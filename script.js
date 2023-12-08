let optionsButtons = document.querySelectorAll(".option-button");

let writingArea = document.getElementById("text-input");

let alignButton = document.querySelectorAll(".align")

let colorPicker = document.getElementById('color');


//main logic
const modifyText = (command, defaultUi, value) => {
    //execCommand executes command on selected text
    document.execCommand(command, defaultUi, value);
};

//for basic operations which don't need value parameter
// for bold,italic,underline,redo,undo,text align
optionsButtons.forEach(button => {
    button.addEventListener("click", () => {
        modifyText(button.id, false, null);
    });
});
