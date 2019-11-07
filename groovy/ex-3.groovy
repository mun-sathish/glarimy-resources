numbers = [1, 2, 3, 4, 5]

def myEach(closure){
    for(def i=0; i<numbers.size(); i++){
        closure(numbers[i])
    }
    println ""
}

myEach({print "${it**3} "})