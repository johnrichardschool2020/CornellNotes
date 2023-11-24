function saveData() {
    // Prompt for password
    var password = prompt('Enter password:');
    
    // Check if the password is correct
    if (password === 'admin') {
        var title = document.querySelector('.notetitle').innerText;
        var keyword = document.querySelector('.notekeyword').innerText;
        var content = document.querySelector('.notecontent').innerText;
        var summary = document.querySelector('.notesummary').innerText;

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
    } else {
        // Do nothing or handle the case where the password is incorrect
        alert('Incorrect password. Data not saved.');
    }
}
