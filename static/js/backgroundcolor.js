//TOOLS BACKGROUND COLOR

//TITLE 
// Get references to the color picker and the div
const titlebgcolorPicker = document.querySelector(".titlebgcolorPicker");
const title = document.querySelector(".title");

// Add an event listener to the color picker
titlebgcolorPicker.addEventListener("input", function() {
    // Get the selected color value
    const titlebgselectedColor = titlebgcolorPicker.value;

    // Set the background color of the div to the selected color
    title.style.backgroundColor = titlebgselectedColor;
});


//KEYWORD
// Get references to the color picker and the div
const keywordbgcolorPicker = document.querySelector(".keywordbgcolorPicker");
const keyword = document.querySelector(".keyword");

// Add an event listener to the color picker
keywordbgcolorPicker.addEventListener("input", function() {
    // Get the selected color value
    const keywordbgselectedColor = keywordbgcolorPicker.value;

    // Set the background color of the div to the selected color
    keyword.style.backgroundColor = keywordbgselectedColor;
});

//CONTENT
// Get references to the color picker and the div
const contentbgcolorPicker = document.querySelector(".contentbgcolorPicker");
const content = document.querySelector(".content");

// Add an event listener to the color picker
contentbgcolorPicker.addEventListener("input", function() {
    // Get the selected color value
    const contentbgselectedColor = contentbgcolorPicker.value;

    // Set the background color of the div to the selected color
    content.style.backgroundColor = contentbgselectedColor;
});

//SUMMARY
// Get references to the color picker and the div
const summarybgcolorPicker = document.querySelector(".summarybgcolorPicker");
const summary = document.querySelector(".summary");

// Add an event listener to the color picker
summarybgcolorPicker.addEventListener("input", function() {
    // Get the selected color value
    const summarybgselectedColor = summarybgcolorPicker.value;

    // Set the background color of the div to the selected color
    summary.style.backgroundColor = summarybgselectedColor;
});


