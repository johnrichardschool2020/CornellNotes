//TOOLS BORDER DESIGN

// Get a reference to the select element
const borderDesignSelect = document.querySelector(".borderDesign");

// Set the default border design
        const defaultBorderDesign = "solid"; // Change this to your preferred default design

// Initialize the border design
        applyBorderDesign(defaultBorderDesign);

// Add an event listener to detect when the user changes the border design
borderDesignSelect.addEventListener("change", function() {
    const selectedBorderDesign = borderDesignSelect.value;
    applyBorderDesign(selectedBorderDesign);
});

// Define a function to apply the selected border design
function applyBorderDesign(borderDesign) {
    const title = document.querySelector(".title");
    const keyword = document.querySelector(".keyword");
    const content = document.querySelector(".content");
    const summary = document.querySelector(".summary");

    // Reset the border to default style and color
    title.style.border = "2px solid black";
    keyword.style.border = "2px solid black";
    content.style.border = "2px solid black";
    summary.style.border = "2px solid black";

    switch (borderDesign) {
        case "solid":
            title.style.borderStyle = "solid";
            keyword.style.borderStyle = "solid";
            content.style.borderStyle = "solid";
            summary.style.borderStyle = "solid";
            break;
        case "dotted":
            title.style.borderStyle = "dotted";
            keyword.style.borderStyle = "dotted";
            content.style.borderStyle = "dotted";
            summary.style.borderStyle = "dotted";
            break;
        case "dashed":
            title.style.borderStyle = "dashed";
            keyword.style.borderStyle = "dashed";
            content.style.borderStyle = "dashed";
            summary.style.borderStyle = "dashed";
            break;
        case "none":
            title.style.borderStyle = "none";
            keyword.style.borderStyle = "none";
            content.style.borderStyle = "none";
            summary.style.borderStyle = "none";
            break;
    }
}