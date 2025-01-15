const favChapInput = document.getElementById('favchap');
const addChapBtn = document.querySelector('button');
const list = document.getElementById('list');

addChapBtn.addEventListener('click', () => {
  const inputValue = favChapInput.value.trim();

  if (inputValue) {
    // Create a list item element
    const listItem = document.createElement('li');

    // Create a span element to hold the scripture reference
    const scriptureSpan = document.createElement('span');
    scriptureSpan.textContent = inputValue;
    listItem.appendChild(scriptureSpan);

    // Create a button element to delete the scripture
    const deleteBtn = document.createElement('button');
    deleteBtn.classList.add('delete');
    deleteBtn.textContent = 'X';
    deleteBtn.addEventListener('click', () => {
      listItem.remove();
    });
    listItem.appendChild(deleteBtn);

    // Add the list item to the list
    list.appendChild(listItem);

    // Clear the input field
    favChapInput.value = '';
  }
});