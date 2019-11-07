def numbers = [18, 12, 13, 40, 5, 26, 77, 18, 19]

for(i=0; i<numbers.size()-1; i++)
    for(j=0; j<numbers.size()-1; j++)
        if(numbers[j] > numbers[j+1]) {
            t = numbers[j]
            numbers[j] = numbers[j+1]
            numbers[j+1] = t
        }

println numbers