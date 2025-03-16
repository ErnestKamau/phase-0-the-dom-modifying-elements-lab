// Write your code here!
// Remove the <main> element with id "main"
document.getElementById("main").remove();

// Create a new <h1> element
const newHeader = document.createElement("h1");

// Set the id of newHeader to "victory"
newHeader.id = "victory";

// Set the text content of newHeader
newHeader.textContent = "Ernest is the champion";

// Append newHeader to the body
document.body.appendChild(newHeader);
