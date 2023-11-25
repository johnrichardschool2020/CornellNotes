function saveData() {
        //SAVE XML
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
