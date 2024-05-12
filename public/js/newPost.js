const newButtons = document.querySelectorAll('.newPost-btn');
const newForms = document.querySelectorAll('.newPost-form');

// Attach click event listeners to each new button
newButtons.forEach((button, index) => {
    button.addEventListener('click', () => {
        // Toggle display of the edit form
        newForms[index].style.display = 'block';
        // Hide the post content
        newButtons[index].parentNode.querySelector('.newPost-content').style.display = 'none';
    });
});

// Handle new form submission
editForms.forEach((form, index) => {
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        // Get the edited content
        const newContent = form.querySelector('.new-textarea').value;
        // Update the post content
        newButtons[index].parentNode.querySelector('.newPost-content').textContent = newContent;
        // Hide the edit form and show the updated post content
        form.style.display = 'none';
        newButtons[index].parentNode.querySelector('.newPost-content').style.display = 'block';
    });
});