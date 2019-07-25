Java Script Unit Testing
=

TODO

> However, putting the code into separate files doesn’t mean that it is ready to be tested as a unit.

What is a unit anyway?
-

In the best case, it is a pure function that you can deal with in some way. – a funcrion that always gives you the same result for a given input. This makes unit testing pretty ease, but most of the time you need to deal with side effects, whixh here means DOM manipulations. It's still useful to figure out which units we can structure our code into and to build unit tests accordingly.

The process of extracting code and putting it into a different form, without modifying its current behavior, is called refactor. Refactoring is an excellent method of improving the code design of a program; and because any change could actually modify the behavior of the program, it is safest todo when unit tests are in place.



Example
-

A Javascript code that is currently mixed in with and connected to a page. The code looks for links wirh `title` attributes, using those titles to display when something was posted, as a relative time value like "5 days ago"Java
