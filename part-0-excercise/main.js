function addNote() {
  // Get the input value
  var noteText = document.getElementById("noteInput").value;

  // Create a new list item
  var listItem = document.createElement("li");
  listItem.appendChild(document.createTextNode(noteText));

  // Append the new list item to the "note" div
  document.getElementById("note").appendChild(listItem);

  // Clear the input field
  document.getElementById("noteInput").value = "";
}