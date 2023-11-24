function searchAndHighlight() {
    var searchInput = document.getElementById('searchInput').value;
    var notes = document.querySelectorAll('.notetitle, .notecontent, .notekeyword, .notesummary');
    
    notes.forEach(function(note) {
        var content = note.textContent;
        var highlightedContent = content.replace(new RegExp(escapeRegExp(searchInput), 'gi'), function(match) {
            return '<span class="highlight">' + match + '</span>';
        });
        note.innerHTML = highlightedContent;
    });
}

// Function to escape special characters in the search input
function escapeRegExp(string) {
    return string.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}