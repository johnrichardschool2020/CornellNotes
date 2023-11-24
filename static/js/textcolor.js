//TOOLS TEXT COLOR

//TITLE
// Get references to the color picker and the div
const titletextcolorPicker = document.querySelector(".titletextcolorPicker");
const dynamictitle = document.querySelector(".dynamictitle");

// Add an event listener to the color picker
titletextcolorPicker.addEventListener("input", function() {
    // Get the selected color value
    const titletextselectedColor = titletextcolorPicker.value;

    // Set the background color of the div to the selected color
    dynamictitle.style.color = titletextselectedColor;
});

//KEYWORD
// Get references to the color picker and the div
const keywordtextcolorPicker = document.querySelector(".keywordtextcolorPicker");
const dynamickeyword = document.querySelector(".dynamickeyword");

// Add an event listener to the color picker
keywordtextcolorPicker.addEventListener("input", function() {
    // Get the selected color value
    const keywordtextselectedColor = keywordtextcolorPicker.value;

    // Set the background color of the div to the selected color
    dynamickeyword.style.color = keywordtextselectedColor;
});

//CONTENT
// Get references to the color picker and the div
const contenttextcolorPicker = document.querySelector(".contenttextcolorPicker");
const dynamiccontent = document.querySelector(".dynamiccontent");

// Add an event listener to the color picker
contenttextcolorPicker.addEventListener("input", function() {
    // Get the selected color value
    const contenttextselectedColor = contenttextcolorPicker.value;

    // Set the background color of the div to the selected color
    dynamiccontent.style.color = contenttextselectedColor;
});

//SUMMARY
// Get references to the color picker and the div
const summarytextcolorPicker = document.querySelector(".summarytextcolorPicker");
const dynamicsummary = document.querySelector(".dynamicsummary");

// Add an event listener to the color picker
summarytextcolorPicker.addEventListener("input", function() {
    // Get the selected color value
    const summarytextselectedColor = summarytextcolorPicker.value;

    // Set the background color of the div to the selected color
    dynamicsummary.style.color = summarytextselectedColor;
});