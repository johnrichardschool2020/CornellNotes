//TOOLS PAPER SIZE

// Get a reference to the select element
const paperSizeSelect = document.querySelector(".paperSize");

// Set the default paper size
const defaultPaperSize = "Letter"; // Change this to your preferred default size

// Initialize the paper size
applyPaperSizeStyles(defaultPaperSize);

// Add an event listener to detect when the user changes the paper size
paperSizeSelect.addEventListener("change", function() {
    const selectedPaperSize = paperSizeSelect.value;
    applyPaperSizeStyles(selectedPaperSize);
});

// Define a function to apply the selected paper size styles
function applyPaperSizeStyles(paperSize) {
    const cornellnotesdoc = document.querySelector(".cornellnotesdoc");

    switch (paperSize) {
        case "Letter":
            cornellnotesdoc.style.width = "8.5in";
            cornellnotesdoc.style.height = "11in";
            break;
        case "Long":
            cornellnotesdoc.style.width = "8.5in";
            cornellnotesdoc.style.height = "13in";
            break;
        case "Tabloid":
            cornellnotesdoc.style.width = "11in";
            cornellnotesdoc.style.height = "17in";
            break;
        case "Legal":
            cornellnotesdoc.style.width = "8.5in";
            cornellnotesdoc.style.height = "14in";
            break;
        case "Executive":
            cornellnotesdoc.style.width = "7.25in";
            cornellnotesdoc.style.height = "10.5in";
            break;
        case "A3":
            cornellnotesdoc.style.width = "11.69in";
            cornellnotesdoc.style.height = "16.54in";
            break;
        case "A4":
            cornellnotesdoc.style.width = "8.27in";
            cornellnotesdoc.style.height = "11.69in";
            break;
        case "B4JIS":
            cornellnotesdoc.style.width = "10.12in";
            cornellnotesdoc.style.height = "14.33in";
            break;
        case "B5JIS":
            cornellnotesdoc.style.width = "7.17in";
            cornellnotesdoc.style.height = "10.12in";
            break;
        // Add more cases for other paper sizes as needed
    }
}
