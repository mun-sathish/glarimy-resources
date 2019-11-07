books = []

def add(book){
    books.add(book)
}

def sort(){
    for(i=0; i<books.size()-1; i++)
        for(j=0; j<books.size()-1; j++)
            if(books[j]?.price > books[j+1]?.price) {
                t = books[j]
                books[j] = books[j+1]
                books[j+1] = t
            }
}

def display(){
    println books
}

add([isbn: 1234, title: 'Groovy', price: 100])
add([isbn: 2345, title: 'Grails', price: 50])
add([isbn: 3456, title: 'Spring', price: 125])

display()
sort()
display()
