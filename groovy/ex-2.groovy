def first = [1, 42, 2, 6, 7]
def second = [5, 2, 9,10]
def list = [*first, *second]
def max = list[0];
for(i=1; i<list.size(); i++)
    if(list[i] > max)
        max = list[i]
println "Largest number in $list is $max"