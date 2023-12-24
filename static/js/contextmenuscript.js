const contextMenu = document.querySelector(".wrapper");

// Function to send selected text to Flask server
function addToTitle(selectedText) {
    const formData = new FormData();
    formData.append('text', selectedText);

    fetch('/add_to_title', {
        method: 'PATCH',
        body: formData,
    })
    .then(response => response.text())
    .then(updatedTitle => {
        console.log('Response from server:', updatedTitle);
        // Assuming the response contains the updated title text
        document.querySelector('.notetitle').innerText = updatedTitle;
    })
    //Open cornellnotes
    openCornellNotes()
    .catch(error => {
        console.error('Error sending selected text to server:', error);
    });
}

// Function to send selected text to Flask server for different sections
function addToKeyword(selectedText) {
    const formData = new FormData();
    formData.append('text', selectedText);

    fetch('/add_to_keyword', {
        method: 'PATCH',
        body: formData,
    })
    .then(response => response.text())
    .then(updatedKeyword => {
        console.log('Response from server:', updatedKeyword);
        // Assuming the response contains the updated keyword text
        document.querySelector('.notekeyword').innerText = updatedKeyword;
    })
    //Open cornellnotes
    openCornellNotes()
    .catch(error => {
        console.error('Error sending selected text to server:', error);
    });
}

function addToContent(selectedText) {
    const formData = new FormData();
    formData.append('text', selectedText);

    fetch('/add_to_content', {
        method: 'PATCH',
        body: formData,
    })
    .then(response => response.text())
    .then(updatedContent => {
        console.log('Response from server:', updatedContent);
        // Assuming the response contains the updated content text
        document.querySelector('.notecontent').innerText = updatedContent;
    })
    //Open cornellnotes
    openCornellNotes()
    .catch(error => {
        console.error('Error sending selected text to server:', error);
    });
}

function addToSummary(selectedText) {
    const formData = new FormData();
    formData.append('text', selectedText);

    fetch('/add_to_summary', {
        method: 'PATCH',
        body: formData,
    })
    .then(response => response.text())
    .then(updatedSummary => {
        console.log('Response from server:', updatedSummary);
        // Assuming the response contains the updated summary text
        document.querySelector('.notesummary').innerText = updatedSummary;
    })
    //Open cornellnotes
    openCornellNotes()
    .catch(error => {
        console.error('Error sending selected text to server:', error);
    });
}

window.addEventListener("contextmenu", e => {
    e.preventDefault();

    // Check if a text selection exists
    var selectedText = window.getSelection().toString().trim();
    if (selectedText !== "") {
        // Show the custom context menu at the mouse cursor
        contextMenu.style.left = e.pageX + "px";
        contextMenu.style.top = e.pageY + "px";
        contextMenu.style.visibility = "visible";

        // Set up click handlers for context menu items
        document.getElementById("idtitle").addEventListener("click", function() {
            addToTitle(selectedText);
            contextMenu.style.visibility = "hidden";
        });
        document.getElementById("idkeyword").addEventListener("click", function() {
            addToKeyword(selectedText);
            contextMenu.style.visibility = "hidden";
        });
        
        document.getElementById("idcontent").addEventListener("click", function() {
            addToContent(selectedText);
            contextMenu.style.visibility = "hidden";
        });
        
        document.getElementById("idsummary").addEventListener("click", function() {
            addToSummary(selectedText);
            contextMenu.style.visibility = "hidden";
        });
        document.getElementById("idcornellnote").addEventListener("click", function() {
            openCornellNotes();
            contextMenu.style.visibility = "hidden";
        });
        // Add similar click handlers for other menu items if needed
    } else {
        // If no text is selected, hide the context menu
        contextMenu.style.visibility = "hidden";
    }
});

// Hide the custom context menu when clicking outside of it
document.addEventListener("click", function (e) {
    // Check if the click is outside the context menu
    if (!contextMenu.contains(e.target)) {
        contextMenu.style.visibility = "hidden";
    }
});



// Open CornellNotes
function openCornellNotes() {
    // Check if Cornell Notes page is already open
    var cornellNotesWindow = window.open('', 'CornellNotesPage');
    
    if (cornellNotesWindow.location.href === 'about:blank') {
        // Cornell Notes page is not open, open it in a new tab
        window.open('cornell_note', 'CornellNotesPage');
    } else {
        // Cornell Notes page is already open, force reload
        cornellNotesWindow.location.reload(true); // true means a "hard" reload, ignoring cache
    }
};