function downloadImage() {
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