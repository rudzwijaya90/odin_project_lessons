const list = document.querySelector('ul');
const input = document.querySelector('input');
const button = document.querySelector('button');

const addItem = () => {
    const myItem = input.value.trim(); // Get the input value and trim whitespace
    if (myItem === '') return; // Don't add empty items

    input.value = ''; // Clear the input field

    const listItem = document.createElement('li');
    const listText = document.createElement('span');
    const listBtn = document.createElement('button');

    listText.textContent = myItem; // Set span text
    listBtn.textContent = 'Delete'; // Set button text

    listItem.appendChild(listText);
    listItem.appendChild(listBtn);
    list.appendChild(listItem); // Append the new item to the list

    // Delete button functionality
    listBtn.addEventListener('click', () => {
        list.removeChild(listItem);
    });

    input.focus(); // Focus back on the input field
};

// Button click event
button.addEventListener('click', addItem);

// Enter key event on the input
input.addEventListener('keydown', (event) => {
    if (event.key === 'Enter') {
        addItem(); // Call the same function when Enter is pressed
    }
});
