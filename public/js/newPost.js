const newButtons = document.querySelectorAll('.newPost-btn');
const newForms = document.querySelectorAll('.newPost-form');



// Attach click event listeners to each new button
// newButtons.forEach((button, index) => {
//     button.addEventListener('click', () => {
//         // Toggle display of the edit form
//         newForms[index].style.display = 'block';
//         // Hide the post content
//         newButtons[index].parentNode.querySelector('.newPost-content').style.display = 'none';
//     });
// });

// // Handle new form submission
// newForms.forEach((form, index) => {
//     form.addEventListener('submit', (e) => {
//         e.preventDefault();
//         // Get the edited content
//         const newContent = form.querySelector('.new-textarea').value;
//         // Update the post content
//         newButtons[index].parentNode.querySelector('.newPost-content').textContent = newContent;
//         // Hide the edit form and show the updated post content
//         form.style.display = 'none';
//         newButtons[index].parentNode.querySelector('.newPost-content').style.display = 'block';
//     });
// });

// // Function to create a new post element
// function createPost(title, content) {
//     const postDiv = document.createElement('div');
//     postDiv.className = 'post';
//     const postTitle = document.createElement('h2');
//     postTitle.textContent = title;
//     postDiv.appendChild(postTitle);
//     const postContent = document.createElement('p');
//     postContent.textContent = content;
//     postDiv.appendChild(postContent);
//     const postContainer = document.getElementById('post-container');
//     postContainer.appendChild(postDiv);
// }
const newPostHandler = async(event)=>{
    event.preventDefault();
const title = document.getElementById('post-title').value;
    const content = document.getElementById('post-content').value;
await fetch(`/api/post`,{
    method: 'POST',
    body: JSON.stringify({
        post_name: title,
        post_content: content,
    }),
    headers: {'Content-Type':'application/json'}
})
document.location.replace('/dashboard')




}
// Handle form submission
document.querySelector('.newPost-form').addEventListener('submit',newPostHandler);