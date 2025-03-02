// Select the button and the description text
const toggleButton = document.getElementById('toggleButton'); // Use ID to select the button
const descriptionText = document.querySelectorAll('.description'); // Select all description paragraphs

// Function to toggle visibility of the description paragraphs
toggleButton.addEventListener('click', () => {
    // Check if the first paragraph is currently visible
    if (descriptionText[0].style.display === 'none' || descriptionText[0].style.display === '') {
        // If not visible, display all paragraphs
        descriptionText.forEach(paragraph => {
            paragraph.style.display = 'block';
        });
        toggleButton.textContent = 'Less'; // Change button text to "Less"
    } else {
        // If visible, hide all paragraphs
        descriptionText.forEach(paragraph => {
            paragraph.style.display = 'none';
        });
        toggleButton.textContent = 'More'; // Change button text to "More"
    }
});

// Initial state: Hide all description paragraphs
descriptionText.forEach(paragraph => {
    paragraph.style.display = 'none';
});