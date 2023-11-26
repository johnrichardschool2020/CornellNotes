function saveData() {
    // Prompt the user
    var userWantsToSave = confirm('Do you want to save data?');

    if (!userWantsToSave) {
        // User clicked "NO", do nothing
        return;
    }

    // User clicked "YES", proceed to save XML data

    // Extract data from the HTML elements
    var title = document.querySelector('.notetitle').innerHTML;
    var keyword = document.querySelector('.notekeyword').innerHTML;
    var content = document.querySelector('.notecontent').innerHTML;
    var summary = document.querySelector('.notesummary').innerHTML;

    // Send AJAX request to Flask server
    fetch('/save', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: new URLSearchParams({
            'title': title,
            'keyword': keyword,
            'content': content,
            'summary': summary,
        }),
    })
    .then(response => response.text())
    .then(data => console.log(data))
    .catch(error => console.error('Error:', error));
}
