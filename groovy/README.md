# Groovy Fundamentals #

### Getting Ready ###

* Download Groovy from [http://groovy-lang.org/download.html](http://groovy-lang.org/download.html)
* Extract into a location and export the path
* Open command prompt and try the following

```
export PATH=<path/to/groovy-2.5.6/bin>:$PATH
groovy --version
```
* Create a file hello.groovy with the following content

```
print 'Hello World'
```
* Run the script

```
groovy <path/to/hello.groovy>
```

### Comments ###

Single-line comments

```
// This is a single line comment appears either on a separate line or at the end of a statement
```

Multi-line comments

```
/* 
 * This is a multi-line comment. They can also be inside a statement
 */
```

Document Comments

```
/**
 * This is a document comment. Useful for user facing documentation.
 */
```

### Strings ###

Single-line strings

```
'This is a single line string. Can be concatenated with other strings using + operator'
```

Multi-line strings

```
'''
This is a multi-line string.
They can also be concatenated with other strings
'''
```

GStrings or Interpolated Strings

```
"A GString can be interpolated with $groovy-variable or ${groovy-expression}"
```

Template Strings

```
"""
Template strings are multi-lined.
They can also be interpolated with $groovy-variable or ${groovy-expression}
"""
```

### Type System ###

* Integral Numbers: byte, char, short, int, long, BigInteger
* Decimal Numbers: float, double, BigDecimal
* Booleans: true, false
* Lists
* Arrays
* Maps

```
int i = 10 // integer
double d = 1.2345 // double
boolean b = true // boolean
def l = [1, 2.0, 'three', false] // list
int[] a = [1, 3, 6, 8] // array
def m = [1: 'one', 2. 'two'] // map
```

### Operators ###

Arithmetic and Unary Operators

```
1 + 2 // addition
1 - 2 // subtraction
1 * 2 // multiplation
1 / 2 // division
1 % 2 // reminder
1 ** 2 // power
a++ // post-increment
++a // pre-increment
a-- // post-decrement
--a // pre-decrement
a += 5 // add and assign
a -= 5 // subtract and assign
a *=5 // multiply and assign
a /= 5 // divide and assign
a %= 5 // assign the reminder
a **= 5 // increase to the power and assign
```

Logical and Relational Operators

```
a == b // equals?
a != b // different?
a < b // a is smaller than b?
a > b // b is smaller than a?
a <= b // a is smaller than b or same as b?
a >= b // a is greater than b or same as b? 
a && b // logical and
a || b // logical or
!b // logical not
a = b > c ? b : c // ternary operator
a = str ? : 'empty' // elvis operator

```

Object Operators

```
name = book?.author // name will be null if book is null
book.author // book.getAuthor()
book.@author // book.author
```

Other Operators

```
a is b // if a and b are referring the same object
a in b // if a is a member of b
a <=> b // a.compareTo(b)
a = 1..5 // a = [1, 2, 3, 4, 5]
```

```
a = [1, 2, 3]
b = [*a, 4] // [1, 2, 3, 4]
```

```
a = [1:10, 2:20]
b = [*:a, 3:30] // [1:10, 2:20, 3:30]
```

```
function add(first, secondm third) {
	return first + second + third
}
def numbers = [10, 20]
def sum = add(*numbers, 30) // add(10, 20, 30) 
```

```
def authors = books*.author // gets authors of each of the books into authors
def items = anyIterable*.field
```

### Imports ###

Default Imports

```
import java.lang.*
import java.util.*
import java.io.*
import java.net.*
import groovy.lang.*
import groovy.util.*
import java.math.BigInteger
import java.math.BigDecimal
```

Imports

```
import a.b.c.* // imports everything from package a.b.c
import a.b.c.D // imports only D from package a.b.c
import static a.b.c.D.S // provides direct access to static S of D
import static a.b.c.D.* // provides direct access to all static members of D
import a.b.c.D as E // D is available in the name of E

