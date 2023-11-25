function downloadImage() {
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


    // DOWNLOAD AS JPEG
    html2canvas(document.querySelector('.cornellnotesdoc')).then(canvas => {
        // Convert the canvas to a data URL
        var imageData = canvas.toDataURL('image/jpeg', 1.0);

        // Create a download link
        var link = document.createElement('a');
        link.href = imageData;
        link.download = 'cornell_note.jpg';
        link.click();
    });
}