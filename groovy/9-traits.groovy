class Book {
    int isbn
    String title
    double price
}

interface Library {
    public add(book);
}

trait Printable {
    public print() {
        books.each({item -> println item.getTitle()})
    }
}

trait Sortable {
    public sort(closure){
        for(def i=0; i<books.size()-1; i++)
            for(def j=0; j<books.size()-1; j++)
                if(closure(books[j]?.price, books[j+1]?.price)) {
                    def t = books[j]
                    books[j] = books[j+1]
                    books[j+1] = t
                }
    }
}

class SimpleLibrary implements Library, Printable{
    def books = []
    public add(book){
        books.add(book)
    }
}

def compare = {first, second -> return first < second}
Library library = new SimpleLibrary() as Sortable
library.add(new Book(isbn: 1234, title: 'Groovy', price: 100))
library.add(new Book(isbn: 2345, title: 'Grails', price: 50))
library.add(new Book(isbn: 3456, title: 'Spring', price: 125))
println 'Original Books'
library.print()
library.sort(compare);
println 'Sorted Books'
library.print();