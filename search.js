function performSearch() {
    const query = document.getElementById("searchInput").value; // Get the input value
    if (query) {
        // Example: Redirect to a search results page
        window.location.href = `https://www.google.com/search?q=${encodeURIComponent(query)}`;
    } else {
        alert("Please enter a search term.");
    }
}