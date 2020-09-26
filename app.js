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

// Show Alert
UI.prototype.showAlert = function (message, className) {
  // Create div
  const div = document.createElement("div");
  // Add Classes
  //   Alert class used to remove it from DOM
  div.className = `alert ${className}`;
  // Add Text
  div.appendChild(document.createTextNode(message));
  // Get Parent
  const container = document.querySelector(".container");
  // Get Form so alert can be before form
  const form = document.querySelector("#book-form");
  // Inserting our alert div before the form
  container.insertBefore(div, form);

  //   Remove Alert after 3 seconds
  setTimeout(function () {
    document.querySelector(".alert").remove();
  }, 3000);
};

// Delete Book
UI.prototype.deleteBook = function (target) {
  if (target.className === "delete") {
    target.parentElement.parentElement.remove();
  }
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

  //   Validate Submit
  if (title === "" || author === "" || isbn === "") {
    // Error Alert
    ui.showAlert("Please fill in all fields", "error");
  } else {
    // Add book to list
    ui.addBookToList(book);

    // Show Success
    ui.showAlert("Book Added!", "success");

    // Clear fields
    ui.clearFields();
  }

  e.preventDefault();
});

// Event Listener for Delete
document.getElementById("book-list").addEventListener("click", function (e) {
  // Instantiate UI
  const ui = new UI();

  // Delete book
  ui.deleteBook(e.target);

  // Show Message
  ui.showAlert("Book Removed!", "success");

  e.preventDefault();
});
