class Book {
    int isbn
    String title
    double price

    def invokeMethod(String name, Object args){
        if(name == 'tax')
            return price * 0.12 
    }

    def getProperty(String name){
        if(name == 'price')
            return 'Rs. ' + metaClass.getProperty(this, name);
        else
            return metaClass.getProperty(this, name)
    }

    void setProperty(String name, Object value){
        if(name == 'price' && value < 100)
            metaClass.setProperty(this, name, 100)
        else
            metaClass.setProperty(this, name, value)
    }

    def methodMissing(String name, def args){
        if(name == 'discount')
            return price * 0.05
    }
}

Book.metaClass.display = {
    def line = """
    ISBN: ${isbn} 
    Title: ${title}
    Price: ${price}
    Tax: ${tax()}
    Net: 
    """
    print line
}

def book = new Book()
book.isbn = 1234
book.title = 'Groovy'
book.price = -20
book.display()
print "Discount ${book.discount()}"