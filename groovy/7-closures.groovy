books = []

def add(book){
    books.add(book)
}

def priceClosure = {first, second -> return first?.price < second?.price}
def isbnClousure = {first, second -> return first?.isbn < second?.isbn}

def sort(closure){
    for(i=0; i<books.size()-1; i++)
        for(j=0; j<books.size()-1; j++)
            if(closure(books[j], books[j+1])) {
                t = books[j]
                books[j] = books[j+1]
                books[j+1] = t
            }
}

add([isbn: 1234, title: 'Groovy', price: 100])
add([isbn: 2345, title: 'Grails', price: 50])
add([isbn: 3456, title: 'Spring', price: 125])

println 'Original Books'
books.each({item -> println item.title})
println ''

sort({first, second -> return first?.price < second?.price})

println 'Sorted Books'
books.each({println it.title})
println ''