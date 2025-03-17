(function() {
    const navUrl = "https://raw.githubusercontent.com/NexilisLib/website/refs/heads/main/nav.html";
    const cacheKey = "cachedNavHTML";

    const cachedNav = localStorage.getItem(cacheKey);

    if (cachedNav){
        document.getElementById("nav-placeholder").innerHTML = cachedNav;
    } else {
        fetch(navUrl).then(response => {
                if (!response.ok) {
                    throw new Error(`Failed to load ${navPath}: ${response.statusText}`);
                }
                return response.text();
            })
            .then(data => {
                document.getElementById("nav-placeholder").innerHTML = data;
                localStorage.setItem(cacheKey, data);
            })
            .catch(error => {
                console.error(error);
                document.getElementById("nav-placeholder").innerHTML = `<p>Error loading navigation.</p>`;
            });
    }
})();