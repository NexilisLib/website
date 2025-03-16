document.addEventListener("DOMContentLoaded", function () {
    fetch('/partials/navbar.html')
        .then(response => response.text())
        .then(html => {
            document.querySelector('header').innerHTML = html;
        })
        .catch(error => console.error('Error loading navbar:', error));
});