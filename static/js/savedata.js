document.addEventListener("DOMContentLoaded", function () {
    function saveDataToServer(data) {
        fetch('/save_data', {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/xml'
            },
            body: data
        })
        .then(response => response.json())
        .then(data => console.log(data))
        .catch(error => console.error('Error:', error));
    }

    function handleSaveButtonClick() {
        const title = document.getElementById('title').textContent;
        const content = document.getElementById('content').textContent;
        const keyword = document.getElementById('keyword').textContent;
        const summary = document.getElementById('summary').textContent;

        const xmlData = `
            <root>
                <title>${title}</title>
                <content>${content}</content>
                <keyword>${keyword}</keyword>
                <summary>${summary}</summary>
            </root>
        `;

        saveDataToServer(xmlData);
        alert('Data saved successfully!');
        location.reload(true);
    }

    const saveButton = document.getElementById('saveButton');
    if (saveButton) {
        saveButton.addEventListener('click', handleSaveButtonClick);
    }

});
