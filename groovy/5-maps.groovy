def books = []
books[0] = [isbn: 1234, title: 'Groovy', price: 100]
books[1] = [isbn: 2345, title: 'Grails', price: 50]
books[2] = [isbn: 3456, title: 'Spring', price: 125]
books[3] = null

for(i=0; i<books.size()-1; i++)
    for(j=0; j<books.size()-1; j++)
        if(books[j]?.price > books[j+1]?.price) {
            t = books[j]
            books[j] = books[j+1]
            books[j+1] = t
        }

println books.isbn