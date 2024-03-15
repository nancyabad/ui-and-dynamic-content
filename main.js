// Save references to elements:
const itemInput = document.getElementById("itemInput");
const addButton = document.getElementById("addButton");
const itemList = document.getElementById("itemList");
const errorMessage = document.getElementById("errorMessage");

// Function to add item
function addItem() {
  // Create list item
  const listItem = document.createElement("li");

  // Check if input is not empty
  if (itemInput.value.trim() !== "") {
    // Set list item text content
    listItem.textContent = itemInput.value;

    // Append list item to list
    itemList.appendChild(listItem);

    // Clear error message
    errorMessage.textContent = "";

    // Clear input field
    itemInput.value = "";

    // Put the cursor back to text field
    itemInput.focus();
  } else {
    // Display error message if input is empty
    errorMessage.textContent = "Nothing entered!";
  }
}

// Register addItem function for button click event
addButton.addEventListener("click", addItem);
