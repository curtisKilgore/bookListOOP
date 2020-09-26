// Book Constructor
// Handles creating thte book object
function Book(title, author, isbn) {
  this.title = title;
  this.author = author;
  this.isbn = isbn;
}

// UI Constructor
// Handles prototype methods
function UI() {}

// Add Book To List
UI.prototype.addBookToList = function (book) {
  const list = document.getElementById("book-list");
  // Create tr element
  const row = document.createElement("tr");
  //   Insert Cols
  row.innerHTML = `
<td>${book.title}</td>
<td>${book.author}</td>
<td>${book.isbn}</td>
<td><a href='#' class='delete'>X</a></td>
`;

  // Append new book row to book list table
  list.appendChild(row);
};

// Add Clear Fields Method to UI Prototype
UI.prototype.clearFields = function () {
  // Grab fields to clear
  document.getElementById("title").value = "";
  document.getElementById("author").value = "";
  document.getElementById("isbn").value = "";
};

// Event Listeners
// Listener on the form. Listening for the submit
document.getElementById("book-form").addEventListener("submit", function (e) {
  // Get each field on submit
  const title = document.getElementById("title").value,
    author = document.getElementById("author").value,
    isbn = document.getElementById("isbn").value;

  // Instantiate book after collecting input values ^
  const book = new Book(title, author, isbn);

  // Instantiate UI  Boject
  // Create new book object so it can be added to the list
  const ui = new UI();

  // Add book to list with addBookToList function
  ui.addBookToList(book);

  // Clear fields
  ui.clearFields();

  e.preventDefault();
});
