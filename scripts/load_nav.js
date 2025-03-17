function loadNav() {
    const navUrl = "https://raw.githubusercontent.com/NexilisLib/website/refs/heads/main/nav.html";
    fetch(navUrl).then(response => {
            if (!response.ok) {
                throw new Error(`Failed to load ${navPath}: ${response.statusText}`);
            }
            return response.text();
        })
        .then(data => {
            document.getElementById("nav-placeholder").innerHTML = data;
        })
        .catch(error => {
            console.error(error);
            document.getElementById("nav-placeholder").innerHTML = `<p>Error loading navigation.</p>`;
        });
}
