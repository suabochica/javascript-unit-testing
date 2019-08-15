# Java Script Unit Testing

## Setup

To run this project please install the [Live Server](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer) plugin for VSCode an open each `.html` file with the option _Open with live server_

## Example

This repository contains a Javascript code that give a format for dates. The code looks for links with `title` attributes, using those titles to display when something was posted, as a relative time value like "5 days ago" instead a specific date like "28/07/2019".

## Key concepts of the course

### Unit testing

In the best case, a _unit test_ it is a pure function that you can deal with in some way. – a function that always gives you the same result for a given input. This makes unit testing pretty ease, but most of the time you need to deal with side effects, which here means DOM manipulations. It's still useful to figure out which units we can structure our code into and to build unit tests accordingly.

### Refactor

The process of extracting code and putting it into a different form, without modifying its current behavior, is called refactor. Refactoring is an excellent method of improving the code design of a program; and because any change could actually modify the behavior of the program, it is safest todo when unit tests are in place.

## Course debt: Example of integration tests

Please review the slack channel to check a `.gif` with how we run an integration test in some project.

The tech stack of that project is:

```json
...
{
    "enzyme": "3.9.0",
    "enzyme-adapter-react-16": "1.12.1",
    "enzyme-to-json": "3.3.5",
    "jest": "24.3.1",
    "jest-raw-loader": "1.0.1",
}
...
```

## Challenge: Test coverage

The pending topic of the course was _test coverage_. So, before to start, answer the next questions:

1. What is test coverage?
2. What is the difference between _code coverage_ and _test coverage_ ?

Then, please select a programming language of your preference (`php`, `python`, `scala`, `javascript`, etc.) and set an environment with test coverage and the next requirements:

1. A suite with at least three(3) unit tests
2. An test coverage report similar to:

```
Name                      Stmts   Miss  Cover
---------------------------------------------
my_program.py                20      4    80%
my_other_module.py           56      6    89%
---------------------------------------------
TOTAL                        76     10    87%
```

Where:

- `Stmts:` Means each statement of the program.
- `Miss` (optional): Means the statements without coverage.
- `Cover`: The percentage coverage.

Popular combinations:

- javascript and [Jest](https://jestjs.io)
- python and [coverage.py](https://coverage.readthedocs.io/en/v4.5.x/#)
- scala and [JaCoCo](https://www.eclemma.org/jacoco/)

The deadline for this challenge is **September 5th, 2019**. Please deliver this challenge in a github repository with the project and a `README.md` file with setup instructions and the answer of the questions.

Surprise me!
