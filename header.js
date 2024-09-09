function loadHeader(headerFile) {
    fetch(headerFile)
    .then(response => response.text())
    .then(data => {
        document.getElementById("header").innerHTML = data;
    })
    .catch(error => {
        console.error('Error loading header:', error);
    });
}