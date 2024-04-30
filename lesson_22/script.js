document.getElementById('getFactBtn').addEventListener('click', () => {
    fetch('https://catfact.ninja/fact')
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(data => {
            const fact = data.fact;
            displayFact(fact);
        })
        .catch(error => {
            displayError(error.message);
        });
});

function displayFact(fact) {
    const factDisplay = document.getElementById('factDisplay');
    factDisplay.textContent = fact;
    factDisplay.style.color = '#333'; // Reset text color
}

function displayError(errorMessage) {
    const factDisplay = document.getElementById('factDisplay');
    factDisplay.textContent = `Error: ${errorMessage}`;
    factDisplay.style.color = 'red'; // Display error message in red
}