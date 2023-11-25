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
    const title = document.querySelector(".title");
    const keyword = document.querySelector(".keyword");
    const content = document.querySelector(".content");
    const summary = document.querySelector(".summary");
    const notetitle = document.querySelector(".notetitle");
    const notekeyword = document.querySelector(".notekeyword");
    const notecontent = document.querySelector(".notecontent");
    const notesummary = document.querySelector(".notesummary");

    switch (paperSize) {
        case "Letter":
            //PAGE SIZE
            cornellnotesdoc.style.width = "8.5in";
            cornellnotesdoc.style.height = "11in";

            //DIV SIZE
            title.style.minWidth = "8.2in";
            title.style.maxWidth = "8.2in";
            title.style.minHeight = "1.1in";
            title.style.maxHeight = "1.1in";

            keyword.style.minWidth = "2in";
            keyword.style.maxWidth = "2in";
            keyword.style.minHeight = "6.5in";
            keyword.style.maxHeight = "6.5in";

            content.style.minWidth = "5.9in";
            content.style.maxWidth = "5.9in";
            content.style.minHeight = "6.5in";
            content.style.maxHeight = "6.5in";

            summary.style.minWidth = "8.2in";
            summary.style.maxWidth = "8.2in";
            summary.style.minHeight = "2.5in";
            summary.style.maxHeight = "2.5in";

            //NOTE SIZE
            notetitle.style.minWidth = "8.12in";
            notetitle.style.maxWidth = "8.12in";
            notetitle.style.minHeight = "0.4in";
            notetitle.style.maxHeight = "0.4in";

            notekeyword.style.minWidth = "1.92in";
            notekeyword.style.maxWidth = "1.92in";
            notekeyword.style.minHeight = "5.8in";
            notekeyword.style.maxHeight = "5.8in";

            notecontent.style.minWidth = "5.82in";
            notecontent.style.maxWidth = "5.82in";
            notecontent.style.minHeight = "5.8in";
            notecontent.style.maxHeight = "5.8in";

            notesummary.style.minWidth = "8.12in";
            notesummary.style.maxWidth = "8.12in";
            notesummary.style.minHeight = "1.8in";
            notesummary.style.maxHeight = "1.8in";

            break;
        case "Long":
            //PAGE SIZE
            cornellnotesdoc.style.width = "8.5in";
            cornellnotesdoc.style.height = "13in";
            
            //DIV SIZE
            title.style.minWidth = "8.2in";
            title.style.maxWidth = "8.2in";
            title.style.minHeight = "1.2in";
            title.style.maxHeight = "1.2in";

            keyword.style.minWidth = "2in";
            keyword.style.maxWidth = "2in";
            keyword.style.minHeight = "7.9in";
            keyword.style.maxHeight = "7.9in";

            content.style.minWidth = "5.9in";
            content.style.maxWidth = "5.9in";
            content.style.minHeight = "7.9in";
            content.style.maxHeight = "7.9in";

            summary.style.minWidth = "8.2in";
            summary.style.maxWidth = "8.2in";
            summary.style.minHeight = "3in";
            summary.style.maxHeight = "3in";

            //NOTE SIZE
            notetitle.style.minWidth = "8.12in";
            notetitle.style.maxWidth = "8.12in";
            notetitle.style.minHeight = "0.5in";
            notetitle.style.maxHeight = "0.5in";

            notekeyword.style.minWidth = "1.92in";
            notekeyword.style.maxWidth = "1.92in";
            notekeyword.style.minHeight = "7.2in";
            notekeyword.style.maxHeight = "7.2in";

            notecontent.style.minWidth = "5.82in";
            notecontent.style.maxWidth = "5.82in";
            notecontent.style.minHeight = "7.2in";
            notecontent.style.maxHeight = "7.2in";

            notesummary.style.minWidth = "8.12in";
            notesummary.style.maxWidth = "8.12in";
            notesummary.style.minHeight = "2.3in";
            notesummary.style.maxHeight = "2.3in";

            break;
        case "Tabloid":
            //PAGE SIZE
            cornellnotesdoc.style.width = "11in";
            cornellnotesdoc.style.height = "17in";
            
            //DIV SIZE
            title.style.minWidth = "10.7in";
            title.style.maxWidth = "10.7in";
            title.style.minHeight = "1.2in";
            title.style.maxHeight = "1.2in";

            keyword.style.minWidth = "3in";
            keyword.style.maxWidth = "3in";
            keyword.style.minHeight = "10.9in";
            keyword.style.maxHeight = "10.9in";

            content.style.minWidth = "7.4in";
            content.style.maxWidth = "7.4in";
            content.style.minHeight = "10.9in";
            content.style.maxHeight = "10.9in";

            summary.style.minWidth = "10.7in";
            summary.style.maxWidth = "10.7in";
            summary.style.minHeight = "4in";
            summary.style.maxHeight = "4in";

            //NOTE SIZE
            notetitle.style.minWidth = "10.62in";
            notetitle.style.maxWidth = "10.62in";
            notetitle.style.minHeight = "0.5in";
            notetitle.style.maxHeight = "0.5in";

            notekeyword.style.minWidth = "2.92in";
            notekeyword.style.maxWidth = "2.92in";
            notekeyword.style.minHeight = "10.2in";
            notekeyword.style.maxHeight = "10.2in";

            notecontent.style.minWidth = "7.32in";
            notecontent.style.maxWidth = "7.32in";
            notecontent.style.minHeight = "10.2in";
            notecontent.style.maxHeight = "10.2in";

            notesummary.style.minWidth = "10.62in";
            notesummary.style.maxWidth = "10.62in";
            notesummary.style.minHeight = "3.3in";
            notesummary.style.maxHeight = "3.3in";

            break;
        case "Legal":
            //PAGE SIZE
            cornellnotesdoc.style.width = "8.5in";
            cornellnotesdoc.style.height = "14in";
            
            //DIV SIZE
            title.style.minWidth = "8.2in";
            title.style.maxWidth = "8.2in";
            title.style.minHeight = "1.2in";
            title.style.maxHeight = "1.2in";

            keyword.style.minWidth = "2in";
            keyword.style.maxWidth = "2in";
            keyword.style.minHeight = "8.4in";
            keyword.style.maxHeight = "8.4in";

            content.style.minWidth = "5.9in";
            content.style.maxWidth = "5.9in";
            content.style.minHeight = "8.4in";
            content.style.maxHeight = "8.4in";

            summary.style.minWidth = "8.2in";
            summary.style.maxWidth = "8.2in";
            summary.style.minHeight = "3.5in";
            summary.style.maxHeight = "3.5in";

            //NOTE SIZE
            notetitle.style.minWidth = "8.12in";
            notetitle.style.maxWidth = "8.12in";
            notetitle.style.minHeight = "0.5in";
            notetitle.style.maxHeight = "0.5in";

            notekeyword.style.minWidth = "1.92in";
            notekeyword.style.maxWidth = "1.92in";
            notekeyword.style.minHeight = "7.7in";
            notekeyword.style.maxHeight = "7.7in";

            notecontent.style.minWidth = "5.82in";
            notecontent.style.maxWidth = "5.82in";
            notecontent.style.minHeight = "7.7in";
            notecontent.style.maxHeight = "7.7in";

            notesummary.style.minWidth = "8.12in";
            notesummary.style.maxWidth = "8.12in";
            notesummary.style.minHeight = "2.8in";
            notesummary.style.maxHeight = "2.8in";

            break;
        case "Executive":
            //PAGE SIZE
            cornellnotesdoc.style.width = "7.25in";
            cornellnotesdoc.style.height = "10.5in";

            //DIV SIZE
            title.style.minWidth = "6.95in";
            title.style.maxWidth = "6.95n";
            title.style.minHeight = "1.1in";
            title.style.maxHeight = "1.1in";

            keyword.style.minWidth = "1.85in";
            keyword.style.maxWidth = "1.85in";
            keyword.style.minHeight = "6.3in";
            keyword.style.maxHeight = "6.3in";

            content.style.minWidth = "4.82in";
            content.style.maxWidth = "4.82in";
            content.style.minHeight = "6.3in";
            content.style.maxHeight = "6.3in";

            summary.style.minWidth = "6.95in";
            summary.style.maxWidth = "6.95in";
            summary.style.minHeight = "2.2in";
            summary.style.maxHeight = "2.2in";

            //NOTE SIZE
            notetitle.style.minWidth = "6.87in";
            notetitle.style.maxWidth = "6.87in";
            notetitle.style.minHeight = "0.4in";
            notetitle.style.maxHeight = "0.4in";

            notekeyword.style.minWidth = "1.77in";
            notekeyword.style.maxWidth = "1.77in";
            notekeyword.style.minHeight = "5.58in";
            notekeyword.style.maxHeight = "5.58in";

            notecontent.style.minWidth = "4.75in";
            notecontent.style.maxWidth = "4.75in";
            notecontent.style.minHeight = "5.58in";
            notecontent.style.maxHeight = "5.58in";

            notesummary.style.minWidth = "6.87in";
            notesummary.style.maxWidth = "6.87in";
            notesummary.style.minHeight = "1.5in";
            notesummary.style.maxHeight = "1.5in";

            break;
        case "A3":
            //PAGE SIZE
            cornellnotesdoc.style.width = "11.69in";
            cornellnotesdoc.style.height = "16.54in";
            
            //DIV SIZE
            title.style.minWidth = "11.4in";
            title.style.maxWidth = "11.4in";
            title.style.minHeight = "1.2in";
            title.style.maxHeight = "1.2in";

            keyword.style.minWidth = "3.35in";
            keyword.style.maxWidth = "3.35in";
            keyword.style.minHeight = "11in";
            keyword.style.maxHeight = "11in";

            content.style.minWidth = "7.75in";
            content.style.maxWidth = "7.75in";
            content.style.minHeight = "11in";
            content.style.maxHeight = "11in";

            summary.style.minWidth = "11.4in";
            summary.style.maxWidth = "11.4in";
            summary.style.minHeight = "3.5in";
            summary.style.maxHeight = "3.5in";

            //NOTE SIZE
            notetitle.style.minWidth = "11.32in";
            notetitle.style.maxWidth = "11.32in";
            notetitle.style.minHeight = "0.5in";
            notetitle.style.maxHeight = "0.5in";

            notekeyword.style.minWidth = "3.28in";
            notekeyword.style.maxWidth = "3.28in";
            notekeyword.style.minHeight = "10.27in";
            notekeyword.style.maxHeight = "10.27in";

            notecontent.style.minWidth = "7.67in";
            notecontent.style.maxWidth = "7.67in";
            notecontent.style.minHeight = "10.27in";
            notecontent.style.maxHeight = "10.27in";

            notesummary.style.minWidth = "11.32in";
            notesummary.style.maxWidth = "11.32in";
            notesummary.style.minHeight = "2.77in";
            notesummary.style.maxHeight = "2.77in";

            break;
        case "A4":
            //PAGE SIZE
            cornellnotesdoc.style.width = "8.27in";
            cornellnotesdoc.style.height = "11.69in";

            //DIV SIZE
            title.style.minWidth = "7.97in";
            title.style.maxWidth = "7.97in";
            title.style.minHeight = "1.1in";
            title.style.maxHeight = "1.1in";

            keyword.style.minWidth = "1.95in";
            keyword.style.maxWidth = "1.95in";
            keyword.style.minHeight = "7in";
            keyword.style.maxHeight = "7in";

            content.style.minWidth = "5.72in";
            content.style.maxWidth = "5.72in";
            content.style.minHeight = "7in";
            content.style.maxHeight = "7in";

            summary.style.minWidth = "7.97in";
            summary.style.maxWidth = "7.97in";
            summary.style.minHeight = "2.7in";
            summary.style.maxHeight = "2.7in";

            //NOTE SIZE
            notetitle.style.minWidth = "7.89in";
            notetitle.style.maxWidth = "7.89in";
            notetitle.style.minHeight = "0.4in";
            notetitle.style.maxHeight = "0.4in";

            notekeyword.style.minWidth = "1.88in";
            notekeyword.style.maxWidth = "1.88in";
            notekeyword.style.minHeight = "6.3in";
            notekeyword.style.maxHeight = "6.3in";

            notecontent.style.minWidth = "5.64in";
            notecontent.style.maxWidth = "5.64in";
            notecontent.style.minHeight = "6.3in";
            notecontent.style.maxHeight = "6.3in";

            notesummary.style.minWidth = "7.89in";
            notesummary.style.maxWidth = "7.89in";
            notesummary.style.minHeight = "2in";
            notesummary.style.maxHeight = "2in";

            break;
        case "B4JIS":
            //PAGE SIZE
            cornellnotesdoc.style.width = "10.12in";
            cornellnotesdoc.style.height = "14.33in";
            
            //DIV SIZE
            title.style.minWidth = "9.82in";
            title.style.maxWidth = "9.82in";
            title.style.minHeight = "1.2in";
            title.style.maxHeight = "1.2in";

            keyword.style.minWidth = "2.5in";
            keyword.style.maxWidth = "2.5in";
            keyword.style.minHeight = "8.75in";
            keyword.style.maxHeight = "8.75in";

            content.style.minWidth = "7in";
            content.style.maxWidth = "7in";
            content.style.minHeight = "8.75in";
            content.style.maxHeight = "8.75in";

            summary.style.minWidth = "9.82in";
            summary.style.maxWidth = "9.82in";
            summary.style.minHeight = "3.5in";
            summary.style.maxHeight = "3.5in";

            //NOTE SIZE
            notetitle.style.minWidth = "9.73in";
            notetitle.style.maxWidth = "9.73in";
            notetitle.style.minHeight = "0.5in";
            notetitle.style.maxHeight = "0.5in";

            notekeyword.style.minWidth = "2.42in";
            notekeyword.style.maxWidth = "2.42in";
            notekeyword.style.minHeight = "8.03in";
            notekeyword.style.maxHeight = "8.03in";

            notecontent.style.minWidth = "6.92in";
            notecontent.style.maxWidth = "6.92in";
            notecontent.style.minHeight = "8.03in";
            notecontent.style.maxHeight = "8.03in";

            notesummary.style.minWidth = "9.73in";
            notesummary.style.maxWidth = "9.73in";
            notesummary.style.minHeight = "2.8in";
            notesummary.style.maxHeight = "2.8in";

            break;
        case "B5JIS":
            //PAGE SIZE
            cornellnotesdoc.style.width = "7.17in";
            cornellnotesdoc.style.height = "10.12in";

            //DIV SIZE
            title.style.minWidth = "6.87in";
            title.style.maxWidth = "6.87in";
            title.style.minHeight = "1.1in";
            title.style.maxHeight = "1.1in";

            keyword.style.minWidth = "1.85in";
            keyword.style.maxWidth = "1.85in";
            keyword.style.minHeight = "6in";
            keyword.style.maxHeight = "6in";

            content.style.minWidth = "4.72in";
            content.style.maxWidth = "4.72in";
            content.style.minHeight = "6in";
            content.style.maxHeight = "6in";

            summary.style.minWidth = "6.87in";
            summary.style.maxWidth = "6.87in";
            summary.style.minHeight = "2.2in";
            summary.style.maxHeight = "2.2in";

            //NOTE SIZE
            notetitle.style.minWidth = "6.8in";
            notetitle.style.maxWidth = "6.8in";
            notetitle.style.minHeight = "0.4in";
            notetitle.style.maxHeight = "0.4in";

            notekeyword.style.minWidth = "1.77in";
            notekeyword.style.maxWidth = "1.77in";
            notekeyword.style.minHeight = "5.3in";
            notekeyword.style.maxHeight = "5.3in";

            notecontent.style.minWidth = "4.65in";
            notecontent.style.maxWidth = "4.65in";
            notecontent.style.minHeight = "5.3in";
            notecontent.style.maxHeight = "5.3in";

            notesummary.style.minWidth = "6.8in";
            notesummary.style.maxWidth = "6.8in";
            notesummary.style.minHeight = "1.5in";
            notesummary.style.maxHeight = "1.5in";

            break;
            
        // Add more cases for other paper sizes as needed
    }
}
