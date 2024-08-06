// Add an event listener to the button when the page loads
window.onload = function() {
    document.getElementById('fetchDataBtn').addEventListener('click', fetchData);
}

// Function to fetch and display data
function fetchData() {
    // Fetch data from the JSONPlaceholder API
    fetch('https://jsonplaceholder.typicode.com/posts/1')
        .then(response => response.json()) // Convert the response to JSON
        .then(data => {
            // Get the display element
            console.log(data)
            const dataDisplay = document.getElementById('dataDisplay');
            // Display the title and body of the post
            dataDisplay.innerHTML = `<h2>${data.title}</h2><p>${data.body}</p>`;
        })
        .catch(error => console.error('Error:', error)); // Handle errors
}