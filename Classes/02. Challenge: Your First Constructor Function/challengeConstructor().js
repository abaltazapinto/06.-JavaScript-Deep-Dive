// 1. create a new constructor function, Book, which logs books in the school library (id, title, author, themes[]), 
// 2. Add ids, titles and authors for your two favourite books. 
// 3. Use the prototype keyword to add a theme property to the  books. 
// 4. Add at least one theme to each of your books. 

// Beginning:
// Constructor function for the book
function Book(id, title, author) {
    this.if = id;
    this.title = title;
    this.author = author;
    this.themes = [];
}

//Adding a prototype mehod for add themes to books
Book.prototype.addTheme = function(theme) {
    this.themes.push(theme)
}

// Create a new book objects
const book1 = new Book(1, 'The Great Gatsby', 'F. Scott Fitzgerald');
const book2 = new Book(2, 'To Kill a Mockingbird', 'Harper Lee');

// adding the themes of the books to the console
book1.addTheme('History')
book2.addTheme('Fiction');

console.log(book1.themes) // ['History']