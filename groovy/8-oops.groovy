class Book {
    int isbn
    String title
    double price
}

interface Library {
    public add(book);
    public sort(closure);
    public print();
}

class SimpleLibrary implements Library{
    def books = []
    public add(Book book){
        books.add(book)
    }
    public sort(Closure closure){
        for(def i=0; i<books.size()-1; i++)
            for(def j=0; j<books.size()-1; j++)
                if(closure(books[j]?.price, books[j+1]?.price)) {
                    def t = books[j]
                    books[j] = books[j+1]
                    books[j+1] = t
                }
    }
    public print(){
        books.each({item -> println item.getTitle()})
    }
}

def compare = {first, second -> return first < second}
Library library = new SimpleLibrary();
library.add(new Book(isbn: 1234, title: 'Groovy', price: 100))
library.add(new Book(isbn: 2345, title: 'Grails', price: 50))
library.add(new Book(isbn: 3456, title: 'Spring', price: 125))
println 'Original Books'
library.print()
library.sort(compare);
println 'Sorted Books'
library.print();