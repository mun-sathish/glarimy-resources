def p = 10000
def t = 2
def r = 11.5
def simple = true;
def compound = false;

if(p < 0 || r < 0 || t < 0){
    print 'Invalid input'
    return;
}

if(simple)
    println "Simple Interest: Rs. ${(p*t*r/100).round(2)}"
if(compound)
    println "Compound Interest: Rs. ${(p*(1+(r/100))**t/2).round(2)}"
