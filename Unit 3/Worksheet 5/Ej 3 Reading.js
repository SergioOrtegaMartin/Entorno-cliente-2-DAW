// The Reading List
// An object-oriented book-list!

// Create a class BookList

// Create another class called Book

// BookLists should have the following properties:

// Number of books marked as read
// Number of books marked not read yet
// A reference to the next book to read (book object)
// A reference to the current book being read (book object)
// A reference to the last book read (book object)
// An array of all the Books
// Each Book should have several properties:

// Title
// Genre
// Author
// Read (true or false)
// Read date, can be blank, otherwise needs to be a JS Date() object
// Every Booklist should have a few methods:

// .add(book)
// should add a book to the books list.
// .finishCurrentBook()
// should mark the book that is currently being read as "read"
// Give it a read date of new Date(Date.now())
// Change the last book read to be the book that just got finished
// Change the current book to be the next book to be read
// Change the next book to be read property to be the first unread book you find in the list of books
// Booklists and Books might need more methods than that. Try to think of more that might be useful.

class BookList{
    constructor(){
    this.listaLibros = [];
    this.currentbook = null;
    this.librosleidos = [];
    this.librosnoleidos = [];
    }
    add(libro){
        //Añade un libro a nuestra libreria (this.listaLibros)
        this.listaLibros.push(libro)
        if (libro.read = true){
            this.librosleidos.push(libro)
        }else{this.librosnoleidos.push(libro)}
        if (libro.reading = true){
            this.currentbook = libro
        }
    }
    totallibrosleidos = () => this.librosleidos.length
    
    leerlibro(libro){
        this.currentbook = libro;
        libro.reading = true
    }
    terminarlibro = (libro) => {
        libro.read =true
        this.librosleidos.push(libro)
        libro.reading = false}
    
    siguientelibro = () =>this.librosnoleidos[0];
    libroactual = () => this.currentbook;
    ultimolibroleido = () => this.librosleidos[0];
}

class Book{
    constructor(title, genre, autor,read=false,reading=false, readDate = null){
    this.title = title;
    this.genre = genre;
    this.autor = autor;
    this.read = read;
    this.reading = reading;
    this.readDate = readDate;
    
    }
}