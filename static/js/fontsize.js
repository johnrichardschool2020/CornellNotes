function changeFontSize() {
    // Get the selected font size from the dropdown
    var titleFontSize = document.getElementById('titleFontSize').value;
    var keywordFontSize = document.getElementById('keywordFontSize').value;
    var contentFontSize = document.getElementById('contentFontSize').value;
    var summaryFontSize = document.getElementById('summaryFontSize').value;

    // Set the font size of the sample text
    document.querySelector('.notetitle').style.fontSize = titleFontSize + 'px';
    document.querySelector('.notekeyword').style.fontSize = keywordFontSize + 'px';
    document.querySelector('.notecontent').style.fontSize = contentFontSize + 'px';
    document.querySelector('.notesummary').style.fontSize = summaryFontSize + 'px';
}