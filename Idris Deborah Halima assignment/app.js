fetch('some-endpoint')
    .then(response => response.text())  // Convert to text string
    .then(data => {
        // Insert into HTML
        document.getElementById('element').innerHTML = data;
    })
    .catch(error => console.error('Error:', error));
