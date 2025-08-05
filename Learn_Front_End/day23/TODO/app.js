let btn = document.querySelector('button');
let ul = document.querySelector('ul');
let inp = document.querySelector('input');

// Add delete buttons to predefined list items
let predefinedItems = document.querySelectorAll('ul li'); // Select all existing list items
predefinedItems.forEach((li) => {
    let del = document.createElement('button'); // Create a delete button
    del.innerText = "Delete";
    del.classList.add("del");

    // Add click event to delete the corresponding list item
    del.addEventListener('click', () => {
        ul.removeChild(li); // Remove the list item
    });

    li.appendChild(del); // Append the delete button to the list item
});

// Add new list items with delete button

// Create a span element for the error message
let errorMessage = document.createElement('span');
errorMessage.style.color = 'red';
errorMessage.style.fontSize = '1rem';
errorMessage.style.display = 'none'; // Initially hidden
inp.parentElement.insertBefore(errorMessage, inp.nextSibling); // Add it below the input field

btn.addEventListener('click', () => {
    let task = inp.value.trim();

    // Show error message if the input is empty
    if (task === "") {
        errorMessage.textContent = "Task cannot be empty!";
        errorMessage.style.display = 'flex'; // Show the error message
        return;
    }

    // Hide the error message if the input is valid
    errorMessage.style.display = 'none';

    // Create a new list item
    let li = document.createElement('li');
    li.innerText = task; // Set the task text
    inp.value = ""; // Clear the input field

    // Create a delete button
    let del = document.createElement('button');
    del.innerText = "Delete";
    del.classList.add("del");

    // Add a click event to the delete button
    del.addEventListener('click', () => {
        ul.removeChild(li); // Remove the list item
    });

    // Append the delete button to the list item
    li.appendChild(del);

    // Append the list item to the unordered list
    ul.append(li);
});
